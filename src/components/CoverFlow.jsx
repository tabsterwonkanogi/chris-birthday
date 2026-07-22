import { useCallback, useEffect, useRef } from 'react'

// Fanned card carousel: the active card sits front and centre, neighbours fall
// back and dim behind it. Drive it by swipe, mouse drag, arrow keys, or by
// tapping a card that isn't the active one.
//
// Cards are absolutely positioned and placed with a transform per card rather
// than laid out in a scrolling row — the fan needs each card offset, scaled and
// rotated relative to the active one, which a flow layout can't express.
const SPACING = 0.52 // of card width — how far each neighbour steps out
const VISIBLE = 3 // neighbours drawn per side; beyond this they're hidden
const SWIPE = 40 // px before a drag counts as a swipe

export default function CoverFlow({ items, active, onChange, renderCard }) {
  const ref = useRef(null)
  const drag = useRef(null)

  const step = useCallback(
    (dir) => {
      const next = Math.min(items.length - 1, Math.max(0, active + dir))
      if (next !== active) onChange(next)
    },
    [active, items.length, onChange],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  const start = (x) => {
    drag.current = { x, moved: false }
  }

  const end = (x) => {
    if (!drag.current) return
    const dx = x - drag.current.x
    drag.current = null
    if (Math.abs(dx) < SWIPE) return
    step(dx < 0 ? 1 : -1)
  }

  return (
    <div
      ref={ref}
      className="cf"
      onTouchStart={(e) => start(e.changedTouches[0].clientX)}
      onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
      onMouseDown={(e) => start(e.clientX)}
      onMouseUp={(e) => end(e.clientX)}
      onMouseLeave={() => (drag.current = null)}
    >
      <div className="cf__stage">
        {items.map((item, i) => {
          const offset = i - active
          const dist = Math.abs(offset)
          const hidden = dist > VISIBLE
          return (
            <button
              key={item.id}
              className={'cf__card' + (offset === 0 ? ' is-active' : '')}
              aria-hidden={hidden}
              tabIndex={hidden ? -1 : 0}
              aria-label={offset === 0 ? item.name : `Go to ${item.name}`}
              onClick={() => offset !== 0 && onChange(i)}
              style={{
                transform: `translateX(${offset * SPACING * 100}%) scale(${
                  1 - Math.min(dist, VISIBLE) * 0.09
                }) rotateY(${Math.max(-1, Math.min(1, offset)) * -5}deg)`,
                opacity: hidden ? 0 : 1 - Math.min(dist, VISIBLE) * 0.18,
                zIndex: 20 - dist,
                pointerEvents: hidden ? 'none' : 'auto',
              }}
            >
              {renderCard(item, offset === 0)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
