import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navLinks } from '../data/nav.js'
import Wordmark from './Wordmark.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const isLanding = pathname === '/'

  return (
    <div className="shell">
      {/* the landing page carries its own nav inside the hero */}
      {!isLanding && (
        <header className="topbar">
          <Link to="/" className="topbar__home" aria-label="Home">
            <Wordmark variant="bar" />
          </Link>
          <nav className="hnav">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  'hnav__link' +
                  (isActive ? ' is-active' : '') +
                  (l.ready ? '' : ' is-soon')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </header>
      )}
      <Outlet />
    </div>
  )
}
