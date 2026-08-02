// MELODIES — a wall of covers. Tap one and it opens a real Spotify playlist.
//
// `cover` the artwork in public/photos/ → "/photos/mix-a.jpg". Square images
//         work best. Leave null for a placeholder sleeve.
// `url`   the Spotify (or Apple / YouTube) playlist link. While it's null the
//         card shows as "link coming" and isn't clickable — no dead links.
// `disc`  OPTIONAL colour of the record peeking out behind the sleeve.

export const melodies = [
  {
    id: 'm1',
    title: 'Playlist by Tzewei',
    subtitle: '',
    cover: null,
    url: 'https://open.spotify.com/playlist/7wj5R0qRnt8QF4hFqKHR9n',
    disc: '#e2622e',
  },
  {
    id: 'm2',
    title: 'Playlist by Dylan',
    subtitle: '',
    cover: null,
    url: 'https://open.spotify.com/playlist/2S9wGxxC8IOIThD5cKaNpw',
    disc: '#9aa87b',
  },
  {
    id: 'm3',
    title: 'Playlist by JJ',
    subtitle: '',
    cover: null,
    url: 'https://open.spotify.com/playlist/4XxZPIGjUOTWxKetJGbpOq',
    disc: '#d99a5c',
  },
  {
    id: 'm4',
    title: 'Playlist by Beatrice',
    subtitle: '',
    cover: null,
    url: 'https://open.spotify.com/playlist/1yF6ULaTuzh8fn2k51adG5',
    disc: '#c44a2b',
  },
]

export const melodiesMeta = {
  intro: 'Playlists made for you. Tap a cover to open it in Spotify.',
}
