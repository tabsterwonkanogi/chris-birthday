import { Link } from 'react-router-dom'
import { landing } from '../data/landing.js'
import { navLinks } from '../data/nav.js'
import Wordmark from '../components/Wordmark.jsx'
import useMediaQuery from '../hooks/useMediaQuery.js'
import { asset } from '../lib/asset.js'

export default function Landing() {
  // On a phone a one-line title is only ~34px tall, which reads as weak for a
  // hero. Stacking the words lets each one fill the screen instead.
  const stacked = useMediaQuery('(max-width: 700px)')

  if (landing.artwork) {
    return (
      <main className="landing landing--art">
        <img
          className="landing__art"
          src={asset(landing.artwork)}
          alt={`${landing.greeting} ${landing.name}`}
          style={{ objectFit: landing.fit }}
        />
        <div className="landing__overlay">
          <Nav />
        </div>
      </main>
    )
  }

  return (
    <main className="landing">
      <div className="landing__inner">
        <p className="kicker">
          {landing.greeting} {landing.handle && <em>{landing.handle}</em>}
        </p>

        <h1 className="display display--hero">
          <Wordmark variant={stacked ? 'stacked' : 'hero'} />
        </h1>

        <Nav />
      </div>
    </main>
  )
}

function Nav() {
  return (
    <nav className="hnav">
      {navLinks.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className={'hnav__link' + (l.ready ? '' : ' is-soon')}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}
