# Vendor Pins

## SheetJS Community Edition (standalone)

- **Name:** SheetJS Community Edition (standalone)
- **Source URL:** https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js
- **Version:** 0.20.3
- **SHA-256:** cc015130aa8521e7f088f88898eba949ccdcbfb38df0bd129b44b7273c3a6f41
- **Size (bytes):** 951904
- **License:** Apache-2.0
- **Global name:** XLSX
- **Purpose:** xlsx (ECMA-376) read/write as a Logseq canvas card, loaded via injected `<script>` (like vendor/pdf.min.js)
- **Date added:** 2026-10-09

## hot-formula-parser (standalone UMD)

- **Name:** hot-formula-parser (standalone UMD build)
- **Source URL:** https://unpkg.com/hot-formula-parser@4.0.0/dist/formula-parser.min.js
- **Version:** 4.0.0
- **SHA-256:** e0c61b55d6432b1c41b5e434ed582289163367be69c2bddfac464a774fa88d77
- **Size (bytes):** 180811
- **License:** MIT
- **Global name:** formulaParser (namespace; use `new formulaParser.Parser()`)
- **Purpose:** Excel formula evaluator for a canvas sheet. Replaces fast-formula-parser 1.0.19 (which had 33 stubbed functions, incl. MAX/MIN/MEDIAN/LARGE/SMALL). Resolves A1 refs/ranges via `callCellValue`/`callRangeValue` events — call `done(value)` with the **plain value** (NOT `done({value})`, which yields `#VALUE!` on arithmetic). `parse(formula)` returns `{error, result}`. Covers SUM/AVERAGE/MAX/MIN/MEDIAN/LARGE/SMALL/COUNT/SUMIF/COUNTIF/AVERAGEIF/ROUND/IF etc. (VLOOKUP/TEXT not implemented). Loaded via injected `<script>`; no build step, no runtime deps.
- **Date added:** 2026-10-09 (swapped from fast-formula-parser 1.0.19 due to stub gaps)
