// MELODIES — a wall of covers. Tap one and it opens a real Spotify playlist.
//
// `cover` the artwork. Drop it into public/photos/ → "/photos/mix-a.jpg"
//         Square images work best. Leave null for a placeholder sleeve.
// `url`   the Spotify (or Apple / YouTube) playlist link. While it's null the
//         card shows as "link coming" and isn't clickable — no dead links.
// `disc`  OPTIONAL colour of the record peeking out behind the sleeve.
//         Any CSS colour. Defaults to the orange accent.

export const melodies = [
  {
    id: 'm1',
    title: 'Playlist one',
    subtitle: 'songs for the drive',
    cover: null,
    url: null,
    disc: '#e2622e',
  },
  {
    id: 'm2',
    title: 'Playlist two',
    subtitle: 'the sad ones',
    cover: null,
    url: null,
    disc: '#9aa87b',
  },
  {
    id: 'm3',
    title: 'Playlist three',
    subtitle: 'loud, for the gym',
    cover: null,
    url: null,
    disc: '#d99a5c',
  },
  {
    id: 'm4',
    title: 'Playlist four',
    subtitle: 'we listened to this all summer',
    cover: null,
    url: null,
    disc: '#c44a2b',
  },
]

export const melodiesMeta = {
  intro: 'playlists we made you — tap a cover to open it in Spotify',
}
