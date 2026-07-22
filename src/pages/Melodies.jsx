import { melodies, melodiesMeta } from '../data/melodies.js'

export default function Melodies() {
  return (
    <main className="page melodies">
      <header className="page__head page__head--center">
        <p className="eyebrow">Playlists</p>
        <h1 className="display display--sm">Melodies</h1>
        {melodiesMeta.intro && <p className="melodies__intro">{melodiesMeta.intro}</p>}
      </header>

      <ul className="wall">
        {melodies.map((m) => {
          // A card without a link must not look tappable — no dead links.
          const Card = m.url ? 'a' : 'div'
          const props = m.url
            ? { href: m.url, target: '_blank', rel: 'noreferrer noopener' }
            : {}
          return (
            <li key={m.id} className="wall__item">
              <Card
                className={'vinyl' + (m.url ? '' : ' is-linkless')}
                style={{ '--disc': m.disc || 'var(--orange)' }}
                {...props}
              >
                <span className="vinyl__disc" aria-hidden="true">
                  <span className="vinyl__hole" />
                </span>

                <span className="vinyl__sleeve">
                  {m.cover ? (
                    <img src={m.cover} alt="" loading="lazy" />
                  ) : (
                    <span className="vinyl__ph">
                      <span className="vinyl__ph-mark">♫</span>
                      <span className="vinyl__ph-text">cover goes here</span>
                    </span>
                  )}
                </span>
              </Card>

              <div className="wall__label">
                <p className="wall__title">{m.title}</p>
                {m.subtitle && <p className="wall__sub">{m.subtitle}</p>}
                {!m.url && <p className="wall__soon">link coming</p>}
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
