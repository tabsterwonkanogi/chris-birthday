import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { tracks, album } from '../data/tracks.js'
import Player from '../components/Player.jsx'

const fmt = (s) => {
  if (!isFinite(s) || s < 0) return '--:--'
  const m = Math.floor(s / 60)
  const r = Math.floor(s % 60)
  return `${m}:${String(r).padStart(2, '0')}`
}

// Stable colour per track, so an avatar-less person always gets the same swatch.
const HUES = ['var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)', 'var(--s5)']

export default function Wishes() {
  const audioRef = useRef(null)
  const [current, setCurrent] = useState(null) // index of the loaded track
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [durations, setDurations] = useState({}) // id -> seconds, for the list

  const playable = useMemo(() => tracks.filter((t) => t.src), [])
  const ready = playable.length > 0

  // Preload metadata so the list can show each track's length up front.
  useEffect(() => {
    let alive = true
    playable.forEach((t) => {
      const probe = new Audio()
      probe.preload = 'metadata'
      probe.src = t.src
      probe.addEventListener('loadedmetadata', () => {
        if (alive) setDurations((d) => ({ ...d, [t.id]: probe.duration }))
      })
    })
    return () => {
      alive = false
    }
  }, [playable])

  const select = useCallback(
    (index) => {
      const track = tracks[index]
      if (!track?.src) return
      const audio = audioRef.current
      if (!audio) return

      if (current === index) {
        if (audio.paused) audio.play()
        else audio.pause()
        return
      }
      setCurrent(index)
      setTime(0)
      setDuration(0)
      audio.src = track.src
      audio.play().catch(() => setPlaying(false))
    },
    [current],
  )

  // Step to the next/previous track that actually has audio.
  const step = useCallback(
    (dir) => {
      if (current === null) return
      for (let i = current + dir; i >= 0 && i < tracks.length; i += dir) {
        if (tracks[i].src) return select(i)
      }
    },
    [current, select],
  )

  const seek = useCallback((seconds) => {
    const audio = audioRef.current
    if (audio && isFinite(seconds)) audio.currentTime = seconds
  }, [])

  const currentTrack = current === null ? null : tracks[current]

  return (
    <main className="page wishes">
      <header className="album">
        <div className="album__cover">
          {album.cover ? (
            <img src={album.cover} alt="" />
          ) : (
            <span className="album__glyph">♫</span>
          )}
        </div>
        <div className="album__meta">
          <p className="eyebrow">Birthday wishes</p>
          <h1 className="display display--sm">{album.title}</h1>
          <p className="album__sub">
            {album.subtitle} · {playable.length || tracks.length}{' '}
            {(playable.length || tracks.length) === 1 ? 'message' : 'messages'}
          </p>
        </div>
      </header>

      {!ready && (
        <p className="notice">
          No recordings yet. Drop the voice notes into <code>public/audio/</code> and list them
          in <code>src/data/tracks.js</code> — the player wakes up on its own.
        </p>
      )}

      <ol className="tracklist">
        {tracks.map((t, i) => {
          const isCurrent = current === i
          const has = Boolean(t.src)
          const len = durations[t.id]
          return (
            <li
              key={t.id}
              className={
                'track' + (isCurrent ? ' is-current' : '') + (has ? '' : ' is-empty')
              }
            >
              <button
                className="track__hit"
                onClick={() => select(i)}
                disabled={!has}
                aria-label={has ? `Play ${t.name}` : `${t.name} — no recording yet`}
              >
                <span className="track__index">
                  {isCurrent && playing ? (
                    <span className="bars" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                  ) : (
                    <span className="track__num">{String(i + 1).padStart(2, '0')}</span>
                  )}
                </span>

                <span
                  className="track__avatar"
                  style={{ '--swatch': HUES[i % HUES.length] }}
                >
                  {t.avatar ? <img src={t.avatar} alt="" /> : t.name.charAt(0)}
                </span>

                <span className="track__text">
                  <span className="track__name">{t.name}</span>
                  {t.relation && <span className="track__relation">{t.relation}</span>}
                </span>

                <span className="track__time">{has ? fmt(len) : 'soon'}</span>
              </button>
            </li>
          )
        })}
      </ol>

      <audio
        ref={audioRef}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => step(1)}
      />

      {currentTrack && (
        <Player
          track={currentTrack}
          swatch={HUES[current % HUES.length]}
          playing={playing}
          time={time}
          duration={duration}
          onToggle={() => select(current)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onSeek={seek}
          fmt={fmt}
        />
      )}
    </main>
  )
}
