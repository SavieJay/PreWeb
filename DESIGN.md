---
name: PreCut
description: The PreCut website drawn as a daylight section through an edit.
colors:
  limewash: "#f2efea"
  shaded-plaster: "#e7e3dc"
  mortar: "#d9dcdd"
  stone: "#a8a39a"
  poche: "#1c1f22"
  poche-raised: "#272b30"
  sunbeam: "#d6a43a"
  sun-ink: "#7a5710"
  shadow-blue: "#4e5c6b"
  dusk: "#a7b0ba"
  dusk-deep: "#7d8b9a"
typography:
  display:
    fontFamily: "Barlow Condensed, Roboto Flex Variable, sans-serif"
    fontSize: "clamp(2.25rem, 9.6vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "0.08em"
  headline:
    fontFamily: "Barlow Condensed, Roboto Flex Variable, sans-serif"
    fontSize: "clamp(2rem, 6.4vw, 3.75rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "0.08em"
  title:
    fontFamily: "Barlow Condensed, Roboto Flex Variable, sans-serif"
    fontSize: "clamp(1.875rem, 5.4vw, 2.75rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "0.08em"
  inscription:
    fontFamily: "Barlow Condensed, Roboto Flex Variable, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Roboto Flex Variable, Roboto Flex, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Barlow Condensed, Roboto Flex Variable, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
  readout:
    fontFamily: "Barlow Condensed, Roboto Flex Variable, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.04em"
    fontFeature: "tnum"
  code:
    fontFamily: "Roboto Mono Variable, Roboto Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
  device: "34px"
  device-lg: "38px"
  screen: "26px"
  point: "50%"
spacing:
  gutter: "1rem"
  gutter-wide: "1.5rem"
  section: "5rem"
  section-wide: "7rem"
  sheet: "80rem"
components:
  button-sun:
    backgroundColor: "{colors.sunbeam}"
    textColor: "{colors.poche}"
    rounded: "{rounded.none}"
    height: "3.5rem"
    padding: "0 1.7rem"
  button-sun-hover:
    backgroundColor: "#e2b44f"
  button-sun-active:
    backgroundColor: "#c4932c"
  button-poche:
    backgroundColor: "{colors.poche}"
    textColor: "{colors.sunbeam}"
    rounded: "{rounded.none}"
    height: "2.5rem"
    padding: "0 1.2rem"
  button-poche-hover:
    backgroundColor: "{colors.poche-raised}"
  button-outline:
    backgroundColor: "{colors.limewash}"
    textColor: "{colors.poche}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.7rem"
  button-outline-hover:
    backgroundColor: "{colors.shaded-plaster}"
  button-outline-light:
    backgroundColor: "{colors.poche}"
    textColor: "{colors.limewash}"
    rounded: "{rounded.none}"
    height: "3rem"
    padding: "0 1.7rem"
  readout:
    textColor: "{colors.poche}"
    typography: "{typography.readout}"
    padding: "0.15rem 1.4rem"
  notes-panel:
    backgroundColor: "{colors.mortar}"
    textColor: "{colors.poche}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
  slab:
    backgroundColor: "{colors.poche}"
    textColor: "{colors.limewash}"
  device:
    backgroundColor: "{colors.poche}"
    rounded: "{rounded.device}"
    padding: "9px"
  post:
    backgroundColor: "{colors.poche}"
    textColor: "{colors.limewash}"
    rounded: "{rounded.none}"
    size: "3rem"
---

# Design System: PreCut

## Overview

**Creative North Star: "The Daylight Section"**

The site is an architect's section drawn through an edit. The timeline is the building, the playhead is a sunbeam, and the visitor's scroll carries that light from 0:00 to the export. The owner chose this world on 2026-10-30; it replaces the earlier dark, app-coloured site. Pages are a sheet of limewash plaster. Charcoal poché marks what the section cuts through: the phone body, the ground slab, the footer. One gold beam of light marks the primary action, the playhead and the time that is lit now.

Density is that of a working drawing. Everything sits on hairline rules. Parts are named by leader lines that end in dots. Facts are readouts split by vertical hairlines. Headings are inclined, condensed capitals tracked wide, like hand lettering on a drawing. Body copy stays in an upright sans so it reads easily. The app's own colours belong to the app: they appear only inside rendered app screens and the EditorDemo mock, never in site chrome.

The world rejects the dark, glowing phone on a gradient above a grid of feature cards.

**Key Characteristics:**

- Limewash ground with a faint mineral grain; charcoal poché for cuts, slabs and the device; one gold sunbeam.
- Inclined Barlow Condensed capitals for display, labels and readouts; Roboto Flex upright for reading.
- Hairline rules, dashed gold leader lines ending in dots, dimension lines, ruled readouts.
- Chamfered parallelogram plates for buttons; everything else square-cornered except the phone and point marks.
- Scroll is the playhead: rooms are ahead, lit, or past (shadow blue).

## Colors

The palette is mineral and daylit: warm plaster, cool charcoal, one warm gold, and a slate shadow blue for whatever the light has already passed.

### Primary

- **Sunbeam Gold** (sunbeam): light, not ink. It fills the primary download plate, the hero's slanted beam behind "No watermark.", the lit room's skewed light, the scrubber run and knob, leader lines and their dots, and the 2px underline on links. As text it appears only on the charcoal slab (7.3:1): the slab's timecodes and the label on the charcoal plate. Text placed on it is always charcoal (7.3:1).
- **Sun Ink** (sun-ink): gold-toned text on limewash (5.7:1). Use it for the lit room's time, the colon in the header clock, and prose list markers.

### Secondary

- **Shadow Blue** (shadow-blue): secondary text and anything the light has passed. Use it for labels on limewash, ledes, status lines, and the markers and times of past rooms (6.0:1 on limewash, 5.0:1 on mortar).
- **Dusk** (dusk): secondary text and labels on the slab (7.5:1), and dimension lines on the slab.
- **Deep Dusk** (dusk-deep): times the playhead has passed, on the slab (4.8:1).

### Neutral

- **Limewash** (limewash): the page ground, with a fractal-noise grain at low opacity. It is also text and outline colour on the slab. The browser theme-color matches it.
- **Shaded Plaster** (shaded-plaster): a tinted band of the ground, used for the Privacy section and the outline button's hover face.
- **Mortar** (mortar): ruled notes panels and boxed cards on the download and legal pages, always with a 1px charcoal border.
- **Stone** (stone): drawn lines only, such as the dashed paths of the privacy and install posts and the scrollbar thumb. Never use it for text (2.2:1).
- **Poché** (poche): the section cut. Body text on limewash (14.4:1), the ground slab, the footer, the device body, posts, rules and focus rings.
- **Raised Poché** (poche-raised): raised faces on the slab and hover plates on charcoal.

Hairlines are poché mixed with transparency: 55% for section borders and the header rule, 40% for row dividers, 30% for readout and note rules. On the slab they are limewash at 16–40%. Long-form body text is poché mixed 88–90% into limewash.

### Named Rules

**The Gold Is Light Rule.** Sunbeam Gold is a fill or a line, never text on limewash (2.0:1). Gold-toned words on the light ground use Sun Ink. On the slab, gold may be text.

**The App Stays In Its Frame Rule.** The app's palette (#0E0E10, #17171A, #FF4D6D, #D92B50, its lane colours) appears only inside app screens, the EditorDemo mock and the consent-dialog replica. Site chrome never borrows it.

**The Stone Draws Rule.** Stone is for drawn lines only. If it would carry a word, use Shadow Blue.

## Typography

**Display Font:** Barlow Condensed (with Roboto Flex Variable), italic 300/400/500, upright 400 for numerals
**Body Font:** Roboto Flex Variable (with system-ui)
**Label/Mono Font:** Barlow Condensed italic caps for labels; Roboto Mono only for hashes and certificates

**Character:** Architect's lettering over a plain reading face. The condensed, inclined capitals give the drawing its hand. Roboto Flex stays upright and quiet so long text and legal copy read easily.

### Hierarchy

- **Display** (Barlow Condensed italic 300, uppercase, 0.08em, clamp(2.25rem, 9.6vw, 4.5rem), line-height 1): the hero headline, one line per span. The final call uses clamp(2.25rem, 8vw, 4.5rem); page titles use clamp(2.5rem, 9–10vw, 4–4.5rem). The lit line steps up to weight 400.
- **Headline** (300 italic caps, clamp(2rem, 6.4vw, 3.75rem), 1.02): section titles. Balanced wrapping.
- **Title** (300 italic caps, clamp(1.875rem, 5.4vw, 2.75rem), 1.04): room titles. Download-page subheads use clamp(1.75rem, 5vw, 2.5rem).
- **Inscription** (Barlow Condensed italic 400, mixed case, 1.0625–1.75rem, 1.15–1.25): FAQ summaries, privacy stops, note values, prose h2s (1.75rem with a ruled top) and the hero tagline (1.25rem, 1.45).
- **Body** (Roboto Flex 400, 1.0625rem, 1.65–1.7): running text, at most 38rem in rooms and 62ch in prose. Intro ledes are 1.125rem with line-height 1.6 in Shadow Blue. Strong text and links are weight 600.
- **Label** (Barlow Condensed italic 500, uppercase, 0.16em, 0.8125rem, used at 0.75rem for readout and note labels): names on drawings, nav links, `dt`s.
- **Readout** (Barlow Condensed upright 400, tabular-nums, 0.04em, 1–1.5rem): times, versions, sizes and dates. Digits never shift as they change. Numbers inside body copy keep Roboto Flex with tabular-nums.

### Named Rules

**The Upright Numbers Rule.** Lettering leans and figures stand. Every time and measure is set upright in tabular figures. In the scrubber and header clock, the colon is gold: Sunbeam on the slab, Sun Ink on limewash.

**The Reading Face Rule.** Paragraphs are never set in Barlow. The lettering is for naming things, and Roboto Flex is for reading.

## Layout

The page is one continuous sheet in an 80rem container. Gutters are 1rem on phones and 1.5rem from 64rem up. Sections are separated by full-width poché hairlines (55%), not by cards. Vertical rhythm is 5rem of section padding on phones and 7rem on desktop. Section content on desktop is indented to a 9.5rem drawing margin, so the features rail and titles share one left edge.

The layout is mobile-first at 360px. The breakpoints are 40rem (readouts go from 2×2 to one row), 48rem (header subtitle), 64rem (two-column sheets, header nav, timeline rail times go horizontal) and 80rem (leader-line notes replace ruled note lists). The features are rooms along a vertical rail. On phones the rail sits at 0.35rem with times written vertically. On desktop it sits at 5.5rem, and rooms alternate text and figure sides. Each room stands on a 2px poché floor line drawn from the rail outwards. On phones, the hero's slab rises under the phone (a negative top margin) so the device stands in the ground.

Heavy sections below the fold use `content-visibility: auto` to keep the first load light.

## Elevation & Depth

Depth is drawn, not lit. Surfaces are flat. Planes are separated by tone (limewash, plaster, mortar, slab) and by hairlines. Only the phone casts a shadow, because it is an object standing in the drawing.

### Shadow Vocabulary

- **Device shadow** (`box-shadow: inset 0 0 0 1px #3a3f45, 0 34px 44px -26px rgb(28 31 34 / 0.55)`): the poché phone body in the hero and in every room. The inset line is the body's edge.
- **Dialog shadow** (`box-shadow: 0 24px 36px -24px rgb(28 31 34 / 0.6)`): the replica of the app's consent dialog only.
- **Point ring** (`box-shadow: 0 0 0 2px var(--color-poche)`, or 4px on the scrubber knob): separates gold dots and knobs from what lies under them.

### Named Rules

**The Only Objects Cast Rule.** Panels, plates, posts and sections never get shadows. A shadow means a physical object (the phone, the app's own dialog).

## Shapes

Site chrome is square-cornered (0). Buttons are parallelograms whose ends lean with the lettering (a 0.7rem chamfer, 0.5rem when small). Posts are charcoal squares. Room markers are 11px squares. Circles are reserved for points: leader-line dots (7px), scrubber knobs (14px), and the FAQ plus drawn in two 1.5px strokes. Only the phone is rounded (34px body and 26px screen on phones, 38–40px on desktop). A feature screen is cut in section: its rounded top, or both ends, is replaced by a 16px straight wall of poché. Drawing marks recur across pages: dimension lines with end ticks, corner brackets around the QR plate, and dashed post lines.

## Components

### Buttons

Each button is a slanted plate, drawn and confident.

- **Shape:** a parallelogram drawn on `::before` with clip-path (0.7rem cut), so the link stays a rectangle and the focus ring isn't clipped. Labels are Barlow italic 500 caps at 0.14em.
- **Primary (sun):** a Sunbeam plate with a charcoal label and a download icon. Large is 3.5rem tall at 1.125rem; it is the main call of every page.
- **Poché:** a charcoal plate with a gold label, small (2.5rem). It is the header's download button.
- **Outline / Outline-light:** a 1.5px line plate. Charcoal on limewash ("See it work") or limewash on the slab.
- **Hover / Focus:** plate colour shifts over 0.2s ease-out-expo, and the icon slides 0.15em (not under reduced motion). Focus is a 2px poché outline offset by 3px; on the slab it is gold.

### Readouts

App facts (version, size, Android, price), each with a line icon, a label and a tabular value. They sit two by two with hairline grid rules on phones, then in one row split by vertical hairlines from 40rem. Tone variants exist for limewash and for the slab.

### Cards / Containers

- **Corner Style:** square (0).
- **Background:** Mortar notes panels with a 1px poché border and 1.25–1.5rem padding. The slab is used for the hero ground, the final call and the footer.
- **Shadow Strategy:** none (see Elevation).

### Navigation

A sticky limewash header (4rem, 4.5rem desktop) with a 55% poché hairline below it. On the left are the mark and the wordmark in Barlow italic caps; then the subtitle, set off by a vertical hairline (48rem+). Nav links are labels with a 2px gold underline on hover (64rem+). On the home page a tabular clock and a 2px gold progress edge follow the scroll. The footer is on the slab, with Dusk labels that turn limewash and gain a gold underline on hover.

### Leader-line notes

A gold dot ringed in poché on a part, then a 1px dashed gold leader out past the device, then a label over an inscription value. Below 80rem the same notes become a ruled list under the figure.

### Timeline rooms

Feature rooms along a rail, each with a time and a square marker. States are ahead (limewash marker), lit (gold marker, Sun Ink time, a skewed −14° gold light behind the phone) and past (Shadow Blue). Transitions run 0.6–0.9s ease-out-expo. Under reduced motion, states still change on scroll but without transitions, and the EditorDemo holds its 0:07 still frame.

### Sunbeam headline

The last line of a display headline stands on a gold beam skewed −14° that enters from beyond the left edge of the page. On the hero it wipes in over 1.2s, and stays static under reduced motion.

### Posts and paths

Charcoal square posts (3rem with a limewash line icon; 2.5rem with a gold tabular numeral for install steps) on a 2px dashed Stone line. The privacy path's line turns gold once the section is lit.

### Scrubber

The slab's timeline: a 2px rail at limewash 28%, a gold run and knob, tabular marks with Dusk names, and a dimension line over a caption span. It plays on the editor's 18-second clock.

## Do's and Don'ts

### Do:

- **Do** keep one Sunbeam plate per view as the download action; the header carries the charcoal plate.
- **Do** use Sun Ink (#7A5710) for gold-toned text on limewash, and Sunbeam only as fill, line, or text on the slab.
- **Do** set times and measures upright in tabular figures with a gold colon.
- **Do** separate sections with hairlines and tone, and annotate with leader lines ending in dots.
- **Do** keep the app's colours inside app screens and the EditorDemo mock.
- **Do** keep scroll-driven room states working under reduced motion, without transitions.
- **Do** embed provenance in every shipping raster (`impeccable embed-prompt`). Screens are rendered from the owner's design canvas, not device captures.

### Don't:

- **Don't** set Sunbeam text on limewash or shaded plaster (2.0:1).
- **Don't** set any text in Stone.
- **Don't** put shadows on panels, plates or sections; only the phone and the app dialog cast shadows.
- **Don't** round site chrome; radius belongs to the phone and to point marks.
- **Don't** use the app's pink (#FF4D6D) or near-black (#0E0E10) as site chrome.
- **Don't** set paragraphs in Barlow Condensed.
- **Don't** return to a dark, glowing phone on a gradient above a grid of feature cards.
