// THE MUSIC PAGE — a playlist where every "song" is a person.
//
// Their photo is the album art, their name is the track title, and the song
// they recommended is the artist line.
//
// `photo` drop the person's picture into public/photos/ → "/photos/tabby.jpg"
//         Leave null and they get their initial on a colour instead.
// `link`  OPTIONAL. A Spotify / YouTube / Apple Music URL for the song they
//         picked. If set, tapping the row opens it. If not, the row is inert.

export const playlist = {
  title: 'Your All-Time Top Friends',
  // The description line under the title.
  description:
    '# your all-time top friends ! to the ones who picked a song for you, and the ones who have been on repeat since day one',
  curator: 'made for chris',
  cover: null, // "/design/playlist.png" — placeholder square until you add one
  // OPTIONAL. A real playlist of everyone's picks — the big button opens it.
  playlistUrl: null,
}

export const tracks = [
  {
    id: 't1',
    name: 'Tabby',
    song: 'Inside Out',
    artist: 'Keshi',
    photo: null,
    link: null,
  },
  {
    id: 't2',
    name: 'Another friend',
    song: 'The Shade',
    artist: 'Rex Orange County',
    photo: null,
    link: null,
  },
  {
    id: 't3',
    name: 'Someone else',
    song: 'Evergreen',
    artist: 'Richy Mitch & The Coal Miners',
    photo: null,
    link: null,
  },
]
