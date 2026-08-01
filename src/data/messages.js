// ONE ENTRY PER PERSON — this is the only file you edit to add a message.
//
// `text`   the written birthday message. Leave '' for a voice-only person.
// `audio`  OPTIONAL voice recording in public/audio/ → "/audio/name.m4a".
//          If present, the play button in the bar plays it.
// `photo`  OPTIONAL card image in public/photos/ → "/photos/name.jpg".
//          Leave null and the card shows their initial on a colour.
//
// A person can have text, audio, or both. iPhone voice memos (.m4a) work as-is.
// Order in this list = swipe order. Written and voice are interleaved so the
// carousel alternates.

export const messages = [
  {
    id: 'avril',
    name: 'Avril',
    relation: '',
    text: `hi chrissie happy birthday
thank you for being the funniest person i know and also for always being there for me to talk to, you're one of my favourite people and i'll always be really grateful to have met you when i did. you're someone i know i can rely on and i can't wait for the memories i know we'll make in the future. i genuinely hope we stay friends for a really, really long time and get to celebrate many more birthdays together. wishing you all the happiness, success and love this year, happy birthday!! - avy`,
    photo: null,
    audio: null,
  },
  {
    id: 'dylan',
    name: 'Dylan',
    relation: '',
    text: '',
    photo: null,
    audio: '/audio/dylan.m4a',
  },
  {
    id: 'sam',
    name: 'Sam',
    relation: '',
    text: `Dear Chris,
Happy bday bro, u're 19 now, still lowkey feels weird that u're an adult since u act a lot younger than me, but anyways from what I see u seem a lil happier and more relaxed now and honestly I'm happy abt that, things won't get easier when it comes to A lvls but u hv plenty of support from ppl who r more than willing to help u, and I don just mean A lvls

Ik I may not act like it but it did feel a lil weird to not see u tm anymore, I'm used to it now but it's still always gd to see u or talk to u whenever we get the chance, we shld meet again soon, hopefully after A lvls

Jiayou bro, spend ur bday well and hv fun w ur family and frens

~Sam`,
    photo: null,
    audio: null,
  },
  {
    id: 'jj',
    name: 'JJ',
    relation: '',
    text: '',
    photo: null,
    audio: '/audio/jj.m4a',
  },
  {
    id: 'brajesh',
    name: 'Brajesh',
    relation: '',
    text: `Dear Chris,
since the first time I've met you in JC1, you have truly become one of my closest friends. I remember vividly when we used to fool around in chemistry class while sitting right at the front. Thank you for being such an amazing friend and an important person in my life. I value the time we spend together and I hope we hang out more especially after I ord (551 more days). I hope you are able to do well in life and make it in other aspects of life too and I'll be with you on this journey of life🔥🫡
~Brajesh`,
    photo: null,
    audio: null,
  },
  {
    id: 'joshua',
    name: 'Joshua',
    relation: '',
    text: '',
    photo: null,
    audio: '/audio/joshua.m4a',
  },
  {
    id: 'hanyin',
    name: 'Han Yin',
    relation: '',
    text: `Poop and piss and shart and fart
Chris Wong u da real work of art
Bond sweet and sour like fruit tart
When we dont meet don't Simpson Bart`,
    photo: null,
    audio: null,
  },
  {
    id: 'tzwei',
    name: 'Tzwei',
    relation: '',
    text: '',
    photo: null,
    audio: '/audio/tzwei.m4a',
  },
]

// The line under the cards, like the caption in your reference.
export const messagesMeta = {
  caption: 'swipe through — everyone left you a message',
}
