# Logseq Multigrid

A Logseq plugin that turns blocks into interactive canvases — drag images, PDFs, spreadsheets, and videos onto a 2D card grid inside any Logseq block.

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

<p align="center"><img src="./demo.svg" width="720"></p>

## Features

**Image Canvas**
- Free-position, resize, stack, copy, mirror, group into tabs, tile, fit, reset
- Lasso + shift-click range selection
- Three-tier locking (block / position / size)
- Remote images auto-download locally (WebP → PNG)
- Double-click → fullscreen lightbox

**PDF Cards**
- pdf.js viewer with native scroll + zoom
- Group selected PDFs into tabbed cards (subset, not all)

**Sheet Cards (XLSX / CSV)**
- Editable via SheetJS + HyperFormula
- Click-drag range select, Ctrl+C copy as TSV
- Paste tabular data into cells (grid auto-grows)
- Undo/redo, font size, merge/split tabs
- Copy as Markdown table

**YouTube Cards**
- Embedded player, click to go live, Escape/outside-click to exit
- Cached titles

## Install

```
git clone https://github.com/linwalth/logseq-multigrid ~/.logseq/plugins/logseq-multigrid
```
Restart Logseq → Settings → Plugins → enable.

## Usage

Type `/multigrid` in any block, or manually add:

```
{{renderer :multigrid}}
```

Drag files onto the canvas. Right-click for context menus.

## Tech

SheetJS · HyperFormula · pdf.js · vanilla JS (no build step)

## License

[MIT](./LICENSE)
