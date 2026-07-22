import { useCallback, useEffect, useRef, useState } from 'react'
import { messages, messagesMeta } from '../data/messages.js'
import CoverFlow from '../components/CoverFlow.jsx'

const SWATCHES = ['var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)', 'var(--s5)']

const fmt = (s) => {
  if (!isFinite(s) || s < 0) return '--:--'
  const m = Math.floor(s / 60)
  const r = Math.floor(s % 60)
  return `${m}:${String(r).padStart(2, '0')}`
}

export default function Messages() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const bodyRef = useRef(null)

  const current = messages[active]
  const hasAudio = Boolean(current?.audio)

  // Moving to another person stops whatever was playing — otherwise you'd be
  // reading one message while hearing another.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    setTime(0)
    setDuration(0)
    if (current?.audio) audio.src = current.audio
    else audio.removeAttribute('src')
    // scroll the message back to the top when the person changes
    if (bodyRef.current) bodyRef.current.scrollTop = 0
  }, [active, current])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !hasAudio) return
    if (audio.paused) audio.play().catch(() => setPlaying(false))
    else audio.pause()
  }, [hasAudio])

  const go = useCallback((dir) => {
    setActive((i) => Math.min(messages.length - 1, Math.max(0, i + dir)))
  }, [])

  return (
    <main className="page messages">
      <header className="page__head page__head--center">
        <p className="eyebrow">Birthday wishes</p>
        <h1 className="display display--sm">Messages</h1>
      </header>

      <CoverFlow
        items={messages}
        active={active}
        onChange={setActive}
        renderCard={(m, isActive) => (
          <span
            className="card"
            style={{ '--swatch': SWATCHES[messages.indexOf(m) % SWATCHES.length] }}
          >
            {m.photo ? (
              <img src={m.photo} alt="" draggable="false" />
            ) : (
              <span className="card__initial">{m.name.charAt(0)}</span>
            )}
            {isActive && (
              <span className="card__label">
                <span className="card__name">{m.name}</span>
                {m.relation && <span className="card__rel">{m.relation}</span>}
              </span>
            )}
          </span>
        )}
      />

      {messagesMeta.caption && <p className="messages__caption">{messagesMeta.caption}</p>}

      {/* the controls bar from your reference */}
      <div className="toolbar">
        <button className="ctrl" onClick={() => go(-1)} disabled={active === 0} aria-label="Previous person">
          ◀◀
        </button>
        <button
          className={'ctrl ctrl--play' + (hasAudio ? '' : ' is-off')}
          onClick={toggle}
          disabled={!hasAudio}
          aria-label={hasAudio ? (playing ? 'Pause' : 'Play voice note') : 'No voice note'}
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <button
          className="ctrl"
          onClick={() => go(1)}
          disabled={active === messages.length - 1}
          aria-label="Next person"
        >
          ▶▶
        </button>

        <span className="toolbar__chip">
          <span className="toolbar__name">{current?.name}</span>
          <span className="toolbar__meta">
            {hasAudio ? `${fmt(time)} / ${fmt(duration)}` : `${active + 1} of ${messages.length}`}
          </span>
        </span>
      </div>

      {/* the message itself, below the bar */}
      <article className="msg" ref={bodyRef} key={current?.id}>
        <p className="msg__text">{current?.text}</p>
        <p className="msg__from">— {current?.name}</p>
      </article>

      <audio
        ref={audioRef}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setPlaying(false)}
      />
    </main>
  )
}
