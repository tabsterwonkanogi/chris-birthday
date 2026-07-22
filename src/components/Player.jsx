import { useLayoutEffect, useRef } from 'react'

export default function Player({
  track,
  swatch,
  playing,
  time,
  duration,
  onToggle,
  onPrev,
  onNext,
  onSeek,
  fmt,
}) {
  const pct = duration ? (time / duration) * 100 : 0
  const ref = useRef(null)

  // The bar is fixed, so the page needs matching bottom padding or the last
  // track hides behind it. Measure rather than guess — on mobile the controls
  // wrap to a second row and a long name can wrap to a third.
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    // offsetHeight, not contentRect — the bar has 16px of vertical padding and
    // contentRect excludes it, which would under-pad the page by 32px.
    const apply = () =>
      document.documentElement.style.setProperty('--player-h', `${el.offsetHeight}px`)

    // Set it here as well as in the observer: StrictMode mounts, cleans up
    // (clearing the property), then remounts, and the re-observe does not
    // reliably re-deliver an initial callback — so the value would stay unset.
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    return () => {
      ro.disconnect()
      document.documentElement.style.removeProperty('--player-h')
    }
  }, [])

  return (
    <div className="player" ref={ref}>
      <div className="player__now">
        <span className="player__avatar" style={{ '--swatch': swatch }}>
          {track.avatar ? <img src={track.avatar} alt="" /> : track.name.charAt(0)}
        </span>
        <span className="player__text">
          <span className="player__name">{track.name}</span>
          {track.relation && <span className="player__relation">{track.relation}</span>}
        </span>
      </div>

      <div className="player__controls">
        <div className="player__buttons">
          <button className="ctrl" onClick={onPrev} aria-label="Previous message">
            ◀◀
          </button>
          <button
            className="ctrl ctrl--play"
            onClick={onToggle}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? '❚❚' : '▶'}
          </button>
          <button className="ctrl" onClick={onNext} aria-label="Next message">
            ▶▶
          </button>
        </div>

        <div className="scrub">
          <span className="scrub__t">{fmt(time)}</span>
          <div className="scrub__track">
            <div className="scrub__fill" style={{ width: `${pct}%` }} />
            <input
              className="scrub__input"
              type="range"
              min={0}
              max={duration || 0}
              step={0.01}
              value={time}
              onChange={(e) => onSeek(Number(e.target.value))}
              aria-label="Seek"
            />
          </div>
          <span className="scrub__t">{fmt(duration)}</span>
        </div>
      </div>
    </div>
  )
}
