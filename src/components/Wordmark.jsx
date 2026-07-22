import { landing } from '../data/landing.js'
import { asset } from '../lib/asset.js'
import FitText from './FitText.jsx'
import FitStack from './FitStack.jsx'

// The "Chrissy Wissy" lockup with Chris's face tucked between the two words.
// Used both for the big landing hero and the small top-bar logo, so the face
// always lands in the same place.
//
// variant:
//   'hero'    — huge, auto-fitted. One line on desktop, stacked on a phone
//               (face sits on its own row between the two words).
//   'stacked' — the phone hero (passed in by Landing when the query matches).
//   'bar'     — the small fixed-size version in the top bar.
export default function Wordmark({ variant = 'bar' }) {
  const [a, b] = landing.name.trim().split(/\s+/)
  const face = landing.logoFace ? (
    <img className={`wm__face wm__face--${variant}`} src={asset(landing.logoFace)} alt="Chris" />
  ) : null

  if (variant === 'bar') {
    return (
      <span className="wm wm--bar">
        <span>{a}</span>
        {face}
        <span>{b}</span>
      </span>
    )
  }

  if (variant === 'stacked') {
    // face rides between the two stacked words as the separator row
    return <FitStack words={[a, b]} className="display__fit" fill={0.9} separator={face} />
  }

  // one fitted line: the face is inline, sized in em so it scales with the type
  return (
    <FitText className="display__fit" fill={0.78}>
      {a}
      {face}
      {b}
    </FitText>
  )
}
