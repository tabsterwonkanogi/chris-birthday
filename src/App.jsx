import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Messages from './pages/Messages.jsx'
import Photos from './pages/Photos.jsx'
import Melodies from './pages/Melodies.jsx'
import Music from './pages/Music.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/memories" element={<Photos />} />
        <Route path="/melodies" element={<Melodies />} />
        <Route path="/music" element={<Music />} />

        {/* the routes these pages used to live at */}
        <Route path="/wishes" element={<Navigate to="/messages" replace />} />
        <Route path="/photos" element={<Navigate to="/memories" replace />} />
      </Route>
    </Routes>
  )
}
