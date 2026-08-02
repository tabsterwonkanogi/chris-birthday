// ONE ENTRY PER PERSON — this is the only file you edit to add a message.
//
// `text`   the written birthday message. Leave '' for a voice-only person.
// `audio`  OPTIONAL voice recording in public/audio/ → "/audio/name.m4a".
//          If present, the play button in the bar plays it.
// `photo`  OPTIONAL card image in public/photos/ → "/photos/name.jpg".
//          Leave null and the card shows their initial on a colour.
// `video`  OPTIONAL video message in public/video/ → "/video/name.mp4". Shown
//          below the bar with its own controls (for people who filmed instead
//          of writing/recording).
// `image`  OPTIONAL scanned card image in public/photos/, shown below the bar.
// `focus`  OPTIONAL crop anchor for the square card — 'right', 'left', 'top',
//          etc. Use when the person sits off to one side of a wide photo.
//
// A person can have text, audio, or both. iPhone voice memos (.m4a) work as-is.
// Order in this list = swipe order.

export const messages = [
  {
    id: 'avril',
    name: 'Avril',
    relation: '',
    photo: '/photos/avril.jpg',
    audio: null,
    text: `hi chrissie happy birthday
thank you for being the funniest person i know and also for always being there for me to talk to, you're one of my favourite people and i'll always be really grateful to have met you when i did. you're someone i know i can rely on and i can't wait for the memories i know we'll make in the future. i genuinely hope we stay friends for a really, really long time and get to celebrate many more birthdays together. wishing you all the happiness, success and love this year, happy birthday!! - avy`,
  },
  {
    id: 'dylan',
    name: 'Dylan',
    relation: '',
    photo: null,
    audio: '/audio/dylan.m4a',
    text: '',
  },
  {
    id: 'sam',
    name: 'Sam',
    relation: '',
    photo: null,
    audio: null,
    text: `Dear Chris,
Happy bday bro, u're 19 now, still lowkey feels weird that u're an adult since u act a lot younger than me, but anyways from what I see u seem a lil happier and more relaxed now and honestly I'm happy abt that, things won't get easier when it comes to A lvls but u hv plenty of support from ppl who r more than willing to help u, and I don just mean A lvls

Ik I may not act like it but it did feel a lil weird to not see u tm anymore, I'm used to it now but it's still always gd to see u or talk to u whenever we get the chance, we shld meet again soon, hopefully after A lvls

Jiayou bro, spend ur bday well and hv fun w ur family and frens

~Sam`,
  },
  {
    id: 'jj',
    name: 'JJ',
    relation: '',
    photo: '/photos/jj.jpg',
    audio: '/audio/jj.m4a',
    text: '',
  },
  {
    id: 'brajesh',
    name: 'Brajesh',
    relation: '',
    photo: '/photos/brajesh.jpg',
    audio: null,
    text: `Dear Chris,
since the first time I've met you in JC1, you have truly become one of my closest friends. I remember vividly when we used to fool around in chemistry class while sitting right at the front. Thank you for being such an amazing friend and an important person in my life. I value the time we spend together and I hope we hang out more especially after I ord (551 more days). I hope you are able to do well in life and make it in other aspects of life too and I'll be with you on this journey of life🔥🫡
~Brajesh`,
  },
  {
    id: 'joshua',
    name: 'Joshua',
    relation: '',
    photo: '/photos/joshua.jpg',
    audio: '/audio/joshua.m4a',
    text: '',
    // a scanned handwritten card, shown below the audio bar (tap to open full)
    image: '/photos/joshua-card.jpg',
  },
  {
    id: 'hanyin',
    name: 'Han Yin',
    relation: '',
    photo: '/photos/hanyin.jpg',
    audio: null,
    text: `Poop and piss and shart and fart
Chris Wong u da real work of art
Bond sweet and sour like fruit tart
When we dont meet don't Simpson Bart`,
  },
  {
    id: 'tzwei',
    name: 'Tzwei',
    relation: '',
    photo: '/photos/tzwei.jpg',
    focus: 'right', // he's on the right of a wide photo — keep him in the crop
    audio: '/audio/tzwei.m4a',
    text: '',
  },
  {
    id: 'pohyang',
    name: 'Poh Yang',
    relation: '',
    photo: '/photos/pohyang.jpg',
    audio: null,
    text: '',
    video: '/video/pohyang.mp4',
    poster: '/video/pohyang-poster.jpg',
  },
  {
    id: 'zofeya',
    name: 'Zofeya',
    relation: '',
    photo: '/photos/zofeya.jpg',
    audio: '/audio/zofeya.m4a',
    text: `hey chris! blessed 19th birthday! thanks for being really such a wonderful friend! its kinda funny how we hated each other idk 10 years ago for God knows what reason… but thankfully, somehow, we are friends now! even though the past 2? years haven't been the easiest i hope that God may reveal His plans for you some day, so do not lose heart! i am really thankful to God for blessing all of us, 07s, with you! thank you for always trying to include everyone and checking in to make sure we go for service. your humour oso always livens up the mood in our conversations, your presence really makes a difference! though youre not the most punctual person, thank you for being there to offer a listening ear when i needed it alot, and also for being there to celebrate joys in life! i think God gave you a gift to have so much heart for people around you, so continue to steward it well!! i really hope to see you in church more often!
once again blessed 19th birthday chris!`,
  },
]

// The line under the cards, like the caption in your reference.
export const messagesMeta = {
  caption: 'Swipe through to read what everyone left you.',
}
