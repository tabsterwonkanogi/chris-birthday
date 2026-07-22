import { useCallback, useLayoutEffect, useRef } from 'react'

// Stacks words on their own lines at ONE shared size — the largest that lets
// the longest word still fit. Fitting each word to the full width instead would
// make "Chrissy" and "Wissy" render at noticeably different sizes.
//
// Size is written straight to the DOM rather than kept in React state: probing
// needs a temporary font-size, and if the computed value matched the existing
// state React would skip the re-render and leave the probe size stuck.
export default function FitStack({ words, className = '', fill = 0.9, max = 260, separator = null }) {
  const boxRef = useRef(null)
  const refs = useRef([])

  const fit = useCallback(() => {
    const box = boxRef.current
    const els = refs.current.filter(Boolean)
    if (!box || !box.clientWidth || !els.length) return

    const PROBE = 100
    const target = box.clientWidth * fill

    // Text width scales linearly with font size, so one probe per word is
    // enough; the shared size is the smallest each word would allow.
    let size = max
    for (const el of els) {
      el.style.fontSize = `${PROBE}px`
      const w = el.scrollWidth
      if (w) size = Math.min(size, (target * PROBE) / w)
    }
    for (const el of els) el.style.fontSize = `${size}px`
  }, [fill, max])

  useLayoutEffect(() => {
    fit()
    const ro = new ResizeObserver(fit)
    if (boxRef.current) ro.observe(boxRef.current)
    window.addEventListener('resize', fit)
    // Re-fit once webfonts land — measuring the fallback face gives the wrong
    // width and the mis-sized text would stick.
    if (document.fonts?.ready) document.fonts.ready.then(fit)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [fit, words])

  return (
    <div ref={boxRef} className="fit">
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          {/* an optional node between the rows — e.g. the logo face */}
          {separator && i > 0 && <span className="fit__sep">{separator}</span>}
          {/* the row wrapper is what puts each word on its own line — the measured
              span itself must stay inline-block so scrollWidth reports text width */}
          <span className="fit__row">
            <span ref={(el) => (refs.current[i] = el)} className={className}>
              {w}
            </span>
          </span>
        </span>
      ))}
    </div>
  )
}
