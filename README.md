# Chris — 19th birthday site

Three pages, one job each:

| Route | What it is |
| --- | --- |
| `/` | Landing — title + the four nav links |
| `/messages` | Swipeable card carousel; the written message reads below the bar |
| `/memories` | Photo mosaic with a click-to-enlarge lightbox |
| `/music` | Playlist where each "song" is a person and their recommendation |
| `/melodies` | Wall of record sleeves; each opens a real Spotify playlist |

Data files, one per page: `messages.js`, `photos.js`, `music.js`, plus
`landing.js` and `nav.js`. `tracks.js` is the old voice-note list and is **no
longer used by any page**.

The look comes from your Figma design: forest ground `#0e1b14`, cream `#f0ecd9`,
orange `#e2622e`, Bodoni Moda caps for display and Space Mono for everything
else. All of it is tokens at the top of `src/styles/global.css` — change a
colour there and it changes site-wide.

## Run it

```
npm --prefix chris-birthday run dev
```

Then open http://localhost:5179 — or ask me to start it for you.

## Adding content

You only ever edit the three files in `src/data/`. Nothing else needs touching.

**Voice messages** → drop the recordings into `public/audio/`, then add an entry
per person in `src/data/tracks.js`. iPhone voice memos (`.m4a`) work as-is, no
conversion. Track lengths are read from the files automatically. A person with
`src: null` shows in the list greyed out as "soon", so you can put everyone in
up front and fill the audio in as it arrives.

**Photos** → drop them into `public/photos/`, list them in `src/data/photos.js`.
`span: 'wide' | 'tall' | 'big'` controls the size in the mosaic.

**Landing page** → see the comment at the top of `src/data/landing.js`. Either
export your Figma design as one image and point `artwork` at it, or send me the
design and I'll rebuild it in code (sharper, responsive, animatable).

## Notes

- The player bar keeps playing while you move between pages? No — it's mounted
  on the wishes page only. Say the word if you want it to survive navigation.
- Auto-advance: when a message ends the next one plays, skipping anyone whose
  recording isn't in yet.
- Nothing here is deployed or backed up yet — it lives only on this laptop.
