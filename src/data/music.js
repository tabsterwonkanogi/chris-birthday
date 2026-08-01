// THE MUSIC PAGE — songs your friends want to jam to with you.
//
// Each row: the friend's photo is the album art, their name is the track title,
// and the song they picked is the artist line. Tapping a row opens the song in
// Spotify.
//
// `photo` friend's picture in public/photos/ → "/photos/name.jpg" (or null → initial)
// `focus` OPTIONAL crop anchor for the little square art ('right', 'left', ...)
// `link`  the Spotify (or YouTube / Apple Music) URL for their song.

export const playlist = {
  title: 'Jam with Friends!',
  // the \n forces the second sentence onto its own row (see .pl__desc pre-line)
  description: 'The songs your friends want to play for you.\nTap one to open it in Spotify.',
  curator: 'made for chris',
  cover: '/photos/jam-cover.jpg',
  playlistUrl: null,
}

export const tracks = [
  {
    id: 'tzwei',
    name: 'Tzwei',
    song: 'All They Wanted',
    artist: 'Panchiko',
    photo: '/photos/tzwei.jpg',
    focus: 'right',
    link: 'https://open.spotify.com/track/28Ymf40EoJ6776juQZNPoY',
  },
  {
    id: 'jj',
    name: 'JJ',
    song: 'Crashing In (Spontaneous)',
    artist: 'Cory Asbury',
    photo: '/photos/jj.jpg',
    link: 'https://open.spotify.com/track/1QFq1ncI1KH72GqXk5RyK9',
  },
  {
    id: 'joshua',
    name: 'Joshua',
    song: 'リンダ リンダ',
    artist: 'パ-ランマウム',
    photo: '/photos/joshua.jpg',
    link: 'https://open.spotify.com/track/5xO0ynhnuVy9dLLOTAabac',
  },
]
