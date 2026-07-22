import { playlist, tracks } from '../data/music.js'
import { asset } from '../lib/asset.js'

const SWATCHES = ['var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)', 'var(--s5)']

export default function Music() {
  return (
    <main className="page music">
      <header className="pl">
        <div className="pl__cover">
          {playlist.cover ? (
            <img src={asset(playlist.cover)} alt="" />
          ) : (
            <span className="pl__coverph">
              <span className="pl__coverph-glyph">♫</span>
              <span className="pl__coverph-line">cover goes here</span>
            </span>
          )}
        </div>

        <h1 className="display display--sm pl__title">{playlist.title}</h1>

        {playlist.description && <p className="pl__desc">{playlist.description}</p>}

        <p className="pl__meta">
          {playlist.curator} · {tracks.length} {tracks.length === 1 ? 'friend' : 'friends'}
        </p>

        {playlist.playlistUrl && (
          <a
            className="pl__play"
            href={playlist.playlistUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open the playlist"
          >
            ▶
          </a>
        )}
      </header>

      <ol className="pltracks">
        {tracks.map((t, i) => {
          const Row = t.link ? 'a' : 'div'
          const rowProps = t.link
            ? { href: t.link, target: '_blank', rel: 'noreferrer noopener' }
            : {}
          return (
            <li key={t.id} className="pltrack">
              <Row className="pltrack__row" {...rowProps}>
                <span
                  className="pltrack__art"
                  style={{ '--swatch': SWATCHES[i % SWATCHES.length] }}
                >
                  {t.photo ? (
                    <img src={asset(t.photo)} alt="" loading="lazy" />
                  ) : (
                    t.name.charAt(0)
                  )}
                </span>

                <span className="pltrack__text">
                  <span className="pltrack__name">{t.name}</span>
                  <span className="pltrack__song">
                    {t.song}
                    {t.artist && <span className="pltrack__by"> by {t.artist}</span>}
                  </span>
                </span>

                {t.link && <span className="pltrack__go" aria-hidden="true">↗</span>}
              </Row>
            </li>
          )
        })}
      </ol>
    </main>
  )
}
