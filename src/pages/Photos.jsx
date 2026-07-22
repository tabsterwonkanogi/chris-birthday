import { useCallback, useEffect, useRef, useState } from 'react'
import { photos } from '../data/photos.js'
import { asset } from '../lib/asset.js'

export default function Photos() {
  const filled = photos.filter((p) => p.src)
  const [open, setOpen] = useState(null) // index into `filled`
  const touch = useRef(null)

  const step = useCallback(
    (dir) => {
      setOpen((i) => {
        if (i === null) return null
        return (i + dir + filled.length) % filled.length
      })
    },
    [filled.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, step])

  // Most people open this on a phone, where there are no arrow keys.
  const onTouchStart = (e) => {
    const t = e.changedTouches[0]
    touch.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = (e) => {
    if (!touch.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touch.current.x
    const dy = t.clientY - touch.current.y
    touch.current = null
    // ignore mostly-vertical drags so a scroll or a swipe-to-dismiss isn't
    // read as "next photo"
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return
    step(dx < 0 ? 1 : -1)
  }

  return (
    <main className="page photos">
      <header className="page__head">
        <p className="eyebrow">Nineteen years</p>
        <h1 className="display display--sm">Memories</h1>
      </header>

      {filled.length === 0 && (
        <p className="notice">
          No photos yet. Drop them into <code>public/photos/</code> and list them in{' '}
          <code>src/data/photos.js</code>.
        </p>
      )}

      <div className="mosaic">
        {photos.map((p) => {
          const idx = filled.indexOf(p)
          return (
            <figure
              key={p.id}
              className={'shot' + (p.span ? ` shot--${p.span}` : '') + (p.src ? '' : ' is-empty')}
            >
              {p.src ? (
                <button className="shot__hit" onClick={() => setOpen(idx)}>
                  <img src={asset(p.src)} alt={p.caption || ''} loading="lazy" />
                </button>
              ) : (
                <div className="shot__placeholder" />
              )}
              {p.caption && <figcaption>{p.caption}</figcaption>}
            </figure>
          )
        })}
      </div>

      {open !== null && filled[open] && (
        <div
          className="lightbox"
          onClick={() => setOpen(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <p className="lightbox__count">
            {open + 1} / {filled.length}
          </p>
          <button className="lightbox__close" aria-label="Close">
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
          >
            ‹
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={asset(filled[open].src)} alt={filled[open].caption || ''} />
            {filled[open].caption && <figcaption>{filled[open].caption}</figcaption>}
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}
