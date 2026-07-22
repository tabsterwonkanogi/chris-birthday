// ONE ENTRY PER PERSON — this is the only file you edit to add a message.
//
// `text`   the written birthday message (required — it's what he reads)
// `photo`  the card image. Drop it in public/photos/ → "/photos/mel.jpg".
//          Leave null and the card shows their initial on a colour instead.
// `audio`  OPTIONAL voice recording. Drop it in public/audio/ → "/audio/mel.m4a".
//          If present, the play button in the bar plays it. If not, the card is
//          text-only and the bar just moves between people.
//
// iPhone voice memos (.m4a) work as-is, no conversion.

export const messages = [
  {
    id: 'placeholder-1',
    name: 'Your name here',
    relation: 'how you know Chris',
    text: 'Write the birthday message here. It can be as long as you like — the block below the bar grows to fit, and line breaks you type are kept.',
    photo: null,
    audio: null,
  },
  {
    id: 'placeholder-2',
    name: 'Another friend',
    relation: 'secondary school',
    text: 'A second message, so you can see the swipe working.',
    photo: null,
    audio: null,
  },
  {
    id: 'placeholder-3',
    name: 'Someone else',
    relation: 'family',
    text: 'And a third.',
    photo: null,
    audio: null,
  },
]

// The line under the cards, like the caption in your reference.
export const messagesMeta = {
  caption: 'swipe through — everyone wrote you something',
}
