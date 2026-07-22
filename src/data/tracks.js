// ONE ENTRY PER PERSON. This is the only file you edit to add a birthday message.
//
// 1. Drop the voice recording into  public/audio/
// 2. Add an object below. `src` is the path from public/ — e.g. "/audio/mel.m4a"
// 3. Optional `avatar` — drop a photo into public/photos/ and point at it.
//    Leave it null and the track shows a coloured initial instead.
//
// Formats that work everywhere: .mp3, .m4a, .wav, .ogg
// iPhone voice memos are .m4a — those play fine, no conversion needed.

export const tracks = [
  {
    id: 'placeholder-1',
    name: 'Your name here',
    relation: 'how you know Chris',
    src: null, // "/audio/name.m4a"
    avatar: null, // "/photos/name.jpg"
  },
  {
    id: 'placeholder-2',
    name: 'Another friend',
    relation: 'secondary school',
    src: null,
    avatar: null,
  },
  {
    id: 'placeholder-3',
    name: 'Someone else',
    relation: 'family',
    src: null,
    avatar: null,
  },
]

// Shown as the "album" header on the wishes page.
export const album = {
  title: 'Messages',
  subtitle: '19 years',
  cover: null, // "/design/cover.png"
}
