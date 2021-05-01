# CSS Properties Grouped By Type

## 1. Display

### Display-Visibility

> Subtree omitted from box tree

```css
.none--container {
}
```

> Element replaced by contents in box tree

```css
.contents--container {
}
```

### Display-Flow

> Block-level block container aka block box

```css
.block-flow--box {
}
```

> Block-level block container that establishes a new block formatting context (BFC)

```css
.block-flow--reformatted-box {
}
```

> Inline box

```css
.inline-flow--box {
}
```

> Inline-level block container aka inline block

```css
.inline-flow--block-box {
}
```

> Run-in box (inline box with special box-tree-munging rules)

```css
.inline-flow--run-in-box {
}
```

> Block box with additional marker box

```css
.block-flow--list-item-box {
}
```

> Inline box with additional marker box

```css
.inline-flow--list-item-box {
}
```

### Display-Flex

- block-level flex container

```css
.block-flex--container {
}
```

- inline-level flex container

```css
.inline-flex--container {
}
```

### Display-Grid

- block-level grid container

```css
.block-grid--container {
}
```

- inline-level grid container

```css
.inline-grid--container {
}
```

### Display-Table

- block-level table wrapper box containing table grid box

```css
.block-table--wrapper {
}
```

- inline-level table wrapper box containing table grid box

```css
.inline-table--wrapper {
}
```

## 2. The Box Model

### Box-Content

> _Shortland_: box-content

```css
.placeholder {
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
}
```

### Box-Padding

> **Shorthand**: padding

```css
.placeholder {
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
}
```

### Box-Margin

> **Shorthand**: margin

```css
.placeholder {
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
```

### Box-Border

> **Shorthand**: border

```css
.placeholder {
  border-top: medium none currentcolor;
  border-right: medium none currentcolor;
  border-bottom: medium none currentcolor;
  border-left: medium none currentcolor;
}
```

> **Shorthand**: border-radius

```css
.placeholder {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
```

> **Shorthand**: border-image

```css
.placeholder {
  border-image-source: none;
  border-image-slice: 100%;
  border-image-width: 1;
  border-image-outset: 0;
  border-image-repeat: stretch;
}
```

- box-shadow

### Box-*

- resize

## 3. Flex

### Flex-Flow

> **Shorthand**: flex-flow

```css
.placeholder {
  flex-direction: row;
  flex-wrap: nowrap;
}
```

### Flex-Size

> **Shorthand**: flex

```css
.placeholder {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}
```

### Flex-Position

> _Shortland_: flex-position

```css
.placeholder {
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  align-self: auto;
  order: 0;
}
```

## 4. Grid

### Grid-Area

> **Shorthand**: grid-area

```css
.placeholder {
  grid-row-start: auto;
  grid-column-start: auto;
  grid-row-end: auto;
  grid-column-end: auto;
}
```

### Grid-Column

> **Shorthand**: grid-column

```css
.placeholder {
  grid-column-start: auto;
  grid-column-end: auto;
}
```

### Grid-Row

> **Shorthand**: grid-row

```css
.placeholder {
  grid-row-start: auto;
  grid-row-end: auto;
}
```

### Grid-Template

> **Shorthand**: grid-template

```css
.placeholder {
  grid-template-columns: none;
  grid-template-rows: none;
  grid-template-areas: none;
}
```

### Grid-Gap

> **Shorthand**: gap

```css
.placeholder {
  row-gap: normal;
  column-gap: normal;
}
```

### Grid-*

- order

## 5. Table

### Table-CSS

> _Shortland_: table-css

```css
.placeholder {
  display: table-header-group;
  display: table-row-group;
  display: table-footer-group;
  display: table-row;
  display: table-cell;
  display: table-column-group;
  display: table-column;
  display: table-caption;
}
```

## 6. Column

### Column-Rule

> **Shortland**: column-rule

```css
.placeholder {
  column-rule-width: medium;
  column-rule-style: none;
  column-rule-color: currentcolor;
}
```

### Column-Layout

> **Shortland**: columns

```css
.placeholder {
  column-width: auto;
  column-count: auto;
}
```

### Column-*

- column-gap
- row-gap
- column-span

## 7. Place

### Place-Content

> **Shorthand**: place-content

```css
.placeholder {
  align-content: normal;
  justify-content: normal;
}
```

### Place-Items

> **Shorthand**: place-items

```css
.placeholder {
  align-items: auto
  justify-items: auto;
}
```

### Place-Self

> **Shorthand**: place-self

```css
.placeholder {
  align-self: stretch;
  justify-self: stretch;
}
```

## 8. Positioning

### Positioning-Element

> _Shortland_: positioning-element

```css
.placeholder {
  position: static;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
}
```

## 9. List Style

### List-Style

> **Shorthand**: list-style

```css
.placeholder {
  list-style-type: disc;
  list-style-position: outside;
  list-style-image: none;
}
```

## 10. Text

### Font

> **Shorthand**: font

```css
.placeholder {
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-stretch: normal;
  font-size: medium;
  line-height: normal;
  font-family: depends on user agent;
}
```

### Text-Decoration

> **Shorthand**: text-decoration

```css
.placeholder {
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-color: currentcolor;
  text-decoration-thickness: auto;
}
```

> _Shortland_: text-underline

```css
.placeholder {
text-underline-offset: auto;
text-underline-position: auto;
}
```

### Text-Emphasis

> **Shorthand**: text-emphasis

```css
.placeholder {
  text-emphasis-style: none;
  text-emphasis-color: currentcolor;
}
```

### Text-*

- text-align
- text-align-last
- text-combine-upright
- text-indent
- text-justify
- text-orientation
- text-overflow
- text-rendering
- text-shadow
- text-size-adjust
- text-transform
- line-height
- user-select
- vertical-align

## 11. Image

### Image-Background

> **Shorthand**: background

```css
.placeholder {
  background-image: none;
  background-position: 0% 0%;
  background-size: auto auto;
  background-repeat: repeat;
  background-origin: padding-box;
  background-clip: border-box;
  background-attachment: scroll;
  background-color: transparent;
}
```

### Image-Object

> _Shortland_: object

```css
.placeholder {
object-fit: fill;
object-position: 50% 50%;
}
```

### Image-Mask

> **Shorthand**: mask

```css
.placeholder {
  mask-image: none;
  mask-mode: match-source;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-clip: border-box;
  mask-origin: border-box;
  mask-size: auto;
  mask-composite: add;
}
```

### Image-Outline

> **Shorthand**: outline

```css
.placeholder {
  outline-color: currentcolor;
  outline-style: none;
  outline-width: medium;
}
```

### Image-Overflow

> **Shorthand**: Overflow

```css
.placeholder {
  overflow-x: visible;
  overflow-y: visible;
}
```

### Image-*

- backdrop-filter
- filter
- isolation
- mix-blend-mode
- opacity
- paint-order
- perspective
- perspective-origin
- pointer-events
- translate
- scale
- rotate

## 12. Animation

### Animation-Animation

> **Shorthand**: animation

```css
.placeholder {
  animation-name: none;
  animation-duration: 0s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}
```

### Animation-Transition

> **Shorthand**: transition

```css
.placeholder {
  transition-delay: 0s;
  transition-duration: 0s;
  transition-property: all;
  transition-timing-function: ease;
}
```

### Animation-Offset

> **Shorthand**: offset

```css
.placeholder {
  offset-position: auto;
  offset-path: none;
  offset-distance: 0;
  offset-anchor: auto;
  offset-rotate: auto;
}
```

## 13. Scroll

### Overscroll-Behaviour

> **Shorthand**: overscroll-behavior

```css
.placeholder {
  overscroll-behavior-x: auto;
  overscroll-behavior-y: auto
}
```

### Scroll-Margin

> **Shorthand**: scroll-margin

```css
.placeholder {
  scroll-margin-bottom: 0;
  scroll-margin-left: 0;
  scroll-margin-right: 0;
  scroll-margin-top: 0;
}
```

### Scroll-Padding

> **Shorthand**: scroll-padding

```css
.placeholder {
  scroll-padding-bottom: 0;
  scroll-padding-left: 0;
  scroll-padding-right: 0;
  scroll-padding-top: 0;
}
```

### Scroll-Snap

> _Shortland_: scroll-snap

```css
.placeholder {
  scroll-snap-align: none;
  scroll-snap-stop: normal;
  scroll-snap-type: none;
}
```

### Scroll-Bar

> _Shortland_: scrollbar

```css
.placeholder {
  scrollbar-color: auto;
  scrollbar-gutter: auto;
  scrollbar-width: auto;
}
```

### Scroll-*

- scroll-behaviour

## 14. Specials

### content

### cursor

### *