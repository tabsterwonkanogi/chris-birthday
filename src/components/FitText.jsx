import { useCallback, useLayoutEffect, useRef } from 'react'

// Scales the text so it fills its container's width on ONE line, whatever the
// name is. Your design has "CHRISSY WISSY" spanning the frame; a fixed font
// size only does that for a name of exactly that length, and a longer one would
// wrap or overflow.
//
// Sizing is written straight to the element rather than held in React state:
// measuring requires temporarily setting a probe font-size, and if the newly
// computed size happened to equal the state React already had, it would skip
// the re-render and leave the probe size stuck in the DOM.
export default function FitText({ children, className = '', fill = 0.92, max = 260 }) {
  const boxRef = useRef(null)
  const textRef = useRef(null)

  const fit = useCallback(() => {
    const box = boxRef.current
    const text = textRef.current
    if (!box || !box.clientWidth) return

    // Text width is proportional to font size, so one measurement is enough —
    // no search loop needed.
    const PROBE = 100
    text.style.fontSize = `${PROBE}px`
    const w = text.scrollWidth
    if (!w) return
    text.style.fontSize = `${Math.min(max, (box.clientWidth * fill * PROBE) / w)}px`
  }, [fill, max])

  useLayoutEffect(() => {
    fit()
    const ro = new ResizeObserver(fit)
    if (boxRef.current) ro.observe(boxRef.current)
    // Belt and braces: a window listener as well as the observer, so a resize
    // can't leave the title at a stale size.
    window.addEventListener('resize', fit)
    // Re-fit once webfonts land — measuring against the fallback face gives the
    // wrong width, and the mis-sized text would stick.
    if (document.fonts?.ready) document.fonts.ready.then(fit)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [fit, children])

  return (
    <div ref={boxRef} className="fit">
      <span ref={textRef} className={className}>
        {children}
      </span>
    </div>
  )
}
