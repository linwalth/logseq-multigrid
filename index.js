var PK = 'logseq-multigrid';
var CELL_PX = 8;
var GAP_PX = 1;
var CELL_T = CELL_PX + GAP_PX;
var CV_RESIZE_GAIN = 2;
var SPAN_DEFAULT_CX = 16;
var SPAN_DEFAULT_CY = 32;
var SPAN_MIN = 8;
var SINGLE_CARD_DIVISOR = 4;
var MULTI_CARD_PER_ROW = 8;
var CANVAS_MIN_PX = 16;
var IMG_FALLBACK_W = 896;
var IMG_FALLBACK_H = 1152;
var PDF_AR = 1 / 1.414;
var SHEET_AR = 1.6;
var SHEET_EXT = /\.(xlsx|xlsm|xls|csv)($|[?#])/i;
var VIDEO_EXT = /\.(mp4|webm|ogv|m4v|mov)($|[?#])/i;
var VIDEO_AR = 16 / 9;
var VIDEO_ACCEPT = '.mp4,.webm,.ogv,.m4v,.mov,video/mp4,video/webm,video/ogg,video/quicktime';
var LANG = (function () { try { var l = (navigator.language || navigator.userLanguage || 'en').toLowerCase(); return l.indexOf('de') === 0 ? 'de' : 'en'; } catch (e) { return 'en'; } })();
var STR = {
  de: {
    card_reset: 'Karte zurücksetzen', ar_lock_card: 'Seitenverhältnis Karte sperren', ar_unlock_card: 'Seitenverhältnis Karte entsperren',
    finder: 'Im Finder zeigen', del: 'Löschen', group_tile: 'Zu Kachel zusammenfassen', card_minimize: 'Karte minimieren', card_maximize: 'Karte maximieren',
    layer_up: 'Ebene vor', layer_down: 'Ebene zurück', layer_front: 'Ganz nach vorne', layer_back: 'Ganz nach hinten',
    pos_lock: 'Position Karte sperren', pos_unlock: 'Position Karte entsperren', size_lock: 'Größe Karte sperren', size_unlock: 'Größe Karte entsperren',
    lock_all: 'Alles sperren', unlock_all: 'Alles entsperren', reset_all: 'Alles zurücksetzen',
    ar_lock_canvas: 'Seitenverhältnis Canvas sperren', ar_unlock_canvas: 'Seitenverhältnis Canvas entsperren',
    frame_reset: 'Canvas zurücksetzen', cards_reset: 'Karten zurücksetzen', cards_shrink: 'Karten minimieren', cards_fill: 'Karten maximieren',
    fit_content: 'Canvas zuschneiden', add_yt: 'YouTube-Video einfügen', edit_text: 'Im Text bearbeiten', del_canvas: 'Canvas löschen', del_canvas_confirm: 'Zum Bestätigen "LÖSCHEN" eingeben:',
    del_canvas_wrong: 'Abbruch — Eingabe stimmte nicht überein.',
    row_del: 'Zeile löschen', row_above: 'Zeile darüber', row_below: 'Zeile darunter',
    row_up: 'Zeile nach oben', row_down: 'Zeile nach unten', col_left: 'Spalte nach links', col_right: 'Spalte nach rechts',
    col_del: 'Spalte löschen', col_before: 'Spalte davor', col_after: 'Spalte danach', widths_reset: 'Breiten zurücksetzen',
    migrate_sheet: 'Zu Sheet-Card konvertieren', migrate_q: 'Tabelle in XLSX konvertieren? Original wird als Backup in der Block-Eigenschaft gesichert.', migrate_toast: 'Tabelle konvertiert', sheet_grip: 'Ziehen zum Verschieben', new_tab: 'Blatt hinzufügen', rename_tab: 'Blatt umbenennen', del_tab: 'Blatt löschen', merge_cells: 'Zellen verbinden', unmerge_cells: 'Verbindung aufheben', dup_tab: 'Blatt duplizieren', tab_left: 'Blatt nach links', tab_right: 'Blatt nach rechts', import_tab: 'XLSX/CSV importieren', restore_md: 'Original-Tabelle wiederherstellen', show_headers: 'Zeilen-/Spaltenköpfe (A,B,C/1,2,3)', del_files_q: 'Datei(en) auch von der Platte löschen?',
    paused: 'Multigrid pausiert', activate: 'Aktivieren',
    path_copied: 'Pfad kopiert: ', ext_image: 'Externes Bild – kein lokaler Pfad', no_block: 'Kein Zielblock', save_failed: 'Speichern fehlgeschlagen: ',
    slash: 'Multigrid einfügen', fit_toast: 'Canvas angepasst', fill_toast: 'Canvas gefüllt', cells: 'Zellen', image: 'Bild', images: 'Bilder', sheet: 'Tabelle',     sheets: 'Tabellen', video: 'Video', videos: 'Videos', pdf: 'PDF', pdfs: 'PDFs', card: 'Karte', cards: 'Karten', remove_q: ' wirklich entfernen?', add_image: 'Bild einfügen', add_pdf: 'PDF einfügen', add_table: 'Tabelle einfügen', add_youtube: 'YouTube-Video einfügen', yt_prompt: 'YouTube-URL:', yt_bad: 'Keine gültige YouTube-URL.', yt_open: 'Auf YouTube öffnen', open_canvas: 'Canvas öffnen',
    mirror_image: 'Horizontal spiegeln',
    name_prompt: 'Name für die neue Datei:', mirror_failed: 'Spiegeln fehlgeschlagen', mirrored: 'Gespiegelt', not_supported: 'Format nicht unterstützt',
    open_pdf: 'In Logseq öffnen', open_pdf_failed: 'PDF konnte nicht geöffnet werden',
    add_video: 'Video einfügen', open_video: 'Video in Standardprogramm öffnen', open_video_failed: 'Video konnte nicht geöffnet werden',
    sheet_open: 'In Standardprogramm öffnen', sheet_font: 'Schriftgröße',
    sheet_fallback: 'Tabelle', sheet_saved: 'Tabelle gespeichert', sheet_savefail: 'Speichern fehlgeschlagen: ', paste_sheet: 'Tabelle als Sheet-Card eingefügt', merge_sheets: 'Tabellen zusammenführen', split_sheet: 'Tabelle aufteilen', merge_done: 'Tabellen zusammengeführt', split_done: 'Tabelle aufgeteilt', split_single: 'Nur ein Blatt — nichts aufzuteilen', merge_pdfs: 'PDFs zusammenfassen', split_pdf: 'PDF aufteilen', pdf_single: 'Nur eine PDF — nichts aufzuteilen', merge_imgs_done: 'Bilder zusammengeführt', split_imgs_done: 'Bilder aufgeteilt', merge_pdfs_done: 'PDFs zusammengeführt', split_pdfs_done: 'PDF aufgeteilt', copy_md: 'Als Markdown kopieren', copy_md_done: 'Markdown kopiert', copy_sel_done: 'Auswahl kopiert', paste_done: 'Eingefügt', merge_imgs: 'Bilder zusammenfassen', split_img: 'Bilder aufteilen', img_single: 'Nur ein Bild — nichts aufzuteilen'
  },
  en: {
    card_reset: 'Reset card', ar_lock_card: 'Lock card aspect ratio', ar_unlock_card: 'Unlock card aspect ratio',
    finder: 'Show in Finder', del: 'Delete', group_tile: 'Merge into tile', card_minimize: 'Minimize card', card_maximize: 'Maximize card',
    layer_up: 'Layer forward', layer_down: 'Layer backward', layer_front: 'Bring to front', layer_back: 'Send to back',
    pos_lock: 'Lock card position', pos_unlock: 'Unlock card position', size_lock: 'Lock card size', size_unlock: 'Unlock card size',
    lock_all: 'Lock all', unlock_all: 'Unlock all', reset_all: 'Reset all',
    ar_lock_canvas: 'Lock canvas aspect ratio', ar_unlock_canvas: 'Unlock canvas aspect ratio',
    frame_reset: 'Reset canvas', cards_reset: 'Reset cards', cards_shrink: 'Minimize cards', cards_fill: 'Maximize cards',
    fit_content: 'Crop canvas to content', add_yt: 'Add YouTube video', edit_text: 'Edit in text', del_canvas: 'Delete canvas', del_canvas_confirm: 'Type "DELETE" to confirm:',
    del_canvas_wrong: 'Cancelled — input did not match.',
    row_del: 'Delete row', row_above: 'Row above', row_below: 'Row below',
    row_up: 'Row up', row_down: 'Row down', col_left: 'Column left', col_right: 'Column right',
    col_del: 'Delete column', col_before: 'Column before', col_after: 'Column after', widths_reset: 'Reset widths',
    migrate_sheet: 'Convert to sheet card', migrate_q: 'Convert table to XLSX? The original is backed up in a block property.', migrate_toast: 'Table converted', sheet_grip: 'Drag to move', new_tab: 'Add sheet', rename_tab: 'Rename sheet', del_tab: 'Delete sheet', merge_cells: 'Merge cells', unmerge_cells: 'Unmerge cells', dup_tab: 'Duplicate sheet', tab_left: 'Move sheet left', tab_right: 'Move sheet right', import_tab: 'Import XLSX/CSV', restore_md: 'Restore original table', show_headers: 'Row/column headers (A,B,C / 1,2,3)', del_files_q: 'Also delete file(s) from disk?',
    paused: 'Multigrid paused', activate: 'Activate',
    path_copied: 'Path copied: ', ext_image: 'External image – no local path', no_block: 'No target block', save_failed: 'Save failed: ',
    slash: 'Insert Multigrid', fit_toast: 'Canvas fitted', fill_toast: 'Canvas filled', cells: 'cells', image: 'image', images: 'images', sheet: 'table',     sheets: 'tables', video: 'video', videos: 'videos', pdf: 'PDF', pdfs: 'PDFs', card: 'card', cards: 'cards', remove_q: ' - remove?', add_image: 'Add image', add_pdf: 'Add PDF', add_table: 'Add table', add_youtube: 'Add YouTube video', yt_prompt: 'YouTube URL:', yt_bad: 'Not a valid YouTube URL.', yt_open: 'Open on YouTube', open_canvas: 'Open canvas',
    mirror_image: 'Flip horizontally',
    name_prompt: 'Name for the new file:', mirror_failed: 'Flip failed', mirrored: 'Flipped', not_supported: 'Format not supported',
    open_pdf: 'Open in Logseq', open_pdf_failed: 'Could not open PDF',
    add_video: 'Add video', open_video: 'Open video in default app', open_video_failed: 'Could not open video',
    sheet_open: 'Open in default app', sheet_font: 'Font size',
    sheet_fallback: 'Sheet', sheet_saved: 'Sheet saved', sheet_savefail: 'Save failed: ', paste_sheet: 'Table pasted as sheet card', merge_sheets: 'Merge sheets', split_sheet: 'Split sheet', merge_done: 'Sheets merged', split_done: 'Sheet split', split_single: 'Only one tab — nothing to split', merge_pdfs: 'Merge PDFs', split_pdf: 'Split PDF', pdf_single: 'Only one PDF — nothing to split', merge_imgs_done: 'Images merged', split_imgs_done: 'Images split', merge_pdfs_done: 'PDFs merged', split_pdfs_done: 'PDF split', copy_md: 'Copy as Markdown', copy_md_done: 'Markdown copied', copy_sel_done: 'Selection copied', paste_done: 'Pasted', merge_imgs: 'Merge images', split_img: 'Split images', img_single: 'Only one image — nothing to split'
  }
};
function t(k) { var s = (STR[LANG] && STR[LANG][k]); return s != null ? s : (STR.en[k] != null ? STR.en[k] : k); }
function tRemove(n) { return LANG === 'de' ? ((n > 1 ? n + ' ' + t('images') : t('image')) + t('remove_q')) : (t('del') + (n > 1 ? ' ' + n + ' ' + t('images') : ' ' + t('image')) + t('remove_q')); }
function tRemoveSheet(n) { return LANG === 'de' ? ((n > 1 ? n + ' ' + t('sheets') : t('sheet')) + t('remove_q')) : (t('del') + (n > 1 ? ' ' + n + ' ' + t('sheets') : ' ' + t('sheet')) + t('remove_q')); }
function tRemoveArr(arr) {
  arr = arr || []; var n = arr.length;
  var all = function (k) { return n > 0 && arr.every(function (c) { return c.kind === k; }); };
  var lbl = all('sheet') ? (n > 1 ? t('sheets') : t('sheet')) : all('video') ? (n > 1 ? t('videos') : t('video')) : all('yt') ? (n > 1 ? t('videos') : t('video')) : all('pdf') ? (n > 1 ? t('pdfs') : t('pdf')) : all('img') ? (n > 1 ? t('images') : t('image')) : (n > 1 ? t('cards') : t('card'));
  return LANG === 'de' ? ((n > 1 ? n + ' ' + lbl : lbl) + t('remove_q')) : (t('del') + (n > 1 ? ' ' + n + ' ' + lbl : ' ' + lbl) + t('remove_q'));
}
var MG = { mo: null, deb: null, graphPath: '', chains: {}, sel: new Set(), anchor: null, tbls: new Map(), styles: {}, dragShield: null, pdfjs: null, pdfLoad: null, pdfCards: new Map(), pdfQ: [], pdfActive: 0, pdfObs: null, xlsx: null, xlsxLoad: null, sheetCards: new Map(), sheetQ: [], sheetActive: 0, sheetObs: null, formula: null, formulaLoad: null, cvSel: null };
function css() {
  return `
.mg-canvas{position:relative;z-index:0;overflow:hidden;border:none;border-radius:0;padding:2px;margin-top:0;background:transparent;display:inline-block}
.ls-block.mg-has-canvas>.flex.flex-row{visibility:hidden;height:0;overflow:hidden}
.ls-block.mg-has-canvas>.mg-canvas{margin-top:0;width:100%;max-width:100%}
:root{--mg-accent:var(--ls-active-primary-color,#4a90d9)}
.ls-block .table-wrapper{border:1px solid var(--ls-border-color,rgba(128,128,128,.3))!important;border-radius:8px;overflow:hidden;background:var(--ls-primary-background-color,transparent)}
.ls-block table{width:100%;border-collapse:collapse;margin:0;color:var(--ls-primary-text-color,#333)}
.ls-block table th,.ls-block table td{border:none!important;border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))!important;padding:7px 12px!important;text-align:left;vertical-align:top}
.ls-block table tbody tr:last-child th,.ls-block table tbody tr:last-child td{border-bottom:none!important}
.ls-block table thead th,.ls-block table thead td{background:var(--ls-tertiary-background-color,rgba(128,128,128,.08))!important;color:var(--ls-title-text-color,var(--ls-primary-text-color,#333))!important;font-weight:600!important;font-size:1.06em!important;border-bottom:2px solid var(--mg-accent,rgba(74,144,217,.55))!important}
.ls-block table tbody tr:nth-child(even){background:var(--ls-secondary-background-color,rgba(128,128,128,.04))}
.ls-block table tbody tr:hover{background:var(--ls-block-highlight-color,rgba(74,144,217,.06))}
body div[id="__app"] .ls-block table thead th{border-bottom:2px solid var(--mg-accent,rgba(74,144,217,.55))!important}
.mg-controls{display:flex;gap:6px;align-items:center;padding:2px 2px 6px}
.mg-btn{padding:2px 8px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));border-radius:4px;cursor:pointer;font-size:12px;background:var(--ls-tertiary-background-color,#fff);color:var(--ls-primary-text-color,#333);user-select:none}
.mg-btn:hover{background:var(--ls-active-primary-color,#4a90d9);color:#fff}
.mg-stage{display:grid;grid-auto-rows:${CELL_PX}px;gap:${GAP_PX}px;align-items:stretch;justify-items:stretch;border-radius:4px;width:100%;height:100%;max-width:100%}
.mg-stage.mg-grid-show{background-image:linear-gradient(to right,rgba(74,144,217,.15) 1px,transparent 1px),linear-gradient(to bottom,rgba(74,144,217,.15) 1px,transparent 1px);background-size:calc(100% / var(--mg-cols,10)) 80px}
.mg-card{min-width:0;min-height:0;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));border-radius:6px;overflow:hidden;background:var(--ls-secondary-background-color,#fafafa);cursor:grab;box-shadow:0 1px 3px rgba(0,0,0,.12);position:relative;transition:grid-column 0.15s ease-out,grid-row 0.15s ease-out,box-shadow 0.15s ease-out}
.mg-card::after{content:'';position:absolute;inset:0;border-radius:6px;box-shadow:0 0 0 0 rgba(74,144,217,0);transition:box-shadow 0.2s;pointer-events:none}
.mg-card:not(.mg-sel):hover::after{box-shadow:inset 0 0 16px 2px rgba(74,144,217,.25)}
.mg-card.mg-sel{border:2px solid #4a90d9;box-shadow:0 1px 3px rgba(0,0,0,.12)}
.mg-card.mg-changed{animation:mg-flash 0.4s ease-out}
.mg-card.mg-pop{animation:mg-pop 0.4s cubic-bezier(.18,.9,.3,1.2)}
.mg-card.mg-flip .mg-img{animation:mg-flip 0.45s ease}
.mg-card.mg-settle .mg-img,.mg-card.mg-settle .mg-sheet,.mg-card.mg-settle .mg-pdf{animation:mg-settle 0.3s ease-out}
.mg-card.mg-locking{animation:mg-lock-pulse 0.3s ease-out}
.mg-card[data-mg-lblock]:not(.mg-sel),.mg-card[data-mg-lpos]:not(.mg-sel),.mg-card[data-mg-lsize]:not(.mg-sel){border-color:rgba(128,128,128,.25)}
.mg-canvas:hover .mg-card[data-mg-lblock]:not(.mg-sel),.mg-canvas:hover .mg-card[data-mg-lpos]:not(.mg-sel),.mg-canvas:hover .mg-card[data-mg-lsize]:not(.mg-sel){border-color:rgba(180,140,40,.3)}
.mg-card.mg-resetting{animation:mg-reset-ripple 0.35s ease-out}
.mg-card.mg-deleting{animation:mg-delete-fade 0.25s ease-in forwards;pointer-events:none}
.mg-ghost{opacity:0.5;transform:rotate(-1.5deg);filter:blur(0.5px)}
.mg-dropshadow{position:absolute;z-index:80000;pointer-events:none;border:2px dashed var(--mg-accent,#4a90d9);border-radius:6px;background:rgba(74,144,217,.18);box-shadow:0 4px 14px rgba(0,0,0,.22);transition:left .07s linear,top .07s linear,width .07s linear,height .07s linear}
@keyframes mg-flash{0%{box-shadow:0 1px 3px rgba(0,0,0,.12)}50%{box-shadow:0 0 12px rgba(74,144,217,.5)}100%{box-shadow:0 1px 3px rgba(0,0,0,.12)}}
@keyframes mg-settle{0%{transform:scale(1)}30%{transform:scale(1.03)}60%{transform:scale(0.99)}100%{transform:scale(1)}}
@keyframes mg-pop{0%{transform:scale(0.5);opacity:0}70%{transform:scale(1.06);opacity:1}100%{transform:scale(1);opacity:1}}
@keyframes mg-flip{0%{transform:scaleX(-1)}100%{transform:scaleX(1)}}
@keyframes mg-lock-pulse{0%{border-color:rgba(128,128,128,.25)}50%{border-color:rgba(180,140,40,.5)}100%{border-color:rgba(128,128,128,.25)}}
@keyframes mg-reset-ripple{0%{transform:scale(1);opacity:1}50%{transform:scale(0.97);opacity:.7}100%{transform:scale(1);opacity:1}}
@keyframes mg-delete-fade{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.85)}}
@keyframes mg-menu-pop{0%{opacity:0;transform:scale(0.92) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}
@keyframes mg-lightbox-in{0%{opacity:0;transform:scale(0.95)}100%{opacity:1;transform:scale(1)}}
.mg-menu{animation:mg-menu-pop 0.12s ease-out}
.mg-mitem{transition:background 0.1s,color 0.1s}
.mg-mitem:hover{background:rgba(74,144,217,.15)}
.mg-lightbox{animation:mg-lightbox-in 0.15s ease-out}
.mg-stage.mg-grid-visible{background-image:linear-gradient(to right,rgba(74,144,217,.2) 1px,transparent 1px),linear-gradient(to bottom,rgba(74,144,217,.2) 1px,transparent 1px);background-size:var(--mg-cell-size,${CELL_PX}px) var(--mg-cell-size,${CELL_PX}px)}
.mg-canvas.mg-cv-sel{outline:2px solid var(--mg-accent,#4a90d9);outline-offset:0;border-radius:6px}
.mg-stage.mg-cell-pulse{animation:mg-cellpulse 0.2s ease-out}
@keyframes mg-cellpulse{0%{background-color:rgba(74,144,217,var(--mg-pulse-opacity,0.2))}100%{background-color:transparent}}
.mg-card img{display:block;width:100%;height:100%;object-fit:cover;pointer-events:none;-webkit-user-drag:none}
.mg-pdf{display:flex;flex-direction:column;width:100%;height:100%;background:var(--ls-secondary-background-color,#fafafa);box-sizing:border-box;overflow:hidden}
.mg-pdf-body{flex:1 1 auto;overflow:auto;position:relative}
.mg-pdf-head{display:flex;align-items:center;gap:6px;flex:0 0 auto;padding:2px 4px;flex-wrap:nowrap;overflow:hidden;background:var(--ls-tertiary-background-color,var(--ls-secondary-background-color,#eee));border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))}
.mg-pdf-tab{position:relative;flex:0 0 auto;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;padding:2px 8px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));border-radius:4px;background:var(--ls-primary-background-color,#fff);color:var(--ls-primary-text-color,#333);cursor:pointer;margin-left:-10px}
.mg-pdf-tab:first-of-type{margin-left:0}
.mg-pdf-tab:hover{z-index:1001!important;background:var(--ls-secondary-background-color,#eee)}
.mg-pdf-tab-on{font-weight:600;border-color:var(--mg-accent,#4a90d9);color:var(--ls-title-text-color,#333)}
.mg-img-group{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden;background:var(--ls-secondary-background-color,#fafafa)}
.mg-img-head{display:flex;align-items:center;gap:6px;flex:0 0 auto;padding:2px 4px;flex-wrap:nowrap;overflow:hidden;background:var(--ls-tertiary-background-color,var(--ls-secondary-background-color,#eee));border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))}
.mg-img-body{flex:1 1 auto;overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;background:#000}
.mg-img-body .mg-img{object-fit:contain;width:100%;height:100%}
.mg-img-tab{position:relative;flex:0 0 auto;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;padding:2px 8px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));border-radius:4px;background:var(--ls-primary-background-color,#fff);color:var(--ls-primary-text-color,#333);cursor:pointer;margin-left:-10px}
.mg-img-tab:first-of-type{margin-left:0}
.mg-img-tab:hover{z-index:1001!important;background:var(--ls-secondary-background-color,#eee)}
.mg-img-tab-on{font-weight:600;border-color:var(--mg-accent,#4a90d9);color:var(--ls-title-text-color,#333)}
.mg-pdf-slot{display:block;width:100%;margin:0 0 6px}
.mg-pdf-page{display:block;margin:0 auto;max-width:100%;background:#fff}
.mg-pdf-fallback{display:flex;align-items:center;justify-content:center;overflow:hidden}
.mg-pdf-fallback::after{content:'PDF';font-size:18px;font-weight:700;color:rgba(200,60,60,.7);margin-top:auto;margin-bottom:auto}
.mg-sheet{display:block;width:100%;height:calc(100% + ${CELL_T}px);overflow:auto;box-sizing:border-box;background:var(--ls-primary-background-color,var(--ls-secondary-background-color,#fff));color:var(--ls-primary-text-color,#333);cursor:default;position:relative}
.mg-yt{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden;background:#000;position:relative}
.mg-yt-head{display:flex;align-items:center;gap:6px;flex:0 0 auto;padding:2px 4px;flex-wrap:nowrap;overflow:hidden;background:var(--ls-tertiary-background-color,var(--ls-secondary-background-color,#eee));border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))}
.mg-yt-body{flex:1 1 auto;position:relative;overflow:hidden}
.mg-yt-frame{display:block;width:100%;height:100%;border:0;pointer-events:none}
.mg-yt.mg-yt-live .mg-yt-frame{pointer-events:auto}
.mg-yt-shield{position:absolute;inset:0;z-index:1;cursor:grab}
.mg-yt.mg-yt-live .mg-yt-shield{display:none}
.mg-yt-tab{position:relative;flex:0 0 auto;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;padding:2px 8px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));border-radius:4px;background:var(--ls-primary-background-color,#fff);color:var(--ls-primary-text-color,#333);cursor:pointer;margin-left:-10px}
.mg-yt-tab:first-of-type{margin-left:0}
.mg-yt-tab:hover{z-index:1001!important;background:var(--ls-secondary-background-color,#eee)}
.mg-yt-tab-on{font-weight:600;border-color:var(--mg-accent,#4a90d9);color:var(--ls-title-text-color,#333)}
.mg-video{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden;background:#000;position:relative}
.mg-video-head{display:flex;align-items:center;gap:6px;flex:0 0 auto;padding:2px 4px;flex-wrap:nowrap;overflow:hidden;background:var(--ls-tertiary-background-color,var(--ls-secondary-background-color,#eee));border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))}
.mg-video-body{flex:1 1 auto;position:relative;overflow:hidden;background:#000}
.mg-video-frame{display:block;width:100%;height:100%;border:0;background:#000}
.mg-video-tab{position:relative;flex:0 0 auto;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;padding:2px 8px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));border-radius:4px;background:var(--ls-primary-background-color,#fff);color:var(--ls-primary-text-color,#333);cursor:pointer;margin-left:-10px}
.mg-video-tab:first-of-type{margin-left:0}
.mg-video-tab:hover{z-index:1001!important;background:var(--ls-secondary-background-color,#eee)}
.mg-video-tab-on{font-weight:600;border-color:var(--mg-accent,#4a90d9);color:var(--ls-title-text-color,#333)}
.mg-sheet-bars{position:absolute;top:0;left:0;width:0;height:0;pointer-events:none;z-index:6}
.mg-sheet-bar{position:absolute;width:6px;cursor:col-resize;pointer-events:auto;background:var(--mg-accent,#4a90d9);border-radius:2px;opacity:0;transition:opacity .12s}
.mg-sheet:hover .mg-sheet-bar{opacity:.22}
.mg-sheet-bar:hover{opacity:.7}
.mg-sheet-head{display:flex;align-items:center;gap:6px;position:sticky;top:0;z-index:5;padding:2px 4px;flex-wrap:nowrap;overflow:hidden;background:var(--ls-tertiary-background-color,var(--ls-secondary-background-color,#eee));border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))}
.mg-sheet-grip{cursor:move;opacity:.45;font-size:15px;line-height:1;padding:0 4px;user-select:none;letter-spacing:-2px;flex:0 0 auto}
.mg-sheet-grip:hover{opacity:.9}
.mg-sheet-tabs{display:flex;gap:0;flex-wrap:nowrap;flex:1 1 auto;min-width:0;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;padding-right:8px}
.mg-sheet-tabs::-webkit-scrollbar{display:none}
.mg-sheet-tab{position:relative;flex:0 0 auto;margin-left:-10px}
.mg-sheet-tabs .mg-sheet-tab:first-child{margin-left:0}
.mg-sheet-tab:hover{z-index:1001!important}
.mg-sheet-add{flex:0 0 auto;position:relative;z-index:1002}
.mg-sheet-tab{font-size:12px;padding:2px 8px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));border-radius:4px;background:var(--ls-primary-background-color,#fff);color:var(--ls-primary-text-color,#333);cursor:pointer}
.mg-sheet-tab:hover{background:var(--ls-secondary-background-color,#eee)}
.mg-sheet-tab-on{font-weight:600;border-color:var(--mg-accent,#4a90d9);color:var(--ls-title-text-color,#333)}
.mg-sheet-tab-sel{outline:2px solid var(--mg-accent,#4a90d9);outline-offset:-2px;background:var(--ls-primary-background-color,#fff)!important;box-shadow:inset 0 0 0 1000px rgba(74,144,217,.22)!important}
.mg-sheet table th.mg-sheet-hrow,.mg-sheet table .mg-sheet-hrow th{background:var(--ls-tertiary-background-color,rgba(128,128,128,.12))!important;color:var(--ls-title-text-color,var(--ls-primary-text-color,#333))!important;font-weight:600;text-align:center;position:sticky;top:0;z-index:3}
.mg-sheet table th.mg-sheet-rh{background:var(--ls-tertiary-background-color,rgba(128,128,128,.12))!important;color:var(--ls-primary-text-color,#333)!important;font-weight:600;text-align:center;font-size:0.92em;position:sticky;left:0;z-index:2}
.mg-sheet table th.mg-sheet-corner{background:var(--ls-tertiary-background-color,rgba(128,128,128,.15))!important;position:sticky;top:0;left:0;z-index:4}
.mg-sheet table{width:100%;border-collapse:separate;border-spacing:0;margin:0;color:var(--ls-primary-text-color,#333);font-size:var(--mg-sheet-fs,13px)}
.mg-sheet table td,.mg-sheet table th{border:none!important;border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))!important;border-right:1px solid var(--ls-border-color,rgba(128,128,128,.15))!important;padding:5px 9px!important;text-align:left;vertical-align:top;white-space:pre-wrap;min-width:40px;outline:none}
.mg-sheet table tr>:last-child{border-right:none!important}
.mg-sheet table tr:last-child>*{border-bottom:none!important}
.mg-sheet table.mg-tbl-closed tr:last-child>*{border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2))!important}
.mg-sheet table .mg-sheet-h{background:var(--ls-tertiary-background-color,rgba(128,128,128,.08))!important;color:var(--ls-title-text-color,var(--ls-primary-text-color,#333))!important;font-weight:600!important;font-size:1.06em!important}
.mg-sheet tbody tr:nth-child(even){background:var(--ls-secondary-background-color,rgba(128,128,128,.04))}
.mg-sheet tbody tr:hover{background:var(--ls-block-highlight-color,rgba(74,144,217,.06))}
.mg-sheet table td.mg-sheet-edit{box-shadow:inset 0 0 0 2px var(--mg-accent,rgba(74,144,217,.55));background:var(--ls-primary-background-color,#fff)!important}
.mg-sheet table td.mg-sheet-sel{background:rgba(74,144,217,.18)!important;outline:1px solid var(--mg-accent,rgba(74,144,217,.7));outline-offset:-1px}
.mg-sheet-fallback{display:flex;align-items:center;justify-content:center;overflow:hidden}
.mg-sheet-fallback::after{content:'XLSX';font-size:16px;font-weight:700;color:rgba(60,140,90,.75)}
.mg-card.mg-drag{opacity:.5;z-index:50}
.mg-card[data-mg-lpos]{cursor:default}
.mg-reactivate{display:flex;gap:6px;align-items:center;padding:6px 8px;margin-top:6px;border:1px dashed var(--ls-border-color,rgba(128,128,128,.3));border-radius:6px;font-size:12px;color:var(--ls-primary-text-color,#666)}
.mg-card-corner{position:absolute;width:16px;height:16px;z-index:4;opacity:0;transition:opacity .15s}.mg-card.mg-sel .mg-card-corner{opacity:.6}.mg-card:hover .mg-card-corner{opacity:.5}.mg-card-corner:hover{opacity:1!important}
.mg-card-corner-tl{top:0;left:0;cursor:nwse-resize}.mg-card-corner-tr{top:0;right:0;cursor:nesw-resize}.mg-card-corner-bl{bottom:0;left:0;cursor:nesw-resize}.mg-card-corner-br{bottom:0;right:0;cursor:nwse-resize}
.mg-card-corner::after{content:'';position:absolute;top:0;left:0;width:0;height:0;border-top:12px solid rgba(74,144,217,.9);border-right:12px solid transparent}
.mg-card-corner-tr::after{left:auto;right:0;border-right:0;border-left:12px solid transparent}
.mg-card-corner-bl::after{top:auto;bottom:0;border-top:0;border-bottom:12px solid rgba(74,144,217,.9);border-right:12px solid transparent}
.mg-card-corner-br::after{top:auto;left:auto;right:0;bottom:0;border-top:0;border-right:0;border-left:12px solid transparent;border-bottom:12px solid rgba(74,144,217,.9)}
.mg-card-edge{position:absolute;z-index:3;opacity:0}
.mg-card-edge-t{top:0;left:16px;right:16px;height:7px;cursor:ns-resize}
.mg-card-edge-b{bottom:0;left:16px;right:16px;height:7px;cursor:ns-resize}
.mg-card-edge-l{left:0;top:16px;bottom:16px;width:7px;cursor:ew-resize}
.mg-card-edge-r{right:0;top:16px;bottom:16px;width:7px;cursor:ew-resize}
.mg-gframe{position:absolute;border:2px solid rgba(74,144,217,.5);border-radius:8px;pointer-events:none}
.mg-menu{position:fixed;z-index:100000;min-width:180px;padding:4px 0;font-size:13px;border-radius:6px;color:var(--ls-primary-text-color,#333);background:var(--ls-primary-background-color,#fff);border:1px solid var(--ls-border-color,rgba(128,128,128,.3));box-shadow:0 4px 14px rgba(0,0,0,.25)}
.mg-mitem{padding:5px 12px;cursor:pointer;white-space:nowrap}.mg-mitem:hover{background:var(--ls-active-primary-color,#4a90d9);color:#fff}
.mg-msep{height:1px;margin:4px 0;background:rgba(128,128,128,.3)}.mg-mwarn{color:#c0392b;font-weight:bold}
.mg-ask-shield{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.35)}
.mg-ask{position:fixed;z-index:100001;left:50%;top:50%;transform:translate(-50%,-50%);min-width:300px;max-width:80vw;padding:14px 16px;border-radius:8px;background:var(--ls-primary-background-color,#fff);color:var(--ls-primary-text-color,#333);border:1px solid var(--ls-border-color,rgba(128,128,128,.3));box-shadow:0 8px 30px rgba(0,0,0,.35);font-size:13px}
.mg-ask-msg{margin-bottom:8px;white-space:pre-wrap}
.mg-ask input{width:100%;box-sizing:border-box;padding:6px 8px;font-size:13px;border-radius:4px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));background:var(--ls-secondary-background-color,#f5f5f5);color:inherit;outline:none}
.mg-ask-btns{display:flex;justify-content:flex-end;gap:8px;margin-top:10px}
.mg-ask-btns button{padding:4px 12px;font-size:13px;border-radius:5px;border:1px solid var(--ls-border-color,rgba(128,128,128,.3));background:var(--ls-tertiary-background-color,var(--ls-secondary-background-color,#ddd));color:var(--ls-primary-text-color,#333);cursor:pointer}
.mg-ask-btns button.mg-ask-ok{background:var(--ls-active-primary-color,var(--ls-link-text-color,#4a90d9));color:var(--ls-primary-background-color,#fff);border-color:transparent}
.mg-ask-btns button.mg-ask-danger{background:#c0392b}
.mg-tip{position:fixed;z-index:100002;display:none;max-width:280px;padding:4px 8px;font-size:12px;line-height:1.3;border-radius:5px;background:var(--ls-primary-background-color,#222);color:var(--ls-primary-text-color,#fff);border:1px solid var(--ls-border-color,rgba(128,128,128,.3));box-shadow:0 4px 14px rgba(0,0,0,.3);pointer-events:none;white-space:nowrap}
.mg-has-canvas .image-resize,.mg-has-canvas img:not(.mg-img){display:none!important}
.mg-cv-corner{position:absolute;right:-3px;bottom:-3px;width:36px;height:36px;cursor:nwse-resize;z-index:102;opacity:0;transition:opacity .15s}.mg-canvas:hover .mg-cv-corner{opacity:.5}.mg-cv-corner:hover{opacity:1!important}
.mg-cv-corner::after{content:'';position:absolute;right:0;bottom:0;width:26px;height:26px;background:linear-gradient(135deg,transparent 45%,rgba(74,144,217,.7) 45%);border-radius:0 0 6px 0}
.mg-cv-bottom{position:absolute;left:36px;right:36px;bottom:0;height:12px;cursor:ns-resize;z-index:101}
.mg-cv-right{position:absolute;right:0;top:36px;bottom:36px;width:12px;cursor:ew-resize;z-index:101}
.mg-emptyzone{display:flex;gap:6px;justify-content:center;align-items:center;min-height:60px;border:1px dashed var(--ls-border-color,rgba(128,128,128,.3));border-radius:6px;padding:8px;margin-top:4px;background:rgba(128,128,128,.05)}
.mg-emptyzone.mg-dropok{border-color:#4a90d9;background:rgba(74,144,217,.08)}
.mg-tbowrap{position:fixed;z-index:5;pointer-events:none}
.mg-colh{position:absolute;z-index:6;width:6px;cursor:col-resize;background:var(--mg-accent,#4a90d9);opacity:.25;border-radius:2px;pointer-events:auto;transition:opacity .12s}
.mg-colh:hover{opacity:.7}
.mg-phantom-row{position:fixed;z-index:9999}
.mg-phantom-cell{position:absolute;top:0;box-sizing:border-box;padding:7px 12px;overflow:hidden;white-space:nowrap;background:var(--ls-primary-background-color,transparent);color:var(--ls-primary-text-color,#333);border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2));outline:none}
.mg-phantom-cell.is-active{background:var(--ls-tertiary-background-color,rgba(74,144,217,.06));box-shadow:inset 0 0 0 2px var(--mg-accent,#4a90d9)}
.mg-phantom-row::after{content:'';position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--mg-accent,#4a90d9);opacity:.45;pointer-events:none}
.mg-phantom-edit{position:fixed;z-index:9999;box-sizing:border-box;padding:7px 12px;min-height:26px;white-space:nowrap;overflow:hidden;outline:none;background:var(--ls-tertiary-background-color,rgba(74,144,217,.06));color:var(--ls-primary-text-color,#333);border-bottom:1px solid var(--ls-border-color,rgba(128,128,128,.2));box-shadow:inset 0 0 0 2px var(--mg-accent,#4a90d9);border-radius:2px}
.mg-rindh{position:fixed;z-index:7;height:3px;background:var(--mg-accent,#4a90d9);border-radius:2px;pointer-events:none;display:none}
.mg-cindh{position:fixed;z-index:7;width:3px;background:var(--mg-accent,#4a90d9);border-radius:2px;pointer-events:none;display:none}
td[contenteditable="true"]{outline:2px solid var(--mg-accent,#4a90d9)!important;background:var(--ls-tertiary-background-color,rgba(74,144,217,.06))!important}
`;
}
function td() { return (typeof top !== 'undefined' && top.document) ? top.document : document; }
function toast(m) { try { logseq.App.showMsg(m); } catch (e) {} }
function escRe(s) { return String(s == null ? '' : s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function mkBtn(label, fn) { var b = td().createElement('button'); b.className = 'mg-btn'; b.textContent = label; b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); fn(); }); return b; }
function blockUuidFrom(el) { var n = el; while (n) { if (n.getAttribute) { var b = n.getAttribute('blockid') || n.getAttribute('data-block-id') || n.getAttribute('data-block-uuid') || (n.dataset && (n.dataset.blockId || n.dataset.blockUuid)); if (b) return String(b); } n = n.parentElement; } return ''; }
function normSrc(s) {
  s = (s || '').trim();
  var m = s.match(/^([^:/?#]+:\/\/[^?#]+)/i);
  if (m && !/^assets:/i.test(s)) return m[1].toLowerCase();
  var n = s.replace(/^assets:\/\/.*?\/assets\//i, 'assets/').replace(/^[.\/\\]+/, '');
  if (n.toLowerCase().indexOf('assets/') !== 0) n = 'assets/' + n;
  try { n = decodeURIComponent(n); } catch (e) {}
  return n.replace(/[?#].*$/, '').toLowerCase();
}
function ytId(url) {
  if (!url) return '';
  var s = String(url).trim();
  var m = /(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i.exec(s);
  return m ? m[1] : '';
}
function ytUrl(url) { var id = ytId(url); return id ? ('https://youtu.be/' + id) : ''; }
async function getBlock(u) { try { return await logseq.Editor.getBlock(u); } catch (e) { return null; } }
async function upd(u, c) { try { await logseq.Editor.updateBlock(u, c); } catch (e) { console.error('[mg] upd', e); } }
async function rm(u) { try { await logseq.Editor.removeBlock(u); } catch (e) {} }
function parseMgm(v) { var o = { pos: false, size: false, c: null, r: null, ar: false, z: null, cx: null, cy: null, ox: null, oy: null, grp: null }; (v || '').split(',').forEach(function (t) { t = t.trim().toLowerCase(); if (t === 'pos') o.pos = true; else if (t === 'size') o.size = true; else if (t === 'ar') o.ar = true; else if (t.indexOf('grp') === 0) { var gv = t.substring(3); if (gv) o.grp = gv; } else if (t.indexOf('z') === 0) { var zz = parseInt(t.substring(1), 10); if (!isNaN(zz)) o.z = zz; } else if (t.indexOf('ox') === 0) { var on = parseInt(t.substring(2), 10); if (!isNaN(on)) o.ox = on; } else if (t.indexOf('oy') === 0) { var yn2 = parseInt(t.substring(2), 10); if (!isNaN(yn2)) o.oy = yn2; } else if (t.indexOf('cx') === 0) { var xn = parseInt(t.substring(2), 10); if (!isNaN(xn)) o.cx = xn; } else if (t.indexOf('cy') === 0) { var yn = parseInt(t.substring(2), 10); if (!isNaN(yn)) o.cy = yn; } else if (t.indexOf('c') === 0) { var cn = parseInt(t.substring(1), 10); if (!isNaN(cn)) o.c = cn; } else if (t.indexOf('r') === 0) { var rn = parseInt(t.substring(1), 10); if (!isNaN(rn)) o.r = rn; } }); return o; }
function serMgm(o) { var p = []; if (o.pos) p.push('pos'); if (o.size) p.push('size'); if (o.ar) p.push('ar'); if (o.z != null && !isNaN(o.z)) p.push('z' + o.z); if (o.cx != null && !isNaN(o.cx)) p.push('cx' + o.cx); if (o.cy != null && !isNaN(o.cy)) p.push('cy' + o.cy); if (o.ox != null && !isNaN(o.ox)) p.push('ox' + o.ox); if (o.oy != null && !isNaN(o.oy)) p.push('oy' + o.oy); if (o.c != null && !isNaN(o.c)) p.push('c' + o.c); if (o.r != null && !isNaN(o.r)) p.push('r' + o.r); if (o.grp) p.push('grp' + o.grp); return p.join(','); }
function refsAll(c) {
  var re = /!\[(.*?)\]\(([^)()]*(?:\([^)]*\)[^)()]*)*)\)(\{:[^}]*\})?(?:\s*<!--\s*mg:([a-zA-Z0-9,%.]*)\s*-->)?|\[([^\]]*)\]\(([^)]+\.(?:pdf|xlsx|xlsm|xls|csv)(?:[?#][^)]*)?)\)(\{:[^}]*\})?(?:\s*<!--\s*mg:([a-zA-Z0-9,%.]*)\s*-->)?|\[([^\]]*)\]\((https?:\/\/(?:(?:www|m)\.)?(?:youtube\.com|youtu\.be)\/[^)]*)\)(\{:[^}]*\})?(?:\s*<!--\s*mg:([a-zA-Z0-9,%.]*)\s*-->)?|\{\{video\s+(https?:\/\/(?:(?:www|m)\.)?(?:youtube\.com|youtu\.be)\/[^}\s]*)\s*\}\}|(https?:\/\/[^\s)<>]+\.(?:png|jpe?g|gif|webp|svg|avif|bmp)(?:[?#][^\s)<>]*)?)(?:\s*<!--\s*mg:([a-zA-Z0-9,%.]*)\s*-->)?|\[([^\]]*)\]\(([^)]+\.(?:mp4|webm|ogv|m4v|mov)(?:[?#][^)]*)?)\)(\{:[^}]*\})?(?:\s*<!--\s*mg:([a-zA-Z0-9,%.]*)\s*-->)?|\[([^\]]*)\]\((?!https?:\/\/)([^)]+\.(?:png|jpe?g|gif|webp|svg|avif|bmp)(?:[?#][^)]*)?)\)(\{:[^}]*\})?(?:\s*<!--\s*mg:([a-zA-Z0-9,%.]*)\s*-->)?/gi;
  var mm, i = 0, out = [];
  while ((mm = re.exec(c || '')) !== null) {
    if (mm[1] !== undefined) out.push({ exact: mm[0], md: mm[0], pdfLink: false, yt: false, bare: false, alt: mm[1], src: mm[2], attrs: mm[3] || '', mgm: parseMgm(mm[4]), idx: i++ });
    else if (mm[5] !== undefined) out.push({ exact: mm[0], md: mm[0], pdfLink: true, yt: false, bare: false, alt: mm[5], src: mm[6], attrs: mm[7] || '', mgm: parseMgm(mm[8]), idx: i++ });
    else if (mm[9] !== undefined) out.push({ exact: mm[0], md: mm[0], pdfLink: false, yt: true, bare: false, alt: mm[9], src: ytUrl(mm[10]) || mm[10], attrs: mm[11] || '', mgm: parseMgm(mm[12]), idx: i++ });
    else if (mm[13] !== undefined) out.push({ exact: mm[0], md: mm[0], pdfLink: false, yt: true, bare: false, alt: 'YouTube', src: ytUrl(mm[13]) || mm[13], attrs: '', mgm: {}, idx: i++, videoMacro: true });
    else if (mm[14] !== undefined) out.push({ exact: mm[0], md: mm[0], pdfLink: false, yt: false, bare: true, alt: '', src: mm[14], attrs: '', mgm: parseMgm(mm[15]), idx: i++ });
    else if (mm[16] !== undefined) out.push({ exact: mm[0], md: mm[0], pdfLink: true, yt: false, bare: false, video: true, alt: mm[16], src: mm[17], attrs: mm[18] || '', mgm: parseMgm(mm[19]), idx: i++ });
    else if (mm[20] !== undefined) out.push({ exact: mm[0], md: mm[0], pdfLink: false, yt: false, bare: false, alt: mm[20], src: mm[21], attrs: mm[22] || '', mgm: parseMgm(mm[23]), idx: i++ });
  }
  var bareYtRe = /(https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)[A-Za-z0-9_-]{6,}[^\s]*)/gi;
  var bm;
  while ((bm = bareYtRe.exec(c || '')) !== null) {
    var already = out.some(function (r) { return r.exact.indexOf(bm[1]) >= 0; });
    if (!already) out.push({ exact: bm[0], md: bm[0], pdfLink: false, yt: true, bare: true, alt: '', src: ytUrl(bm[1]) || bm[1], attrs: '', mgm: {}, idx: i++ });
  }
  return out;
}
function refsRewrite(c, fn) {
  var rs = refsAll(c), out = c || '';
  rs.forEach(function (r) {
    var nr = fn(r);
    if (nr === false || nr == null) return;
    var sv = serMgm(nr.mgm || {});
    var seg;
    if (nr.bare) seg = nr.src + (sv ? ' <!-- mg:' + sv + ' -->' : '');
    else if (nr.pdfLink || nr.yt) seg = '[' + nr.alt + '](' + nr.src + ')' + (nr.attrs || '') + (sv ? ' <!-- mg:' + sv + ' -->' : '');
    else seg = '![' + nr.alt + '](' + nr.src + ')' + (nr.attrs || '') + (sv ? ' <!-- mg:' + sv + ' -->' : '');
    out = out.replace(r.exact, function () { return seg; });
  });
  var after = refsAll(out);
  var keep = after.map(function (r) { return r.exact; });
  out = out.replace(/\s*<!--\s*mg:[a-zA-Z0-9,%.]*\s*-->/g, function (m) {
    for (var i = 0; i < keep.length; i++) { if (keep[i].indexOf(m.trim()) >= 0) return m; }
    return '';
  });
  return out;
}
function findRef(c, dom) { var nn = normSrc(dom), rs = refsAll(c); for (var i = 0; i < rs.length; i++) { if (normSrc(rs[i].src) === nn) return rs[i]; } return null; }
function findRefs(c) { return refsAll(c); }
function parseImgAttrs(attrs) { var h = null, w = null; if (attrs) { var hm = /height\s+(\d+)/.exec(attrs), wm = /width\s+(\d+)/.exec(attrs); if (hm) h = +hm[1]; if (wm) w = +wm[1]; } return { h: h, w: w }; }
function getProp(c, key) { var m = new RegExp('<!--\\s*' + escRe(key) + ':\\s*([^>]*)-->', 'i').exec(c || ''); return m ? m[1].trim() : null; }
function setPropStr(c, key, val) {
  var kre = new RegExp('\\s*<!--\\s*' + escRe(key) + ':\\s*[^>]*-->', 'gi');
  var out = (c || '').replace(kre, '').replace(/\s+$/, '');
  if (val === null || val === false || val === '') return out;
  return out + '\n<!-- ' + key + ':' + val + ' -->';
}
function writeBlock(uuid, fn) {
  var prev = MG.chains[uuid] || Promise.resolve();
  var nx = prev.then(function () {
    return getBlock(uuid).then(function (b) {
      if (!b) return;
      var nc = fn(b.content || '');
      if (nc != null && nc !== b.content) return upd(uuid, nc);
    });
  }).catch(function (e) { console.error('[mg] writeBlock', e); });
  nx.then(function () { if (MG.chains[uuid] === nx) delete MG.chains[uuid]; });
  MG.chains[uuid] = nx;
  return nx;
}
function parseLock(v) { v = (v || '').trim().toLowerCase(); if (v === 'block') return { block: true, pos: false, size: false }; return { block: false, pos: v.indexOf('pos') >= 0, size: v.indexOf('size') >= 0 }; }
function nextGroupId(content, kindExt) {
  var used = {}; var refs = refsAll(content || '');
  refs.forEach(function (r) { if (r.mgm && r.mgm.grp) used[r.mgm.grp] = 1; });
  if (content && getProp(content, 'mg-' + kindExt)) used['_legacy'] = 1;
  var n = 1; while (used['g' + n]) n++; return 'g' + n;
}
function applyLockAttr(st) { if (st.lockBlock) st.el.setAttribute('data-mg-lblock', '1'); else st.el.removeAttribute('data-mg-lblock'); if (st.lockPos) st.el.setAttribute('data-mg-lpos', '1'); else st.el.removeAttribute('data-mg-lpos'); if (st.lockSize) st.el.setAttribute('data-mg-lsize', '1'); else st.el.removeAttribute('data-mg-lsize'); if (st.el) { st.el.classList.add('mg-locking'); setTimeout(function () { st.el.classList.remove('mg-locking'); }, 300); } }
function setImageState(st, mutate) {
  writeBlock(st.uuid, function (c) {
    return refsRewrite(c, function (r) { if (normSrc(r.src) !== normSrc(st.src)) return null; r.mgm = mutate(Object.assign({}, r.mgm)); return r; });
  }).then(function () {
    var cs = td().querySelectorAll('.mg-canvas');
    for (var i = 0; i < cs.length; i++) { if (cs[i].dataset.uuid === st.uuid) cs[i].removeAttribute('data-sig'); }
    schedScan();
  });
}
function setImageLock(st, pos, size) { setImageState(st, function (o) { o.pos = pos; o.size = size; return o; }); }
function unsetImageLock(st) { setImageState(st, function (o) { o.pos = false; o.size = false; return o; }); }
function lockMenuItems(st, arr, each) {
  if (arr && arr.length > 1) {
    return [
      [t('pos_lock'), function () { each(function (c) { setImageLock(c, true, c.lockSize); }); }],
      [t('size_lock'), function () { each(function (c) { setImageLock(c, c.lockPos, true); }); }],
      [t('lock_all'), function () { each(function (c) { setImageLock(c, true, true); }); }],
      [t('unlock_all'), function () { each(unsetImageLock); }]
    ];
  }
  var items = [];
  if (st.lockPos && st.lockSize) { items.push([t('unlock_all'), function () { unsetImageLock(st); }]); }
  else if (st.lockPos) { items.push([t('pos_unlock'), function () { setImageLock(st, false, st.lockSize); }]); items.push([t('size_lock'), function () { setImageLock(st, true, true); }]); }
  else if (st.lockSize) { items.push([t('size_unlock'), function () { setImageLock(st, st.lockPos, false); }]); items.push([t('pos_lock'), function () { setImageLock(st, true, st.lockSize); }]); }
  else { items.push([t('pos_lock'), function () { setImageLock(st, true, false); }]); items.push([t('size_lock'), function () { setImageLock(st, false, true); }]); items.push([t('lock_all'), function () { setImageLock(st, true, true); }]); }
  return items;
}
function skipImg(im) {
  if (im.closest('.mg-canvas')) return true;
  if (im.matches('.emoji,[class*=emoji],[class*=icon],[class*=avatar]')) return true;
  if (im.closest('.left-sidebar,.cp__header,.breadcrumbs,.page-tags,.block-meta,.references,.sidebar')) return true;
  if (im.closest('table')) return true;
  if (im.complete && im.naturalWidth && im.naturalWidth < 24) return true;
  if (im.clientWidth && im.clientWidth < 32) return true;
  return false;
}
function collectImgs(blk) {
  var out = [];
  blk.querySelectorAll('img').forEach(function (im) {
    var owner = im.closest('.ls-block');
    if (owner !== blk) return;
    if (!skipImg(im)) out.push(im);
  });
  return out;
}
function collectMedia(blk) {
  var out = [];
  blk.querySelectorAll('img, video, a.asset-ref.is-pdf, a[data-url$=".pdf"], a[data-href$=".pdf"], a[href$=".pdf"], a[data-url$=".xlsx"], a[data-href$=".xlsx"], a[href$=".xlsx"], a[href$=".xlsm"], a[href$=".xls"], a[href$=".csv"], a[data-url$=".csv"], a[data-href$=".csv"], a.asset-ref, a[href$=".avif"], a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".webp"], a[href$=".svg"], a[href$=".bmp"], a[href$=".mp4"], a[href$=".webm"], a[href$=".ogv"], a[href$=".m4v"], a[href$=".mov"], a[data-href$=".mp4"], a[data-href$=".webm"], a[data-href$=".ogv"], a[data-href$=".m4v"], a[data-href$=".mov"], a[href*="youtube.com/"], a[href*="youtu.be/"], iframe[src*="youtube.com/embed/"], iframe[src*="youtube-nocookie.com/embed/"]').forEach(function (el) {
    var owner = el.closest('.ls-block');
    if (owner !== blk) return;
    if (el.closest('.mg-canvas')) return;
    if (el.classList && el.classList.contains('mg-img')) return;
    if (el.tagName === 'IFRAME') { if (ytId(el.getAttribute('src') || '')) out.push({ el: el, kind: 'yt', _src: ytUrl(el.getAttribute('src')) }); return; }
    if (el.tagName === 'IMG') { if (/\.pdf($|[?#])/i.test(el.currentSrc || el.src || '')) out.push({ el: el, kind: 'pdf', _alt: (el.textContent || '').trim() }); else if (videoSrcOf(el)) out.push({ el: el, kind: 'video', _src: videoSrcOf(el), _alt: (el.textContent || '').trim() }); else if (!skipImg(el)) out.push({ el: el, kind: 'img' }); }
    else if (el.tagName === 'VIDEO') { if (videoSrcOf(el)) out.push({ el: el, kind: 'video', _src: videoSrcOf(el), _alt: (el.textContent || '').trim() }); }
    else if (pdfSrcOf(el)) out.push({ el: el, kind: 'pdf', _alt: (el.textContent || '').trim() });
    else if (ytId(el.getAttribute('href') || el.getAttribute('data-url') || el.getAttribute('data-href'))) out.push({ el: el, kind: 'yt' });
    else if (videoSrcOf(el)) out.push({ el: el, kind: 'video', _src: videoSrcOf(el), _alt: (el.textContent || '').trim() });
    else if (imgSrcOf(el)) out.push({ el: el, kind: 'img', _src: imgSrcOf(el), _alt: (el.textContent || '').trim() });
    else { if (!sheetSrcOf(el)) return; out.push({ el: el, kind: 'sheet' }); }
  });
  return out;
}
function pdfSrcOf(el) {
  var s = el.getAttribute('data-url') || el.getAttribute('data-href') || el.getAttribute('href') || '';
  if (!s && el.tagName === 'IMG') s = el.currentSrc || el.src || '';
  return (s && /\.pdf($|[?#])/i.test(s)) ? s : '';
}
function sheetSrcOf(el) {
  var s = el.getAttribute('data-url') || el.getAttribute('data-href') || el.getAttribute('href') || '';
  if (!s && el.tagName === 'IMG') s = el.currentSrc || el.src || '';
  return (s && SHEET_EXT.test(s)) ? s : '';
}
function imgSrcOf(el) {
  var s = el.getAttribute('data-url') || el.getAttribute('data-href') || el.getAttribute('href') || '';
  if (!s && el.tagName === 'IMG') s = el.currentSrc || el.src || '';
  return (s && !/^https?:/i.test(s) && /\.(png|jpe?g|gif|webp|svg|avif|bmp)($|[?#])/i.test(s)) ? s : '';
}
function videoSrcOf(el) {
  var s = el.getAttribute('data-url') || el.getAttribute('data-href') || el.getAttribute('href') || '';
  if (!s && el.tagName === 'IMG') s = el.currentSrc || el.src || '';
  if (!s && el.tagName === 'VIDEO') s = el.currentSrc || el.src || el.getAttribute('src') || '';
  return (s && VIDEO_EXT.test(s)) ? s : '';
}
async function getGraphPath() { if (MG.graphPath) return MG.graphPath; try { var g = await logseq.App.getCurrentGraph(); if (g && g.path) MG.graphPath = g.path; } catch (e) {} return MG.graphPath; }
function unlinkFile(vp, path) { try { if (top.apis && top.apis.doAction) { top.apis.doAction(['unlink', vp, path]); return true; } } catch (e) { console.error('[mg] unlink:', e.message || e); } return false; }
function showInFinder(full) {
  try { if (top.apis && top.apis.doAction) { top.apis.doAction(['openFileInFolder', full]); return; } } catch (e) { console.error('[mg] finder apis.doAction:', e.message || e); }
  try { if (logseq && logseq.App && typeof logseq.App.invokeExternalCommand === 'function') { logseq.App.invokeExternalCommand('logseq.editor/open-file-in-directory', full); return; } } catch (e) { console.error('[mg] finder invokeExternalCommand:', e.message || e); }
  try { if (top.require) { var sh = top.require('@electron/remote').shell; if (sh && sh.showItemInFolder) { sh.showItemInFolder(full); return; } } } catch (e) { console.error('[mg] finder electron remote:', e.message || e); }
  try { top.require('child_process').execFile('open', ['-R', String(full)]); return; } catch (e) { console.error('[mg] finder open -R:', e.message || e); }
  try { navigator.clipboard.writeText(full); } catch (e) {}
  toast(t('path_copied') + full);
}
async function finderFromCard(st) {
  var s = st.url || st.src || '';
  if (/^(https?:|data:)/i.test(s)) { toast(t('ext_image')); return; }
  var fn = assetFnFrom(st);
  if (!fn) { toast(t('ext_image')); return; }
  showInFinder((await getGraphPath()) + '/assets/' + fn);
}
function assetFnFrom(st) {
  var s = (st && (st.url || st.src)) || '';
  var fn = cardBaseName(s);
  if (fn && /^assets:\/\//i.test(fn)) fn = fn.split('/').pop();
  return fn || '';
}
// Logseq-OG asset naming: replace space/%// only, collapse runs of "_".
function lsSanitize(s) { return String(s == null ? '' : s).replace(/ /g, '_').replace(/%/g, '_').replace(/\//g, '_').replace(/_+/g, '_'); }
function lsAssetName(stem, ts, i, ext) { return lsSanitize(stem || 'image') + '_' + ts + '_' + i + ext; }
function readFileAs(f, du) { return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(r.result); }; r.onerror = function () { rej(r.error); }; if (du) r.readAsDataURL(f); else r.readAsArrayBuffer(f); }); }
function mimeOf(name) { var e = (name.split('.').pop() || '').toLowerCase(); return e === 'png' ? 'image/png' : (e === 'jpg' || e === 'jpeg') ? 'image/jpeg' : e === 'webp' ? 'image/webp' : e === 'gif' ? 'image/gif' : e === 'pdf' ? 'application/pdf' : e === 'mp4' ? 'video/mp4' : e === 'webm' ? 'video/webm' : e === 'ogv' ? 'video/ogg' : e === 'm4v' ? 'video/x-m4v' : e === 'mov' ? 'video/quicktime' : 'application/octet-stream'; }
function bytesToBlob(bytes, name) { return new Blob([bytes], { type: mimeOf(name) }); }
async function readAssetBytes(name) {
  var dir = (await getGraphPath() || MG.graphPath || '').replace(/[\/\\]+$/, '');
  if (!dir || !name) return null;
  var fs = acquireFs();
  if (fs) { try { return new Uint8Array(fs.readFileSync(dir + '/assets/' + name)); } catch (e) {} }
  return await pdfFetchBytes('file://' + (dir + '/assets/' + name).split('/').map(encodeURIComponent).join('/'));
}
function loadImg(url) { return new Promise(function (res, rej) { var im = new Image(); im.onload = function () { res(im); }; im.onerror = function (e) { rej(e); }; im.src = url; }); }
function cardBaseName(s) { var b = String(s == null ? '' : s).replace(/[?#].*$/, '').replace(/\\/g, '/'); b = b.substring(b.lastIndexOf('/') + 1); try { b = decodeURIComponent(b); } catch (e) {} return b; }
function popMark(name) { if (!name) return; MG.pop = MG.pop || {}; MG.pop[name] = 1; }
function applyPop(card) {
  if (!MG.pop || !card || !card.el) return;
  var base = cardBaseName(card.url || card.src || '');
  var src = String(card.src || '') + ' ' + String(card.url || '');
  for (var k in MG.pop) {
    if (base.indexOf(k) >= 0 || src.indexOf(k) >= 0) {
      delete MG.pop[k];
      card.el.classList.add('mg-pop');
      setTimeout(function () { card.el.classList.remove('mg-pop'); }, 500);
      return;
    }
  }
}
function acquireFs() {
  function att(fn, tag) { try { var r = fn(); if (r && r.writeFileSync) return r; } catch (e) { console.error('[mg] fs acq ' + tag + ':', e.message || e); } return null; }
  return att(function () { return top.require('fs'); }, 'top.fs')
    || att(function () { var em = top.require('electron'); return em && em.remote && em.remote.require('fs'); }, 'electron.remote.fs')
    || att(function () { return top.process && top.process.mainModule && top.process.mainModule.require('fs'); }, 'mainModule.fs')
    || att(function () { return top.eval("require('fs')"); }, 'eval.fs')
    || att(function () { return top.remote && top.remote.require('fs'); }, 'top.remote.fs');
}
function hostInvoke(chan, argsArr) {
  var ap = null;
  try { ap = (typeof top !== 'undefined' && top.apis) || window.apis; } catch (e) {}
  if (!ap) throw new Error('no window.apis in this frame');
  // Primary: single 'main'-channel multiplexer doAction([verb, ...args]).
  if (typeof ap.doAction === 'function') return ap.doAction([chan].concat(argsArr));
  // Secondary: generic invoke(channel, args[]) splat (older shims).
  if (typeof ap.invoke === 'function') return ap.invoke(chan, argsArr);
  throw new Error('apis has neither doAction nor invoke');
}
async function saveAsset(filename, file) {
  var lastErr = '';
  // Real bytes up-front: clipboard File handles can die after the event tick.
  var bytes = null;
  try { bytes = new Uint8Array(await readFileAs(file, false)); } catch (e) { lastErr = 'read:' + (e.message || e); console.error('[mg] read bytes:', e.message || e); }
  var ab = bytes ? bytes.buffer : null;
  // Videos: skip the DataURL-based Editor/Assets paths (base64 of a large clip is huge/slow) — go straight to the byte write.
  var isVid = VIDEO_EXT.test(filename || '');
  if (!isVid) {
    try { if (logseq.Editor.saveAsset) { await logseq.Editor.saveAsset(filename, await readFileAs(file, true)); return true; } } catch (e) { console.error('[mg] saveAsset attempt Editor.saveAsset:', e.message || e); }
    try { if (logseq.Assets && logseq.Assets.saveFile) { await logseq.Assets.saveFile(filename, await readFileAs(file, true)); return true; } } catch (e) { console.error('[mg] saveAsset attempt Assets.saveFile:', e.message || e); }
  }
  try {
    var g = await logseq.App.getCurrentGraph(); if (!g || !g.path) throw new Error('no graph');
    var dir = g.path.replace(/[\/\\]+$/, '') + '/assets';
    if (ab) {
      // Verified host channels: mkdir-recur + writeFile (accepts ArrayBuffer).
      try { await hostInvoke('mkdir-recur', [dir]); } catch (e1) { console.error('[mg] mkdir-recur err:', (e1 && (e1.message || e1)) || e1); }
      try {
        await hostInvoke('writeFile', [g.path, dir + '/' + filename, ab]);
        return true;
      } catch (e2) { lastErr = 'writeFile:' + ((e2 && (e2.message || e2)) || e2); console.error(lastErr); }
    } else if (!lastErr) lastErr = 'empty file';
  } catch (e) { lastErr = 'ipc:' + (e.message || e); console.error('[mg] saveAsset attempt ipc writeFile:', e.message || e); }
  try {
    var g2 = await logseq.App.getCurrentGraph(); if (!g2 || !g2.path) throw new Error('no graph');
    var fs = acquireFs(), pm = top.require('path');
    if (!fs) throw new Error('fs unavailable');
    var dir2 = pm.join(g2.path, 'assets');
    if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });
    fs.writeFileSync(pm.join(dir2, filename), bytes || new Uint8Array(await readFileAs(file, false)));
    return true;
  } catch (e) { lastErr = 'fs:' + (e.message || e); console.error('[mg] saveAsset attempt fs-write:', e.message || e); }
  saveAsset.lastErr = lastErr;
  return false;
}
saveAsset.lastErr = '';
function insertImgMd(c, md) {
  var lines = (c || '').split('\n'), lastImg = -1, firstProp = lines.length;
  for (var i = 0; i < lines.length; i++) { if (/!\[[^\]]*\]\([^)]+\)/.test(lines[i])) lastImg = i; if (firstProp === lines.length && /^\s*[a-zA-Z][\w-]*::\s*/.test(lines[i])) firstProp = i; }
  if (lastImg >= 0) { lines[lastImg] = lines[lastImg].replace(/\s+$/, '') + ' ' + md; return lines.join('\n'); }
  var head = lines.slice(0, firstProp), tail = lines.slice(firstProp);
  if (head.length) head[head.length - 1] = head[head.length - 1].replace(/\s+$/, '') + ' ' + md; else head = [md];
  return head.concat(tail).join('\n');
}
function appendInlineMd(uuid, md) {
  var prev = MG.chains[uuid] || Promise.resolve();
  var nx = prev.then(function () {
    return getBlock(uuid).then(function (b) {
      if (!b) return;
      if ((b.content || '').trim()) { var nc = insertImgMd(b.content || '', md); if (nc !== b.content) return upd(uuid, nc); return; }
      return new Promise(function (r) { setTimeout(r, 80); }).then(function () { return getBlock(uuid); }).then(function (b2) {
        b = (b2 && (b2.content || '').trim()) ? b2 : b;
        var nc = insertImgMd(b.content || '', md); if (nc !== b.content) return upd(uuid, nc);
      });
    });
  }).catch(function (e) { console.error('[mg] appendInlineMd', e); });
  nx.then(function () { if (MG.chains[uuid] === nx) delete MG.chains[uuid]; });
  MG.chains[uuid] = nx;
  return nx;
}
function hasFiles(dt) { if (!dt || !dt.types) return false; for (var i = 0; i < dt.types.length; i++) if (dt.types[i] === 'Files') return true; return false; }
function isEditing() { try { var ed = logseq.Editor.checkEditor && logseq.Editor.checkEditor(); if (ed && ed.uuid) return true; } catch (e) {} var ae = td().activeElement; return !!ae && (ae.tagName === 'TEXTAREA' || ae.tagName === 'INPUT' || ae.isContentEditable); }
function focusBlockUuid() { var ae = td().activeElement; if (ae) { var b = blockUuidFrom(ae); if (b) return b; } var fb = td().querySelector('.ls-block[blockid],[data-block-id],.ls-block'); return fb ? blockUuidFrom(fb) : ''; }
async function toPng(file) {
  if (!file) return file;
  var isWebp = /webp/i.test(file.type || '') || /\.webp$/i.test(file.name || '');
  if (!isWebp) return file;
  var url = URL.createObjectURL(file);
  try {
    var img = await loadImg(url);
    var cnv = td().createElement('canvas'); cnv.width = img.naturalWidth || 1; cnv.height = img.naturalHeight || 1;
    cnv.getContext('2d').drawImage(img, 0, 0);
    var blob = await new Promise(function (res) { cnv.toBlob(res, 'image/png'); });
    if (!blob) return file;
    var base = (file.name || 'image').replace(/\.[^.]+$/, '');
    return new File([blob], base + '.png', { type: 'image/png' });
  } catch (e) { return file; } finally { URL.revokeObjectURL(url); }
}
async function ingestInto(uuid, files) {
  if (!uuid) { toast(t('no_block')); return; }
  var added = 0;
  for (var i = 0; i < files.length; i++) {
    var f = files[i];
    var isImg = !!(f.type && f.type.indexOf('image/') === 0) || /\.(png|jpe?g|gif|webp|bmp|avif)$/i.test(f.name || '');
    var isPdf = f.type === 'application/pdf';
    var isSheet = SHEET_EXT.test(f.name || '') || /\.csv$/i.test(f.name || '') || !!(f.type && (f.type.indexOf('spreadsheet') >= 0 || f.type.indexOf('excel') >= 0));
    var isVideo = !!(f.type && f.type.indexOf('video/') === 0) || VIDEO_EXT.test(f.name || '');
    if (!isImg && !isPdf && !isSheet && !isVideo) continue;
    if (isVideo) {
      var vfn = (f.name && String(f.name).trim()) ? String(f.name) : 'video.mp4';
      var vm = /\.([a-z0-9]+)$/i.exec(vfn), vext = vm ? ('.' + vm[1].toLowerCase()) : '.mp4';
      var vstem = vfn.replace(/\.[^.]+$/, '');
      var vnm = lsAssetName(vstem, Date.now(), i, vext);
      if (!(await saveAsset(vnm, f))) { toast(t('save_failed') + vnm + ' [' + saveAsset.lastErr + ']'); continue; }
      popMark(vnm);
      await appendInlineMd(uuid, '[' + lsSanitize(vstem) + '](../assets/' + vnm + ')');
      added++;
      continue;
    }
    if (isImg) { try { f = await toPng(f); } catch (e) {} }
    var fnex = /\.([a-z0-9]+)$/i.exec(f.name || '');
    var ext = fnex ? ('.' + fnex[1].toLowerCase()) : ('.' + ((f.type || '').split('/')[1] || 'png').replace('svg+xml', 'svg').replace('jpeg', 'jpg'));
    if (ext === '.jpeg') ext = '.jpg';
    var stem = (f.name && String(f.name).trim()) ? String(f.name).replace(/\.[^.]+$/, '') : 'image';
    var nm = lsAssetName(stem, Date.now(), i, ext);
    if (!(await saveAsset(nm, f))) { toast(t('save_failed') + nm + ' [' + saveAsset.lastErr + ']'); continue; }
    popMark(nm);
    if (isSheet) await appendInlineMd(uuid, '[' + lsSanitize(stem) + '](../assets/' + nm + ')');
    else await appendInlineMd(uuid, '![' + lsSanitize(stem) + '](../assets/' + nm + ')');
    added++;
  }
  if (added) schedScan();
}
function tblEditCtx(node) {
  var n = node;
  while (n) {
    if (n.classList && n.classList.contains('mg-tbo-edit')) return n;
    n = n.parentElement;
  }
  return null;
}
async function onPaste(e) {
  var cd = e.clipboardData; if (!cd) return;
  var files = [], htmlTxt = '', plainTxt = '';
  if (cd.items) for (var i = 0; i < cd.items.length; i++) {
    var it = cd.items[i];
    if (it.kind === 'file') { var f = it.getAsFile(); if (f && f.type && (f.type.indexOf('image/') === 0 || f.type === 'application/pdf' || f.type.indexOf('video/') === 0)) files.push(f); }
    else if (it.kind === 'string') { if (it.type === 'text/html') htmlTxt = cd.getData('text/html') || ''; else if (it.type === 'text/plain') plainTxt = cd.getData('text/plain') || ''; }
  }
  if (!htmlTxt) htmlTxt = (cd.getData && cd.getData('text/html')) || '';
  if (!plainTxt) plainTxt = (cd.getData && cd.getData('text/plain')) || '';
  // Paste into a Sheet-Card cell -> Bereich ab aktiver Zelle füllen (Excel-UX), keine neue Card.
  var sheetEl = e.target && e.target.closest ? e.target.closest('.mg-sheet') : null;
  if (sheetEl && sheetEl._mgSt && !files.length) {
    var mS = clipboardToMatrix(htmlTxt, plainTxt) || plainToMatrix(plainTxt);
    if (mS && (mS.length > 1 || (mS[0] && mS[0].length > 1))) {
      e.preventDefault(); e.stopImmediatePropagation();
      var sst = sheetEl._mgSt, aeS = td().activeElement;
      var rcS = (aeS && aeS.dataset && aeS.dataset.addr) ? cellRC(aeS) : ((sst.sheet && sst.sheet.anchor) || null);
      if (!rcS && MG.xlsx) { var wsrS = sheetWS(sst); if (wsrS) { var rrS = MG.xlsx.utils.decode_range(wsrS['!ref'] || 'A1'); rcS = { r: rrS.s.r, c: rrS.s.c }; } }
      if (rcS) sheetPasteMatrix(sst, mS, rcS.r, rcS.c);
    }
    return;
  }
  var tc = tblEditCtx(e.target);
  if (tc) {
    // Paste landed inside a Multigrid-managed table cell editor.
    if (!files.length) return; // plain text: let native contentEditable paste handle it
    e.preventDefault(); e.stopPropagation();
    var inf = tc._mgInf;
    var mdParts = [];
    for (var fi = 0; fi < files.length; fi++) {
      var ff = files[fi];
      var ext2 = '.' + (ff.type.split('/')[1] || 'png').replace('svg+xml', 'svg').replace('jpeg', 'jpg');
      var stem2 = (ff.name && String(ff.name).trim()) ? String(ff.name).replace(/\.[^.]+$/, '') : 'image';
      var nm2 = lsAssetName(stem2, Date.now(), fi, ext2);
      if (!(await saveAsset(nm2, ff))) { toast(t('save_failed') + nm2 + ' [' + saveAsset.lastErr + ']'); continue; }
      mdParts.push('![' + lsSanitize(stem2) + '](../assets/' + nm2 + ')');
    }
    if (mdParts.length) {
      var cur = tc.textContent.replace(/\s+/g, ' ').trim().replace(/\\\|/g, '|');
      var md = mdParts.join(' ');
      var finalRaw = (cur ? cur + ' ' : '') + md;
      // Rewrite the edited cell to embed the asset reference inline, routed
      // through the owning overlay so its edit-state gets settled properly.
      var owner = null;
      MG.tbls.forEach(function (o, tt) { if (!owner && o.uuid === inf.uuid && tt.isConnected && !o.dead) owner = o; });
      if (owner && owner.finishCell) {
        var ok = await owner.finishCell(tc, finalRaw);
        if (!ok) {
          await writeBlock(inf.uuid, function (c) {
            var pp = parseMdTable(c);
            if (!pp) return null;
            tblPutCell(pp, inf.ri, inf.ci, finalRaw, inf.isHead === true);
            return tblPatchContent(c, pp, pp.header, pp.rows);
          });
        }
      } else {
        await writeBlock(inf.uuid, function (c) {
          var pp = parseMdTable(c);
          if (!pp) return null;
          tblPutCell(pp, inf.ri, inf.ci, finalRaw, inf.isHead === true);
          return tblPatchContent(c, pp, pp.header, pp.rows);
        });
      }
      // Sync the visible cell and close the editor so blur cannot commit stale text.
      tc.textContent = finalRaw;
      if (tc.isContentEditable) tc.contentEditable = 'false';
      tc.removeAttribute('contenteditable');
      if (document.activeElement === tc) tc.blur();
      schedScan();
    }
    return;
  }
  // Copied spreadsheet table (HTML <table> or TSV) -> sheet card
  var cvActive = !!MG.cvSel;
  var matrix = clipboardToMatrix(htmlTxt, plainTxt);
  if (matrix && (cvActive || !isEditing())) {
    e.preventDefault();
    var tgtT = MG.sel.size ? Array.from(MG.sel)[0].uuid : (MG.cvSel || focusBlockUuid());
    await pasteTableToSheet(tgtT, matrix);
    return;
  }
  // Copied YouTube URL (text/plain) -> youtube card
  var ytCanon = (!files.length && plainTxt.length < 400) ? ytUrl(plainTxt) : '';
  if (ytCanon && !td().querySelector('.mg-ask')) {
    e.preventDefault(); e.stopImmediatePropagation();
    var tgtY = MG.sel.size ? Array.from(MG.sel)[0].uuid : (MG.cvSel || focusBlockUuid());
    if (!tgtY) tgtY = focusBlockUuid();
    await appendInlineMd(tgtY, '[YouTube](' + ytCanon + ')');
    schedScan();
    return;
  }
  if (!files.length || (!cvActive && isEditing())) return;
  e.preventDefault();
  if (onPaste._busy) return;
  onPaste._busy = true;
  var tgt = MG.sel.size ? Array.from(MG.sel)[0].uuid : (MG.cvSel || focusBlockUuid());
  ingestInto(tgt, files).then(function () { onPaste._busy = false; }, function () { onPaste._busy = false; });
}
function onDragOver(e) {
  if (!e.dataTransfer) return;
  if (hasFiles(e.dataTransfer)) { e.preventDefault(); return; }
  var t = e.dataTransfer.types || [];
  for (var i = 0; i < t.length; i++) { if (t[i] === 'text/uri-list' || t[i] === 'text/html') { e.preventDefault(); return; } }
}
function onDrop(e) {
  if (!e.dataTransfer) return;
  td().querySelectorAll('.mg-emptyzone.mg-dropok').forEach(function (z) { z.classList.remove('mg-dropok'); });
  var elt = td().elementFromPoint(e.clientX, e.clientY);
  var cv = elt ? elt.closest('.mg-canvas') : null;
  var zn = elt ? elt.closest('.mg-emptyzone') : null;
  if (!cv && !zn && isEditing()) return;
  var uuid = '';
  if (cv) uuid = cv.dataset.uuid;
  else if (zn) uuid = zn.dataset.mgMacroUuid;
  else { var lb = elt ? elt.closest('.ls-block') : null; uuid = lb ? blockUuidFrom(lb) : focusBlockUuid(); }
  var files = e.dataTransfer.files;
  if (files && files.length) {
    e.preventDefault(); e.stopPropagation();
    ingestInto(uuid, files);
    return;
  }
  // Browser image drag carries no File item — text/uri-list + <img> HTML.
  var html = '', uri = '';
  try { html = e.dataTransfer.getData('text/html') || ''; } catch (x) {}
  try { uri = e.dataTransfer.getData('text/uri-list') || ''; } catch (x) {}
  if (!/<img[\s>]/i.test(html)) return; // only image drags, not links/text
  var url = '';
  var mu = (uri.split(/\r?\n/)[0] || '').trim();
  if (/^https?:\/\//i.test(mu)) url = mu;
  if (!url) { var mm = html.match(/(?:data-)?src=["'](https?:\/\/[^"']+)["']/i) || html.match(/data-image=["'](https?:\/\/[^"']+)["']/i); url = mm ? mm[1] : ''; }
  if (!url || !/^https?:/i.test(url)) return;
  e.preventDefault(); e.stopPropagation();
  if (!uuid) uuid = MG.cvSel || focusBlockUuid();
  if (!uuid) { toast(t('no_block')); return; }
  downloadRemoteImage(url, uuid);
}
function remoteFilename(url, type) {
  var ext = ('image/' + ((type || 'image/png').split('/')[1] || 'png')).split('/')[1].replace('jpeg', 'jpg').replace('svg+xml', 'svg');
  var base = 'remote';
  try { base = (new URL(url).pathname.split('/').pop() || 'remote').replace(/\.[^.]+$/, ''); } catch (e) {}
  base = lsSanitize(base) || 'remote';
  return base + '.' + ext;
}
async function downloadRemoteImage(url, uuid) {
  try {
    var parsed; try { parsed = new URL(url); } catch (e) { throw new Error('invalid URL'); }
    if (!/^https?:$/.test(parsed.protocol)) throw new Error('non-http URL');
    var resp = await fetch(url, { mode: 'cors', credentials: 'omit' });
    if (!resp.ok) throw new Error('http ' + resp.status);
    var blob = await resp.blob();
    if (!blob || !blob.size || !/^image\//i.test(blob.type || '')) throw new Error('not an image');
    var file = new File([blob], remoteFilename(url, blob.type), { type: blob.type });
    await ingestInto(uuid, [file]);
  } catch (e) {
    console.error('[mg] remote image fetch failed, ignoring:', (e && (e.message || e)) || e);
    toast(t('save_failed') + ((e && e.message) || e));
  }
}
function cbPickFiles(zoneEl, accept) { pickFilesInto(zoneEl.dataset.mgMacroUuid, accept); }
function pickFilesInto(uuid, accept) {
  var inp = td().getElementById('mg-filepick');
  if (!inp) { inp = td().createElement('input'); inp.type = 'file'; inp.multiple = true; inp.id = 'mg-filepick'; inp.style.display = 'none'; td().body.appendChild(inp); }
  inp.accept = accept || 'image/*,application/pdf';
  inp.value = '';
  inp.onchange = function () { if (inp.files && inp.files.length) ingestInto(uuid, inp.files); };
  inp.click();
}
function wireZones() {
  if (MG.zoneWired) return; MG.zoneWired = true;
  var d = td(), nz = function (e) { return e.target.closest ? e.target.closest('.mg-emptyzone') : null; };
  d.addEventListener('click', function (e) {
    var z = nz(e); if (!z) return;
    if (e.target.closest('[data-mg-newimg]')) { e.preventDefault(); e.stopPropagation(); cbPickFiles(z); }
    else if (e.target.closest('[data-mg-newpdf]')) { e.preventDefault(); e.stopPropagation(); cbPickFiles(z, 'application/pdf'); }
    else if (e.target.closest('[data-mg-newvideo]')) { e.preventDefault(); e.stopPropagation(); cbPickFiles(z, VIDEO_ACCEPT); }
    else if (e.target.closest('[data-mg-newsheet]')) { e.preventDefault(); e.stopPropagation(); createSheet(z.dataset.mgMacroUuid); }
    else if (e.target.closest('[data-mg-newyt]')) { e.preventDefault(); e.stopPropagation(); addYoutube(z.dataset.mgMacroUuid); }
    else if (e.target.closest('[data-mg-newcanvas]')) { e.preventDefault(); e.stopPropagation(); writeBlock(z.dataset.mgMacroUuid, function (c) { return setPropStr(c, 'mg-canvas', '1'); }).then(schedScan); }
  });
  d.addEventListener('dragover', function (e) { var z = nz(e); if (z && hasFiles(e.dataTransfer)) { e.preventDefault(); e.stopPropagation(); z.classList.add('mg-dropok'); } });
  d.addEventListener('dragleave', function (e) { var z = nz(e); if (z) z.classList.remove('mg-dropok'); });
}
function setupMacro() {
  try { logseq.Editor.registerSlashCommand(t('slash'), async function () { try { await logseq.Editor.insertAtEditingCursor('{{renderer :multigrid}}'); } catch (e) { try { logseq.Editor.insertAtCursor('{{renderer :multigrid}}'); } catch (e2) { console.error('[mg] slash', e2); } } }); } catch (e) {}
  try {
    logseq.App.onMacroRendererSlotted(function (e) {
      var slot, uuid, args;
      if (e && e.payload) { slot = e.slot; uuid = e.payload.uuid; args = e.payload.arguments || []; }
      else if (e && Array.isArray(e)) { args = e; slot = e[1] && e[1].slot; uuid = typeof e[2] === 'string' ? e[2] : (e[1] && e[1].uuid); }
      else { args = []; }
      if (args[0] !== ':multigrid') return;
      if (!uuid || !slot) return;
      setTimeout(function () {
        try { logseq.provideUI({ key: 'mgc-' + uuid, slot: slot, reset: true, template: '<div class="mg-emptyzone" data-mg-macro-uuid="' + uuid + '"><button class="mg-btn" data-mg-newimg>' + t('add_image') + '</button><button class="mg-btn" data-mg-newpdf>' + t('add_pdf') + '</button><button class="mg-btn" data-mg-newvideo>' + t('add_video') + '</button><button class="mg-btn" data-mg-newsheet>' + t('add_table') + '</button><button class="mg-btn" data-mg-newyt>' + t('add_youtube') + '</button><button class="mg-btn" data-mg-newcanvas>' + t('open_canvas') + '</button></div>' }); } catch (e2) { console.error('[mg] provideUI', e2); }
        setTimeout(wireZones, 300);
      }, 100);
    });
  } catch (e) { console.error('[mg] macro', e); }
}
function schedScan() { if (MG.deb) return; MG.deb = setTimeout(function () { MG.deb = null; scan(); }, 150); }
function scan() {
  td().querySelectorAll('.ls-block').forEach(processBlock);
  td().querySelectorAll('.ls-block table').forEach(function (t) { if (t.closest('.mg-sheet')) return; if (!MG.tbls.has(t)) { makeTbl(t); } });
}
function mediaRawSrc(m) {
  if (m.kind === 'pdf') return pdfSrcOf(m.el);
  if (m.kind === 'sheet') return sheetSrcOf(m.el);
  if (m.kind === 'video') return m._src || videoSrcOf(m.el);
  if (m.kind === 'yt') return m._src || (m.el && m.el.getAttribute ? (m.el.getAttribute('href') || m.el.getAttribute('data-url') || m.el.getAttribute('data-href') || '') : '');
  return (m.el.currentSrc || m.el.src || (m._src || ''));
}
function synthMediaFromRefs(content) {
  var refs = refsAll(content), out = [];
  refs.forEach(function (r) {
    var el = td().createElement('a');
    el.setAttribute('href', r.src);
    el.textContent = r.alt || '';
    var kind;
    if (r.yt) kind = 'yt';
    else if (/\.pdf($|[?#])/i.test(r.src)) kind = 'pdf';
    else if (VIDEO_EXT.test(r.src)) kind = 'video';
    else if (SHEET_EXT.test(r.src)) kind = 'sheet';
    else if (r.pdfLink) kind = 'pdf';
    else kind = 'img';
    out.push({ el: el, kind: kind, _src: r.src, _ref: r });
  });
  return out;
}
async function processBlock(blk) {
  if (blk.querySelector('.editor-inner')) {
    var ec0 = blk.querySelector(':scope>.mg-canvas');
    if (ec0) { (ec0._cards || []).forEach(destroyCard); ec0.remove(); }
    blk.classList.remove('mg-has-canvas');
    return;
  }
  var medias = collectMedia(blk);
  var ec = blk.querySelector(':scope>.mg-canvas');
  // Merge refs whose DOM has no detectable href (e.g. asset links Logseq renders without the
  // file extension). Only video/pdf/sheet refs are at risk of being DOM-invisible; dedup by kind+src.
  var bcM = blk.querySelector('.block-content');
  var bcTxtM = bcM ? bcM.textContent : '';
  var blkContent = null;
  if (medias.length && /\.(mp4|webm|ogv|m4v|mov|pdf|xlsx|xlsm|xls|csv|png|jpe?g|gif|webp|bmp|avif)/i.test(bcTxtM)) {
    var uuidM = blockUuidFrom(blk);
    if (uuidM) {
      var bM = await getBlock(uuidM);
      if (bM) {
        blkContent = bM.content || '';
        var synthM = synthMediaFromRefs(bM.content || '');
        // Dedup by kind + basename: Logseq renders asset anchors as absolute file:// URLs,
        // so normSrc on the DOM href does not equal the relative ref src.
        function mkey(m) { return m.kind + ':' + String(cardBaseName(mediaRawSrc(m)) || '').toLowerCase(); }
        var haveM = {}, byKeyM = {};
        medias.forEach(function (m) { var k = mkey(m); haveM[k] = 1; byKeyM[k] = m; });
        synthM.forEach(function (m) { var k = mkey(m); if (!haveM[k]) { haveM[k] = 1; medias.push(m); } else if (m._ref && byKeyM[k] && !byKeyM[k]._ref) { byKeyM[k]._ref = m._ref; } });
      }
    }
  }
  if (!medias.length) {
    var uuid0 = blockUuidFrom(blk);
    var keep = blk.classList.contains('mg-has-canvas');
    var b0 = null;
    var bcEl = blk.querySelector('.block-content');
    var bcTxt = bcEl ? bcEl.textContent : '';
    var maybeRef = /https?:\/\/|youtu\.?be|\.pdf|\.xlsx?|\.xlsm?|\.csv|\.mp4|\.webm|\.ogv|\.m4v|\.mov/i.test(bcTxt);
    if (uuid0 && (!keep || maybeRef)) {
      b0 = await getBlock(uuid0);
      if (!keep) keep = !!(b0 && getProp(b0.content, 'mg-canvas'));
      if (b0) { blkContent = b0.content || ''; var synth = synthMediaFromRefs(b0.content || ''); if (synth.length) { medias = synth; } }
    }
    if (!medias.length) {
      if (!keep) { var ecx = blk.querySelector(':scope>.mg-canvas,.mg-reactivate'); if (ecx) { (ecx._cards || []).forEach(destroyCard); ecx.remove(); } blk.classList.remove('mg-has-canvas'); return; }
      if (ec && ec.dataset.sig === '') return;
      blk.classList.add('mg-has-canvas');
      if (uuid0) writeBlock(uuid0, function (c) { return getProp(c, 'mg-canvas') ? c : setPropStr(c, 'mg-canvas', '1'); });
      buildCanvasSync(blk, [], '', uuid0, blkContent);
      return;
    }
  }
  var sig = medias.map(function (m) { return m.kind + ':' + normSrc(mediaRawSrc(m)) + (m._ref && m._ref.mgm && m._ref.mgm.grp ? '#' + m._ref.mgm.grp : ''); }).join('|') + '|g:' + (blkContent && getProp(blkContent, 'mg-pdfgroup') ? '1' : '0') + '|i:' + (blkContent && getProp(blkContent, 'mg-imggroup') ? '1' : '0');
  if (ec && ec.dataset.sig === sig) return;
  blk.classList.add('mg-has-canvas');
  var uuid = blockUuidFrom(blk); if (!uuid) return;
  buildCanvasSync(blk, medias, sig, uuid, blkContent);
}
function buildCanvasSync(blk, medias, sig, uuid, content) {
  var old = blk.querySelector(':scope>.mg-canvas');
  if (old) { (old._cards || []).forEach(destroyCard); old.remove(); }
  var rp = blk.querySelector(':scope>.mg-reactivate'); if (rp) rp.remove();
  var d = td();
  var cv = d.createElement('div'); cv.className = 'mg-canvas'; cv.dataset.sig = sig; cv.dataset.uuid = uuid;
  var stage = d.createElement('div'); stage.className = 'mg-stage';
  stage.addEventListener('mousedown', function (e) {
    if (e.button !== 0 || e.target.closest('.mg-card') || e.target.closest('table')) return;
    e.preventDefault();
    var dd = td(), sx = e.clientX, sy = e.clientY, moved = false;
    var box = dd.createElement('div'); box.className = 'mg-lasso';
    box.style.cssText = 'position:fixed;z-index:99998;pointer-events:none;border:1px solid rgba(74,144,217,.85);background:rgba(74,144,217,.12);border-radius:2px';
    dd.body.appendChild(box);
    function lmv(ev) {
      var x = Math.min(sx, ev.clientX), y = Math.min(sy, ev.clientY), w = Math.abs(ev.clientX - sx), h = Math.abs(ev.clientY - sy);
      if (w > 3 || h > 3) moved = true;
      box.style.left = x + 'px'; box.style.top = y + 'px'; box.style.width = w + 'px'; box.style.height = h + 'px';
    }
    function lup(ev) {
      dd.removeEventListener('mousemove', lmv); dd.removeEventListener('mouseup', lup);
      box.remove();
      if (!moved) { deselectAll(); return; }
      var x0 = Math.min(sx, ev.clientX), x1 = Math.max(sx, ev.clientX), y0 = Math.min(sy, ev.clientY), y1 = Math.max(sy, ev.clientY);
      if (!ev.shiftKey && !ev.ctrlKey && !ev.metaKey) deselectAll();
      (cv._cards || []).forEach(function (c) {
        var r = c.el.getBoundingClientRect();
        if (r.right >= x0 && r.left <= x1 && r.bottom >= y0 && r.top <= y1) { MG.sel.add(c); c.el.classList.add('mg-sel'); }
      });
      if (MG.sel.size) MG.anchor = MG.sel.values().next().value;
    }
    dd.addEventListener('mousemove', lmv); dd.addEventListener('mouseup', lup);
  });
  cv.appendChild(stage);
  var cvc = d.createElement('div'); cvc.className = 'mg-cv-corner'; cv.appendChild(cvc);
  var cvb = d.createElement('div'); cvb.className = 'mg-cv-bottom'; cv.appendChild(cvb);
  var cvr = d.createElement('div'); cvr.className = 'mg-cv-right'; cv.appendChild(cvr);
  function cvCtxMenu(e) {
    e.preventDefault(); e.stopPropagation();
    var items = [
      { label: t('add_image'), fn: function () { pickFilesInto(cv.dataset.uuid, 'image/*'); } },
      { label: t('add_pdf'), fn: function () { pickFilesInto(cv.dataset.uuid, 'application/pdf'); } },
      { label: t('add_video'), fn: function () { pickFilesInto(cv.dataset.uuid, VIDEO_ACCEPT); } },
      { label: t('add_table'), fn: function () { createSheet(cv.dataset.uuid); } },
      { label: t('add_youtube'), fn: function () { addYoutube(cv.dataset.uuid); } },
      { sep: true },
      { label: cv.classList.contains('mg-aspectlock') ? t('ar_unlock_canvas') : t('ar_lock_canvas'), fn: function () { cv.classList.toggle('mg-aspectlock'); } },
      { label: t('frame_reset'), fn: function () { cv.style.width = ''; cv.style.height = ''; writeBlock(cv.dataset.uuid, function (c) { return setPropStr(setPropStr(c, 'mg-ch', ''), 'mg-cw', ''); }); } },
      { label: t('cards_reset'), fn: function () { (cv._cards || []).forEach(resetCardSize); } },
      { label: t('cards_shrink'), fn: function () { tileAllCards(cv); } },
      { label: t('cards_fill'), fn: function () { fillCanvas(cv); } },
      { label: t('fit_content'), fn: function () { fitCanvas(cv); } },
      { label: t('add_yt'), fn: function () {
        askText(LANG === 'de' ? 'YouTube URL eingeben' : 'Enter YouTube URL').then(function (u) {
          if (!u || !ytUrl(u)) return;
          var uuid = cv.dataset.uuid;
          getBlock(uuid).then(function (b) {
            if (!b) return;
            var refs = refsAll(b.content || '');
            if (refs.some(function (r) { return r.yt && r.src.indexOf(ytId(u)) >= 0; })) return;
            appendInlineMd(uuid, '[YouTube](' + ytUrl(u) + ')').then(function () { schedScan(); });
          });
        });
      } },
      { label: t('edit_text'), fn: function () { try { logseq.Editor.editBlock(cv.dataset.uuid); } catch (e) { console.error('[mg] editBlock', e); } } },
      { label: t('reset_all'), fn: function () { resetAll(cv); } },
      { sep: true },
      { label: t('del_canvas'), danger: true, fn: function () { deleteCanvas(cv); } }
    ];
    showPopover(e.clientX, e.clientY, items);
  }
  cvc.addEventListener('contextmenu', cvCtxMenu);
  cv.addEventListener('contextmenu', cvCtxMenu);
  cv.addEventListener('mousedown', function (e) { if (e.target && e.target.closest && e.target.closest('.mg-card,.mg-menu')) return; selectCanvas(cv); deselectAll(); });
  var contentWrap = blk.querySelector(':scope>.flex.flex-row') || blk.firstChild;
  if (contentWrap && contentWrap.nextSibling) blk.insertBefore(cv, contentWrap.nextSibling);
  else blk.appendChild(cv);
  var bc = blk.querySelector('.block-content');
  var ml = bc ? (bc.getBoundingClientRect().left - blk.getBoundingClientRect().left) : (contentWrap ? contentWrap.offsetLeft : 0);
  if (ml > 0) cv.style.marginLeft = ml + 'px';
  var cards = [];
  var ytMedias = medias.filter(function (m) { return m.kind === 'yt'; });
  var videoMedias = medias.filter(function (m) { return m.kind === 'video'; });
  if (ytMedias.length) {
    var vids = [], seenYid = {};
    ytMedias.forEach(function (m) {
      var yraw = m.el.getAttribute('href') || m.el.getAttribute('data-url') || m.el.getAttribute('data-href') || m._src || '';
      var yid = ytId(yraw);
      if (!yid || seenYid[yid]) return;
      seenYid[yid] = true;
      vids.push({ src: ytUrl(yraw) || yraw, yid: yid, native: m.el });
    });
    if (vids.length) {
      var st = { idx: 0, kind: 'yt', lockBlock: false, lockPos: false, lockSize: false, cv: cv, uuid: uuid, stage: stage, group: '' };
      st.url = vids[0].src; st.src = st.url; st.native = vids[0].native;
      st.ytAllVideos = vids;
      var card = makeCard(st); stage.appendChild(card.el); cards.push(card); applyPop(card);
    }
  }
  if (videoMedias.length) {
    var vvids = [], seenVid = {};
    videoMedias.forEach(function (m) {
      var vraw = m._src || videoSrcOf(m.el) || '';
      var vnm = cardBaseName(vraw);
      var vkey = 'assets/' + vnm.toLowerCase();
      if (!vnm || seenVid[vkey]) return;
      seenVid[vkey] = true;
      var valt = (m._alt != null ? m._alt : (m._ref && m._ref.alt)) || '';
      vvids.push({ src: 'assets/' + vnm, url: 'assets/' + vnm, name: valt || vnm, native: m.el });
    });
    if (vvids.length) {
      var stv = { idx: 0, kind: 'video', lockBlock: false, lockPos: false, lockSize: false, cv: cv, uuid: uuid, stage: stage, group: '' };
      stv.url = vvids[0].url; stv.src = vvids[0].src; stv.native = vvids[0].native;
      stv.videos = vvids;
      var vcard = makeCard(stv); stage.appendChild(vcard.el); cards.push(vcard); applyPop(vcard);
    }
  }
  var pdfLegacyGrouped = content ? !!getProp(content, 'mg-pdfgroup') : false;
  var pdfMedias = medias.filter(function (m) { return m.kind === 'pdf'; });
  var pdfConsumed = new Set();
  if (pdfMedias.length > 1) {
    var pgMap = {}; var pgOrder = [];
    pdfMedias.forEach(function (m) {
      var grp = (m._ref && m._ref.mgm && m._ref.mgm.grp) || (pdfLegacyGrouped ? '_legacy' : null);
      if (!grp) return;
      if (!pgMap[grp]) { pgMap[grp] = []; pgOrder.push(grp); }
      pgMap[grp].push(m);
    });
    pgOrder.forEach(function (grp) {
      var members = pgMap[grp];
      if (members.length < 2) return;
      var pdefs = [], seenPdf = {};
      members.forEach(function (m) {
        var praw = pdfSrcOf(m.el) || m._src || '';
        var pnm = cardBaseName(praw);
        if (!pnm || seenPdf[pnm.toLowerCase()]) return;
        seenPdf[pnm.toLowerCase()] = true;
        var palt = (m._alt != null ? m._alt : (m._ref && m._ref.alt)) || '';
        pdefs.push({ src: 'assets/' + pnm, url: 'assets/' + pnm, name: palt || pnm, native: m.el });
      });
      if (pdefs.length > 1) {
        members.forEach(function (m) { pdfConsumed.add(m); });
        var stp = { idx: 0, kind: 'pdf', lockBlock: false, lockPos: false, lockSize: false, cv: cv, uuid: uuid, stage: stage, group: grp };
        stp.url = pdefs[0].url; stp.src = pdefs[0].src; stp.native = pdefs[0].native;
        stp.pdfs = pdefs;
        var pcard = makeCard(stp); stage.appendChild(pcard.el); cards.push(pcard); applyPop(pcard);
      }
    });
  }
  var imgLegacyGrouped = content ? !!getProp(content, 'mg-imggroup') : false;
  var imgMedias = medias.filter(function (m) { return m.kind === 'img'; });
  var imgConsumed = new Set();
  if (imgMedias.length > 1) {
    var igMap = {}; var igOrder = [];
    imgMedias.forEach(function (m) {
      var grp = (m._ref && m._ref.mgm && m._ref.mgm.grp) || (imgLegacyGrouped ? '_legacy' : null);
      if (!grp) return;
      if (!igMap[grp]) { igMap[grp] = []; igOrder.push(grp); }
      igMap[grp].push(m);
    });
    igOrder.forEach(function (grp) {
      var members = igMap[grp];
      if (members.length < 2) return;
      var idefs = [], seenImg = {};
      members.forEach(function (m) {
        var iraw = (m.el && (m.el.currentSrc || m.el.src)) || m._src || '';
        if (!iraw) return;
        var ikey = normSrc(iraw);
        if (seenImg[ikey]) return;
        seenImg[ikey] = 1;
        var ialt = (m._alt != null ? m._alt : (m._ref && m._ref.alt)) || '';
        idefs.push({ src: iraw, url: iraw, name: ialt || cardBaseName(iraw) || '', native: m.el });
      });
      if (idefs.length > 1) {
        members.forEach(function (m) { imgConsumed.add(m); });
        var sti = { idx: 0, kind: 'img', lockBlock: false, lockPos: false, lockSize: false, cv: cv, uuid: uuid, stage: stage, group: grp };
        sti.url = idefs[0].url; sti.src = idefs[0].src; sti.native = idefs[0].native; sti.alt = idefs[0].name;
        sti.images = idefs;
        var icard = makeCard(sti); stage.appendChild(icard.el); cards.push(icard); applyPop(icard);
      }
    });
  }
  var nonSpecialMedias = medias.filter(function (m) { return m.kind !== 'yt' && m.kind !== 'video' && !(m.kind === 'pdf' && pdfConsumed.has(m)) && !(m.kind === 'img' && imgConsumed.has(m)); });
  nonSpecialMedias.forEach(function (m, i) {
    var st = { idx: i + ytMedias.length + videoMedias.length, kind: m.kind, lockBlock: false, lockPos: false, lockSize: false, cv: cv, uuid: uuid, stage: stage, group: '' };
    if (m.kind === 'pdf') {
      var raw = pdfSrcOf(m.el);
      if (!raw) return;
      st.url = 'assets/' + cardBaseName(raw);
      st.src = st.url;
      st.native = m.el;
    } else if (m.kind === 'sheet') {
      var rawS = sheetSrcOf(m.el);
      if (!rawS) return;
      st.url = 'assets/' + cardBaseName(rawS);
      st.src = st.url;
      st.native = m.el;
    } else {
      st.src = m.el.currentSrc || m.el.src || (m._src || '');
      st.url = st.src;
      st.native = m.el;
    }
    var card = makeCard(st); stage.appendChild(card.el); cards.push(card); applyPop(card);
  });
  cv._cards = cards;
  layoutCards(stage, cards);
  function syncH() { var need = stage.offsetHeight + CELL_T; if (cv.clientHeight < need) cv.style.height = need + 'px'; }
  function relayout() {
    syncH();
    var gm = gridMetrics(stage);
    if (!(parseInt(stage.dataset.baseCols, 10) > 0) && gm.cols > 1 && stage.offsetHeight > 0) { stage.dataset.baseCols = gm.cols; stage.dataset.baseRows = gm.rows; }
    (cv._cards || []).forEach(function (c) { if (!c.manualSized) applyGridPos(c, gm); });
  }
  var aDone = false, rDone = false, laid = false;
  function maybeLayout() { if (laid || !(aDone && rDone) || !blk.contains(cv) || stage.offsetHeight <= 0) return; laid = true; relayout(); }
  (async function () {
    var b = await getBlock(uuid);
    if (!b) return;
    if (!blk.contains(cv)) { await new Promise(function (r) { requestAnimationFrame(function () { requestAnimationFrame(r); }); }); }
    if (!blk.contains(cv) || !b) return;
    var content = b.content || '';
    var lkRaw = getProp(content, 'mg-lock');
    if (lkRaw == null && getProp(content, 'mg-locked') === 'true') lkRaw = 'pos,size';
    var lk = parseLock(lkRaw);
    if (lk.block) { teardownToInline(blk, cv, uuid); return; }
    var cvH = getProp(content, 'mg-ch'); cv.style.aspectRatio = ''; if (cvH) { cv.style.height = cvH + 'px'; }
    var cvW = getProp(content, 'mg-cw'); if (cvW) cv.style.width = cvW + 'px';
    var refs = findRefs(content);
    var legacy = lk.pos || lk.size;
    if (legacy) {
      writeBlock(uuid, function (cc) {
        return refsRewrite(cc, function (r) { r.mgm = Object.assign({}, r.mgm, { pos: lk.pos, size: lk.size }); return r; }).replace(new RegExp('\\s*<!--\\s*mg-lock:\\s*[^>]*-->', 'i'), '');
      });
    }
    cards.forEach(function (c, i) {
      var ns = normSrc(c.src), ref = null;
      refs.forEach(function (r) { if (!ref && normSrc(r.src) === ns) ref = r; });
      c.manualSized = false;
      c.z = null;
      c.spanCx = SPAN_DEFAULT_CX;
      c.spanCy = SPAN_DEFAULT_CY;
      if (ref) {
        var ap = parseImgAttrs(ref.attrs);
        if (ap.w) c.w = ap.w;
        if (ap.h) c.h = ap.h;
        c.alt = ref.alt || '';
        c.c = ref.mgm.c;
        c.r = ref.mgm.r;
        c.lockPos = ref.mgm.pos || (legacy && lk.pos);
        c.lockSize = ref.mgm.size || (legacy && lk.size);
        c.aspectLock = ref.mgm.ar || false;
        if (ref.mgm.z != null) c.z = ref.mgm.z;
        if (ref.mgm.cx != null) { c.spanCx = ref.mgm.cx; c.manualSized = true; }
        if (ref.mgm.cy != null) { c.spanCy = ref.mgm.cy; c.manualSized = true; }
        if (ref.mgm.ox != null) c.cropOx = ref.mgm.ox;
        if (ref.mgm.oy != null) c.cropOy = ref.mgm.oy;
      }
      c.lockBlock = lk.block; applyLockAttr(c);
      if (c.kind === 'sheet' && c.sheet && c.sheet.wrap) { var ffr = getProp(content, 'mg-font'); sheetApplyFont(c, ffr ? parseInt(ffr, 10) : SHEET_FS_DEFAULT); }
    });
    var gm2 = gridMetrics(stage);
    cards.forEach(function (c) {
      if (c.cropOx != null || c.cropOy != null) { var img = c.el.querySelector('img'); if (img) img.style.objectPosition = (c.cropOx != null ? c.cropOx : 50) + '% ' + (c.cropOy != null ? c.cropOy : 50) + '%'; }
      applyGridPos(c, gm2);
    });
    normalizeZ(cards); applyZ(cards);
    setStageTemplate(stage, cards, gm2);
    syncH();
    aDone = true; maybeLayout();
  })();  requestAnimationFrame(function () {
    if (!blk.contains(cv)) {
      var cw2 = blk.querySelector(':scope>.flex.flex-row') || blk.firstChild;
      if (cw2 && cw2.nextSibling) blk.insertBefore(cv, cw2.nextSibling); else blk.appendChild(cv);
    }
    setupCvCorner(cv);
    try {
      var cols = Math.max(1, Math.floor(((cv.offsetWidth || 0) + GAP_PX) / CELL_T));
      stage.style.gridTemplateColumns = 'repeat(' + cols + ', ' + CELL_PX + 'px)';
    } catch (e) {}
    if (!cv.style.height || parseInt(cv.style.height) < CELL_T * 2) {
      var im = cv.querySelector('img');
      if (im) {
        function setH() {
          var iw = im.naturalWidth || IMG_FALLBACK_W, ih = im.naturalHeight || IMG_FALLBACK_H;
          var cw = cv.offsetWidth || 1300;
          var cols = Math.max(1, Math.floor((cw + GAP_PX) / CELL_T));
          var cs = Math.max(1, Math.floor(cols / SINGLE_CARD_DIVISOR));
          var rows = Math.max(1, Math.round(cs / (iw / ih)));
          cv.style.height = (rows * CELL_T - GAP_PX) + 'px';
          cv.style.aspectRatio = '';
          requestAnimationFrame(function () { syncH(); relayout(); });
        }        if (im.complete && im.naturalWidth) setH();
        else im.addEventListener('load', setH);
      } else if ((cv._cards || []).length) {
        var cw0 = cv.offsetWidth || 1300;
        var cols0 = Math.max(1, Math.floor((cw0 + GAP_PX) / CELL_T));
        var cs0 = Math.max(1, Math.floor(cols0 / SINGLE_CARD_DIVISOR));
        var anyVid = (cv._cards || []).some(function (c) { return c.kind === 'video'; });
        var rows0 = Math.max(1, Math.round(cs0 / (anyVid ? VIDEO_AR : PDF_AR)));
        cv.style.height = (rows0 * CELL_T - GAP_PX) + 'px';
        cv.style.aspectRatio = '';
        requestAnimationFrame(function () { syncH(); relayout(); });
      } else {
        cv.style.height = (6 * CELL_T - GAP_PX) + 'px';
        cv.style.aspectRatio = '';
        requestAnimationFrame(function () { syncH(); relayout(); });
      }
    }
    syncH();
    rDone = true; maybeLayout();
    clearTimeout(MG.gcTimer);
    MG.gcTimer = setTimeout(schedScan, 400);
  });
}
function teardownToInline(blk, cv, uuid) {
  blk.classList.remove('mg-has-canvas');
  (cv._cards || []).forEach(destroyCard);
  cv.remove(); deselectAll();
  if (blk.querySelector(':scope>.mg-reactivate')) return;
  var ph = td().createElement('div'); ph.className = 'mg-reactivate';
  ph.appendChild(td().createTextNode(t('paused')));
  ph.appendChild(mkBtn(t('activate'), function () {
    writeBlock(uuid, function (c) { return setPropStr(c, 'mg-lock', ''); });
  }));
  blk.appendChild(ph);
}
function gridMetrics(stage) {
  var sw = stage.clientWidth || 0, sh = stage.clientHeight || 0, gap = GAP_PX, minCol = CELL_PX, rh = CELL_PX;
  if (sw <= 0) return { cols: 1, rows: 1, colWidth: minCol, rowHeight: rh, gap: gap };
  var gtc = getComputedStyle(stage).gridTemplateColumns || '';
  var cols = (gtc.match(/\d+(?:\.\d+)?(?:px|fr)/g) || []).length;
  if (cols < 1) cols = Math.max(1, Math.floor((sw + gap) / (minCol + gap)));
  var cw = cols > 1 ? (sw - (cols - 1) * gap) / cols : sw;
  var rows = Math.max(1, Math.floor((sh + gap) / (rh + gap)));
  return { cols: cols, rows: rows, colWidth: Math.max(1, cw), rowHeight: rh, gap: gap };
}
function effectiveSpan(card) {
  var cs = getComputedStyle(card.el);
  var mc = /span\s+(\d+)/.exec(cs.gridColumnEnd) || /span\s+(\d+)/.exec(cs.gridColumnStart);
  var mr = /span\s+(\d+)/.exec(cs.gridRowEnd) || /span\s+(\d+)/.exec(cs.gridRowStart);
  if (mc) card.spanCx = +mc[1];
  if (mr) card.spanCy = +mr[1];
}
function baseGrid(stage, gm) {
  var bc = stage && stage.dataset.baseCols ? parseInt(stage.dataset.baseCols, 10) : 0;
  var br = stage && stage.dataset.baseRows ? parseInt(stage.dataset.baseRows, 10) : 0;
  var cols = (gm && gm.cols) || SPAN_DEFAULT_CX;
  var rows = (gm && gm.rows) || SPAN_DEFAULT_CY;
  if (bc > 0 && bc < cols) cols = bc;
  if (br > 0 && br < rows) rows = br;
  return { cols: cols, rows: rows };
}
function applyGridPos(card, gm) {
  var cards = card.stage ? card.stage.querySelectorAll('.mg-card') : [card.el];
  var n = cards.length;
  var bg = baseGrid(card.stage, gm);
  var cs, rs;
  if (card.manualSized) {
    cs = card.spanCx || SPAN_DEFAULT_CX; rs = card.spanCy || SPAN_DEFAULT_CY;
  } else if (n <= 1) {
    var im = card.el ? card.el.querySelector('img') : null;
    var ar;
    if (im) { var iw = im.naturalWidth || IMG_FALLBACK_W, ih = im.naturalHeight || IMG_FALLBACK_H; ar = iw / ih; }
    else if (card.kind === 'video') { var ve0 = card.el ? card.el.querySelector('video') : null; ar = (ve0 && ve0.videoWidth) ? (ve0.videoWidth / ve0.videoHeight) : VIDEO_AR; }
    else if (card.kind === 'yt') { ar = VIDEO_AR; }
    else if (card.kind === 'sheet') { ar = SHEET_AR; }
    else { ar = PDF_AR; }
    cs = Math.max(1, Math.floor((bg.cols || SPAN_DEFAULT_CX) / SINGLE_CARD_DIVISOR));
    rs = Math.max(1, Math.round(cs / ar));
  } else {
    var perRow = Math.min(n, MULTI_CARD_PER_ROW);
    cs = Math.max(1, Math.floor((bg.cols || SPAN_DEFAULT_CX) / MULTI_CARD_PER_ROW));
    var im0 = card.stage ? card.stage.querySelector('.mg-card img') : null;
    var sar = im0 ? ((im0.naturalWidth) ? (im0.naturalHeight / im0.naturalWidth) : (IMG_FALLBACK_H / IMG_FALLBACK_W)) : PDF_AR;
    rs = Math.max(1, Math.round(cs * sar));
  }
  card.el.style.gridColumn = (card.c != null ? (card.c) + ' / span ' + cs : 'span ' + cs);
  card.el.style.gridRow = (card.r != null ? (card.r) + ' / span ' + rs : 'span ' + rs);
}
function setStageTemplate(stage, cards, gm) {
  var colPx = CELL_PX, gap = GAP_PX;
  var cv = stage.parentElement;
  var cols = Math.max(1, Math.floor(((cv ? cv.offsetWidth : 0) + gap) / (colPx + gap)));
  stage.style.gridTemplateColumns = 'repeat(' + cols + ', ' + colPx + 'px)';
}
function layoutCards(stage, cards) {
  var n = (cards || []).length;
  if (!n) return;
  setStageTemplate(stage, cards, gridMetrics(stage));
  var gm = gridMetrics(stage);
  cards.forEach(function (c) { applyGridPos(c, gm); });
}

function pluginDir() {
  try {
    var d = td();
    var u = [].slice.call(d.scripts).map(function (s) { return s.src; }).filter(Boolean).find(function (x) { return /logseq-multigrid\/index\.js$/.test(x); });
    if (u) return u.replace(/index\.js$/, '').replace(/\/$/, '');
  } catch (e) {}
  try {
    var reg = top.LSPluginCore && top.LSPluginCore._registeredPlugins;
    var v = reg && reg.get ? reg.get(PK) : null;
    var p = v && v._options && (v._options.url || v._options.entry || v._localRoot);
    if (p) { if (/^file:\/\//i.test(p)) return p.replace(/\/[^/]*$/, ''); return 'file://' + String(p).replace(/[\/\\]+$/, ''); }
  } catch (e) {}
  return '';
}
function vendorUrl(file) {
  var abs = pluginDir().replace(/^file:\/\//i, '') + '/vendor/' + file;
  return 'file://' + abs.split('/').map(encodeURIComponent).join('/');
}
function loadPdfjs() {
  if (MG.pdfjs) return Promise.resolve(MG.pdfjs);
  if (MG.pdfLoad) return MG.pdfLoad;
  MG.pdfLoad = new Promise(function (res) {
    try {
      var cur = top.pdfjsLib;
      if (cur && cur.getDocument && cur.version && /^3\./.test(cur.version)) { MG.pdfjs = cur; res(cur); return; }
      var orig = cur || null, d = td(), s = d.createElement('script');
      s.src = vendorUrl('pdf.min.js');
      s.onload = function () {
        var P = top.pdfjsLib || (typeof pdfjsLib !== 'undefined' ? pdfjsLib : null);
        try { if (orig && P !== orig) top.pdfjsLib = orig; } catch (e) {}
        MG.pdfjs = P; res(P);
      };
      s.onerror = function () { MG.pdfjs = null; res(null); };
      (d.head || d.body).appendChild(s);
    } catch (e) { MG.pdfjs = null; res(null); }
  });
  return MG.pdfLoad;
}
function pdfFetchText(url) {
  return new Promise(function (res) {
    function viaXhr() {
      try { var x = new XMLHttpRequest(); x.open('GET', url, true); x.onload = function () { res(x.responseText); }; x.onerror = function () { res(null); }; x.send(); } catch (e) { res(null); }
    }
    try { fetch(url).then(function (r) { return r.text(); }).then(res).catch(viaXhr); } catch (e) { viaXhr(); }
  });
}
function pdfFetchBytes(url) {
  return new Promise(function (res) {
    function viaXhr() {
      try { var x = new XMLHttpRequest(); x.open('GET', url, true); x.responseType = 'arraybuffer'; x.onload = function () { res(x.response && x.response.byteLength ? new Uint8Array(x.response) : null); }; x.onerror = function () { res(null); }; x.send(); } catch (e) { res(null); }
    }
    try { fetch(url).then(function (r) { return r.arrayBuffer(); }).then(function (b) { res(new Uint8Array(b)); }).catch(viaXhr); } catch (e) { viaXhr(); }
  });
}
async function loadPdfBytes(st) {
  var base = cardBaseName(st.src || st.url || '');
  if (!base) return null;
  var vp = await getGraphPath();
  var dir = (vp || MG.graphPath || '').replace(/[\/\\]+$/, '');
  if (!dir) return null;
  var fs = acquireFs();
  if (fs) { try { return new Uint8Array(fs.readFileSync(dir + '/assets/' + base)); } catch (e) {} }
  var abs = dir + '/assets/' + base;
  return await pdfFetchBytes('file://' + abs.split('/').map(encodeURIComponent).join('/'));
}
async function pdfGetDocument(P, bytes) {
  var opts = function () { return { data: bytes.slice(0), isEvalSupported: false, disableAutoFetch: true, disableStream: true }; };
  var wf = vendorUrl('pdf.worker.min.js');
  try { P.GlobalWorkerOptions.workerPort = null; P.GlobalWorkerOptions.workerSrc = wf; return await P.getDocument(opts()).promise; } catch (e) { console.error('[mg] pdf worker file:', (e && e.message) || e); }
  try {
    var code = await pdfFetchText(wf); if (!code) throw new Error('no worker code');
    var burl = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
    P.GlobalWorkerOptions.workerSrc = burl; P.GlobalWorkerOptions.workerPort = new (top.Worker || Worker)(burl);
    return await P.getDocument(opts()).promise;
  } catch (e) { console.error('[mg] pdf worker blob:', (e && e.message) || e); }
  try {
    try { if (P.GlobalWorkerOptions.workerPort) P.GlobalWorkerOptions.workerPort.terminate(); } catch (e) {}
    P.GlobalWorkerOptions.workerPort = null; P.GlobalWorkerOptions.workerSrc = '';
    return await P.getDocument(opts()).promise;
  } catch (e) { console.error('[mg] pdf worker none:', (e && e.message) || e); }
  throw new Error('pdf load failed');
}
function pdfObserver() {
  if (MG.pdfObs) return MG.pdfObs;
  MG.pdfObs = new (top.IntersectionObserver || IntersectionObserver)(function (entries) {
    entries.forEach(function (en) {
      var st = MG.pdfCards.get(en.target);
      if (!st || !st.pdf) return;
      if (en.isIntersecting) { st.pdf.visible = true; pdfQueue(st); }
      else { st.pdf.visible = false; pdfCancelPending(st); }
    });
  }, { root: null, rootMargin: '250px' });
  return MG.pdfObs;
}
function pdfQueue(st) {
  var p = st.pdf;
  if (!p || p.destroyed || p.doc || p.loading || p.queued) return;
  p.queued = true; MG.pdfQ.push(st); pdfPump();
}
function pdfPump() {
  while (MG.pdfActive < 2 && MG.pdfQ.length) {
    var st = MG.pdfQ.shift(); if (!st.pdf) continue;
    st.pdf.queued = false;
    if (st.pdf.destroyed || st.pdf.doc) continue;
    MG.pdfActive++;
    pdfLoadCard(st).then(function () { MG.pdfActive--; pdfPump(); }, function () { MG.pdfActive--; pdfPump(); });
  }
}
async function pdfLoadCard(st) {
  var p = st.pdf;
  if (!p || p.destroyed) return;
  p.loading = true;
  try {
    var bytes = await loadPdfBytes(st); if (!bytes) throw new Error('no bytes');
    var P = await loadPdfjs(); if (!P) throw new Error('no pdfjs');
    var doc = await pdfGetDocument(P, bytes);
    if (p.destroyed || !p.wrap || !p.wrap.isConnected) { try { doc.destroy(); } catch (e) {} return; }
    p.doc = doc; await pdfBuildPages(st);
  } catch (e) { console.error('[mg] pdf load:', (e && e.message) || e); pdfFallback(st); }
  finally { p.loading = false; }
}
async function pdfBuildPages(st) {
  var p = st.pdf, doc = p.doc, wrap = p.wrap;
  var cw = wrap.clientWidth - 2; if (cw <= 0) cw = 400;
  var ar = 1.414;
  try { var pg = await doc.getPage(1); var v = pg.getViewport({ scale: 1 }); ar = v.height / v.width; } catch (e) {}
  p.baseAR = ar; p.lastW = cw; p.slots = [];
  for (var i = 0; i < doc.numPages; i++) {
    var slot = td().createElement('div'); slot.className = 'mg-pdf-slot';
    slot.dataset.page = String(i); slot.style.height = Math.round(cw * ar) + 'px';
    wrap.appendChild(slot); p.slots.push(slot);
  }
  p.pageObs = new (top.IntersectionObserver || IntersectionObserver)(function (entries) {
    entries.forEach(function (en) {
      var slot = en.target, idx = parseInt(slot.dataset.page, 10);
      if (en.isIntersecting) renderPdfPage(st, idx);
      else if (slot.__task) { try { slot.__task.cancel(); } catch (e) {} slot.__task = null; }
    });
  }, { root: wrap, rootMargin: '200px' });
  p.slots.forEach(function (s) { p.pageObs.observe(s); });
  p.slots.forEach(function (s, i) { if (inViewport(s, wrap)) renderPdfPage(st, i); });
}
async function renderPdfPage(st, idx) {
  var p = st.pdf;
  if (!p || p.destroyed || !p.doc || !p.slots) return;
  var slot = p.slots[idx];
  if (!slot || slot.__done || slot.__task || !slot.isConnected) return;
  var wrap = p.wrap, cw = wrap.clientWidth - 2; if (cw <= 0) return;
  try {
    var page = await p.doc.getPage(idx + 1);
    if (p.destroyed || !slot.isConnected) return;
    var base = page.getViewport({ scale: 1 });
    var vp = page.getViewport({ scale: cw / base.width });
    var dpr = Math.min(2, top.devicePixelRatio || 1);
    var cv = td().createElement('canvas'); cv.className = 'mg-pdf-page';
    cv.width = Math.max(1, Math.floor(vp.width * dpr)); cv.height = Math.max(1, Math.floor(vp.height * dpr));
    cv.style.width = Math.floor(vp.width) + 'px'; cv.style.height = Math.floor(vp.height) + 'px';
    var ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
    var task = page.render({ canvasContext: ctx, viewport: vp });
    slot.__task = task;
    await task.promise;
    slot.__task = null;
    if (p.destroyed || !slot.isConnected) return;
    while (slot.firstChild) slot.removeChild(slot.firstChild);
    slot.appendChild(cv); slot.__done = true;
    slot.style.height = Math.floor(vp.height) + 'px';
    try { page.cleanup(); } catch (e) {}
  } catch (e) { slot.__task = null; }
}
function inViewport(el, root) {
  var r = el.getBoundingClientRect(), rr = root.getBoundingClientRect();
  return r.bottom > rr.top - 200 && r.top < rr.bottom + 200;
}
function pdfCancelPending(st) {
  var p = st.pdf; if (!p || !p.slots) return;
  p.slots.forEach(function (slot) { if (slot.__task) { try { slot.__task.cancel(); } catch (e) {} slot.__task = null; } });
}
function pdfScheduleResize(st) {
  var p = st.pdf; if (!p || p.destroyed) return;
  clearTimeout(p.rt); p.rt = setTimeout(function () { pdfResize(st); }, 150);
}
function pdfResize(st) {
  var p = st.pdf; if (!p || p.destroyed || !p.slots || !p.wrap.isConnected) return;
  var cw = p.wrap.clientWidth - 2; if (cw <= 0) return;
  if (Math.abs(cw - (p.lastW || 0)) < 2) return;
  p.lastW = cw;
  p.slots.forEach(function (slot) {
    if (slot.__task) { try { slot.__task.cancel(); } catch (e) {} slot.__task = null; }
    slot.__done = false;
    slot.style.height = Math.round(cw * (p.baseAR || 1.414)) + 'px';
    while (slot.firstChild) slot.removeChild(slot.firstChild);
  });
  p.slots.forEach(function (slot, i) { if (inViewport(slot, p.wrap)) renderPdfPage(st, i); });
}
function pdfFallback(st) {
  var p = st.pdf; if (!p || p.destroyed || !p.wrap) return;
  p.wrap.classList.add('mg-pdf-fallback');
  p.wrap.textContent = cardBaseName(st.src || st.url || '');
}
function setupPdfCard(st) {
  var p = st.pdf;
  MG.pdfCards.set(st.el, st);
  try { pdfObserver().observe(st.el); } catch (e) {}
  try { p.ro = new (top.ResizeObserver || ResizeObserver)(function () { pdfScheduleResize(st); }); p.ro.observe(st.el); } catch (e) {}
}
function destroyCard(st) {
  if (st && st.vidBody) { var vf0 = st.vidBody.querySelector('.mg-video-frame'); if (vf0) { try { vf0.pause(); } catch (e0) {} if (vf0._mgObjUrl) { try { URL.revokeObjectURL(vf0._mgObjUrl); } catch (e1) {} } } }
  if (st && st.sheet) {
    var sh = st.sheet; sh.destroyed = true;
    try { if (MG.sheetCards) MG.sheetCards.delete(st.el); } catch (e) {}
    try { if (MG.sheetObs) MG.sheetObs.unobserve(st.el); } catch (e) {}
    try { if (sh.ro) sh.ro.disconnect(); } catch (e) {}
    clearTimeout(sh.saveTimer);
    return;
  }
  if (!st || !st.pdf) return;
  var p = st.pdf; p.destroyed = true;
  try { if (MG.pdfCards) MG.pdfCards.delete(st.el); } catch (e) {}
  try { if (MG.pdfObs) MG.pdfObs.unobserve(st.el); } catch (e) {}
  try { if (p.pageObs) p.pageObs.disconnect(); } catch (e) {}
  try { if (p.ro) p.ro.disconnect(); } catch (e) {}
  clearTimeout(p.rt);
  try { if (p.doc) p.doc.destroy(); } catch (e) {}
  p.doc = null;
}

function loadXlsx() {
  if (MG.xlsx) return Promise.resolve(MG.xlsx);
  if (MG.xlsxLoad) return MG.xlsxLoad;
  MG.xlsxLoad = new Promise(function (res) {
    try {
      var cur = top.XLSX || (typeof XLSX !== 'undefined' ? XLSX : null);
      if (cur && cur.read && cur.utils) { MG.xlsx = cur; res(cur); return; }
      var d = td(), s = d.createElement('script');
      s.src = vendorUrl('xlsx.full.min.js');
      s.onload = function () { MG.xlsx = top.XLSX || (typeof XLSX !== 'undefined' ? XLSX : null); res(MG.xlsx); };
      s.onerror = function () { MG.xlsx = null; res(null); };
      (d.head || d.body).appendChild(s);
    } catch (e) { MG.xlsx = null; res(null); }
  });
  return MG.xlsxLoad;
}
function colIdx(letters) { var n = 0; for (var i = 0; i < letters.length; i++) n = n * 26 + (letters.charCodeAt(i) - 64); return n - 1; }
function colLetters(c) { var s = ''; c = c + 1; while (c > 0) { var m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = Math.floor((c - 1) / 26); } return s; }
function loadFormula() {
  if (MG.formula) return Promise.resolve(MG.formula);
  if (MG.formulaLoad) return MG.formulaLoad;
  MG.formulaLoad = new Promise(function (res) {
    try {
      var cur = top.formulaParser || (typeof formulaParser !== 'undefined' ? formulaParser : null);
      if (cur && cur.Parser) { MG.formula = cur; res(cur); return; }
      var d = td(), s = d.createElement('script');
      s.src = vendorUrl('formula.min.js');
      s.onload = function () { var fp = top.formulaParser || (typeof formulaParser !== 'undefined' ? formulaParser : null); MG.formula = (fp && fp.Parser) ? fp : null; res(MG.formula); };
      s.onerror = function () { MG.formula = null; res(null); };
      (d.head || d.body).appendChild(s);
    } catch (e) { MG.formula = null; res(null); }
  });
  return MG.formulaLoad;
}
function a1addr(r, c) { return colLetters(c) + (r + 1); }
function sheetObserver() {
  if (MG.sheetObs) return MG.sheetObs;
  MG.sheetObs = new (top.IntersectionObserver || IntersectionObserver)(function (entries) {
    entries.forEach(function (en) {
      var st = MG.sheetCards.get(en.target);
      if (!st || !st.sheet) return;
      if (en.isIntersecting) { st.sheet.visible = true; sheetQueue(st); }
      else { st.sheet.visible = false; }
    });
  }, { root: null, rootMargin: '250px' });
  return MG.sheetObs;
}
function sheetQueue(st) { var s = st.sheet; if (!s || s.destroyed || s.wb || s.loading || s.queued) return; s.queued = true; MG.sheetQ.push(st); sheetPump(); }
function sheetPump() {
  while (MG.sheetActive < 2 && MG.sheetQ.length) {
    var st = MG.sheetQ.shift(); if (!st.sheet) continue;
    st.sheet.queued = false;
    if (st.sheet.destroyed || st.sheet.wb) continue;
    MG.sheetActive++;
    sheetLoadCard(st).then(function () { MG.sheetActive--; sheetPump(); }, function () { MG.sheetActive--; sheetPump(); });
  }
}
async function sheetLoadCard(st) {
  var s = st.sheet; if (!s || s.destroyed) return;
  s.loading = true;
  try {
    var name = cardBaseName(st.src || st.url || '');
    var bytes = await readAssetBytes(name); if (!bytes) throw new Error('no bytes');
    var X = await loadXlsx(); if (!X) throw new Error('no xlsx');
    try { await loadFormula(); } catch (e0) {}
    var wb = X.read(bytes, { type: 'array', cellNF: true, cellStyles: true, cellFormula: true, cellText: true });
    if (s.destroyed || !s.wrap.isConnected) return;
    s.wb = wb; s.name = (wb.Sheets[name] ? name : wb.SheetNames[0]);
    sheetRender(st);
  } catch (e) { console.error('[mg] sheet load:', (e && (e.message || e)) || e); sheetFallback(st); }
  finally { s.loading = false; }
}
function sheetFallback(st) {
  var s = st.sheet; if (!s || s.destroyed || !s.wrap) return;
  s.wrap.classList.add('mg-sheet-fallback');
  s.wrap.textContent = cardBaseName(st.src || st.url || '');
}
function setupSheetCard(st) {
  MG.sheetCards.set(st.el, st);
  try { sheetObserver().observe(st.el); } catch (e) {}
  try {
    st.sheet.ro = new (top.ResizeObserver || ResizeObserver)(function () {
      clearTimeout(st.sheet.barsT);
      st.sheet.barsT = setTimeout(function () {
        var w = st.sheet.wrap; if (!w) return;
        var t = w.querySelector('table'); if (!t) return;
        var cg = t.querySelectorAll('colgroup col');
        if (cg.length) sheetBars(st, t, st.sheet.baseCol || 0, (st.sheet.baseCol || 0) + cg.length - 1);
        sheetUpdateBottomClose(st);
      }, 120);
    });
    st.sheet.ro.observe(st.el);
  } catch (e) {}
  try {
    st.sheet.wrap.addEventListener('wheel', function (e) {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault(); e.stopPropagation();
      sheetAdjustFont(st, e.deltaY < 0 ? 1 : -1);
    }, { passive: false });
  } catch (eW) {}
}
var SHEET_FS_MIN = 8, SHEET_FS_MAX = 28, SHEET_FS_DEFAULT = 13;
function sheetApplyFont(st, px) {
  var s = st && st.sheet; if (!s || !s.wrap) return;
  var n = Math.round(px); if (!isFinite(n)) n = SHEET_FS_DEFAULT;
  n = Math.max(SHEET_FS_MIN, Math.min(SHEET_FS_MAX, n));
  s.fs = n;
  try { s.wrap.style.setProperty('--mg-sheet-fs', n + 'px'); } catch (e) {}
}
function sheetAdjustFont(st, delta) {
  var s = st && st.sheet; if (!s) return;
  var cur = s.fs || SHEET_FS_DEFAULT;
  var px = Math.max(SHEET_FS_MIN, Math.min(SHEET_FS_MAX, cur + delta));
  if (px === cur) return;
  sheetApplyFont(st, px);
  if (st.uuid) writeBlock(st.uuid, function (c) { return setPropStr(c, 'mg-font', String(px)); });
  toast(t('sheet_font') + ' ' + px + 'px');
}
function sheetCellText(cell) { if (!cell) return ''; if (cell.w != null) return String(cell.w); if (cell.v != null) return String(cell.v); if (cell.f != null) return '=' + cell.f; return ''; }
function sheetRender(st) {
  var s = st.sheet, X = MG.xlsx; if (!s || s.destroyed || !s.wb || !X) return;
  var wb = s.wb, name = (s.name && wb.Sheets[s.name]) ? s.name : wb.SheetNames[0], ws = wb.Sheets[name];
  var wrap = s.wrap; while (wrap.firstChild) wrap.removeChild(wrap.firstChild);
  wrap.classList.remove('mg-sheet-fallback');
  if (!ws) { sheetFallback(st); return; }
  s.name = name;
  wrap.appendChild(sheetHead(st, wb, name));
  var calc = s.calc = sheetCalcValues(st) || {};
  var ref = X.utils.decode_range(ws['!ref'] || 'A1');
  var R0 = ref.s.r, C0 = ref.s.c, R1 = ref.e.r, C1 = ref.e.c;
  var merges = ws['!merges'] || [], anchor = {}, covered = {}, i;
  for (i = 0; i < merges.length; i++) {
    var mg = merges[i];
    anchor[mg.s.r + '_' + mg.s.c] = { rs: mg.e.r - mg.s.r + 1, cs: mg.e.c - mg.s.c + 1 };
    for (var rr = mg.s.r; rr <= mg.e.r; rr++) for (var cc = mg.s.c; cc <= mg.e.c; cc++) if (rr !== mg.s.r || cc !== mg.s.c) covered[rr + '_' + cc] = 1;
  }
  var table = td().createElement('table'), tbody = td().createElement('tbody');
  table.appendChild(tbody);
  if (s.headers) {
    var hrow = td().createElement('tr'); hrow.className = 'mg-sheet-hrow';
    var corner = td().createElement('th'); corner.className = 'mg-sheet-corner'; hrow.appendChild(corner);
    for (var hc = C0; hc <= C1; hc++) { var hth = td().createElement('th'); hth.textContent = colLetters(hc); hrow.appendChild(hth); }
    tbody.appendChild(hrow);
  }
  for (var r = R0; r <= R1; r++) {
    var tr = td().createElement('tr');
    if (s.headers) { var rh = td().createElement('th'); rh.className = 'mg-sheet-rh'; rh.textContent = String(r + 1); tr.appendChild(rh); }
    for (var c = C0; c <= C1; c++) {
      if (covered[r + '_' + c]) continue;
      var el = td().createElement('td');
      var a = a1addr(r, c), cellVal = ws[a];
      el.textContent = (cellVal && cellVal.f != null && calc[a] !== undefined) ? String(calc[a]) : sheetCellText(cellVal);
      el.dataset.addr = a;
      if (r === R0) el.classList.add('mg-sheet-h');
      var anc = anchor[r + '_' + c];
      if (anc) { if (anc.cs > 1) el.colSpan = anc.cs; if (anc.rs > 1) el.rowSpan = anc.rs; }
      sheetWireCell(st, el);
      tr.appendChild(el);
    }
    tbody.appendChild(tr);
  }
  wrap.appendChild(table);
  sheetApplyCols(st, ws, C0, C1, table);
  sheetBars(st, table, C0, C1);
  s.name = name; s.baseCol = C0; s.baseRow = R0; s.dirty = false; s.edits = {};
  sheetUpdateBottomClose(st);
}
function sheetUpdateBottomClose(st) {
  var s = st && st.sheet; if (!s || !s.wrap) return;
  var tbl = s.wrap.querySelector('table'); if (!tbl) return;
  var head = s.wrap.querySelector('.mg-sheet-head');
  var box = s.wrap.parentElement || s.wrap;
  var avail = (box.clientHeight || s.wrap.clientHeight) - (head ? head.offsetHeight : 0);
  var gap = avail - tbl.offsetHeight;
  tbl.classList.toggle('mg-tbl-closed', gap > 3);
}
function sheetHead(st, wb, name) {
  var head = td().createElement('div'); head.className = 'mg-sheet-head';
  var grip = td().createElement('span'); grip.className = 'mg-sheet-grip'; grip.textContent = '\u283F'; grip.title = t('sheet_grip');
  head.appendChild(grip);
  head.appendChild(sheetTabs(st, wb, name));
  var add = td().createElement('button'); add.className = 'mg-sheet-tab mg-sheet-add'; add.textContent = '+'; add.title = t('new_tab');
  add.addEventListener('mousedown', function (e) { e.stopPropagation(); });
  add.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); sheetAddTab(st); });
  head.appendChild(add);
  var imp = td().createElement('button'); imp.className = 'mg-sheet-tab mg-sheet-add'; imp.textContent = '\u2913'; imp.title = t('import_tab');
  imp.addEventListener('mousedown', function (e) { e.stopPropagation(); });
  imp.addEventListener('click', function (e) {
    e.preventDefault(); e.stopPropagation();
    var inp = td().createElement('input'); inp.type = 'file'; inp.accept = '.xlsx,.xlsm,.xls,.csv';
    inp.style.display = 'none';
    inp.addEventListener('change', function () { if (inp.files && inp.files.length && st.uuid) ingestInto(st.uuid, inp.files); });
    td().body.appendChild(inp); inp.click(); setTimeout(function () { if (inp.parentNode) inp.parentNode.removeChild(inp); }, 0);
  });
  head.appendChild(imp);
  var hd = td().createElement('button'); hd.className = 'mg-sheet-tab mg-sheet-add' + (st.sheet.headers ? ' mg-sheet-tab-on' : ''); hd.textContent = '\u25A6'; hd.title = t('show_headers');
  hd.addEventListener('mousedown', function (e) { e.stopPropagation(); });
  hd.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); st.sheet.headers = !st.sheet.headers; sheetRender(st); });
  head.appendChild(hd);
  return head;
}
function sheetResetWidths(st) { var ws = sheetWS(st); if (ws) delete ws['!cols']; st.sheet.colPx = null; st.sheet.colMin = null; sheetRender(st); st.sheet.dirty = true; sheetScheduleSave(st); }
function sheetDupTab(st, nm) {
  var s = st.sheet, X = MG.xlsx; if (!s || !s.wb || !X || !s.wb.Sheets[nm]) return;
  var base = nm + '_copy', nn = base, i = 1; while (s.wb.SheetNames.indexOf(nn) >= 0) nn = base + (++i);
  var src = s.wb.Sheets[nm], copy = {}; Object.keys(src).forEach(function (k) { copy[k] = k.charAt(0) === '!' ? JSON.parse(JSON.stringify(src[k])) : Object.assign({}, src[k]); });
  s.wb.Sheets[nn] = copy; s.wb.SheetNames.splice(s.wb.SheetNames.indexOf(nm) + 1, 0, nn);
  s.name = nn; s.edits = {}; sheetRender(st); s.dirty = true; sheetSave(st);
}
function sheetMoveTab(st, nm, dir) {
  var s = st.sheet; if (!s || !s.wb) return;
  var i = s.wb.SheetNames.indexOf(nm), j = i + dir; if (i < 0 || j < 0 || j >= s.wb.SheetNames.length) return;
  var arr = s.wb.SheetNames; var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  sheetRender(st); s.dirty = true; sheetSave(st);
}
function sheetPaintTabs(st) {
  var s = st.sheet; if (!s) return;
  Array.prototype.forEach.call(s.wrap.querySelectorAll('.mg-sheet-tab'), function (t) {
    t.classList.toggle('mg-sheet-tab-sel', !!(s.tabSel && s.tabSel.has(t.textContent)));
  });
}
function sheetMoveSel(st, dir) {
  var s = st.sheet, names = s && s.wb ? s.wb.SheetNames : null; if (!names || !s.tabSel) return;
  var idxs = Array.from(s.tabSel).map(function (n) { return names.indexOf(n); }).filter(function (i) { return i >= 0; }).sort(function (a, b) { return a - b; });
  if (!idxs.length) return;
  if (dir < 0 && idxs[0] === 0) return;
  if (dir > 0 && idxs[idxs.length - 1] === names.length - 1) return;
  var order = dir < 0 ? idxs : idxs.slice().reverse();
  order.forEach(function (i) { var j = i + dir; if (j < 0 || j >= names.length) return; var t = names[i]; names[i] = names[j]; names[j] = t; });
  sheetRender(st); s.dirty = true; sheetSave(st);
}
async function sheetDeleteSel(st) {
  var s = st.sheet, names = s && s.wb ? s.wb.SheetNames : null; if (!names || !s.tabSel) return;
  var sel = Array.from(s.tabSel).filter(function (n) { return names.indexOf(n) >= 0; });
  if (!sel.length) return;
  if (names.length - sel.length < 1) { toast(t('sheet_savefail')); return; }
  if (!(await askConfirm(t('del_tab') + ' (' + sel.length + ')?', true))) return;
  sel.forEach(function (n) { delete s.wb.Sheets[n]; });
  s.wb.SheetNames = names.filter(function (n) { return sel.indexOf(n) < 0; });
  if (sel.indexOf(s.name) >= 0) { s.name = s.wb.SheetNames[0]; s.edits = {}; }
  s.tabSel = null; sheetRender(st); s.dirty = true; sheetSave(st);
}
function sheetAddTab(st) {
  var s = st.sheet, X = MG.xlsx; if (!s || !s.wb || !X) return;
  var n = 1, nm; do { nm = 'Tabelle' + (++n); } while (s.wb.SheetNames.indexOf(nm) >= 0);
  X.utils.book_append_sheet(s.wb, X.utils.aoa_to_sheet([['']]), nm);
  s.name = nm; s.edits = {}; sheetRender(st); s.dirty = true; sheetSave(st);
}
function sheetRenameTab(st, old) { var s = st.sheet; if (!s || !s.wb) return; askText(t('rename_tab'), old).then(function (nn) { if (nn == null || nn === '' || nn === old) return; sheetApplyRename(st, old, nn); }); }
function sheetApplyRename(st, old, nn) {
  var s = st.sheet; if (!s || !s.wb) return;
  if (!s.wb.Sheets[old] || s.wb.Sheets[nn]) { toast(t('sheet_savefail') + nn); sheetRender(st); return; }
  s.wb.Sheets[nn] = s.wb.Sheets[old]; delete s.wb.Sheets[old];
  s.wb.SheetNames = s.wb.SheetNames.map(function (x) { return x === old ? nn : x; });
  if (s.name === old) s.name = nn;
  sheetRender(st); s.dirty = true; sheetSave(st);
}
function sheetInlineRename(st, tabEl, old) {
  mgStopKeyBubble(tabEl);
  tabEl.contentEditable = 'true';
  try { var rg = td().createRange(); rg.selectNodeContents(tabEl); var sel = top.getSelection(); sel.removeAllRanges(); sel.addRange(rg); } catch (e) {}
  tabEl.focus();
  function commit(save) {
    tabEl.contentEditable = 'false';
    tabEl.removeEventListener('blur', onBlur); tabEl.removeEventListener('keydown', onKey);
    var nn = (tabEl.textContent || '').trim();
    tabEl.textContent = old;
    if (save && nn && nn !== old) sheetApplyRename(st, old, nn);
  }
  function onBlur() { commit(true); }
  function onKey(e) { if (e.key === 'Enter') { e.preventDefault(); commit(true); } else if (e.key === 'Escape') { e.preventDefault(); commit(false); } }
  tabEl.addEventListener('blur', onBlur); tabEl.addEventListener('keydown', onKey);
}
async function sheetDeleteTab(st, nm) {
  var s = st.sheet, X = MG.xlsx; if (!s || !s.wb || !X) return;
  if (s.wb.SheetNames.length <= 1) return;
  if (!(await askConfirm(t('del_tab') + ' „' + nm + '"?', true))) return;
  delete s.wb.Sheets[nm];
  s.wb.SheetNames = s.wb.SheetNames.filter(function (x) { return x !== nm; });
  if (s.name === nm) { s.name = s.wb.SheetNames[0]; s.edits = {}; }
  sheetRender(st); s.dirty = true; sheetSave(st);
}
function sheetTabs(st, wb, active) {
  var bar = td().createElement('div'); bar.className = 'mg-sheet-tabs';
  var ss = st.sheet;
  wb.SheetNames.forEach(function (nm, idx) {
    var b = td().createElement('button'); b.className = 'mg-sheet-tab' + (nm === active ? ' mg-sheet-tab-on' : '') + (ss.tabSel && ss.tabSel.has(nm) ? ' mg-sheet-tab-sel' : ''); b.textContent = nm;
    b.style.zIndex = nm === active ? '999' : String(idx + 1);
    b.addEventListener('mousedown', function (e) { e.stopPropagation(); });
    b.addEventListener('dblclick', function (e) { e.preventDefault(); e.stopPropagation(); if (ss.tabSel) ss.tabSel = null; sheetInlineRename(st, b, nm); });
    b.addEventListener('contextmenu', function (e) {
      e.preventDefault(); e.stopPropagation();
      var multi = !!(ss.tabSel && ss.tabSel.size > 1 && ss.tabSel.has(nm));
      var items;
      if (multi) {
        items = [
          { label: t('tab_left'), fn: function () { sheetMoveSel(st, -1); } },
          { label: t('tab_right'), fn: function () { sheetMoveSel(st, 1); } },
          { label: t('del_tab') + ' (' + ss.tabSel.size + ')', fn: function () { sheetDeleteSel(st); } }
        ];
      } else {
        items = [
          { label: t('rename_tab'), fn: function () { sheetRenameTab(st, nm); } },
          { label: t('dup_tab'), fn: function () { sheetDupTab(st, nm); } },
          { label: t('tab_left'), fn: function () { sheetMoveTab(st, nm, -1); } },
          { label: t('tab_right'), fn: function () { sheetMoveTab(st, nm, 1); } }
        ];
        if (wb.SheetNames.length > 1) items.push({ label: t('del_tab'), fn: function () { sheetDeleteTab(st, nm); } });
      }
      showPopover(e.clientX, e.clientY, items);
    });
    b.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      if (e.metaKey || e.ctrlKey) { if (!ss.tabSel) ss.tabSel = new Set(); if (ss.tabSel.has(nm)) ss.tabSel.delete(nm); else ss.tabSel.add(nm); if (!ss.tabSel.size) ss.tabSel = null; ss.tabAnchor = nm; sheetPaintTabs(st); return; }
      if (e.shiftKey) { var names = wb.SheetNames, z0 = names.indexOf(ss.tabAnchor != null ? ss.tabAnchor : nm), z1 = names.indexOf(nm); var lo = Math.min(z0, z1), hi = Math.max(z0, z1); ss.tabSel = new Set(names.slice(lo, hi + 1)); sheetPaintTabs(st); return; }
      ss.tabSel = null; ss.tabAnchor = nm;
      if (ss.name === nm) { sheetPaintTabs(st); return; }
      ss.name = nm; ss.edits = {}; sheetRender(st);
    });
    bar.appendChild(b);
  });
  try { var act = bar.querySelector('.mg-sheet-tab-on'); if (act && act.scrollIntoView) setTimeout(function () { try { act.scrollIntoView({ inline: 'nearest', block: 'nearest' }); } catch (e) {} }, 0); } catch (e) {}
  return bar;
}
function sheetColPx(ws, c, fallback) {
  var cp = ws && ws['!cols'] && ws['!cols'][c];
  if (cp) { if (cp.wpx) return Math.round(cp.wpx); if (cp.width) return Math.round(cp.width); if (cp.wch) return Math.round(cp.wch * 7 + 5); }
  return fallback;
}
function sheetWidestRow(table) {
  var tbody = table.tBodies[0], best = null, bestN = -1;
  if (tbody) Array.prototype.forEach.call(tbody.rows, function (r) { var n = r.querySelectorAll('td[data-addr]').length; if (n > bestN) { bestN = n; best = r; } });
  return best;
}
function sheetSetColWidths(table, px) {
  var n = px.length, i;
  var cg = table.querySelector('colgroup'); if (cg) cg.remove();
  cg = td().createElement('colgroup');
  if (table.querySelector('.mg-sheet-hrow')) { var rz = td().createElement('col'); rz.style.width = '34px'; cg.appendChild(rz); }
  for (i = 0; i < n; i++) { var col = td().createElement('col'); if (i < n - 1) col.style.width = mx(px[i]) + 'px'; cg.appendChild(col); }
  table.insertBefore(cg, table.firstChild);
  table.style.tableLayout = 'fixed';
  table.style.width = '100%';
}
function mx(v) { return Math.max(40, Math.round(v || 0)); }
function sheetApplyCols(st, ws, C0, C1, table) {
  var best = sheetWidestRow(table), cells = best ? best.querySelectorAll('td[data-addr]') : [];
  var natural = [], dist = [], i, c;
  table.style.tableLayout = 'auto'; table.style.width = 'auto';
  for (i = 0; i < cells.length; i++) natural.push(Math.max(40, Math.ceil(cells[i].getBoundingClientRect().width) || 60));
  table.style.width = '100%';
  for (i = 0; i < cells.length; i++) dist.push(Math.ceil(cells[i].getBoundingClientRect().width) || 120);
  var px = [];
  for (i = 0, c = C0; c <= C1; c++, i++) px.push(Math.max(40, sheetColPx(ws, c, dist[i] || 120)));
  st.sheet.colMin = natural;
  st.sheet.colPx = px;
  sheetSetColWidths(table, px);
}
function sheetBars(st, table, C0, C1) {
  var wrap = st.sheet.wrap;
  var old = wrap.querySelector('.mg-sheet-bars'); if (old) old.remove();
  var best = sheetWidestRow(table); if (!best) return;
  var cells = best.querySelectorAll('td[data-addr]'); if (cells.length < 2) return;
  var bars = td().createElement('div'); bars.className = 'mg-sheet-bars';
  var trs = Array.prototype.slice.call(table.querySelectorAll('tr'));
  var bw = parseFloat((td().defaultView.getComputedStyle(cells[0]) || {}).borderRightWidth) || 0;
  var occ = []; for (var r0 = 0; r0 < trs.length; r0++) occ.push([]);
  for (var r1 = 0; r1 < trs.length; r1++) {
    var rowcs = trs[r1].querySelectorAll('td,th'), col0 = 0;
    for (var k0 = 0; k0 < rowcs.length; k0++) {
      var cel = rowcs[k0], csp = cel.colSpan || 1, rsp = cel.rowSpan || 1;
      while (occ[r1][col0] !== undefined) col0++;
      for (var dr = 0; dr < rsp && r1 + dr < trs.length; dr++) for (var dc = 0; dc < csp; dc++) occ[r1 + dr][col0 + dc] = cel;
      col0 += csp;
    }
  }
  var colStart = [], cc = 0;
  for (var ci = 0; ci < cells.length; ci++) { colStart.push(cc); cc += (cells[ci].colSpan || 1); }
  var boundaries = [];
  for (var bi = 0; bi < cells.length - 1; bi++) {
    var gi = colStart[bi] + (cells[bi].colSpan || 1) - 1;
    var segs = [], cur = null;
    for (var ri = 0; ri < trs.length; ri++) {
      var ca = occ[ri][gi], cb = occ[ri][gi + 1];
      if (ca && cb && ca !== cb) { if (!cur) cur = { start: trs[ri] }; cur.end = trs[ri]; }
      else if (cur) { segs.push(cur); cur = null; }
    }
    if (cur) segs.push(cur);
    boundaries.push({ i: bi, cell: cells[bi], segs: segs });
  }
  var handles = [];
  function reposition() {
    var bc = bars.getBoundingClientRect();
    var toff = table.offsetTop;
    for (var hi = 0; hi < handles.length; hi++) {
      var hd = handles[hi], b = boundaries[hd._bi];
      if (!b || !hd._seg) { hd.style.display = 'none'; continue; }
      hd.style.display = '';
      hd.style.left = (b.cell.getBoundingClientRect().right - bc.left - hd.offsetWidth / 2) + 'px';
      hd.style.top = (toff + hd._seg.start.offsetTop) + 'px';
      hd.style.height = Math.max(0, (hd._seg.end.offsetTop + hd._seg.end.offsetHeight) - hd._seg.start.offsetTop) + 'px';
    }
    bars.style.height = (table.offsetTop + table.offsetHeight) + 'px';
  }
  function persistCols() {
    var ws = sheetWS(st); if (!ws) return;
    ws['!cols'] = ws['!cols'] || [];
    var arr = [];
    for (var k = 0; k < cells.length; k++) { var w = Math.max(40, Math.round(cells[k].getBoundingClientRect().width)); ws['!cols'][C0 + k] = { wpx: w }; arr.push(w); }
    st.sheet.colPx = arr;
  }
  boundaries.forEach(function (b, bIdx) {
    var onDown = function (e) {
      e.preventDefault(); e.stopPropagation();
      var i = b.i;
      var arr0 = st.sheet.colPx || [], minArr = st.sheet.colMin || [];
      var startX = e.clientX, startW = arr0[i] || 120;
      function mv(ev) {
        var arr = (st.sheet.colPx || []).slice(), n = arr.length; if (!n) return;
        var lo = 40;
        var tw = table.getBoundingClientRect().width;
        var sumOthers = 0, k; for (k = 0; k < n - 1; k++) { if (k !== i) sumOthers += (arr[k] || 120); }
        var minLast = 40;
        var hi = tw - minLast - sumOthers; if (hi < lo) hi = lo;
        arr[i] = Math.max(lo, Math.min(hi, Math.round(startW + (ev.clientX - startX))));
        st.sheet.colPx = arr;
        sheetSetColWidths(table, arr);
        reposition();
      }
      function up() {
        td().removeEventListener('mousemove', mv); td().removeEventListener('mouseup', up);
        persistCols();
        st.sheet.dirty = true; sheetScheduleSave(st);
      }
      td().addEventListener('mousemove', mv); td().addEventListener('mouseup', up);
    };
    b.segs.forEach(function (seg) {
      var hd = td().createElement('div'); hd.className = 'mg-sheet-bar'; hd.dataset.col = String(C0 + b.i);
      hd._bi = bIdx; hd._seg = seg;
      hd.addEventListener('mousedown', onDown);
      bars.appendChild(hd); handles.push(hd);
    });
  });
  wrap.appendChild(bars);
  reposition();
  requestAnimationFrame(function () { reposition(); requestAnimationFrame(reposition); });
  if (st.sheet.barsRo) { try { st.sheet.barsRo.disconnect(); } catch (e) {} }
  try { st.sheet.barsRo = new ResizeObserver(function () { reposition(); }); st.sheet.barsRo.observe(table); } catch (e) {}
}
function mgStopKeyBubble(el) {
  if (!el || el._mgKeyBubble) return;
  el._mgKeyBubble = true;
  // Logseq's goog.ui.KeyboardShortcutHandler also listens to keypress/keyup; block all three
  // so its (global) single-letter flashcard shortcuts never fire while we are editing text.
  ['keydown', 'keypress', 'keyup'].forEach(function (ty) { el.addEventListener(ty, function (e) { e.stopPropagation(); }); });
}
function sheetWireCell(st, el) {
  el._mgSt = st;
  mgStopKeyBubble(el);
  el.addEventListener('mousedown', function (e) { e.stopPropagation(); if (e.button !== 0) return; if (e.detail <= 1 && !e.metaKey && !e.ctrlKey) e.preventDefault(); sheetCellDown(st, el, e); });
  el.addEventListener('click', function (e) {
    if (!st.sheet || st.sheet.destroyed) return;
    if (st.sheet.suppressClick) { st.sheet.suppressClick = false; e.preventDefault(); e.stopPropagation(); return; }
    if (e.metaKey || e.ctrlKey) { e.preventDefault(); e.stopPropagation(); selectToggle(st, e.shiftKey, true); return; }
    if (e.shiftKey) { sheetSelectTo(st, el); e.preventDefault(); e.stopPropagation(); return; }
    if (e.detail >= 2) {
      // Multi-click: keep the cell editable but never reset the selection — the
      // browser natively selects the word (2x) or the whole cell content (3x).
      if (el.__orig == null) el.__orig = el.textContent;
      if (!el.isContentEditable) { el.contentEditable = 'true'; el.classList.add('mg-sheet-edit'); try { el.focus(); } catch (err) {} }
      e.stopPropagation();
      return;
    }
    sheetClearSel(st);
    var shWs = sheetWS(st), cobj = shWs ? shWs[el.dataset.addr] : null;
    if (cobj && cobj.f != null && el.textContent !== '=' + cobj.f) el.textContent = '=' + cobj.f;
    if (el.__orig == null) el.__orig = el.textContent;
    sheetFocusCell(el);
    e.stopPropagation();
  });
  el.addEventListener('blur', function () { sheetEndEdit(st, el); });
  el.addEventListener('keydown', function (e) { sheetCellKey(st, el, e); });
  el.addEventListener('contextmenu', function (e) { if (!st.sheet || st.sheet.destroyed) return; e.preventDefault(); e.stopPropagation(); sheetMenu(st, el, e.clientX, e.clientY); });
  el.addEventListener('input', function () { if (!st.sheet) return; st.sheet.dirty = true; st.sheet.edits[el.dataset.addr] = el.textContent; clearTimeout(st.sheet.calcT); st.sheet.calcT = setTimeout(function () { sheetRecalc(st); }, 150); sheetScheduleSave(st); });
}
function sheetFocusCell(el) {
  if (!el) return;
  try { var st0 = el._mgSt; if (st0) sheetClearSel(st0); } catch (e0) {}
  el.contentEditable = 'true'; el.classList.add('mg-sheet-edit');
  try {
    el.focus();
    var d = td(), rg = d.createRange();
    rg.selectNodeContents(el); rg.collapse(false);
    var sel = top.getSelection ? top.getSelection() : window.getSelection();
    sel.removeAllRanges(); sel.addRange(rg);
  } catch (e) {}
}
function sheetEndEdit(st, el) {
  el.classList.remove('mg-sheet-edit');
  el.contentEditable = 'false';
  var s = st.sheet; if (!s) return;
  var addr = el.dataset.addr, newVal = el.textContent, oldVal = (el.__orig != null ? el.__orig : newVal);
  if (newVal !== oldVal) { s.undo = s.undo || []; s.undo.push({ addr: addr, old: oldVal, new: newVal }); if (s.undo.length > 500) s.undo.shift(); s.redo = []; }
  s.dirty = true;
  s.edits[addr] = newVal;
  el.__orig = newVal;
  sheetRecalc(st);
  sheetScheduleSave(st);
}
function sheetSetCellValue(st, addr, val) {
  var s = st.sheet; if (!s) return;
  var a = String(addr).replace(/"/g, '');
  s.edits[a] = val;
  var el = s.wrap.querySelector('td[data-addr="' + a + '"]');
  if (el) { el.textContent = val; el.__orig = val; }
  s.dirty = true;
  sheetRecalc(st);
  sheetScheduleSave(st);
}
function sheetUndo(st) {
  var s = st.sheet; if (!s || !s.undo || !s.undo.length) return false;
  var e = s.undo.pop(); s.redo = s.redo || []; s.redo.push(e);
  sheetSetCellValue(st, e.addr, e.old); return true;
}
function sheetRedo(st) {
  var s = st.sheet; if (!s || !s.redo || !s.redo.length) return false;
  var e = s.redo.pop(); s.undo = s.undo || []; s.undo.push(e);
  sheetSetCellValue(st, e.addr, e.new); return true;
}
function sheetsGrowMin(st, el) {
  var s = st.sheet, rc = cellRC(el); if (!s || !rc) return;
  var tbl = s.wrap.querySelector('table'), cg = tbl ? tbl.querySelector('colgroup') : null; if (!cg) return;
  if (rc.c >= cg.children.length - 1) return;
  var need = (el.scrollWidth || 0) + 14, cur = (s.colPx || [])[rc.c] || 0, min = (s.colMin || [])[rc.c] || 0;
  if (need > cur) { var arr = (s.colPx || []).slice(); var mr = (s.colMin || []).slice(); arr[rc.c] = need; mr[rc.c] = Math.max(min, need); s.colPx = arr; s.colMin = mr; sheetSetColWidths(tbl, arr); }
}
function sheetCellsOf(el) { return Array.prototype.slice.call(el.closest('table').querySelectorAll('td[data-addr]')); }
function sheetNextCell(el) { var a = sheetCellsOf(el), i = a.indexOf(el); return (i >= 0 && i < a.length - 1) ? a[i + 1] : null; }
function sheetPrevCell(el) { var a = sheetCellsOf(el), i = a.indexOf(el); return i > 0 ? a[i - 1] : null; }
function sheetVertCell(st, el, dr) {
  var s = st.sheet, rc = cellRC(el);
  if (!s || !s.wrap || !rc) return null;
  return s.wrap.querySelector('td[data-addr="' + a1addr(rc.r + dr, rc.c) + '"]') || null;
}
function sheetCaretAtEnd(el) {
  try { var sel = top.getSelection ? top.getSelection() : window.getSelection(); if (!sel.rangeCount) return true; var r = sel.getRangeAt(0), pre = r.cloneRange(); pre.selectNodeContents(el); pre.setEnd(r.endContainer, r.endOffset); return pre.toString().length >= el.textContent.length; } catch (e) { return true; }
}
function sheetCaretAtStart(el) {
  try { var sel = top.getSelection ? top.getSelection() : window.getSelection(); if (!sel.rangeCount) return true; var r = sel.getRangeAt(0), pre = r.cloneRange(); pre.selectNodeContents(el); pre.setEnd(r.startContainer, r.startOffset); return pre.toString().length === 0; } catch (e) { return true; }
}
function sheetCellKey(st, el, e) {
  var s = st.sheet; if (!s) return;
  if ((e.metaKey || e.ctrlKey) && (e.key === 'z' || e.key === 'Z' || e.keyCode === 90)) {
    var zDirty = el.textContent !== (el.__orig != null ? el.__orig : '');
    if (zDirty && !e.shiftKey) return; // let native undo revert the in-progress typing
    e.preventDefault(); e.stopPropagation(); if (e.shiftKey) sheetRedo(st); else sheetUndo(st); return;
  }
  if ((e.metaKey || e.ctrlKey) && (e.key === 'y' || e.key === 'Y' || e.keyCode === 89)) { e.preventDefault(); e.stopPropagation(); sheetRedo(st); return; }
  if (e.key === 'Escape') { e.preventDefault(); el.textContent = el.__orig != null ? el.__orig : ''; el.blur(); return; }
  if (e.key === 'Enter') { e.preventDefault(); var n = sheetNextCell(el); if (n) sheetFocusCell(n); else { var c1 = sheetAddRow(st, el); if (c1) sheetFocusCell(c1); } return; }
  if (e.key === 'ArrowRight') { if (sheetCaretAtEnd(el)) { var nr = sheetNextCell(el); if (nr) { e.preventDefault(); sheetFocusCell(nr); } } return; }
  if (e.key === 'ArrowLeft') { if (sheetCaretAtStart(el)) { var pl = sheetPrevCell(el); if (pl) { e.preventDefault(); sheetFocusCell(pl); } } return; }
  if (e.key === 'ArrowUp') { var uc = sheetVertCell(st, el, -1); if (uc) { e.preventDefault(); sheetFocusCell(uc); } return; }
  if (e.key === 'ArrowDown') { var dc = sheetVertCell(st, el, 1); if (dc) { e.preventDefault(); sheetFocusCell(dc); } return; }
  if (e.key === 'Backspace') {
    if (el.textContent !== '') return;
    var tr = el.parentElement;
    if (el.cellIndex === 0) {
      var emptyRow = true;
      Array.prototype.forEach.call(tr.cells, function (c) { if (c.textContent !== '') emptyRow = false; });
      if (emptyRow && tr.parentElement && tr.parentElement.rows && tr.parentElement.rows.length > 1 && tr.rowIndex > 0) { e.preventDefault(); sheetRowDelete(st, tr.rowIndex, true); }
    } else {
      var pv = sheetPrevCell(el); if (pv) { e.preventDefault(); sheetFocusCell(pv); }
    }
    return;
  }
}
function sheetAddRow(st, fromEl) {
  var s = st.sheet; if (!s || !s.wb || !MG.xlsx) return null;
  var table = fromEl.closest('table'), tbody = table.tBodies[0]; if (!tbody) return null;
  var maxR = s.baseRow || 0, maxC = s.baseCol || 0;
  Array.prototype.forEach.call(table.querySelectorAll('td[data-addr]'), function (x) { var m = /^([A-Z]+)(\d+)$/.exec(x.dataset.addr); if (m) { var rr = parseInt(m[2], 10); var cc = colIdx(m[1]); if (rr > maxR) maxR = rr; if (cc > maxC) maxC = cc; } });
  var cols = maxC - (s.baseCol || 0) + 1;
  var tr = td().createElement('tr');
  for (var i = 0; i < cols; i++) { var el = td().createElement('td'); el.dataset.addr = a1addr(maxR, (s.baseCol || 0) + i); sheetWireCell(st, el); tr.appendChild(el); }
  tbody.appendChild(tr);
  s.dirty = true; sheetScheduleSave(st);
  return tr.cells[0] || null;
}
function sheetWS(st) { var s = st.sheet, X = MG.xlsx; if (!s || !s.wb || !X) return null; var name = (s.name && s.wb.Sheets[s.name]) ? s.name : s.wb.SheetNames[0]; return s.wb.Sheets[name]; }
function sheetShiftCols(ws, at, delta) {
  var X = MG.xlsx, out = {}, keys = Object.keys(ws);
  keys.forEach(function (k) {
    if (k.charAt(0) === '!') { out[k] = ws[k]; return; }
    var a = X.utils.decode_cell(k), c = a.c, nc = c, drop = false;
    if (delta > 0) { if (c >= at) nc = c + 1; }
    else { if (c === at) drop = true; else if (c > at) nc = c - 1; }
    if (drop) return;
    out[X.utils.encode_cell({ r: a.r, c: nc })] = ws[k];
  });
  keys.forEach(function (k) { if (k.charAt(0) !== '!') delete ws[k]; });
  Object.keys(out).forEach(function (k) { if (k.charAt(0) !== '!') ws[k] = out[k]; });
  var ref = ws['!ref'] ? X.utils.decode_range(ws['!ref']) : { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (delta > 0) ref.e.c += 1; else if (ref.e.c > 0) ref.e.c -= 1;
  ws['!ref'] = X.utils.encode_range(ref);
  if (ws['!merges']) ws['!merges'] = ws['!merges'].map(function (m) { var s = { r: m.s.r, c: m.s.c }, e = { r: m.e.r, c: m.e.c }; [s, e].forEach(function (p) { if (delta > 0) { if (p.c >= at) p.c += 1; } else { if (p.c === at) p.c = -1; else if (p.c > at) p.c -= 1; } }); return { s: s, e: e }; }).filter(function (m) { return m.s.c >= 0 && m.e.c >= 0 && m.s.c <= m.e.c; });
}
function sheetShiftRows(ws, at, delta) {
  var X = MG.xlsx, out = {}, keys = Object.keys(ws);
  keys.forEach(function (k) {
    if (k.charAt(0) === '!') { out[k] = ws[k]; return; }
    var a = X.utils.decode_cell(k), r = a.r, nr = r, drop = false;
    if (delta > 0) { if (r >= at) nr = r + 1; }
    else { if (r === at) drop = true; else if (r > at) nr = r - 1; }
    if (drop) return;
    out[X.utils.encode_cell({ r: nr, c: a.c })] = ws[k];
  });
  keys.forEach(function (k) { if (k.charAt(0) !== '!') delete ws[k]; });
  Object.keys(out).forEach(function (k) { if (k.charAt(0) !== '!') ws[k] = out[k]; });
  var ref = ws['!ref'] ? X.utils.decode_range(ws['!ref']) : { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (delta > 0) ref.e.r += 1; else if (ref.e.r > 0) ref.e.r -= 1;
  ws['!ref'] = X.utils.encode_range(ref);
  if (ws['!merges']) ws['!merges'] = ws['!merges'].map(function (m) { var s = { r: m.s.r, c: m.s.c }, e = { r: m.e.r, c: m.e.c }; [s, e].forEach(function (p) { if (delta > 0) { if (p.r >= at) p.r += 1; } else { if (p.r === at) p.r = -1; else if (p.r > at) p.r -= 1; } }); return { s: s, e: e }; }).filter(function (m) { return m.s.r >= 0 && m.e.r >= 0 && m.s.r <= m.e.r; });
}
function sheetStructDone(st) { sheetRender(st); var s = st.sheet; if (s) { s.dirty = true; sheetScheduleSave(st); } }
function sheetColInsert(st, c, after) { var ws = sheetWS(st); if (!ws) return; st.sheet.edits = {}; sheetShiftCols(ws, after ? c + 1 : c, 1); sheetStructDone(st); }
function sheetColDelete(st, c) { var ws = sheetWS(st); if (!ws) return; st.sheet.edits = {}; sheetShiftCols(ws, c, -1); sheetStructDone(st); }
function sheetRowInsert(st, r, after) { var ws = sheetWS(st); if (!ws) return; st.sheet.edits = {}; sheetShiftRows(ws, after ? r + 1 : r, 1); sheetStructDone(st); }
function sheetSwapCols(ws, c1, c2) {
  var X = MG.xlsx, keys = Object.keys(ws).filter(function (k) { return k.charAt(0) !== '!'; }), tmp = {};
  keys.forEach(function (k) { var a = X.utils.decode_cell(k); if (a.c === c1) tmp[X.utils.encode_cell({ r: a.r, c: c2 })] = ws[k]; else if (a.c === c2) tmp[X.utils.encode_cell({ r: a.r, c: c1 })] = ws[k]; });
  keys.forEach(function (k) { var a = X.utils.decode_cell(k); if (a.c === c1 || a.c === c2) delete ws[k]; });
  Object.keys(tmp).forEach(function (k) { ws[k] = tmp[k]; });
  if (ws['!cols']) { var t = ws['!cols'][c1]; ws['!cols'][c1] = ws['!cols'][c2]; ws['!cols'][c2] = t; }
  if (ws['!merges']) ws['!merges'] = ws['!merges'].map(function (m) { function sc(x) { if (x === c1) return c2; if (x === c2) return c1; return x; } var a = sc(m.s.c), b = sc(m.e.c); return { s: { r: m.s.r, c: Math.min(a, b) }, e: { r: m.e.r, c: Math.max(a, b) } }; });
}
function sheetSwapRows(ws, r1, r2) {
  var X = MG.xlsx, keys = Object.keys(ws).filter(function (k) { return k.charAt(0) !== '!'; }), tmp = {};
  keys.forEach(function (k) { var a = X.utils.decode_cell(k); if (a.r === r1) tmp[X.utils.encode_cell({ r: r2, c: a.c })] = ws[k]; else if (a.r === r2) tmp[X.utils.encode_cell({ r: r1, c: a.c })] = ws[k]; });
  keys.forEach(function (k) { var a = X.utils.decode_cell(k); if (a.r === r1 || a.r === r2) delete ws[k]; });
  Object.keys(tmp).forEach(function (k) { ws[k] = tmp[k]; });
  if (ws['!merges']) ws['!merges'] = ws['!merges'].map(function (m) { function sr(x) { if (x === r1) return r2; if (x === r2) return r1; return x; } var a = sr(m.s.r), b = sr(m.e.r); return { s: { r: Math.min(a, b), c: m.s.c }, e: { r: Math.max(a, b), c: m.e.c } }; });
}
function sheetColMove(st, c, dir) {
  var ws = sheetWS(st); if (!ws) return;
  var ref = MG.xlsx.utils.decode_range(ws['!ref'] || 'A1'), t = c + dir;
  if (t < ref.s.c || t > ref.e.c) return;
  st.sheet.edits = {}; sheetSwapCols(ws, c, t); sheetStructDone(st);
}
function sheetRowMove(st, r, dir) {
  var ws = sheetWS(st); if (!ws) return;
  var ref = MG.xlsx.utils.decode_range(ws['!ref'] || 'A1'), t = r + dir;
  if (t < ref.s.r || t > ref.e.r) return;
  st.sheet.edits = {}; sheetSwapRows(ws, r, t); sheetStructDone(st);
}
function sheetRowDelete(st, r, focus) {
  var ws = sheetWS(st); if (!ws) return;
  st.sheet.edits = {};
  sheetShiftRows(ws, r, -1);
  sheetStructDone(st);
  if (!focus) return;
  var s = st.sheet, rows = s.wrap.querySelectorAll('tr');
  var prev = rows[r - 1] || rows[rows.length - 1];
  var el = prev ? Array.prototype.slice.call(prev.cells).pop() : null;
  if (!el) el = s.wrap.querySelector('td[data-addr]');
  if (el) sheetFocusCell(el);
}
function cellRC(el) { var m = /^([A-Z]+)(\d+)$/.exec(el && el.dataset ? el.dataset.addr : ''); if (!m) return null; return { r: parseInt(m[2], 10) - 1, c: colIdx(m[1]) }; }
function sheetCellDown(st, el, e) {
  MG.sheetFocus = st;
  var rc = cellRC(el); if (!rc || !st.sheet || e.metaKey || e.ctrlKey) return;
  var s = st.sheet;
  if (e.shiftKey) { if (!s.anchor) s.anchor = { r: rc.r, c: rc.c }; }
  else { s.anchor = { r: rc.r, c: rc.c }; sheetClearSel(st); }
  if (s.rangeCleanup) s.rangeCleanup();
  var d = td(), startCell = el;
  var pendingCell = null, rafId = 0;
  var flush = function () { rafId = 0; if (pendingCell) sheetSelectTo(st, pendingCell); pendingCell = null; };
  var mv = function (ev) {
    var under = d.elementFromPoint(ev.clientX, ev.clientY);
    var cell = under && under.closest ? under.closest('td[data-addr]') : null;
    if (!cell || cell.closest('.mg-sheet') !== s.wrap) return;
    if (cell === startCell && !s.dragged) return; // Bewegung in derselben Zelle -> native Textselektion
    s.dragged = true;
    pendingCell = cell;
    if (!rafId) rafId = d.defaultView.requestAnimationFrame(flush);
    if (ev.cancelable) ev.preventDefault();
  };
  var up = function () { d.removeEventListener('mousemove', mv, true); d.removeEventListener('mouseup', up, true); s.rangeCleanup = null; if (rafId) { d.defaultView.cancelAnimationFrame(rafId); rafId = 0; } if (pendingCell) { sheetSelectTo(st, pendingCell); pendingCell = null; } if (s.dragged) { s.suppressClick = true; s.dragged = false; } };
  s.rangeCleanup = up;
  d.addEventListener('mousemove', mv, true); d.addEventListener('mouseup', up, true);
}
function sheetSelectTo(st, el) {
  var s = st.sheet, rc = cellRC(el); if (!rc || !s) return;
  if (!s.anchor) s.anchor = rc;
  s.focus = rc;
  var a = s.anchor;
  s.range = { r0: Math.min(a.r, rc.r), r1: Math.max(a.r, rc.r), c0: Math.min(a.c, rc.c), c1: Math.max(a.c, rc.c) };
  sheetPaintSel(st);
}
function sheetPaintSel(st) {
  var s = st.sheet; if (!s || !s.range) return;
  Array.prototype.forEach.call(s.wrap.querySelectorAll('td[data-addr]'), function (t) {
    var rc = cellRC(t); var on = rc && rc.r >= s.range.r0 && rc.r <= s.range.r1 && rc.c >= s.range.c0 && rc.c <= s.range.c1;
    t.classList.toggle('mg-sheet-sel', !!on);
  });
}
function sheetClearSel(st) {
  var s = st.sheet; if (!s) return; s.range = null;
  Array.prototype.forEach.call(s.wrap.querySelectorAll('.mg-sheet-sel'), function (t) { t.classList.remove('mg-sheet-sel'); });
}
// Zellbereich -> TSV (das, was Excel beim Kopieren in die Zwischenablage legt).
function sheetRangeText(st) {
  var s = st.sheet; if (!s || !s.range) return '';
  var rng = s.range, out = [];
  for (var r = rng.r0; r <= rng.r1; r++) {
    var row = [];
    for (var c = rng.c0; c <= rng.c1; c++) {
      var el = s.wrap.querySelector('td[data-addr="' + a1addr(r, c) + '"]');
      var v = el ? el.textContent : ''; if (v == null) v = '';
      if (/[\t\r\n]/.test(v)) v = v.replace(/\t/g, ' ').replace(/[\r\n]+/g, ' ');
      row.push(v);
    }
    out.push(row.join('\t'));
  }
  return out.join('\n');
}
function sheetCopyFallback(text, done) {
  try { var ta = td().createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px'; td().body.appendChild(ta); ta.select(); td().execCommand('copy'); ta.remove(); } catch (e) {}
  if (done) done();
}
function sheetCopyRange(st) {
  var s = st.sheet; if (!s || !s.range) return;
  var text = sheetRangeText(st);
  var done = function () { toast(t('copy_sel_done')); };
  try {
    var nav = top.navigator || navigator;
    if (nav && nav.clipboard && nav.clipboard.writeText) { nav.clipboard.writeText(text).then(done, function () { sheetCopyFallback(text, done); }); return; }
  } catch (e) {}
  sheetCopyFallback(text, done);
}
// Plain-Text -> Matrix (TSV), Leerzeilen/Leerspalten erhalten (im Gegensatz zu clipboardToMatrix).
function plainToMatrix(plain) {
  if (!plain) return null;
  var lines = plain.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length > 1 && lines[lines.length - 1] === '') lines.pop();
  if (!lines.length) return null;
  var mx = lines.map(function (ln) { return ln.split('\t'); });
  if (mx.length === 1 && mx[0].length === 1) return null; // Einzelwert -> native
  return mx;
}
// Matrix ab Startzelle in das aktive Blatt schreiben (Excel-Paste), inkl. Rasterwachstum.
async function sheetPasteMatrix(st, m, startR, startC) {
  if (!st || !st.sheet) return;
  if (!MG.xlsx) { try { await loadXlsx(); } catch (e0) {} }
  if (!st.sheet.wb) { try { await sheetLoadCard(st); } catch (e1) {} }
  var s = st.sheet, X = MG.xlsx; if (!s || !s.wb || !X) return;
  var ws = sheetWS(st); if (!ws) return;
  var ref = X.utils.decode_range(ws['!ref'] || 'A1');
  for (var i = 0; i < m.length; i++) {
    var row = m[i] || [];
    for (var j = 0; j < row.length; j++) {
      var r = startR + i, c = startC + j, a = a1addr(r, c);
      var vs = String(row[j] == null ? '' : row[j]);
      var cell = ws[a]; if (!cell) { cell = { t: 'z' }; ws[a] = cell; }
      if (vs === '') { delete cell.v; delete cell.w; delete cell.f; cell.t = 'z'; }
      else if (vs.charAt(0) === '=') { delete cell.v; delete cell.w; cell.f = vs.slice(1); }
      else if (vs.trim() !== '' && !isNaN(Number(vs))) { cell.v = Number(vs); cell.t = 'n'; delete cell.w; delete cell.f; }
      else { cell.v = vs; cell.t = 's'; delete cell.w; delete cell.f; }
      if (r > ref.e.r) ref.e.r = r;
      if (c > ref.e.c) ref.e.c = c;
    }
  }
  ws['!ref'] = X.utils.encode_range(ref);
  s.dirty = true;
  sheetRender(st);
  sheetScheduleSave(st);
  var fel = s.wrap.querySelector('td[data-addr="' + a1addr(startR, startC) + '"]');
  if (fel) sheetFocusCell(fel);
  toast(t('paste_done'));
}
// Dokumentweiter Capture-Handler: Shift+Pfeil erweitert Auswahl, Cmd/Ctrl+C kopiert den Bereich.
function sheetSelKeyDoc(e) {
  var se = e.target && e.target.closest ? e.target.closest('.mg-sheet') : null;
  var st = (se && se._mgSt) || MG.sheetFocus;
  if (!st || !st.sheet || st.sheet.destroyed || !(st.el && st.el.isConnected)) return;
  var s = st.sheet, inSheet = !!se, mod = e.metaKey || e.ctrlKey, k = e.key;
  if (mod && (k === 'c' || k === 'C')) {
    var sel = top.getSelection ? top.getSelection() : window.getSelection();
    var txtSel = !!(sel && !sel.isCollapsed && String(sel).length > 0);
    if (s.range && !txtSel) { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); sheetCopyRange(st); }
    return;
  }
  if (k === 'Escape' && inSheet && s.range) { e.preventDefault(); e.stopPropagation(); sheetClearSel(st); return; }
}
function sheetMerge(st, rect) {
  var ws = sheetWS(st), X = MG.xlsx; if (!ws || !X) return;
  var mgs = (ws['!merges'] || []).filter(function (m) { return !(m.s.r <= rect.r1 && m.e.r >= rect.r0 && m.s.c <= rect.c1 && m.e.c >= rect.c0); });
  for (var r = rect.r0; r <= rect.r1; r++) for (var c = rect.c0; c <= rect.c1; c++) { if (r === rect.r0 && c === rect.c0) continue; var a = a1addr(r, c); if (ws[a]) delete ws[a]; }
  mgs.push({ s: { r: rect.r0, c: rect.c0 }, e: { r: rect.r1, c: rect.c1 } });
  ws['!merges'] = mgs;
  sheetClearSel(st); sheetRender(st); st.sheet.dirty = true; sheetScheduleSave(st);
}
function sheetUnmerge(st, rect) {
  var ws = sheetWS(st); if (!ws || !ws['!merges']) return;
  ws['!merges'] = ws['!merges'].filter(function (m) { return !(m.s.r <= rect.r1 && m.e.r >= rect.r0 && m.s.c <= rect.c1 && m.e.c >= rect.c0); });
  sheetClearSel(st); sheetRender(st); st.sheet.dirty = true; sheetScheduleSave(st);
}
function sheetMenu(st, el, x, y) {
  if (!MG.xlsx) return;
  var d = MG.xlsx.utils.decode_cell(el.dataset.addr), r = d.r, c = d.c;
  var s = st.sheet, sel = s && s.range;
  var rect = sel ? sel : { r0: r, c0: c, r1: r, c1: c };
  var ws = sheetWS(st);
  var covered = !!(ws && ws['!merges'] && ws['!merges'].some(function (m) { return m.s.r <= rect.r1 && m.e.r >= rect.r0 && m.s.c <= rect.c1 && m.e.c >= rect.c0; }));
  var items = [];
  if (rect.r0 < rect.r1 || rect.c0 < rect.c1) items.push({ label: t('merge_cells'), fn: function () { sheetMerge(st, rect); } });
  if (covered) items.push({ label: t('unmerge_cells'), fn: function () { sheetUnmerge(st, rect); } });
  if (items.length) items.push({ sep: true });
  items.push(
    { label: t('row_above'), fn: function () { sheetRowInsert(st, r, false); } },
    { label: t('row_below'), fn: function () { sheetRowInsert(st, r, true); } },
    { label: t('row_up'), fn: function () { sheetRowMove(st, r, -1); } },
    { label: t('row_down'), fn: function () { sheetRowMove(st, r, 1); } },
    { label: t('row_del'), fn: function () { sheetRowDelete(st, r); } },
    { sep: true },
    { label: t('col_before'), fn: function () { sheetColInsert(st, c, false); } },
    { label: t('col_after'), fn: function () { sheetColInsert(st, c, true); } },
    { label: t('col_left'), fn: function () { sheetColMove(st, c, -1); } },
    { label: t('col_right'), fn: function () { sheetColMove(st, c, 1); } },
    { label: t('col_del'), fn: function () { sheetColDelete(st, c); } },
    { sep: true },
    { label: t('widths_reset'), fn: function () { sheetClearSel(st); sheetResetWidths(st); } },
    { label: t('restore_md'), fn: function () { sheetRestoreMd(st); } },
    { label: t('copy_md'), fn: function () { sheetCopyMarkdown(st); } },
    { sep: true },
    { label: t('finder'), fn: function () { finderFromCard(st); } },
    { label: t('del'), fn: function () { askConfirm(tRemoveSheet(1), true).then(function (ok) { if (ok) deleteCard(st); }); } }
  );
  showPopover(x, y, items);
}
function sheetScheduleSave(st) { var s = st.sheet; if (!s) return; clearTimeout(s.saveTimer); s.saveTimer = setTimeout(function () { sheetSave(st); }, 700); }
function sheetSave(st) {
  var s = st.sheet, X = MG.xlsx; if (!s || s.destroyed || !s.wb || !X || !s.dirty) return;
  if (s.wrap && s.wrap.querySelector('.mg-sheet-edit')) { sheetScheduleSave(st); return; }
  s.dirty = false;
  try {
    var wb = s.wb, name = (s.name && wb.Sheets[s.name]) ? s.name : wb.SheetNames[0], ws = wb.Sheets[name];
    var edits = s.edits || {}, a;
    for (a in edits) {
      if (!Object.prototype.hasOwnProperty.call(edits, a)) continue;
      var v = edits[a], vs = String(v == null ? '' : v), cell = ws[a];
      if (!cell) { cell = { t: 'z' }; ws[a] = cell; }
      if (vs === '') { delete cell.v; delete cell.w; delete cell.f; cell.t = 'z'; }
      else if (vs.charAt(0) === '=') { delete cell.v; delete cell.w; cell.f = vs.slice(1); }
      else if (!isNaN(Number(vs))) { cell.v = Number(vs); cell.t = 'n'; delete cell.w; delete cell.f; }
      else { cell.v = vs; cell.t = 's'; delete cell.w; delete cell.f; }
    }
    s.edits = {};
    var maxR = 0, maxC = 0;
    Array.prototype.forEach.call(s.wrap.querySelectorAll('td[data-addr]'), function (el) { var m = /^([A-Z]+)(\d+)$/.exec(el.dataset.addr); if (m) { var rr = parseInt(m[2], 10) - 1, cc = colIdx(m[1]); if (rr > maxR) maxR = rr; if (cc > maxC) maxC = cc; } });
    ws['!ref'] = X.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: maxR, c: maxC } });
    var out = X.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true });
    var fn = cardBaseName(st.src || st.url || '') || 'sheet.xlsx';
    var file = new File([new Uint8Array(out)], fn, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAsset(fn, file).then(function (ok) { if (ok) toast(t('sheet_saved')); else toast(t('sheet_savefail') + (saveAsset.lastErr || '')); });
  } catch (e) { console.error('[mg] sheet save:', (e && (e.message || e)) || e); toast(t('sheet_savefail') + ((e && e.message) || e)); }
}
async function sheetCopyMarkdown(st) {
  if (!st || !st.sheet) return;
  if (!st.sheet.wb) { await sheetLoadCard(st); }
  var s = st.sheet, X = MG.xlsx;
  if (!s || !s.wb || !X) { toast(t('sheet_savefail')); return; }
  var wb = s.wb, name = (s.name && wb.Sheets[s.name]) ? s.name : wb.SheetNames[0], ws = wb.Sheets[name];
  if (!ws) return;
  var calc = s.calc || {};
  var ref = X.utils.decode_range(ws['!ref'] || 'A1');
  var rows = [];
  for (var r = ref.s.r; r <= ref.e.r; r++) {
    var cells = [];
    for (var c = ref.s.c; c <= ref.e.c; c++) {
      var a = a1addr(r, c), cv = ws[a];
      var txt = (cv && cv.f != null && calc[a] !== undefined) ? String(calc[a]) : sheetCellText(cv);
      cells.push(String(txt == null ? '' : txt).replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' '));
    }
    rows.push('| ' + cells.join(' | ') + ' |');
  }
  if (!rows.length) return;
  var ncol = ref.e.c - ref.s.c + 1;
  var sep = '| ' + new Array(ncol + 1).join('--- |');
  var md = rows[0] + '\n' + sep + (rows.length > 1 ? '\n' + rows.slice(1).join('\n') : '');
  try { await (top.navigator && top.navigator.clipboard ? top.navigator.clipboard.writeText(md) : Promise.reject(new Error('no clipboard'))); }
  catch (e) {
    try { var ta = td().createElement('textarea'); ta.value = md; ta.style.cssText = 'position:fixed;left:-9999px'; td().body.appendChild(ta); ta.select(); td().execCommand('copy'); ta.remove(); } catch (e2) { console.error('[mg] copy md:', (e2 && e2.message) || e2); }
  }
  toast(t('copy_md_done'));
}
function sheetCalcValues(st) {
  var X = MG.xlsx, FP = MG.formula; if (!X || !FP) return null;
  var ws = sheetWS(st); if (!ws) return null;
  var vals = {}, formulas = {};
  Object.keys(ws).forEach(function (k) {
    if (k.charAt(0) === '!') return;
    var cell = ws[k]; if (!cell) return;
    if (cell.f != null) formulas[k] = cell.f;
    else vals[k] = cell.v != null ? cell.v : '';
  });
  var ed = st.sheet && st.sheet.edits;
  if (ed) for (var ea in ed) {
    if (!Object.prototype.hasOwnProperty.call(ed, ea)) continue;
    var evv = ed[ea], evs = String(evv == null ? '' : evv);
    if (evs.charAt(0) === '=') { formulas[ea] = evs.slice(1); delete vals[ea]; }
    else { delete formulas[ea]; vals[ea] = (evs !== '' && !isNaN(Number(evs))) ? Number(evs) : evs; }
  }
  var parser;
  try {
    parser = new FP.Parser();
    parser.on('callCellValue', function (cell, done) { var a = cell && cell.label; done(vals[a] !== undefined ? vals[a] : 0); });
    parser.on('callRangeValue', function (sc, ec, done) {
      var g = [];
      for (var r = sc.row.index; r <= ec.row.index; r++) { var row = []; for (var c = sc.column.index; c <= ec.column.index; c++) { var a = colLetters(c) + (r + 1); row.push(vals[a] !== undefined ? vals[a] : 0); } g.push(row); }
      done(g);
    });
  } catch (e) { return null; }
  var lastChanged = null;
  for (var it = 0; it < 30; it++) {
    var changed = [];
    Object.keys(formulas).forEach(function (a) {
      var res;
      try { res = parser.parse(formulas[a]); }
      catch (e) { var em = (e && e.message) ? String(e.message) : '#ERROR!'; if (vals[a] !== em) { vals[a] = em; changed.push(a); } return; }
      if (res && res.error) { var ee = String(res.error); if (vals[a] !== ee) { vals[a] = ee; changed.push(a); } return; }
      var val = res ? res.result : undefined;
      if (vals[a] !== val) { vals[a] = val; changed.push(a); }
    });
    if (!changed.length) { lastChanged = null; break; }
    lastChanged = changed;
  }
  if (lastChanged) lastChanged.forEach(function (a) { vals[a] = '#CIRC!'; });
  return vals;
}
function sheetRecalc(st) {
  var s = st.sheet, X = MG.xlsx; if (!s || !s.wb || !X || !MG.formula) return;
  var vals = sheetCalcValues(st); if (!vals) return;
  s.calc = vals;
  var ws = sheetWS(st);
  Array.prototype.forEach.call(s.wrap.querySelectorAll('td[data-addr]'), function (el) {
    if (el.isContentEditable || el.classList.contains('mg-sheet-edit')) return;
    var a = el.dataset.addr, cell = ws[a];
    if (cell && cell.f != null && vals[a] !== undefined) { var tv = String(vals[a]); if (el.textContent !== tv) el.textContent = tv; }
  });
}
async function sheetRestoreMd(st) {
  var b = await getBlock(st.uuid); if (!b) return;
  var content = b.content || '';
  var raw = getProp(content, 'mg-mdsrc'); if (!raw) { toast(t('restore_md')); return; }
  var orig = b64dec(String(raw).trim()); if (!orig) return;
  if (!(await askConfirm(t('restore_md') + '?'))) return;
  var refs = findRefs(content), target = null, i;
  for (i = 0; i < refs.length; i++) { if (normSrc(refs[i].src) === normSrc(st.src)) { target = refs[i]; break; } }
  var nc = content;
  if (target) nc = nc.replace(target.exact, orig); else nc = nc + '\n' + orig;
  nc = setPropStr(nc, 'mg-mdsrc', null);
  await upd(st.uuid, nc);
  toast(t('restore_md'));
  schedScan();
}
async function openSheetCard(st) {
  try { if (st.native && st.native.tagName !== 'IMG' && st.native.click) { st.native.click(); return; } } catch (e) {}
  try {
    var vp = await getGraphPath();
    if (vp) {
      var abs = vp.replace(/[\/\\]+$/, '') + '/assets/' + cardBaseName(st.src || st.url || '');
      try { if (top.shell && top.shell.openPath) { top.shell.openPath(abs); return; } } catch (e2) {}
      try { if (top.require) { var sh = top.require('electron').shell; if (sh && sh.openPath) { sh.openPath(abs); return; } } } catch (e3) {}
    }
  } catch (e4) {}
  toast(t('open_pdf_failed'));
}

async function addYoutube(uuid) {
  if (!uuid) { toast(t('no_block')); return; }
  var url = await askText(t('yt_prompt'));
  if (!url) return;
  var canon = ytUrl(url);
  if (!canon) { toast(t('yt_bad')); return; }
  var b = await getBlock(uuid);
  if (b && refsAll(b.content || '').some(function (r) { return r.yt && r.src.indexOf(ytId(canon)) >= 0; })) return;
  await appendInlineMd(uuid, '[YouTube](' + canon + ')');
  schedScan();
}
async function createSheet(uuid) {
  if (!uuid) { toast(t('no_block')); return; }
  var X = await loadXlsx(); if (!X) { toast(t('sheet_savefail') + 'SheetJS'); return; }
  try {
    var wb = X.utils.book_new();
    var ws = X.utils.aoa_to_sheet([['A', 'B', 'C'], ['', '', '']]);
    X.utils.book_append_sheet(wb, ws, 'Tabelle');
    var out = X.write(wb, { bookType: 'xlsx', type: 'array' });
    var nm = 'Tabelle_' + Date.now() + '.xlsx';
    var file = new File([new Uint8Array(out)], nm, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    if (!(await saveAsset(nm, file))) { toast(t('save_failed') + nm + ' [' + saveAsset.lastErr + ']'); return; }
    popMark(nm);
    await appendInlineMd(uuid, '[' + nm + '](../assets/' + nm + ')');
    schedScan();
  } catch (e) { console.error('[mg] createSheet:', (e && (e.message || e)) || e); toast(t('sheet_savefail') + ((e && e.message) || e)); }
}
function b64enc(s) { try { return top.btoa(unescape(encodeURIComponent(s))); } catch (e) { return ''; } }
function b64dec(s) { try { return decodeURIComponent(escape(top.atob(s))); } catch (e) { return ''; } }
async function migrateTableToSheet(uuid, ov) {
  if (!uuid) { toast(t('no_block')); return; }
  var b = await getBlock(uuid); if (!b) return;
  var content = b.content || '';
  var p = parseMdTable(content);
  if (!p) return;
  if (!(await askConfirm(t('migrate_q')))) return;
  var X = await loadXlsx(); if (!X) { toast(t('sheet_savefail') + 'SheetJS'); return; }
  try {
    var matrix = []; if (p.header) matrix.push(p.header.slice()); p.rows.forEach(function (r) { matrix.push(r.slice()); });
    if (!matrix.length) matrix = [['']];
    var wb = X.utils.book_new();
    var ws = X.utils.aoa_to_sheet(matrix);
    if (ov && ov.widths && ov.widths.length) ws['!cols'] = ov.widths.map(function (w) { var n = parseInt(w, 10); return n ? { wpx: n } : {}; });
    X.utils.book_append_sheet(wb, ws, 'Tabelle');
    var out = X.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true });
    var nm = 'Tabelle_' + Date.now() + '.xlsx';
    var file = new File([new Uint8Array(out)], nm, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    if (!(await saveAsset(nm, file))) { toast(t('save_failed') + nm + ' [' + saveAsset.lastErr + ']'); return; }
    popMark(nm);
    var lines = content.split('\n');
    var orig = lines.slice(p.start, p.end + 1).join('\n');
    var link = (p.indent || '') + '[' + nm + '](../assets/' + nm + ')';
    var nc = lines.slice(0, p.start).concat([link]).concat(lines.slice(p.end + 1)).join('\n');
    nc = setPropStr(nc, 'mg-mdsrc', b64enc(orig));
    await upd(uuid, nc);
    toast(t('migrate_toast'));
    schedScan();
  } catch (e) { console.error('[mg] migrate:', (e && (e.message || e)) || e); toast(t('sheet_savefail') + ((e && e.message) || e)); }
}

function clipboardToMatrix(html, plain) {
  if (html && /<table[\s>]/i.test(html)) {
    try {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var tbl = doc.querySelector('table');
      if (tbl) {
        var rows = tbl.querySelectorAll('tr');
        if (rows.length) {
          var mx = [];
          for (var ri = 0; ri < rows.length; ri++) {
            var cells = rows[ri].querySelectorAll('th,td');
            var row = [];
            for (var ci = 0; ci < cells.length; ci++)
              row.push((cells[ci].textContent || '').replace(/\u00a0/g, ' ').trim());
            if (row.length) mx.push(row);
          }
          if (mx.length) return mx;
        }
      }
    } catch (e) { /* fall through to TSV */ }
  }
  if (plain) {
    var lines = plain.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(function (ln) { return ln.length; });
    if (lines.length && lines.some(function (ln) { return ln.indexOf('\t') >= 0; })) {
      var mx2 = lines.map(function (ln) { return ln.split('\t'); });
      var mw = 0; mx2.forEach(function (r) { if (r.length > mw) mw = r.length; });
      mx2.forEach(function (r) { while (r.length < mw) r.push(''); });
      return mx2;
    }
  }
  return null;
}
async function pasteTableToSheet(uuid, matrix) {
  if (!uuid) { toast(t('no_block')); return; }
  var X = await loadXlsx(); if (!X) { toast(t('sheet_savefail') + 'SheetJS'); return; }
  try {
    var wb = X.utils.book_new();
    var ws = X.utils.aoa_to_sheet(matrix);
    X.utils.book_append_sheet(wb, ws, 'Tabelle');
    var out = X.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true });
    var nm = 'Tabelle_' + Date.now() + '.xlsx';
    var file = new File([new Uint8Array(out)], nm, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    if (!(await saveAsset(nm, file))) { toast(t('save_failed') + nm + ' [' + saveAsset.lastErr + ']'); return; }
    popMark(nm);
    await appendInlineMd(uuid, '[' + nm + '](../assets/' + nm + ')');
    toast(t('paste_sheet'));
    schedScan();
  } catch (e) { console.error('[mg] pasteTableToSheet:', (e && (e.message || e)) || e); toast(t('sheet_savefail') + ((e && e.message) || e)); }
}

function copyWorksheet(X, src) {
  var copy = {};
  Object.keys(src).forEach(function (k) {
    copy[k] = k.charAt(0) === '!' ? JSON.parse(JSON.stringify(src[k])) : Object.assign({}, src[k]);
  });
  return copy;
}
async function mergeSheets(arr) {
  arr = (arr || []).filter(function (c) { return c.kind === 'sheet'; });
  if (arr.length < 2) { toast(t('merge_sheets') + ' — 2+'); return; }
  var X = await loadXlsx(); if (!X) { toast(t('sheet_savefail') + 'SheetJS'); return; }
  for (var i = 0; i < arr.length; i++) { if (!arr[i].sheet || !arr[i].sheet.wb) { await sheetLoadCard(arr[i]); } if (!arr[i].sheet || !arr[i].sheet.wb) { toast(t('sheet_savefail')); return; } }
  var merged = X.utils.book_new(), used = {};
  arr.forEach(function (c) {
    var wb = c.sheet.wb;
    wb.SheetNames.forEach(function (nm) {
      var nn = nm, k = 1; while (used[nn]) nn = nm + '_' + (++k); used[nn] = 1;
      X.utils.book_append_sheet(merged, copyWorksheet(X, wb.Sheets[nm]), nn);
    });
  });
  var out = X.write(merged, { bookType: 'xlsx', type: 'array', cellStyles: true });
  var nm = 'Tabelle_' + Date.now() + '.xlsx';
  var file = new File([new Uint8Array(out)], nm, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  if (!(await saveAsset(nm, file))) { toast(t('save_failed') + nm + ' [' + saveAsset.lastErr + ']'); return; }
  popMark(nm);
  var firstUuid = arr[0].uuid;
  await appendInlineMd(firstUuid, '[' + nm + '](../assets/' + nm + ')');
  var byBlock = {}; arr.forEach(function (c) { (byBlock[c.uuid] = byBlock[c.uuid] || []).push(c); });
  for (var u in byBlock) { if (!Object.prototype.hasOwnProperty.call(byBlock, u)) continue; await writeBlock(u, function (content) { byBlock[u].forEach(function (c) { var r = findRef(content, c.src); if (r) content = content.replace(r.exact, ''); }); return content.replace(/[ \t]{2,}/g, ' '); }); }
  var oldFiles = arr.map(function (c) { return cardBaseName(c.src || c.url || ''); }).filter(function (n) { return /\.xlsx$/i.test(n); });
  if (oldFiles.length && await askConfirm(t('del_files_q') + '\n\n' + oldFiles.join('\n'), true)) {
    try { var vp = await getGraphPath(); oldFiles.forEach(function (fn) { unlinkFile(vp, vp + '/assets/' + fn); }); } catch (e) {}
  }
  toast(t('merge_done'));
  schedScan();
}
async function splitSheet(st) {
  if (!st.sheet || !st.sheet.wb) await sheetLoadCard(st);
  if (!st.sheet || !st.sheet.wb) { toast(t('sheet_savefail')); return; }
  var X = MG.xlsx; if (!X) { toast(t('sheet_savefail') + 'SheetJS'); return; }
  var wb = st.sheet.wb;
  if (wb.SheetNames.length < 2) { toast(t('split_single')); return; }
  var oldFn = cardBaseName(st.src || st.url || ''), uuid = st.uuid, links = [];
  for (var i = 0; i < wb.SheetNames.length; i++) {
    var sn = wb.SheetNames[i];
    var nw = X.utils.book_new();
    X.utils.book_append_sheet(nw, copyWorksheet(X, wb.Sheets[sn]), sn);
    var out = X.write(nw, { bookType: 'xlsx', type: 'array', cellStyles: true });
    var fn = 'Tabelle_' + Date.now() + '_' + i + '.xlsx';
    var file = new File([new Uint8Array(out)], fn, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    if (!(await saveAsset(fn, file))) { toast(t('save_failed') + fn + ' [' + saveAsset.lastErr + ']'); continue; }
    popMark(fn);
    links.push('[' + fn + '](../assets/' + fn + ')');
  }
  for (var j = 0; j < links.length; j++) await appendInlineMd(uuid, links[j]);
  await writeBlock(uuid, function (content) { var r = findRef(content, st.src); if (r) content = content.replace(r.exact, ''); return content.replace(/[ \t]{2,}/g, ' '); });
  if (oldFn && /\.xlsx$/i.test(oldFn) && await askConfirm(t('del_files_q') + '\n\n' + oldFn, true)) {
    try { var vp = await getGraphPath(); unlinkFile(vp, vp + '/assets/' + oldFn); } catch (e) {}
  }
  toast(t('split_done'));
  schedScan();
}

async function mergePdfs(arr) {
  arr = (arr || []).filter(function (c) { return c.kind === 'pdf'; });
  if (arr.length < 2) { toast(t('merge_pdfs') + ' — 2+'); return; }
  var byBlock = {};
  arr.forEach(function (c) { var u = c.uuid; if (!u) return; if (!byBlock[u]) byBlock[u] = []; byBlock[u].push(normSrc(c.src || c.url || '')); });
  for (var u in byBlock) {
    if (!Object.prototype.hasOwnProperty.call(byBlock, u)) continue;
    var srcs = byBlock[u]; var srcSet = {}; srcs.forEach(function (s) { srcSet[s] = 1; });
    await writeBlock(u, function (c) {
      var gid = nextGroupId(c, 'pdfgroup');
      return refsRewrite(c, function (r) {
        if (!/\.pdf($|[?#])/i.test(r.src)) return null;
        if (!srcSet[normSrc(r.src)]) return null;
        r.mgm = Object.assign({}, r.mgm, { grp: gid });
        return r;
      });
    });
  }
  toast(t('merge_pdfs_done'));
  schedScan();
}
async function splitPdf(st) {
  if (!st || st.kind !== 'pdf' || !st.uuid) return;
  if (!(st.pdfs && st.pdfs.length > 1)) { toast(t('pdf_single')); return; }
  var grp = st.group || '';
  await writeBlock(st.uuid, function (c) {
    var stripped = refsRewrite(c, function (r) {
      if (!/\.pdf($|[?#])/i.test(r.src)) return null;
      if (grp && grp !== '_legacy' && r.mgm && r.mgm.grp === grp) { r.mgm = Object.assign({}, r.mgm, { grp: null }); return r; }
      return null;
    });
    if (!grp || grp === '_legacy') stripped = setPropStr(stripped, 'mg-pdfgroup', '');
    return stripped;
  });
  toast(t('split_pdfs_done'));
  schedScan();
}
async function mergeImgs(arr) {
  arr = (arr || []).filter(function (c) { return c.kind === 'img'; });
  if (arr.length < 2) { toast(t('merge_imgs') + ' — 2+'); return; }
  var byBlock = {};
  arr.forEach(function (c) { var u = c.uuid; if (!u) return; if (!byBlock[u]) byBlock[u] = []; byBlock[u].push(normSrc(c.src || c.url || '')); });
  for (var u in byBlock) {
    if (!Object.prototype.hasOwnProperty.call(byBlock, u)) continue;
    var srcs = byBlock[u]; var srcSet = {}; srcs.forEach(function (s) { srcSet[s] = 1; });
    await writeBlock(u, function (c) {
      var gid = nextGroupId(c, 'imggroup');
      return refsRewrite(c, function (r) {
        if (!/\.(png|jpe?g|gif|webp|svg|bmp|avif)($|[?#])/i.test(r.src)) return null;
        if (!srcSet[normSrc(r.src)]) return null;
        r.mgm = Object.assign({}, r.mgm, { grp: gid });
        return r;
      });
    });
  }
  toast(t('merge_imgs_done'));
  schedScan();
}
async function splitImgs(st) {
  if (!st || st.kind !== 'img' || !st.uuid) return;
  if (!(st.images && st.images.length > 1)) { toast(t('img_single')); return; }
  var grp = st.group || '';
  await writeBlock(st.uuid, function (c) {
    var stripped = refsRewrite(c, function (r) {
      if (!/\.(png|jpe?g|gif|webp|svg|bmp|avif)($|[?#])/i.test(r.src)) return null;
      if (grp && grp !== '_legacy' && r.mgm && r.mgm.grp === grp) { r.mgm = Object.assign({}, r.mgm, { grp: null }); return r; }
      return null;
    });
    if (!grp || grp === '_legacy') stripped = setPropStr(stripped, 'mg-imggroup', '');
    return stripped;
  });
  toast(t('split_imgs_done'));
  schedScan();
}
function ytTitleCache() {
  if (MG.ytTitles) return MG.ytTitles;
  MG.ytTitles = {};
  try { var s = top.localStorage.getItem('mg-yt-titles'); if (s) MG.ytTitles = JSON.parse(s) || {}; } catch (e) {}
  return MG.ytTitles;
}
function ytCacheTitle(yid, title) {
  if (!yid || !title) return;
  var c = ytTitleCache(); if (c[yid] === title) return;
  c[yid] = title;
  try { top.localStorage.setItem('mg-yt-titles', JSON.stringify(c)); } catch (e) {}
}
function ytFetchTitle(yid) {
  return new Promise(function (resolve) {
    var url = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + encodeURIComponent(yid) + '&format=json';
    try {
      var https = top.require('https');
      var req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function (res) {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          https.get(res.headers.location, function (r2) { var b = ''; r2.on('data', function (c) { b += c; }); r2.on('end', function () { try { resolve(JSON.parse(b).title || ''); } catch (e) { resolve(''); } }); }).on('error', function () { resolve(''); });
          return;
        }
        var data = '';
        res.on('data', function (c) { data += c; });
        res.on('end', function () { try { resolve(JSON.parse(data).title || ''); } catch (e) { resolve(''); } });
      });
      req.on('error', function () { resolve(''); });
      req.setTimeout(8000, function () { try { req.destroy(); } catch (e) {} resolve(''); });
      return;
    } catch (e) {}
    try {
      fetch(url).then(function (r) { return r.json(); }).then(function (d) { resolve((d && d.title) || ''); }).catch(function () { resolve(''); });
    } catch (e) { resolve(''); }
  });
}
function ytRenderTabs(st) {
  if (!st.ytHead) return;
  st.ytHead.innerHTML = '';
  var grip = td().createElement('span'); grip.className = 'mg-sheet-grip'; grip.textContent = '\u283F'; grip.title = 'YouTube';
  st.ytHead.appendChild(grip);
  st.ytVideos.forEach(function (v, i) {
    var tab = td().createElement('button'); tab.className = 'mg-yt-tab' + (i === st.ytActive ? ' mg-yt-tab-on' : '');
    tab.textContent = v.title || v.yid || '?';
    tab.title = v.src;
    tab.addEventListener('mousedown', function (ev) { ev.preventDefault(); ev.stopPropagation(); });
    tab.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); ytActivate(st, i); });
    tab.addEventListener('contextmenu', function (ev) {
      ev.preventDefault(); ev.stopPropagation();
      var items = [
        { label: LANG === 'de' ? 'Tab nach links' : 'Move tab left', fn: function () { ytMoveTab(st, i, -1); } },
        { label: LANG === 'de' ? 'Tab nach rechts' : 'Move tab right', fn: function () { ytMoveTab(st, i, 1); } }
      ];
      if (st.ytVideos.length > 1) items.push({ label: LANG === 'de' ? 'Tab löschen' : 'Delete tab', fn: function () { ytDelTab(st, i); } });
      else items.push({ label: LANG === 'de' ? 'Video löschen' : 'Delete video', fn: function () { deleteCards([st]); } });
      showPopover(ev.clientX, ev.clientY, items);
    });
    st.ytHead.appendChild(tab);
    if (!v.title && v.yid && !v._fetching) {
      v._fetching = true;
      ytFetchTitle(v.yid).then(function (t) { v._fetching = false; if (t) { v.title = t; ytCacheTitle(v.yid, t); if (tab.isConnected) tab.textContent = t; } });
    }
  });
  var addBtn = td().createElement('button'); addBtn.className = 'mg-yt-tab mg-sheet-add'; addBtn.textContent = '+'; addBtn.style.marginLeft = 'auto';
  addBtn.addEventListener('mousedown', function (ev) { ev.preventDefault(); ev.stopPropagation(); });
  addBtn.addEventListener('click', function (ev) {
    ev.preventDefault(); ev.stopPropagation();
    askText(LANG === 'de' ? 'YouTube URL eingeben' : 'Enter YouTube URL').then(function (u) {
      if (!u) return;
      var yi = ytId(u);
      if (yi && !st.ytVideos.some(function (v) { return v.yid === yi; })) {
        st.ytVideos.push({ src: ytUrl(u) || u, yid: yi, title: ytTitleCache()[yi] || '' });
        ytRenderTabs(st); ytActivate(st, st.ytVideos.length - 1);
        ytPersist(st);
      }
    });
  });
  st.ytHead.appendChild(addBtn);
}
function ytMoveTab(st, idx, dir) {
  var ni = idx + dir;
  if (ni < 0 || ni >= st.ytVideos.length) return;
  var tmp = st.ytVideos[idx]; st.ytVideos[idx] = st.ytVideos[ni]; st.ytVideos[ni] = tmp;
  if (st.ytActive === idx) st.ytActive = ni;
  else if (st.ytActive === ni) st.ytActive = idx;
  ytRenderTabs(st); ytActivate(st, st.ytActive);
  ytPersistOrder(st);
}
function ytDelTab(st, idx) {
  if (st.ytVideos.length <= 1) return;
  var removed = st.ytVideos.splice(idx, 1)[0];
  if (st.ytActive >= st.ytVideos.length) st.ytActive = st.ytVideos.length - 1;
  if (st.ytActive > idx) st.ytActive--;
  ytRenderTabs(st); ytActivate(st, st.ytActive);
  ytRemoveFromBlock(st, removed);
}
function ytRemoveFromBlock(st, v) {
  if (!st.uuid || !v || !v.yid) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c);
    var result = c, done = false;
    refs.forEach(function (r) {
      if (done) return;
      if (r.yt && r.src && r.src.indexOf(v.yid) >= 0) { result = result.replace(r.exact, ''); done = true; }
    });
    result = result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
    return result;
  }).then(function () { schedScan(); });
}
function ytPersistOrder(st) {
  if (!st.uuid) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c);
    var ytRefs = refs.filter(function (r) { return r.yt; });
    if (ytRefs.length <= 1) return null;
    var result = c, n = 0;
    ytRefs.forEach(function (r) { result = result.replace(r.exact, '\u0001' + (n++) + '\u0001'); });
    var ordered = st.ytVideos.map(function (v) {
      var match = ytRefs.find(function (r) { return r.src && r.src.indexOf(v.yid) >= 0; });
      return match ? match.exact : '';
    }).filter(Boolean);
    result = result.replace(/\u0001(\d+)\u0001/g, function (m, d) { return ordered[+d] || ''; });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
  }).then(function () { schedScan(); });
}
function ytPersist(st) {
  if (!st.uuid) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c), ytRefs = refs.filter(function (r) { return r.yt; });
    var existing = ytRefs.map(function (r) { return r.exact; });
    var add = '';
    st.ytVideos.forEach(function (v) {
      var found = existing.some(function (ex) { return ex.indexOf(v.yid) >= 0; });
      if (!found) add += (add ? ' ' : '') + '[YouTube](https://youtu.be/' + v.yid + ')';
    });
    if (!add) return null;
    var lines = c.split('\n');
    var inserted = false;
    for (var i = 0; i < lines.length; i++) {
      if (refsAll(lines[i]).some(function (r) { return r.yt; })) { lines[i] += ' ' + add; inserted = true; break; }
    }
    if (!inserted) { if (lines.length) lines[0] += ' ' + add; else lines.push('- ' + add); }
    return lines.join('\n');
  }).then(function () { schedScan(); });
}
function ytActivate(st, idx) {
  if (!st.ytVideos[idx]) return;
  st.ytActive = idx;
  var v = st.ytVideos[idx];
  st.src = v.src; st.url = st.src; try { st.el.dataset.src = st.src; } catch (e) {}
  var old = st.ytBody.querySelector('.mg-yt-frame');
  if (old) old.remove();
  var ifr = td().createElement('iframe'); ifr.className = 'mg-yt-frame';
  ifr.src = 'https://www.youtube.com/embed/' + v.yid + '?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&showinfo=0';
  ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen');
  ifr.setAttribute('allowfullscreen', '1');
  ifr.setAttribute('frameborder', '0');
  ifr.setAttribute('loading', 'lazy');
  ifr.draggable = false;
  st.ytBody.insertBefore(ifr, st.ytShield);
  ytRenderTabs(st);
}
function vidRenderTabs(st) {
  if (!st.vidHead) return;
  st.vidHead.innerHTML = '';
  var grip = td().createElement('span'); grip.className = 'mg-sheet-grip'; grip.textContent = '\u283F'; grip.title = t('video');
  st.vidHead.appendChild(grip);
  st.videos.forEach(function (v, i) {
    var tab = td().createElement('button'); tab.className = 'mg-video-tab' + (i === st.vidActive ? ' mg-video-tab-on' : '');
    tab.textContent = v.name || cardBaseName(v.src) || '?';
    tab.title = v.src;
    tab.addEventListener('mousedown', function (ev) { ev.preventDefault(); ev.stopPropagation(); });
    tab.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); vidActivate(st, i); });
    tab.addEventListener('dblclick', function (ev) { ev.preventDefault(); ev.stopPropagation(); vidRenameTab(st, i); });
    tab.addEventListener('contextmenu', function (ev) {
      ev.preventDefault(); ev.stopPropagation();
      var items = [
        { label: LANG === 'de' ? 'Tab nach links' : 'Move tab left', fn: function () { vidMoveTab(st, i, -1); } },
        { label: LANG === 'de' ? 'Tab nach rechts' : 'Move tab right', fn: function () { vidMoveTab(st, i, 1); } }
      ];
      if (st.videos.length > 1) items.push({ label: LANG === 'de' ? 'Video entfernen' : 'Remove video', fn: function () { vidDelTab(st, i); } });
      else items.push({ label: t('del'), fn: function () { deleteCards([st]); } });
      showPopover(ev.clientX, ev.clientY, items);
    });
    st.vidHead.appendChild(tab);
  });
  var addBtn = td().createElement('button'); addBtn.className = 'mg-video-tab mg-sheet-add'; addBtn.textContent = '+'; addBtn.style.marginLeft = 'auto'; addBtn.title = t('add_video');
  addBtn.addEventListener('mousedown', function (ev) { ev.preventDefault(); ev.stopPropagation(); });
  addBtn.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); pickFilesInto(st.uuid, VIDEO_ACCEPT); });
  st.vidHead.appendChild(addBtn);
}
function vidActivate(st, idx) {
  if (!st.videos || !st.videos[idx]) return;
  st.vidActive = idx;
  var v = st.videos[idx];
  st.src = v.src; st.url = v.url; try { st.el.dataset.src = st.src; } catch (e) {}
  var old = st.vidBody.querySelector('.mg-video-frame');
  if (old) { try { old.pause(); } catch (e0) {} if (old._mgObjUrl) { try { URL.revokeObjectURL(old._mgObjUrl); } catch (e1) {} } old.remove(); }
  var ve = td().createElement('video');
  ve.className = 'mg-video-frame';
  ve.controls = true; ve.preload = 'metadata';
  ve.setAttribute('playsinline', '1');
  st.vidBody.appendChild(ve);
  ve.addEventListener('loadedmetadata', function () { try { if (!st.manualSized) applyGridPos(st, gridMetrics(st.stage)); } catch (e) {} });
  var fn = cardBaseName(v.src || v.url);
  readAssetBytes(fn).then(function (bytes) {
    if (!ve.isConnected) return;
    if (bytes && bytes.length) { var u = URL.createObjectURL(bytesToBlob(bytes, fn)); ve._mgObjUrl = u; ve.src = u; }
    else { ve.src = v.url || ('assets://' + fn); }
  }).catch(function () { try { ve.src = v.url || ('assets://' + fn); } catch (e) {} });
  vidRenderTabs(st);
}
function vidRenameTab(st, idx) {
  var v = st.videos[idx];
  if (!v || !st.uuid) return;
  askText(LANG === 'de' ? 'Tab-Name:' : 'Tab name:', v.name || cardBaseName(v.src)).then(function (nm) {
    if (nm == null) return;
    nm = String(nm).trim();
    if (!nm) return;
    v.name = nm;
    vidRenderTabs(st);
    writeBlock(st.uuid, function (c) {
      return refsRewrite(c, function (r) {
        if (!VIDEO_EXT.test(r.src)) return null;
        if (normSrc(r.src) !== normSrc(v.src)) return null;
        r.alt = nm;
        r.pdfLink = true; // force link syntax so the name survives a rebuild (image-syntax <img> has no textContent)
        return r;
      });
    }).then(function () { schedScan(); });
  });
}
function vidMoveTab(st, idx, dir) {
  var ni = idx + dir;
  if (ni < 0 || ni >= st.videos.length) return;
  var tmp = st.videos[idx]; st.videos[idx] = st.videos[ni]; st.videos[ni] = tmp;
  if (st.vidActive === idx) st.vidActive = ni;
  else if (st.vidActive === ni) st.vidActive = idx;
  vidRenderTabs(st); vidActivate(st, st.vidActive);
  vidPersistOrder(st);
}
function vidDelTab(st, idx) {
  if (st.videos.length <= 1) return;
  var removed = st.videos.splice(idx, 1)[0];
  if (st.vidActive >= st.videos.length) st.vidActive = st.videos.length - 1;
  if (st.vidActive > idx) st.vidActive--;
  vidRenderTabs(st); vidActivate(st, st.vidActive);
  vidRemoveFromBlock(st, removed);
}
function vidRemoveFromBlock(st, v) {
  if (!st.uuid || !v) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c), result = c, done = false;
    refs.forEach(function (r) {
      if (done) return;
      if (VIDEO_EXT.test(r.src) && normSrc(r.src) === normSrc(v.src)) { result = result.replace(r.exact, ''); done = true; }
    });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
  }).then(function () { schedScan(); });
}
function vidPersistOrder(st) {
  if (!st.uuid) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c);
    var vrefs = refs.filter(function (r) { return VIDEO_EXT.test(r.src); });
    if (vrefs.length <= 1) return null;
    var result = c, n = 0;
    vrefs.forEach(function (r) { result = result.replace(r.exact, '\u0001' + (n++) + '\u0001'); });
    var ordered = st.videos.map(function (v) {
      var match = vrefs.find(function (r) { return normSrc(r.src) === normSrc(v.src); });
      return match ? match.exact : '';
    }).filter(Boolean);
    result = result.replace(/\u0001(\d+)\u0001/g, function (m, d) { return ordered[+d] || ''; });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
  }).then(function () { schedScan(); });
}
function pdfRenderTabs(st) {
  var p = st.pdf; if (!p || !p.head) return;
  p.head.innerHTML = '';
  var grip = td().createElement('span'); grip.className = 'mg-sheet-grip'; grip.textContent = '\u283F'; grip.title = t('pdf');
  p.head.appendChild(grip);
  st.pdfs.forEach(function (v, i) {
    var tab = td().createElement('button'); tab.className = 'mg-pdf-tab' + (i === st.pdfActive ? ' mg-pdf-tab-on' : '');
    tab.textContent = v.name || cardBaseName(v.src) || '?'; tab.title = v.src;
    tab.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); });
    tab.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); pdfActivatePdf(st, i); });
    tab.addEventListener('dblclick', function (e) { e.preventDefault(); e.stopPropagation(); pdfRenameTab(st, i); });
    tab.addEventListener('contextmenu', function (e) {
      e.preventDefault(); e.stopPropagation();
      var items = [
        { label: LANG === 'de' ? 'Tab nach links' : 'Move tab left', fn: function () { pdfMoveTab(st, i, -1); } },
        { label: LANG === 'de' ? 'Tab nach rechts' : 'Move tab right', fn: function () { pdfMoveTab(st, i, 1); } }
      ];
      if (st.pdfs.length > 1) items.push({ label: LANG === 'de' ? 'PDF entfernen' : 'Remove PDF', fn: function () { pdfDelTab(st, i); } });
      else items.push({ label: t('del'), fn: function () { deleteCards([st]); } });
      showPopover(e.clientX, e.clientY, items);
    });
    p.head.appendChild(tab);
  });
  var addBtn = td().createElement('button'); addBtn.className = 'mg-pdf-tab mg-sheet-add'; addBtn.textContent = '+'; addBtn.style.marginLeft = 'auto'; addBtn.title = t('add_pdf');
  addBtn.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); });
  addBtn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); pickFilesInto(st.uuid, 'application/pdf'); });
  p.head.appendChild(addBtn);
}
function pdfActivatePdf(st, idx) {
  if (!st.pdfs || !st.pdfs[idx]) return;
  st.pdfActive = idx;
  var v = st.pdfs[idx], p = st.pdf;
  if (p.doc) { try { p.doc.destroy(); } catch (e) {} p.doc = null; }
  if (p.pageObs) { try { p.pageObs.disconnect(); } catch (e) {} p.pageObs = null; }
  p.slots = null;
  try { p.wrap.textContent = ''; } catch (e) {}
  st.src = v.src; st.url = v.url;
  try { st.el.dataset.src = st.src; } catch (e) {}
  pdfLoadCard(st);
  pdfRenderTabs(st);
}
function pdfMoveTab(st, idx, dir) {
  var ni = idx + dir; if (ni < 0 || ni >= st.pdfs.length) return;
  var tmp = st.pdfs[idx]; st.pdfs[idx] = st.pdfs[ni]; st.pdfs[ni] = tmp;
  if (st.pdfActive === idx) st.pdfActive = ni; else if (st.pdfActive === ni) st.pdfActive = idx;
  pdfRenderTabs(st); pdfActivatePdf(st, st.pdfActive);
  pdfPersistOrder(st);
}
function pdfDelTab(st, idx) {
  if (st.pdfs.length <= 1) return;
  var removed = st.pdfs.splice(idx, 1)[0];
  if (st.pdfActive >= st.pdfs.length) st.pdfActive = st.pdfs.length - 1;
  if (st.pdfActive > idx) st.pdfActive--;
  pdfRenderTabs(st); pdfActivatePdf(st, st.pdfActive);
  if (st.pdfs.length <= 1 && st.uuid) { var gp0 = st.group || ''; writeBlock(st.uuid, function (c) { var stripped = refsRewrite(c, function (r) { if (!/\.pdf($|[?#])/i.test(r.src)) return null; if (gp0 && gp0 !== '_legacy' && r.mgm && r.mgm.grp === gp0) { r.mgm = Object.assign({}, r.mgm, { grp: null }); return r; } return null; }); if (!gp0 || gp0 === '_legacy') stripped = setPropStr(stripped, 'mg-pdfgroup', ''); return stripped; }); }
  pdfRemoveFromBlock(st, removed);
}
function pdfRemoveFromBlock(st, v) {
  if (!st.uuid || !v) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c), result = c, done = false;
    refs.forEach(function (r) {
      if (done) return;
      if (/\.pdf($|[?#])/i.test(r.src) && normSrc(r.src) === normSrc(v.src)) { result = result.replace(r.exact, ''); done = true; }
    });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
  }).then(function () { schedScan(); });
}
function pdfPersistOrder(st) {
  if (!st.uuid) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c), prefs = refs.filter(function (r) { return /\.pdf($|[?#])/i.test(r.src); });
    if (prefs.length <= 1) return null;
    var result = c, n = 0;
    prefs.forEach(function (r) { result = result.replace(r.exact, '\u0001' + (n++) + '\u0001'); });
    var ordered = st.pdfs.map(function (v) { var m = prefs.find(function (r) { return normSrc(r.src) === normSrc(v.src); }); return m ? m.exact : ''; }).filter(Boolean);
    result = result.replace(/\u0001(\d+)\u0001/g, function (m, d) { return ordered[+d] || ''; });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
  }).then(function () { schedScan(); });
}
function pdfRenameTab(st, idx) {
  var v = st.pdfs[idx]; if (!v || !st.uuid) return;
  askText(LANG === 'de' ? 'Tab-Name:' : 'Tab name:', v.name || cardBaseName(v.src)).then(function (nm) {
    if (nm == null) return; nm = String(nm).trim(); if (!nm) return;
    v.name = nm; pdfRenderTabs(st);
    writeBlock(st.uuid, function (c) {
      return refsRewrite(c, function (r) {
        if (!/\.pdf($|[?#])/i.test(r.src)) return null;
        if (normSrc(r.src) !== normSrc(v.src)) return null;
        r.alt = nm; r.pdfLink = true; return r;
      });
    }).then(function () { schedScan(); });
  });
}
function imgRenderTabs(st) {
  var h = st.imgHead; if (!h) return;
  h.innerHTML = '';
  var grip = td().createElement('span'); grip.className = 'mg-sheet-grip'; grip.textContent = '\u283F'; grip.title = t('image');
  h.appendChild(grip);
  st.images.forEach(function (v, i) {
    var tab = td().createElement('button'); tab.className = 'mg-img-tab' + (i === st.imgActive ? ' mg-img-tab-on' : '');
    tab.textContent = v.name || cardBaseName(v.src) || '?'; tab.title = v.src;
    tab.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); });
    tab.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); imgActivateImg(st, i); });
    tab.addEventListener('dblclick', function (e) { e.preventDefault(); e.stopPropagation(); imgRenameTab(st, i); });
    tab.addEventListener('contextmenu', function (e) {
      e.preventDefault(); e.stopPropagation();
      var items = [
        { label: LANG === 'de' ? 'Tab nach links' : 'Move tab left', fn: function () { imgMoveTab(st, i, -1); } },
        { label: LANG === 'de' ? 'Tab nach rechts' : 'Move tab right', fn: function () { imgMoveTab(st, i, 1); } }
      ];
      if (st.images.length > 1) items.push({ label: LANG === 'de' ? 'Bild entfernen' : 'Remove image', fn: function () { imgDelTab(st, i); } });
      else items.push({ label: t('del'), fn: function () { deleteCards([st]); } });
      showPopover(e.clientX, e.clientY, items);
    });
    h.appendChild(tab);
  });
  var add = td().createElement('button'); add.className = 'mg-img-tab mg-sheet-add'; add.textContent = '+'; add.style.marginLeft = 'auto'; add.title = t('add_image');
  add.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); });
  add.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); pickFilesInto(st.uuid, 'image/*'); });
  h.appendChild(add);
}
function imgActivateImg(st, i) {
  if (!st.images || !st.images[i]) return;
  st.imgActive = i;
  var v = st.images[i];
  st.src = v.src; st.url = v.url; st.alt = v.name;
  try { if (st.imgEl) st.imgEl.src = v.src; st.el.dataset.src = st.src; } catch (e) {}
  imgRenderTabs(st);
}
function imgMoveTab(st, idx, dir) {
  var ni = idx + dir; if (ni < 0 || ni >= st.images.length) return;
  var tmp = st.images[idx]; st.images[idx] = st.images[ni]; st.images[ni] = tmp;
  if (st.imgActive === idx) st.imgActive = ni; else if (st.imgActive === ni) st.imgActive = idx;
  imgRenderTabs(st); imgActivateImg(st, st.imgActive);
  imgPersistOrder(st);
}
function imgDelTab(st, idx) {
  if (st.images.length <= 1) return;
  var removed = st.images.splice(idx, 1)[0];
  if (st.imgActive >= st.images.length) st.imgActive = st.images.length - 1;
  if (st.imgActive > idx) st.imgActive--;
  imgRenderTabs(st); imgActivateImg(st, st.imgActive);
  if (st.images.length <= 1 && st.uuid) { var gi0 = st.group || ''; writeBlock(st.uuid, function (c) { var stripped = refsRewrite(c, function (r) { if (!/\.(png|jpe?g|gif|webp|svg|bmp|avif)($|[?#])/i.test(r.src)) return null; if (gi0 && gi0 !== '_legacy' && r.mgm && r.mgm.grp === gi0) { r.mgm = Object.assign({}, r.mgm, { grp: null }); return r; } return null; }); if (!gi0 || gi0 === '_legacy') stripped = setPropStr(stripped, 'mg-imggroup', ''); return stripped; }); }
  imgRemoveFromBlock(st, removed);
}
function imgRemoveFromBlock(st, v) {
  if (!st.uuid || !v) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c), result = c, done = false;
    refs.forEach(function (r) {
      if (done) return;
      if (/\.(png|jpe?g|gif|webp|bmp|avif)($|[?#])/i.test(r.src) && normSrc(r.src) === normSrc(v.src)) { result = result.replace(r.exact, ''); done = true; }
    });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
  }).then(function () { schedScan(); });
}
function imgPersistOrder(st) {
  if (!st.uuid) return;
  writeBlock(st.uuid, function (c) {
    var refs = refsAll(c), irefs = refs.filter(function (r) { return /\.(png|jpe?g|gif|webp|bmp|avif)($|[?#])/i.test(r.src); });
    if (irefs.length <= 1) return null;
    var result = c, n = 0;
    irefs.forEach(function (r) { result = result.replace(r.exact, '\u0001' + (n++) + '\u0001'); });
    var ordered = st.images.map(function (v) { var m = irefs.find(function (r) { return normSrc(r.src) === normSrc(v.src); }); return m ? m.exact : ''; }).filter(Boolean);
    result = result.replace(/\u0001(\d+)\u0001/g, function (m, d) { return ordered[+d] || ''; });
    return result.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '');
  }).then(function () { schedScan(); });
}
function imgRenameTab(st, idx) {
  var v = st.images[idx]; if (!v || !st.uuid) return;
  askText(LANG === 'de' ? 'Tab-Name:' : 'Tab name:', v.name || cardBaseName(v.src)).then(function (nm) {
    if (nm == null) return; nm = String(nm).trim(); if (!nm) return;
    v.name = nm; if (st.imgActive === idx) st.alt = nm; imgRenderTabs(st);
    writeBlock(st.uuid, function (c) {
      return refsRewrite(c, function (r) {
        if (!/\.(png|jpe?g|gif|webp|bmp|avif)($|[?#])/i.test(r.src)) return null;
        if (normSrc(r.src) !== normSrc(v.src)) return null;
        r.alt = nm; return r;
      });
    }).then(function () { schedScan(); });
  });
}
function makeCard(st) {
  var d = td(), el = d.createElement('div'); el.className = 'mg-card'; el.dataset.src = st.src;
  var img = null;
  if (st.kind === 'pdf') {
    var pout = d.createElement('div'); pout.className = 'mg-pdf';
    mgStopKeyBubble(pout);
    var phead = null;
    if (st.pdfs && st.pdfs.length > 1) {
      phead = d.createElement('div'); phead.className = 'mg-pdf-head';
      phead.addEventListener('mousedown', function (ev) { if (!MG.sel.has(st)) { deselectAll(); MG.sel.add(st); st.el.classList.add('mg-sel'); MG.anchor = st; } });
      pout.appendChild(phead);
    }
    var pbody = d.createElement('div'); pbody.className = 'mg-pdf-body';
    pout.appendChild(pbody);
    el.appendChild(pout);
    st.pdf = { wrap: pbody, head: phead, outer: pout, doc: null, slots: null, destroyed: false, loading: false, queued: false, visible: false, pageObs: null, ro: null, rt: 0, baseAR: 1.414, lastW: 0 };
    st.pdfs = (st.pdfs && st.pdfs.length) ? st.pdfs : [{ src: st.src, url: st.url, name: cardBaseName(st.url || st.src) }];
    st.pdfActive = 0;
    if (phead) { pdfRenderTabs(st); pdfActivatePdf(st, 0); }
    st.img = null;
  } else if (st.kind === 'sheet') {
    var swrap = d.createElement('div'); swrap.className = 'mg-sheet'; swrap.tabIndex = 0;
    el.appendChild(swrap);
    mgStopKeyBubble(swrap);
    st.sheet = { wrap: swrap, wb: null, name: '', destroyed: false, loading: false, queued: false, visible: false, ro: null, saveTimer: 0, dirty: false };
    swrap._mgSt = st;
    st.img = null;
  } else if (st.kind === 'yt') {
    var ywrap = d.createElement('div'); ywrap.className = 'mg-yt';
    mgStopKeyBubble(ywrap);
    var yhead = d.createElement('div'); yhead.className = 'mg-yt-head';
    yhead.addEventListener('mousedown', function (ev) {
      if (!MG.sel.has(st)) { deselectAll(); MG.sel.add(st); st.el.classList.add('mg-sel'); MG.anchor = st; }
    });
    var ybody = d.createElement('div'); ybody.className = 'mg-yt-body';
    var ysh = d.createElement('div'); ysh.className = 'mg-yt-shield';
    ybody.appendChild(ysh);
    ywrap.appendChild(yhead);
    ywrap.appendChild(ybody);
    el.appendChild(ywrap);
    st.ytWrap = ywrap; st.ytHead = yhead; st.ytBody = ybody; st.ytShield = ysh;
    st.ytVideos = (st.ytAllVideos || [{ src: st.src, yid: ytId(st.src) }]).map(function (v) { var yid = v.yid || ytId(v.src); return { src: v.src, yid: yid, title: v.title || ytTitleCache()[yid] || '' }; });
    st.ytActive = 0;
    ytRenderTabs(st);
    ytActivate(st, 0);
    st.img = null;
  } else if (st.kind === 'video') {
    var vwrap = d.createElement('div'); vwrap.className = 'mg-video';
    mgStopKeyBubble(vwrap);
    var vhead = d.createElement('div'); vhead.className = 'mg-video-head';
    vhead.addEventListener('mousedown', function (ev) {
      if (!MG.sel.has(st)) { deselectAll(); MG.sel.add(st); st.el.classList.add('mg-sel'); MG.anchor = st; }
    });
    var vbody = d.createElement('div'); vbody.className = 'mg-video-body';
    vwrap.appendChild(vhead);
    vwrap.appendChild(vbody);
    el.appendChild(vwrap);
    st.vidWrap = vwrap; st.vidHead = vhead; st.vidBody = vbody;
    st.videos = (st.videos && st.videos.length) ? st.videos : [{ src: st.src, url: st.url, name: cardBaseName(st.url || st.src) }];
    st.vidActive = 0;
    vidRenderTabs(st);
    vidActivate(st, 0);
    st.img = null;
  } else if (st.images && st.images.length > 1) {
    var iwrap = d.createElement('div'); iwrap.className = 'mg-img-group';
    mgStopKeyBubble(iwrap);
    var ihead = d.createElement('div'); ihead.className = 'mg-img-head';
    ihead.addEventListener('mousedown', function (ev) { if (!MG.sel.has(st)) { deselectAll(); MG.sel.add(st); st.el.classList.add('mg-sel'); MG.anchor = st; } });
    var ibody = d.createElement('div'); ibody.className = 'mg-img-body';
    img = d.createElement('img'); img.className = 'mg-img'; img.draggable = false; img.src = st.images[0].src;
    ibody.appendChild(img);
    iwrap.appendChild(ihead); iwrap.appendChild(ibody);
    el.appendChild(iwrap);
    st.imgHead = ihead; st.imgBody = ibody; st.imgEl = img;
    st.imgActive = 0;
    imgRenderTabs(st); imgActivateImg(st, 0);
  } else {
    img = d.createElement('img'); img.className = 'mg-img'; img.src = st.url; img.draggable = false;
    el.appendChild(img);
  }
  var ctl = d.createElement('div'); ctl.className = 'mg-card-corner mg-card-corner-tl'; el.appendChild(ctl);
  var ctr = d.createElement('div'); ctr.className = 'mg-card-corner mg-card-corner-tr'; el.appendChild(ctr);
  var cbl = d.createElement('div'); cbl.className = 'mg-card-corner mg-card-corner-bl'; el.appendChild(cbl);
  var cbr = d.createElement('div'); cbr.className = 'mg-card-corner mg-card-corner-br'; el.appendChild(cbr);
  var et = d.createElement('div'); et.className = 'mg-card-edge mg-card-edge-t'; el.appendChild(et);
  var eb = d.createElement('div'); eb.className = 'mg-card-edge mg-card-edge-b'; el.appendChild(eb);
  var el2 = d.createElement('div'); el2.className = 'mg-card-edge mg-card-edge-l'; el.appendChild(el2);
  var er = d.createElement('div'); er.className = 'mg-card-edge mg-card-edge-r'; el.appendChild(er);
  st.el = el; st.img = img;
  if (st.kind === 'pdf') setupPdfCard(st);
  else if (st.kind === 'sheet') setupSheetCard(st);
  if (st.lockBlock) el.setAttribute('data-mg-lblock', '1');
  if (st.lockPos) el.setAttribute('data-mg-lpos', '1');
  if (st.lockSize) el.setAttribute('data-mg-lsize', '1');
  wireCard(st);
  return st;
}
function wireCard(st) {
  setupDrag(st);
  setupResize(st);
  st.el.addEventListener('contextmenu', function (e) { e.preventDefault(); e.stopPropagation(); showPopover(e.clientX, e.clientY, menuItems(st)); });
}
var LB = { box: null, cards: [], idx: 0, scale: 1, tx: 0, ty: 0, img: null, cap: null, drag: null };
function lightboxShow(idx) {
  if (!LB.cards.length) return;
  LB.idx = (idx + LB.cards.length) % LB.cards.length;
  var card = LB.cards[LB.idx];
  LB.scale = 1; LB.tx = 0; LB.ty = 0;
  LB.img.src = card.st.url || card.st.src;
  LB.cap.textContent = card.st.alt || card.st.el.dataset.src || '';
  lightboxTransform();
}
function lightboxTransform() { LB.img.style.transform = 'translate(' + LB.tx + 'px,' + LB.ty + 'px) scale(' + LB.scale + ')'; }
function lightboxNav(delta) { lightboxShow(LB.idx + delta); }
function openLightbox(cv, st) {
  var cards = (cv._cards || []).filter(function (c) { return c.kind !== 'pdf' && c.kind !== 'sheet' && c.kind !== 'yt' && c.kind !== 'video'; });
  if (!cards.some(function (c) { return c === st; })) return;
  var d = td();
  if (!LB.box) {
    var box = d.createElement('div');
    box.style.cssText = 'position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;';
    var img = d.createElement('img');
    img.style.cssText = 'max-width:92vw;max-height:92vh;object-fit:contain;transition:transform .08s ease-out;will-change:transform;';
    var cap = d.createElement('div');
    cap.style.cssText = 'position:fixed;left:0;right:0;bottom:0;text-align:center;padding:8px 12px;color:#eee;font-size:13px;background:rgba(0,0,0,.5);pointer-events:none;';
    box.appendChild(img); box.appendChild(cap);
    d.body.appendChild(box);
    LB.box = box; LB.img = img; LB.cap = cap;
    img.addEventListener('wheel', function (e) {
      e.preventDefault(); e.stopPropagation();
      var ns = Math.min(8, Math.max(0.2, LB.scale * (e.deltaY < 0 ? 1.25 : 0.8)));
      if (ns === LB.scale) return;
      var r = img.getBoundingClientRect();
      var cx = e.clientX - (r.left + r.width / 2), cy = e.clientY - (r.top + r.height / 2);
      var k = ns / LB.scale;
      LB.tx = cx - k * (cx - LB.tx); LB.ty = cy - k * (cy - LB.ty);
      LB.scale = ns; lightboxTransform();
    }, { passive: false });
    box.addEventListener('mousedown', function (e) {
      e.preventDefault(); e.stopPropagation();
      if (LB.scale <= 1) { closeLightbox(); return; }
      var px = e.clientX, py = e.clientY, ox = LB.tx, oy = LB.ty;
      var mv = function (ev) { LB.tx = ox + (ev.clientX - px); LB.ty = oy + (ev.clientY - py); lightboxTransform(); };
      var mu = function () { d.removeEventListener('mousemove', mv); d.removeEventListener('mouseup', mu); };
      d.addEventListener('mousemove', mv); d.addEventListener('mouseup', mu);
    });
    var kl = function (ev) {
      if (!LB.box || LB.box.style.display === 'none') return;
      if (ev.key === 'Escape') { ev.preventDefault(); closeLightbox(); }
      else if (ev.key === 'ArrowRight') { ev.preventDefault(); lightboxNav(1); }
      else if (ev.key === 'ArrowLeft') { ev.preventDefault(); lightboxNav(-1); }
    };
    d.addEventListener('keydown', kl, true);
    LB.killKeys = kl;
  }
  LB.cards = cards.map(function (c) { return { st: c }; });
  LB.box.style.display = 'flex';
  lightboxShow(Math.max(0, cards.indexOf(st)));
}
function closeLightbox() {
  if (!LB.box) return;
  LB.box.style.display = 'none';
  LB.cards = []; LB.scale = 1; LB.tx = 0; LB.ty = 0;
  if (LB.killKeys) { td().removeEventListener('keydown', LB.killKeys, true); LB.killKeys = null; }
}
function setupDrag(st) {
  st.el.addEventListener('mousedown', function (e) {
    if (e.button !== 0 || st.lockBlock) return;
    if (e.target && e.target.classList && (e.target.classList.contains('mg-card-corner') || e.target.classList.contains('mg-card-edge'))) return;
    if (e.target && e.target.closest && e.target.closest('.mg-sheet') && !e.target.closest('.mg-sheet-head')) return;
    if (e.target && e.target.closest && e.target.closest('video')) return;
    e.preventDefault();
    e.stopPropagation();
    bringFront(st);
    var d = td(), sx = e.clientX, sy = e.clientY, started = false, ghost = null, shadows = [];
    var sr1 = st.el.getBoundingClientRect(), grabX = e.clientX - sr1.left, grabY = e.clientY - sr1.top;
    var selCards = (MG.sel.size > 1 && MG.sel.has(st)) ? Array.from(MG.sel) : [st];
    var startPos, anchorOffC = 0, anchorOffR = 0;
    if (selCards.length > 1) {
      var ordered = selCards.slice().sort(function (a, b) {
        var ra = a.el.getBoundingClientRect(), rb = b.el.getBoundingClientRect();
        if (Math.abs(ra.top - rb.top) > 4) return ra.top - rb.top;
        return ra.left - rb.left;
      });
      var tileSize = SPAN_MIN, tileCols = Math.max(1, Math.ceil(Math.sqrt(ordered.length)));
      startPos = ordered.map(function (c, i) {
        return { c: c.c, r: c.r, card: c, offC: (i % tileCols) * tileSize, offR: Math.floor(i / tileCols) * tileSize };
      });
      startPos.forEach(function (sp) { if (sp.card === st) { anchorOffC = sp.offC; anchorOffR = sp.offR; } });
    } else {
      startPos = [{ c: st.c, r: st.r, card: st, offC: 0, offR: 0 }];
    }
    function begin() {
      if (st.lockPos) return;
      started = true; st.el.classList.add('mg-drag'); st.el.style.opacity = '0';
      dragShieldOn();
      d.querySelectorAll('.mg-ghost').forEach(function (g) { g.remove(); });
      selCards.forEach(function (c) { if (!c.manualSized) effectiveSpan(c); c.manualSized = true; });
      if (startPos.length > 1) selCards.forEach(function (c) { c.spanCx = SPAN_MIN; c.spanCy = SPAN_MIN; });
      ghost = st.el.cloneNode(true); ghost.className = 'mg-ghost'; ghost.style.position = 'fixed';
      ghost.querySelectorAll('iframe').forEach(function (f) { if (f.parentNode) f.parentNode.removeChild(f); });
      ghost.querySelectorAll('video').forEach(function (vid) { if (vid.parentNode) vid.parentNode.removeChild(vid); });
      (function () { var pw = ghost.querySelector('.mg-pdf'); if (pw) { pw.textContent = ''; pw.style.background = 'var(--ls-secondary-background-color,#fafafa)'; } })();
      ghost.style.opacity = '0.5'; ghost.style.pointerEvents = 'none'; ghost.style.zIndex = '99999';
      ghost.style.width = st.el.offsetWidth + 'px'; ghost.style.height = st.el.offsetHeight + 'px';
      ghost.style.gridColumn = ''; ghost.style.gridRow = '';
      ghost.style.boxShadow = '0 6px 18px rgba(0,0,0,.3)'; ghost.style.borderRadius = '8px';
      d.body.appendChild(ghost);
      shadows = startPos.map(function () { var sh = td().createElement('div'); sh.className = 'mg-dropshadow'; sh.style.display = 'none'; if (st.cv) st.cv.appendChild(sh); return sh; });
      d.querySelectorAll('.mg-stage').forEach(function (sg) { sg.classList.add('mg-grid-visible'); sg.style.setProperty('--mg-cell-size', CELL_PX + 'px'); });
    }
    function mv(ev) {
      var dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (!started && Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      if (!started) begin();
      if (!started) return;
      if (ghost) { ghost.style.left = (ev.clientX - grabX) + 'px'; ghost.style.top = (ev.clientY - grabY) + 'px'; }
      if (st.stage && st.cv) {
        var sg = st.stage.getBoundingClientRect(), cvr = st.cv.getBoundingClientRect(), gm = gridMetrics(st.stage);
        var baseC = Math.round((ev.clientX - grabX - sg.left) / CELL_T) + 1 - anchorOffC;
        var baseR = Math.round((ev.clientY - grabY - sg.top) / CELL_T) + 1 - anchorOffR;
        startPos.forEach(function (sp, idx) {
          var sh = shadows[idx]; if (!sh) return;
          var card = sp.card, cx = card.spanCx || SPAN_DEFAULT_CX, cy = card.spanCy || SPAN_DEFAULT_CY;
          var newC = Math.min(Math.max(1, baseC + sp.offC), Math.max(1, gm.cols - cx + 1));
          var newR = Math.min(Math.max(1, baseR + sp.offR), Math.max(1, gm.rows - cy + 1));
          sh.style.display = '';
          sh.style.left = ((sg.left - cvr.left) + (newC - 1) * CELL_T) + 'px';
          sh.style.top = ((sg.top - cvr.top) + (newR - 1) * CELL_T) + 'px';
          sh.style.width = (cx * CELL_T - GAP_PX) + 'px';
          sh.style.height = (cy * CELL_T - GAP_PX) + 'px';
        });
      }
    }
    function up(ev) {
      dragShieldOff();
      d.removeEventListener('mousemove', mv); d.removeEventListener('mouseup', up);
      st.el.classList.remove('mg-drag'); st.el.style.opacity = '';
      if (ghost) ghost.remove();
      shadows.forEach(function (sh) { if (sh && sh.parentNode) sh.parentNode.removeChild(sh); });
      d.querySelectorAll('.mg-stage.mg-grid-visible').forEach(function (sg) { sg.classList.remove('mg-grid-visible'); });
      st.el.classList.add('mg-settle'); setTimeout(function () { st.el.classList.remove('mg-settle'); }, 300);
      if (!started) { selectToggle(st, ev.shiftKey, ev.ctrlKey || ev.metaKey); applyZ(st.cv._cards); return; }
      var stack = td().elementsFromPoint ? td().elementsFromPoint(ev.clientX, ev.clientY) : [d.elementFromPoint(ev.clientX, ev.clientY)];
      var tcv = null, zn = null, k;
      for (k = 0; k < stack.length; k++) { var e2 = stack[k]; if (!e2 || !e2.closest) continue; if (!tcv) { var c2 = e2.closest('.mg-canvas'); if (c2) tcv = c2; } if (!zn) { var z2 = e2.closest('.mg-emptyzone'); if (z2) zn = z2; } if (tcv || zn) break; }
      var srcUuid = st.cv && st.cv.dataset ? st.cv.dataset.uuid : null;
      if (tcv && tcv !== st.cv && tcv.dataset.uuid) { crossBlockMove(st, tcv.dataset.uuid); return; }
      if (zn && zn.dataset.mgMacroUuid && zn.dataset.mgMacroUuid !== srcUuid) { crossBlockMove(st, zn.dataset.mgMacroUuid); return; }
      var ddx = ev.clientX - sx, ddy = ev.clientY - sy;
      if (Math.abs(ddx) >= 5 || Math.abs(ddy) >= 5) {
        var sg = st.stage.getBoundingClientRect();
        var gm = gridMetrics(st.stage);
        var baseC = Math.round((ev.clientX - grabX - sg.left) / CELL_T) + 1 - anchorOffC;
        var baseR = Math.round((ev.clientY - grabY - sg.top) / CELL_T) + 1 - anchorOffR;
        (st.cv._cards || []).forEach(function (card) {
          if (card.c == null && card.el) { var cr = card.el.getBoundingClientRect(); card.c = Math.max(1, Math.round((cr.left - sg.left) / CELL_T) + 1); card.r = Math.max(1, Math.round((cr.top - sg.top) / CELL_T) + 1); }
        });
        startPos.forEach(function (sp) {
          var card = sp.card;
          if (card.lockPos) return;
          var newC = Math.max(1, baseC + sp.offC), newR = Math.max(1, baseR + sp.offR);
          card.c = Math.max(1, Math.min(newC, gm.cols - (card.spanCx || SPAN_DEFAULT_CX) + 1));
          card.r = Math.max(1, Math.min(newR, gm.rows - (card.spanCy || SPAN_DEFAULT_CY) + 1));
          applyGridPos(card, gm);
        });
      }
      commitSize(st);
      selCards.forEach(function (card) { if (card !== st && card.manualSized) commitSize(card); });
      applyZ(st.cv._cards);
      var W = Math.round(st.cv.offsetWidth), H = Math.round(st.cv.offsetHeight);
      writeBlock(st.cv.dataset.uuid, function (c) { return setPropStr(setPropStr(c, 'mg-ch', String(H)), 'mg-cw', String(W)); });
    }
    d.addEventListener('mousemove', mv); d.addEventListener('mouseup', up);
  });
}
function setupResize(st) {
  var corners = [
    { sel: '.mg-card-corner-br', dx: 1, dy: 1 },
    { sel: '.mg-card-corner-tl', dx: -1, dy: -1 },
    { sel: '.mg-card-corner-tr', dx: 1, dy: -1 },
    { sel: '.mg-card-corner-bl', dx: -1, dy: 1 },
    { sel: '.mg-card-edge-r', dx: 1, dy: 0 },
    { sel: '.mg-card-edge-l', dx: -1, dy: 0 },
    { sel: '.mg-card-edge-b', dx: 0, dy: 1 },
    { sel: '.mg-card-edge-t', dx: 0, dy: -1 }
  ];
  corners.forEach(function (c) {
    var el = st.el.querySelector(c.sel);
    if (!el) return;
    el.addEventListener('mousedown', function (e) {
      if (st.lockBlock || st.lockSize) return; e.preventDefault(); e.stopPropagation();
      bringFront(st);
      dragShieldOn();
      var selCards = (MG.sel.size > 1 && MG.sel.has(st)) ? Array.from(MG.sel) : [st];
      selCards.forEach(function (card) {
        if (!card.manualSized) effectiveSpan(card);
        card.manualSized = true;
      });
      var srect0 = st.stage.getBoundingClientRect();
      (st.cv._cards || []).forEach(function (card) {
        if (!card.manualSized) effectiveSpan(card);
        if (card.c == null) card.c = Math.max(1, Math.round((card.el.getBoundingClientRect().left - srect0.left) / CELL_T) + 1);
        if (card.r == null) card.r = Math.max(1, Math.round((card.el.getBoundingClientRect().top - srect0.top) / CELL_T) + 1);
        card.spanCx = card.spanCx || SPAN_DEFAULT_CX;
        card.spanCy = card.spanCy || SPAN_DEFAULT_CY;
        card.manualSized = true;
      });
      st.stage.classList.add('mg-grid-visible');
      st.stage.style.setProperty('--mg-cell-size', CELL_PX + 'px');
      var d = td(), sx = e.clientX, sy = e.clientY;
      var ratio = (st.spanCx || SPAN_DEFAULT_CX) / (st.spanCy || SPAN_DEFAULT_CY);
      var ox = st.cropOx != null ? st.cropOx : 50, oy = st.cropOy != null ? st.cropOy : 50;
      var startOx = ox, startOy = oy;
      function mv(ev) {
        var gm = gridMetrics(st.stage);
        var cards = st.cv._cards || [];
        var rawDx = ev.clientX - sx, rawDy = ev.clientY - sy;
        var dcx = 0, dcy = 0;
        if (c.dx > 0) dcx = Math.round(rawDx / CELL_PX);
        if (c.dx < 0) dcx = -Math.round(rawDx / CELL_PX);
        if (c.dy > 0) dcy = Math.round(rawDy / CELL_PX);
        if (c.dy < 0) dcy = -Math.round(rawDy / CELL_PX);
        if (dcx !== 0 || dcy !== 0) {
          if (st.aspectLock) { if (dcx !== 0) dcy = Math.round(dcx / ratio); else dcx = Math.round(dcy * ratio); }
          var prev = cards.map(function (card) { return (card.spanCx || SPAN_DEFAULT_CX) + ',' + (card.spanCy || SPAN_DEFAULT_CY); });
          selCards.forEach(function (card) {
            var oldSpanCx = card.spanCx || SPAN_DEFAULT_CX, oldSpanCy = card.spanCy || SPAN_DEFAULT_CY;
            card.spanCx = Math.min(gm.cols, Math.max(SPAN_MIN, oldSpanCx + dcx));
            card.spanCy = Math.min(gm.rows, Math.max(SPAN_MIN, oldSpanCy + dcy));
            if (c.dx < 0 && card.c != null) card.c = Math.max(1, card.c + (oldSpanCx - card.spanCx));
            if (c.dy < 0 && card.r != null) card.r = Math.max(1, card.r + (oldSpanCy - card.spanCy));
            var dOx = c.dx * dcx, dOy = c.dy * dcy;
            var cox = Math.max(0, Math.min(100, (card.cropOx != null ? card.cropOx : 50) + dOx));
            var coy = Math.max(0, Math.min(100, (card.cropOy != null ? card.cropOy : 50) + dOy));
            card.cropOx = cox; card.cropOy = coy;
            var img = card.el.querySelector('img');
            if (img) img.style.objectPosition = cox + '% ' + coy + '%';
          });
          if (st.c != null) st.c = Math.max(1, Math.min(st.c, gm.cols - (st.spanCx || SPAN_DEFAULT_CX) + 1));
          if (st.r != null) st.r = Math.max(1, Math.min(st.r, gm.rows - (st.spanCy || SPAN_DEFAULT_CY) + 1));
          var changed = 0;
          cards.forEach(function (card, i) {
            var now = (card.spanCx || SPAN_DEFAULT_CX) + ',' + (card.spanCy || SPAN_DEFAULT_CY);
            if (now !== prev[i]) { changed++; card.el.classList.add('mg-changed'); setTimeout(function () { card.el.classList.remove('mg-changed'); }, 400); }
            applyGridPos(card, gm);
          });
          sx = ev.clientX; sy = ev.clientY;
        }
      }
      function up() {
        dragShieldOff();
        d.removeEventListener('mousemove', mv); d.removeEventListener('mouseup', up);
        st.stage.classList.remove('mg-grid-visible');
        st.el.classList.add('mg-settle'); setTimeout(function () { st.el.classList.remove('mg-settle'); }, 300);
        var cards = st.cv._cards || [];
        cards.forEach(function (card) { if (card.manualSized) commitSize(card); });
        applyZ(cards);
        var W = Math.round(st.cv.offsetWidth), H = Math.round(st.cv.offsetHeight);
        writeBlock(st.cv.dataset.uuid, function (c) { return setPropStr(setPropStr(c, 'mg-ch', String(H)), 'mg-cw', String(W)); });
      }
    d.addEventListener('mousemove', mv); d.addEventListener('mouseup', up);
  });
});
}
function commitSize(st) {
  writeBlock(st.uuid, function (c) {
    return refsRewrite(c, function (r) {
      if (normSrc(r.src) !== normSrc(st.src)) return null;
      r.mgm = Object.assign({}, r.mgm, { cx: st.spanCx, cy: st.spanCy, c: st.c, r: st.r, ox: st.cropOx, oy: st.cropOy });
      return r;
    });
  });
  applyGridPos(st, gridMetrics(st.stage));
}
function setupCvCorner(cv) {
  var blk = cv.parentElement;
  var stage = cv.querySelector('.mg-stage');
  var corner = cv.querySelector('.mg-cv-corner');
  if (!corner) return;
  if (blk) { cv.style.maxWidth = blk.clientWidth + 'px'; if (!cv.style.width) cv.style.width = '100%'; }
  function beginResize(e, hor, ver) {
    if (e.button !== 0) return;
    e.preventDefault(); e.stopPropagation();
    dragShieldOn();
    stage.classList.add('mg-grid-visible');
    stage.style.setProperty('--mg-cell-size', CELL_PX + 'px');
    var d = td(), sx = e.clientX, sy = e.clientY, sw = cv.offsetWidth, sh = cv.offsetHeight;
    var maxWVal = blk ? blk.clientWidth : 9999;
    var ratio = sw / sh;
    var minCW = CANVAS_MIN_PX, minCH = CANVAS_MIN_PX;
    var curW = sw, curH = sh;
    function mv(ev) {
      var gdx = (ev.clientX - sx) * CV_RESIZE_GAIN, gdy = (ev.clientY - sy) * CV_RESIZE_GAIN;
      if (hor) curW = Math.max(minCW, Math.min(curW + gdx, maxWVal));
      if (ver) curH = Math.max(minCH, curH + gdy);
      var nw = curW, nh = curH;
      if (hor && ver && cv.classList.contains('mg-aspectlock')) { if (Math.abs(nw - sw) > Math.abs(nh - sh)) nh = nw / ratio; else nw = nh * ratio; if (nw > maxWVal) { nw = maxWVal; nh = nw / ratio; } curW = nw; curH = nh; }
      var cards = cv._cards || [];
      var maxCardCx = 1, maxCardCy = 1;
      cards.forEach(function (c) { if ((c.spanCx || SPAN_DEFAULT_CX) > maxCardCx) maxCardCx = c.spanCx || SPAN_DEFAULT_CX; if ((c.spanCy || SPAN_DEFAULT_CY) > maxCardCy) maxCardCy = c.spanCy || SPAN_DEFAULT_CY; });
      cv.style.width = Math.round(nw) + 'px'; cv.style.height = Math.round(nh) + 'px';
      var cols = Math.max(maxCardCx + 1, Math.max(1, Math.floor((nw + GAP_PX) / CELL_T)));
      var rows = Math.max(maxCardCy + 1, Math.max(1, Math.floor((nh + GAP_PX) / CELL_T)));
      var prevCols = parseInt(stage.dataset.cols || 0, 10);
      var prevRows = parseInt(stage.dataset.rows || 0, 10);
      stage.style.gridTemplateColumns = 'repeat(' + cols + ', ' + CELL_PX + 'px)';
      stage.dataset.cols = cols; stage.dataset.rows = rows;
      var gm = { cols: cols, rows: rows, colWidth: CELL_PX, rowHeight: CELL_PX, gap: GAP_PX };
      cards.forEach(function (c) { applyGridPos(c, gm); });
      if (cols !== prevCols || rows !== prevRows) {
        var dCells = Math.abs(cols - prevCols) + Math.abs(rows - prevRows);
        stage.classList.remove('mg-cell-pulse'); void stage.offsetWidth;
        stage.classList.add('mg-cell-pulse');
        stage.style.setProperty('--mg-pulse-opacity', Math.min(0.4, 0.1 + dCells * 0.05));
      }
      sx = ev.clientX; sy = ev.clientY;
    }
    function up() {
      dragShieldOff();
      d.removeEventListener('mousemove', mv); d.removeEventListener('mouseup', up);
      stage.classList.remove('mg-grid-visible');
      var cards = cv._cards || [];
      var maxCardCx = 1, maxCardCy = 1;
      cards.forEach(function (c) { if ((c.spanCx || SPAN_DEFAULT_CX) > maxCardCx) maxCardCx = c.spanCx || SPAN_DEFAULT_CX; if ((c.spanCy || SPAN_DEFAULT_CY) > maxCardCy) maxCardCy = c.spanCy || SPAN_DEFAULT_CY; });
      var cols = Math.max(maxCardCx + 1, Math.max(1, Math.floor((curW + GAP_PX) / CELL_T)));
      var rows = Math.max(maxCardCy + 1, Math.max(1, Math.floor((curH + GAP_PX) / CELL_T)));
      cv.style.width = (cols * CELL_T - GAP_PX) + 'px'; cv.style.height = (rows * CELL_T - GAP_PX) + 'px';
      stage.style.gridTemplateColumns = 'repeat(' + cols + ', ' + CELL_PX + 'px)';
      stage.dataset.cols = cols; stage.dataset.rows = rows;
      var gm = { cols: cols, rows: rows, colWidth: CELL_PX, rowHeight: CELL_PX, gap: GAP_PX };
      cards.forEach(function (c) { applyGridPos(c, gm); });
      var W = Math.round(cv.offsetWidth), H = Math.round(cv.offsetHeight);
      writeBlock(cv.dataset.uuid, function (c) { return setPropStr(setPropStr(c, 'mg-ch', String(H)), 'mg-cw', String(W)); });
    }
    d.addEventListener('mousemove', mv); d.addEventListener('mouseup', up);
  }
  corner.addEventListener('mousedown', function (e) { selectCanvas(cv); deselectAll(); beginResize(e, true, true); });
  var bottom = cv.querySelector('.mg-cv-bottom');
  if (bottom) bottom.addEventListener('mousedown', function (e) { beginResize(e, false, true); });
  var right = cv.querySelector('.mg-cv-right');
  if (right) right.addEventListener('mousedown', function (e) { beginResize(e, true, false); });
}
async function crossBlockMove(st, targetUuid) {
  var sb = await getBlock(st.uuid); if (!sb) return;
  var sRefs = findRefs(sb.content), si = -1, i;
  for (i = 0; i < sRefs.length; i++) { if (normSrc(sRefs[i].src) === normSrc(st.src)) { si = i; break; } }
  if (si < 0) return;
  st.el.classList.add('mg-deleting');
  var ref = sRefs[si];
  await writeBlock(st.uuid, function (c) { var r = findRef(c, st.src); return r ? c.replace(r.exact, '').replace(/[ \t]{2,}/g, ' ') : c; });
  await writeBlock(targetUuid, function (c) { return insertImgMd(c, ref.md); });
  schedScan();
}
async function deleteCards(arr) {
  arr = (arr || []).filter(Boolean); if (!arr.length) return;
  var names = arr.map(function (c) { return c.kind === 'yt' ? '' : (assetFnFrom(c) || cardBaseName(c.url || c.src || '') || String(c.src || '')); });
  var extraVids = [];
  arr.forEach(function (c) {
    if (c.kind === 'video' && c.videos) c.videos.forEach(function (v) { var b = cardBaseName(v.src || v.url); if (b && names.indexOf(b) < 0 && extraVids.indexOf(b) < 0) extraVids.push(b); });
    if (c.kind === 'pdf' && c.pdfs) c.pdfs.forEach(function (v) { var b = cardBaseName(v.src || v.url); if (b && names.indexOf(b) < 0 && extraVids.indexOf(b) < 0) extraVids.push(b); });
    if (c.kind === 'img' && c.images) c.images.forEach(function (v) { var b = cardBaseName(v.src || v.url); if (b && names.indexOf(b) < 0 && extraVids.indexOf(b) < 0) extraVids.push(b); });
  });
  var nameList = names.filter(Boolean).concat(extraVids);
  if (!(await askConfirm(tRemoveArr(arr) + (nameList.length ? '\n\n' + nameList.join('\n') : ''), true))) return;
  var byBlock = {}; arr.forEach(function (c) { (byBlock[c.uuid] = byBlock[c.uuid] || []).push(c); });
  for (var u in byBlock) {
    if (!Object.prototype.hasOwnProperty.call(byBlock, u)) continue;
    var cards = byBlock[u];
    cards.forEach(function (c) { MG.sel.delete(c); destroyCard(c); });
    var b = await getBlock(u); if (!b) continue;
    var content = b.content || '';
    cards.forEach(function (c) {
      if (c.kind === 'yt') { refsAll(content).forEach(function (r) { if (r.yt) content = content.replace(r.exact, ''); }); }
      else if (c.kind === 'video') { refsAll(content).forEach(function (r) { if (VIDEO_EXT.test(r.src)) content = content.replace(r.exact, ''); }); }
      else if (c.kind === 'pdf' && c.pdfs && c.pdfs.length > 1) { var pdels = {}; c.pdfs.forEach(function (p) { pdels[normSrc(p.src || p.url || '')] = 1; }); var gp = c.group || ''; refsAll(content).forEach(function (r) { if (/\.pdf($|[?#])/i.test(r.src) && pdels[normSrc(r.src)]) content = content.replace(r.exact, ''); }); if (gp && gp !== '_legacy') content = refsRewrite(content, function (r) { if (!/\.pdf($|[?#])/i.test(r.src)) return null; if (r.mgm && r.mgm.grp === gp) { r.mgm = Object.assign({}, r.mgm, { grp: null }); return r; } return null; }); if (!gp || gp === '_legacy') content = setPropStr(content, 'mg-pdfgroup', ''); }
      else if (c.kind === 'img' && c.images && c.images.length > 1) { var idels = {}; c.images.forEach(function (im) { idels[normSrc(im.src || im.url || '')] = 1; }); var gi = c.group || ''; refsAll(content).forEach(function (r) { if (/\.(png|jpe?g|gif|webp|svg|bmp|avif)($|[?#])/i.test(r.src) && idels[normSrc(r.src)]) content = content.replace(r.exact, ''); }); if (gi && gi !== '_legacy') content = refsRewrite(content, function (r) { if (!/\.(png|jpe?g|gif|webp|svg|bmp|avif)($|[?#])/i.test(r.src)) return null; if (r.mgm && r.mgm.grp === gi) { r.mgm = Object.assign({}, r.mgm, { grp: null }); return r; } return null; }); if (!gi || gi === '_legacy') content = setPropStr(content, 'mg-imggroup', ''); }
      else { var r = findRef(content, c.src); if (r) content = content.replace(r.exact, ''); }
    });
    content = content.replace(/[ \t]{2,}/g, ' ').replace(/[ \t]+\n/g, '\n');
    if (!content.replace(/^\s*[-*]\s+/, '').trim()) { try { await rm(u); } catch (e) {} }
    else await upd(u, content);
  }
  schedScan();
  var files = names.concat(extraVids).filter(function (n) { return /\.(png|jpe?g|gif|webp|svg|bmp|avif|pdf|xlsx|xlsm|xls|csv|mp4|webm|ogv|m4v|mov)$/i.test(n); });
  if (files.length && await askConfirm(t('del_files_q') + '\n\n' + files.join('\n'), true)) {
    try {
      var vp = await getGraphPath();
      files.forEach(function (fn) { unlinkFile(vp, vp + '/assets/' + fn); });
    } catch (e) { console.error('[mg] unlink:', e.message || e); }
  }
}
async function deleteCard(st) {
  var b = await getBlock(st.uuid);   if (!b) return;
  var refs = findRefs(b.content), di = -1, i;
  for (i = 0; i < refs.length; i++) { if (normSrc(refs[i].src) === normSrc(st.src)) { di = i; break; } }
  if (di < 0) return;
  var fname = assetFnFrom(st) || cardBaseName(st.url || st.src || '');
  var rem = b.content.replace(refs[di].exact, '').replace(/[ \t]{2,}/g, ' ');
  MG.sel.delete(st);
  if (!rem.replace(/^\s*[-*]\s+/, '').trim()) await rm(st.uuid); else await upd(st.uuid, rem);
  if (await askConfirm(t('del_files_q') + '\n\n' + fname, true)) {
    try {
      var fn = assetFnFrom(st);
      var vp = await getGraphPath();
      var fullPath = vp + '/assets/' + fn;
      unlinkFile(vp, fullPath);
    } catch (e) { console.error('[mg] unlink:', e.message || e); }
  }
  schedScan();
}
async function mirrorCard(st) {
  try {
    var s = st.url || st.src || '';
    var fn = cardBaseName(s);
    var ext = (fn.split('.').pop() || '').toLowerCase();
    if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg' && ext !== 'webp') { toast(t('not_supported')); return; }
    var bytes = await readAssetBytes(fn);
    if (!bytes) { toast(t('mirror_failed')); return; }
    var mime = mimeOf(fn);
    var objUrl = URL.createObjectURL(bytesToBlob(bytes, fn));
    var img = await loadImg(objUrl);
    var cnv = td().createElement('canvas');
    cnv.width = img.naturalWidth || IMG_FALLBACK_W; cnv.height = img.naturalHeight || IMG_FALLBACK_H;
    var ctx = cnv.getContext('2d');
    ctx.translate(cnv.width, 0); ctx.scale(-1, 1); ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(objUrl);
    var out = await new Promise(function (res) { cnv.toBlob(res, mime, 0.95); });
    if (!out) { toast(t('mirror_failed')); return; }
    if (!(await saveAsset(fn, new File([out], fn, { type: mime })))) { toast(t('mirror_failed') + ' [' + saveAsset.lastErr + ']'); return; }
    var showUrl = URL.createObjectURL(out);
    var done = {};
    (st.cv._cards || []).forEach(function (c) {
      var bn = cardBaseName(c.url || c.src || '');
      if (bn !== fn || done[bn]) return;
      done[bn] = 1;
      var ic = c.el.querySelector('img');
      if (!ic) return;
      try { if (ic._mgMirrorUrl) URL.revokeObjectURL(ic._mgMirrorUrl); } catch (e) {}
      ic._mgMirrorUrl = showUrl;
      ic.src = showUrl;
    });
    st.el.classList.add('mg-flip'); setTimeout(function () { st.el.classList.remove('mg-flip'); }, 500);
    toast(t('mirrored'));
    schedScan();
  } catch (e) { console.error('[mg] mirror', e); toast(t('mirror_failed')); }
}
function resetCardSize(st) {
  st.spanCx = SPAN_DEFAULT_CX; st.spanCy = SPAN_DEFAULT_CY; st.c = null; st.r = null; st.manualSized = false;
  st.el.classList.add('mg-resetting'); setTimeout(function () { st.el.classList.remove('mg-resetting'); }, 350);
  st.el.style.gridColumn = ''; st.el.style.gridRow = '';
  writeBlock(st.uuid, function (c) {
    return refsRewrite(c, function (r) {
      if (normSrc(r.src) !== normSrc(st.src)) return null;
      r.mgm = Object.assign({}, r.mgm, { cx: null, cy: null, c: null, r: null });
      return r;
    });
  }).then(function () { applyGridPos(st, gridMetrics(st.stage)); });
}
function fitCanvas(cv) {
  var stage = cv.querySelector('.mg-stage');
  var cards = (cv._cards || []).filter(function (c) { return c && c.el; });
  if (!cards.length) return;
  var sr = stage.getBoundingClientRect();
  var MARGIN = 1; // cells (~9px) around the content so the card frame/shadow stays visible
  var minC = Infinity, minR = Infinity, maxC = 1, maxR = 1;
  cards.forEach(function (c) {
    var r = c.el.getBoundingClientRect();
    if (!r.width && !r.height) return;
    effectiveSpan(c);
    c._fitStartC = Math.max(1, Math.round((r.left - sr.left) / CELL_T) + 1);
    c._fitStartR = Math.max(1, Math.round((r.top - sr.top) / CELL_T) + 1);
    c._fitCx = Math.max(1, c.spanCx || 1);
    c._fitCy = Math.max(1, c.spanCy || 1);
    var endC = c._fitStartC + c._fitCx - 1;
    var endR = c._fitStartR + c._fitCy - 1;
    if (c._fitStartC < minC) minC = c._fitStartC;
    if (c._fitStartR < minR) minR = c._fitStartR;
    if (endC > maxC) maxC = endC;
    if (endR > maxR) maxR = endR;
  });
  if (!isFinite(minC) || !isFinite(minR)) return;
  var cols = (maxC - minC + 1) + 2 * MARGIN;
  var rows = (maxR - minR + 1) + 2 * MARGIN;
  cv.style.width = (cols * CELL_T - GAP_PX) + 'px';
  cv.style.height = (rows * CELL_T - GAP_PX) + 'px';
  stage.style.gridTemplateColumns = 'repeat(' + cols + ', ' + CELL_PX + 'px)';
  stage.dataset.cols = cols; stage.dataset.rows = rows;
  stage.dataset.baseCols = cols; stage.dataset.baseRows = rows;
  var gm = gridMetrics(stage);
  cards.forEach(function (c) {
    if (c._fitStartC == null) return;
    c.manualSized = true;
    c.spanCx = c._fitCx; c.spanCy = c._fitCy;
    if (!c.lockPos) { c.c = (c._fitStartC - minC) + 1 + MARGIN; c.r = (c._fitStartR - minR) + 1 + MARGIN; }
    applyGridPos(c, gm);
  });
  writeBlock(cv.dataset.uuid, function (content) {
    return refsRewrite(content, function (r) {
      var m = null;
      for (var i = 0; i < cards.length; i++) { if (normSrc(r.src) === normSrc(cards[i].src)) { m = cards[i]; break; } }
      if (!m || m.c == null) return r;
      var add = { cx: m.spanCx, cy: m.spanCy };
      if (!m.lockPos) { add.c = m.c; add.r = m.r; }
      r.mgm = Object.assign({}, r.mgm, add);
      return r;
    });
  });
  var W = Math.round(cv.offsetWidth), H = Math.round(cv.offsetHeight);
  writeBlock(cv.dataset.uuid, function (c) { return setPropStr(setPropStr(c, 'mg-ch', String(H)), 'mg-cw', String(W)); });
  toast(t('fit_toast') + ' – ' + cols + '×' + rows + ' ' + t('cells'));
}
function groupToTile(cv) {
  var sel = (cv._cards || []).filter(function (c) { return MG.sel.has(c); });
  if (sel.length < 2) return;
  var stage = cv.querySelector('.mg-stage');
  var sr = stage.getBoundingClientRect();
  function cell(c) { var r = c.el.getBoundingClientRect(); return { rr: Math.round((r.top - sr.top) / CELL_T), cc: Math.round((r.left - sr.left) / CELL_T) }; }
  sel.sort(function (a, b) { var pa = cell(a), pb = cell(b); if (pa.rr !== pb.rr) return pa.rr - pb.rr; return pa.cc - pb.cc; });
  var minR = Math.min.apply(null, sel.map(function (c) { return cell(c).rr; }));
  var minC = Math.min.apply(null, sel.map(function (c) { return cell(c).cc; }));
  var size = SPAN_MIN, cols = Math.max(1, Math.ceil(Math.sqrt(sel.length)));
  sel.forEach(function (c, i) {
    c.manualSized = true; c.spanCx = size; c.spanCy = size;
    c.c = minC + (i % cols) * size + 1;
    c.r = minR + Math.floor(i / cols) * size + 1;
    c.el.classList.add('mg-resetting'); setTimeout(function () { c.el.classList.remove('mg-resetting'); }, 350);
  });
  var gm = gridMetrics(stage);
  sel.forEach(function (c) { applyGridPos(c, gm); });
  writeBlock(cv.dataset.uuid, function (content) {
    return refsRewrite(content, function (r) {
      var m = null;
      for (var i = 0; i < sel.length; i++) { if (normSrc(r.src) === normSrc(sel[i].src)) { m = sel[i]; break; } }
      if (!m) return r;
      r.mgm = Object.assign({}, r.mgm, { cx: size, cy: size, c: m.c, r: m.r });
      return r;
    });
  });
}
function tileAllCards(cv) {
  var cards = cv._cards || [];
  var stage = cv.querySelector('.mg-stage');
  cards.forEach(function (c) {
    c.manualSized = true; c.spanCx = SPAN_MIN; c.spanCy = SPAN_MIN; c.c = null; c.r = null;
    c.el.classList.add('mg-resetting'); setTimeout(function () { c.el.classList.remove('mg-resetting'); }, 350);
  });
  var gm = gridMetrics(stage);
  cards.forEach(function (c) { applyGridPos(c, gm); });
  writeBlock(cv.dataset.uuid, function (c) {
    return refsRewrite(c, function (r) { r.mgm = Object.assign({}, r.mgm, { cx: SPAN_MIN, cy: SPAN_MIN, c: null, r: null }); return r; });
  });
}
function minimizeCards(cv, list) {
  var stage = cv.querySelector('.mg-stage');
  var sel = (list && list.length) ? list.slice() : (cv._cards || []).filter(function (c) { return MG.sel.has(c); });
  if (!sel.length) return;
  sel.forEach(function (c) {
    c.manualSized = true; c.spanCx = SPAN_MIN; c.spanCy = SPAN_MIN; c.c = null; c.r = null;
    c.el.classList.add('mg-resetting'); setTimeout(function () { c.el.classList.remove('mg-resetting'); }, 350);
  });
  var gm = gridMetrics(stage);
  sel.forEach(function (c) { applyGridPos(c, gm); });
  writeBlock(cv.dataset.uuid, function (content) {
    return refsRewrite(content, function (r) {
      var m = null;
      for (var i = 0; i < sel.length; i++) { if (normSrc(r.src) === normSrc(sel[i].src)) { m = sel[i]; break; } }
      if (!m) return r;
      r.mgm = Object.assign({}, r.mgm, { cx: SPAN_MIN, cy: SPAN_MIN, c: null, r: null });
      return r;
    });
  });
  toast(t('card_minimize') + (sel.length > 1 ? ' ×' + sel.length : ''));
}
function maximizeCards(cv, list) {
  var stage = cv.querySelector('.mg-stage');
  var sel = (list && list.length) ? list.slice() : (cv._cards || []).filter(function (c) { return MG.sel.has(c); });
  if (!sel.length) return;
  sel.forEach(effectiveSpan);
  var gm = gridMetrics(stage), cols = gm.cols, rows = gm.rows;
  var sr = stage.getBoundingClientRect();
  var items = sel.map(function (c) {
    var r = c.el.getBoundingClientRect();
    return { c: c, cc: Math.max(0, Math.round((r.left - sr.left) / CELL_T)), rr: Math.max(0, Math.round((r.top - sr.top) / CELL_T)), cx: Math.max(1, c.spanCx || 1), cy: Math.max(1, c.spanCy || 1) };
  });
  var minC = Math.min.apply(null, items.map(function (i) { return i.cc; }));
  var minR = Math.min.apply(null, items.map(function (i) { return i.rr; }));
  var maxC = Math.max.apply(null, items.map(function (i) { return i.cc + i.cx; }));
  var maxR = Math.max.apply(null, items.map(function (i) { return i.rr + i.cy; }));
  var spanC = Math.max(1, maxC - minC), spanR = Math.max(1, maxR - minR);
  var fx = cols / spanC, fy = rows / spanR;
  items.forEach(function (i) {
    var c = i.c; c.manualSized = true;
    c.spanCx = Math.min(cols, Math.max(SPAN_MIN, Math.round(i.cx * fx)));
    c.spanCy = Math.min(rows, Math.max(SPAN_MIN, Math.round(i.cy * fy)));
    c.c = Math.min(cols, Math.max(1, Math.round((i.cc - minC) * fx) + 1));
    c.r = Math.min(rows, Math.max(1, Math.round((i.rr - minR) * fy) + 1));
    c.c = Math.max(1, Math.min(c.c, cols - c.spanCx + 1));
    c.r = Math.max(1, Math.min(c.r, rows - c.spanCy + 1));
    c.el.classList.add('mg-resetting'); setTimeout(function () { c.el.classList.remove('mg-resetting'); }, 350);
  });
  sel.forEach(function (c) { applyGridPos(c, gm); });
  writeBlock(cv.dataset.uuid, function (content) {
    return refsRewrite(content, function (r) {
      var m = null;
      for (var i = 0; i < sel.length; i++) { if (normSrc(r.src) === normSrc(sel[i].src)) { m = sel[i]; break; } }
      if (!m) return r;
      r.mgm = Object.assign({}, r.mgm, { cx: m.spanCx, cy: m.spanCy, c: m.c, r: m.r });
      return r;
    });
  });
  toast(t('card_maximize') + (sel.length > 1 ? ' ×' + sel.length : ''));
}
function fillCanvas(cv) {
  var stage = cv.querySelector('.mg-stage');
  var cards = cv._cards || [];
  if (!cards.length) return;
  cards.forEach(effectiveSpan);
  var gm = gridMetrics(stage);
  var cols = gm.cols, rows = gm.rows;
  var sr = stage.getBoundingClientRect();
  var items = cards.map(function (c) {
    var r = c.el.getBoundingClientRect();
    return { c: c, cc: Math.max(0, Math.round((r.left - sr.left) / CELL_T)), rr: Math.max(0, Math.round((r.top - sr.top) / CELL_T)), cx: Math.max(1, c.spanCx || 1), cy: Math.max(1, c.spanCy || 1) };
  });
  var minC = Math.min.apply(null, items.map(function (i) { return i.cc; }));
  var minR = Math.min.apply(null, items.map(function (i) { return i.rr; }));
  var maxC = Math.max.apply(null, items.map(function (i) { return i.cc + i.cx; }));
  var maxR = Math.max.apply(null, items.map(function (i) { return i.rr + i.cy; }));
  var spanC = Math.max(1, maxC - minC), spanR = Math.max(1, maxR - minR);
  var fx = cols / spanC, fy = rows / spanR;
  items.forEach(function (i) {
    var c = i.c; c.manualSized = true;
    c.spanCx = Math.max(SPAN_MIN, Math.round(i.cx * fx));
    c.spanCy = Math.max(SPAN_MIN, Math.round(i.cy * fy));
    c.c = Math.min(cols, Math.max(1, Math.round((i.cc - minC) * fx) + 1));
    c.r = Math.min(rows, Math.max(1, Math.round((i.rr - minR) * fy) + 1));
    c.c = Math.max(1, Math.min(c.c, cols - c.spanCx + 1));
    c.r = Math.max(1, Math.min(c.r, rows - c.spanCy + 1));
    c.el.classList.add('mg-resetting'); setTimeout(function () { c.el.classList.remove('mg-resetting'); }, 350);
  });
  var rightEdge = Math.max.apply(null, items.map(function (i) { return i.c.c + i.c.spanCx - 1; }));
  if (rightEdge < cols) { var cand = null; items.forEach(function (i) { if (i.c.c + i.c.spanCx - 1 === rightEdge && (!cand || i.c.spanCx < cand.c.spanCx)) cand = i; }); if (cand) cand.c.spanCx += (cols - rightEdge); }
  var bottomEdge = Math.max.apply(null, items.map(function (i) { return i.c.r + i.c.spanCy - 1; }));
  if (bottomEdge < rows) { var cand2 = null; items.forEach(function (i) { if (i.c.r + i.c.spanCy - 1 === bottomEdge && (!cand2 || i.c.spanCy < cand2.c.spanCy)) cand2 = i; }); if (cand2) cand2.c.spanCy += (rows - bottomEdge); }
  var gm2 = gridMetrics(stage);
  items.forEach(function (i) { applyGridPos(i.c, gm2); });
  writeBlock(cv.dataset.uuid, function (content) {
    return refsRewrite(content, function (r) {
      var m = null;
      for (var i = 0; i < items.length; i++) { if (normSrc(r.src) === normSrc(items[i].c.src)) { m = items[i].c; break; } }
      if (!m) return r;
      r.mgm = Object.assign({}, r.mgm, { cx: m.spanCx, cy: m.spanCy, c: m.c, r: m.r });
      return r;
    });
  });
  toast(t('fill_toast') + ' – ' + cols + '×' + rows + ' ' + t('cells'));
}
function resetAll(cv) {
  (cv._cards || []).forEach(function (c) { c.spanCx = SPAN_DEFAULT_CX; c.spanCy = SPAN_DEFAULT_CY; c.c = null; c.r = null; c.manualSized = false; c.el.classList.add('mg-resetting'); setTimeout(function () { c.el.classList.remove('mg-resetting'); }, 350); c.el.style.gridColumn = ''; c.el.style.gridRow = ''; });
  cv.style.width = ''; cv.style.height = '';
  writeBlock(cv.dataset.uuid, function (c) { return setPropStr(setPropStr(refsRewrite(c, function (r) { r.mgm = Object.assign({}, r.mgm, { cx: null, cy: null, c: null, r: null }); return r; }), 'mg-ch', ''), 'mg-cw', ''); }).then(function () {
    var blk = cv.parentElement;
    if (blk) { (cv._cards || []).forEach(destroyCard); cv.remove(); processBlock(blk); }
  });
}
async function deleteCanvas(cv) {
  var uuid = cv.dataset.uuid; if (!uuid) return;
  var ans = await askText(t('del_canvas_confirm'), null, true);
  if (!ans || ans.trim() !== (LANG === 'de' ? 'LÖSCHEN' : 'DELETE')) { toast(t('del_canvas_wrong')); return; }
  var cards = cv._cards || [];
  var fileList = [];
  cards.forEach(function (c) {
    var n = assetFnFrom(c) || cardBaseName(c.url || c.src || '');
    if (n && fileList.indexOf(n) < 0) fileList.push(n);
    ['videos', 'pdfs', 'images'].forEach(function (k) { if (c[k]) c[k].forEach(function (v) { var b = cardBaseName(v.src || v.url); if (b && fileList.indexOf(b) < 0) fileList.push(b); }); });
  });
  var files = fileList.filter(function (n) { return /\.(png|jpe?g|gif|webp|svg|bmp|avif|pdf|xlsx|xlsm|xls|csv|mp4|webm|ogv|m4v|mov)$/i.test(n); });
  (cv._cards || []).forEach(destroyCard);
  cv.remove();
  await rm(uuid);
  if (files.length && await askConfirm(t('del_files_q') + '\n\n' + files.join('\n'), true)) {
    try { var vp = await getGraphPath(); files.forEach(function (fn) { unlinkFile(vp, vp + '/assets/' + fn); }); } catch (e) {}
  }
  schedScan();
}
function applyZCard(c) { if (c && c.el) c.el.style.zIndex = String(c.z != null ? c.z : 0); }
function applyZ(cards) { (cards || []).forEach(applyZCard); }
function normalizeZ(cards) {
  var arr = (cards || []).slice().sort(function (a, b) { var za = a.z != null ? a.z : 1e9, zb = b.z != null ? b.z : 1e9; if (za !== zb) return za - zb; return (a.idx || 0) - (b.idx || 0); });
  arr.forEach(function (c, i) { c.z = i; });
  return arr;
}
function commitZ(cv) {
  var cards = cv._cards || [];
  writeBlock(cv.dataset.uuid, function (c) {
    return refsRewrite(c, function (r) {
      var m = null;
      for (var i = 0; i < cards.length; i++) { if (normSrc(r.src) === normSrc(cards[i].src)) { m = cards[i]; break; } }
      if (!m) return r;
      r.mgm = Object.assign({}, r.mgm, { z: m.z });
      return r;
    });
  });
}
function selectedCards(cv) { return (cv._cards || []).filter(function (c) { return MG.sel.has(c); }); }
function layerStep(cv, dir, selIn) {
  var cards = cv._cards || [];
  normalizeZ(cards);
  var sel = (selIn && selIn.length) ? selIn : selectedCards(cv);
  if (!sel.length) return;
  var inSel = new Set(sel);
  sel.sort(function (a, b) { return dir > 0 ? b.z - a.z : a.z - b.z; });
  sel.forEach(function (c) {
    var neigh = null;
    cards.forEach(function (o) {
      if (inSel.has(o)) return;
      if (dir > 0) { if (o.z > c.z && (!neigh || o.z < neigh.z)) neigh = o; }
      else { if (o.z < c.z && (!neigh || o.z > neigh.z)) neigh = o; }
    });
    if (neigh) { var tmp = c.z; c.z = neigh.z; neigh.z = tmp; }
  });
  cards.forEach(applyZCard);
  commitZ(cv);
}
function layerTo(cv, top, selIn) {
  var cards = cv._cards || [];
  normalizeZ(cards);
  var sel = (selIn && selIn.length) ? selIn : selectedCards(cv);
  if (!sel.length) return;
  var inSel = new Set(sel);
  var rest = cards.filter(function (c) { return !inSel.has(c); }).sort(function (a, b) { return a.z - b.z; });
  sel.sort(function (a, b) { return a.z - b.z; });
  var ordered = top ? rest.concat(sel) : sel.concat(rest);
  ordered.forEach(function (c, i) { c.z = i; applyZCard(c); });
  commitZ(cv);
}
function bringFront(card) {
  if (!card || !card.cv) return;
  (card.cv._cards || []).forEach(applyZCard);
  if (card.el) card.el.style.zIndex = '99998';
}
function dragShieldOn() {
  if (MG.dragShield) return;
  var sh = td().createElement('div'); sh.className = 'mg-drag-shield';
  sh.style.cssText = 'position:fixed;inset:0;z-index:99996;background:transparent';
  td().body.appendChild(sh); MG.dragShield = sh;
}
function dragShieldOff() { if (MG.dragShield) { if (MG.dragShield.parentNode) MG.dragShield.remove(); MG.dragShield = null; } }
function selectToggle(st, shift, cmd) {
  var now = Date.now();
  if (MG.dblTarget === st && now - (MG.dblTime || 0) < 350) {
    MG.dblTarget = null; MG.dblTime = 0;
    if (st.kind === 'pdf') openPdfCard(st);
    else if (st.kind === 'yt') { var yw = st.el.querySelector('.mg-yt'); if (yw) yw.classList.add('mg-yt-live'); }
    else if (st.kind === 'video') { try { var vv0 = st.el.querySelector('video'); if (vv0) { if (vv0.paused) vv0.play(); else vv0.pause(); } } catch (e) {} }
    else if (st.kind !== 'sheet') openLightbox(st.cv, st);
    return;
  }
  MG.dblTarget = st; MG.dblTime = now;
  bringFront(st);
  if (cmd) {
    if (MG.sel.has(st)) { MG.sel.delete(st); st.el.classList.remove('mg-sel'); }
    else { MG.sel.add(st); st.el.classList.add('mg-sel'); }
    MG.anchor = st;
  } else if (shift && MG.anchor && MG.anchor.cv === st.cv) {
    MG.sel.forEach(function (c) { c.el.classList.remove('mg-sel'); }); MG.sel.clear();
    rangeSelect(MG.anchor, st);
  } else {
    deselectAll();
    MG.sel.add(st); st.el.classList.add('mg-sel'); MG.anchor = st;
  }
}
function rangeSelect(a, b) {
  var cv = a.cv;
  var stage = cv.querySelector('.mg-stage');
  if (!stage) return;
  var sr = stage.getBoundingClientRect();
  function cell(c) { var r = c.el.getBoundingClientRect(); return { rr: Math.round((r.top - sr.top) / CELL_T), cc: Math.round((r.left - sr.left) / CELL_T) }; }
  var pa = cell(a), pb = cell(b);
  var r0 = Math.min(pa.rr, pb.rr), r1 = Math.max(pa.rr, pb.rr);
  var c0 = Math.min(pa.cc, pb.cc), c1 = Math.max(pa.cc, pb.cc);
  (cv._cards || []).forEach(function (card) {
    var p = cell(card);
    if (p.rr >= r0 && p.rr <= r1 && p.cc >= c0 && p.cc <= c1) { MG.sel.add(card); card.el.classList.add('mg-sel'); }
  });
}
function deselectAll() { MG.sel.forEach(function (c) { c.el.classList.remove('mg-sel'); }); MG.sel.clear(); MG.anchor = null; }
function clearCvSel() { MG.cvSel = null; MG.cvSelEl = null; td().querySelectorAll('.mg-canvas.mg-cv-sel').forEach(function (x) { x.classList.remove('mg-cv-sel'); }); }
function selectCanvas(cv) { if (!cv) return; MG.cvSel = cv.dataset.uuid; MG.cvSelEl = cv; td().querySelectorAll('.mg-canvas.mg-cv-sel').forEach(function (x) { x.classList.remove('mg-cv-sel'); }); cv.classList.add('mg-cv-sel'); }
var _menuCleanup = null;
function dismissMenu() { var m = td().querySelector('.mg-menu'); if (m) m.remove(); if (_menuCleanup) { _menuCleanup(); _menuCleanup = null; } }
function wireTooltips() {
  if (MG.tipWired) return; MG.tipWired = true;
  var d = td(), tip = null, cur = null;
  function ensure() { if (!tip) { tip = d.createElement('div'); tip.className = 'mg-tip'; d.body.appendChild(tip); } return tip; }
  function hideEl(el) { if (el && el.hasAttribute('data-mg-tip')) { el.setAttribute('title', el.getAttribute('data-mg-tip')); el.removeAttribute('data-mg-tip'); } }
  function hide() { hideEl(cur); cur = null; if (tip) tip.style.display = 'none'; }
  function show(el) {
    var txt = el.getAttribute('title') || el.getAttribute('data-mg-tip') || '';
    if (!txt) return;
    el.setAttribute('data-mg-tip', txt); el.removeAttribute('title');
    var t = ensure(); t.textContent = txt; t.style.display = 'block';
    var r = el.getBoundingClientRect(), tw = t.offsetWidth, th = t.offsetHeight, vw = d.documentElement.clientWidth, vh = d.documentElement.clientHeight;
    var x = r.left + r.width / 2 - tw / 2, y = r.bottom + 6;
    if (y + th > vh - 4) y = r.top - th - 6;
    x = Math.max(4, Math.min(x, vw - tw - 4)); y = Math.max(4, y);
    t.style.left = x + 'px'; t.style.top = y + 'px';
  }
  d.addEventListener('mouseover', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[title],[data-mg-tip]') : null;
    if (!el || el === cur) return;
    if (!(el.closest && el.closest('.mg-card,.mg-sheet,.mg-canvas,.mg-emptyzone,.mg-menu,.mg-ask'))) return;
    hide(); cur = el; show(el);
  }, true);
  d.addEventListener('mouseout', function (e) {
    if (!cur) return;
    if (e.target === cur || (cur.contains && !cur.contains(e.relatedTarget))) hide();
  }, true);
  d.addEventListener('mousedown', hide, true);
}
function showPopover(x, y, items) {
  dismissMenu(); var d = td(), mn = d.createElement('div'); mn.className = 'mg-menu'; mn.style.cssText = 'visibility:hidden;left:0;top:0;'; mn.style.position = 'fixed';
  items.forEach(function (it) { var mi = d.createElement('div'); mi.className = it.sep ? 'mg-msep' : 'mg-mitem'; if (!it.sep) { if (it.danger) mi.classList.add('mg-mwarn'); mi.textContent = it.label; mi.onclick = function () { dismissMenu(); it.fn(); }; } mn.appendChild(mi); });
  d.body.appendChild(mn);
  // Measure, then clamp into the visual viewport (menus must never overflow
  // screen edges: bottom/right clipping cannot be scrolled away).
  var mw = mn.offsetWidth, mh = mn.offsetHeight;
  var vw = d.documentElement.clientWidth, vh = d.documentElement.clientHeight;
  var nx = Math.min(Math.max(4, x), Math.max(4, vw - mw - 4));
  var ny = y;
  if (y + mh > vh - 4) {
    var flipY = y - mh - 8;               // open upwards
    ny = flipY >= 4 ? flipY : Math.max(4, vh - mh - 4);
  }
  mn.style.left = nx + 'px'; mn.style.top = ny + 'px'; mn.style.visibility = '';
  var kl = function (ev) { if (ev.key === 'Escape' || ev.keyCode === 27) dismissMenu(); };
  var cl = function (ev) { if (!mn.contains(ev.target)) dismissMenu(); };
  _menuCleanup = function () { d.removeEventListener('mousedown', cl, true); d.removeEventListener('keydown', kl, true); };
  setTimeout(function () { d.addEventListener('mousedown', cl, true); d.addEventListener('keydown', kl, true); }, 0);
}
function askText(msg, initial, danger) {
  return new Promise(function (resolve) {
    var d = td();
    var shield = d.createElement('div'); shield.className = 'mg-ask-shield';
    var box = d.createElement('div'); box.className = 'mg-ask';
    var m = d.createElement('div'); m.className = 'mg-ask-msg'; m.textContent = msg;
    var inp = d.createElement('input'); inp.type = 'text'; if (initial != null) inp.value = initial;
    mgStopKeyBubble(inp);
    var btns = d.createElement('div'); btns.className = 'mg-ask-btns';
    var ok = d.createElement('button'); ok.textContent = 'OK'; ok.className = 'mg-ask-ok' + (danger ? ' mg-ask-danger' : '');
    var cancel = d.createElement('button'); cancel.textContent = LANG === 'de' ? 'Abbrechen' : 'Cancel';
    btns.appendChild(cancel); btns.appendChild(ok);
    box.appendChild(m); box.appendChild(inp); box.appendChild(btns);
    d.body.appendChild(shield); d.body.appendChild(box);
    var w = d.defaultView || top;
    function finish(val) { try { box.remove(); shield.remove(); } catch (e) {} try { w.removeEventListener('keydown', onKey, true); } catch (e) {} resolve(val); }
    function onKey(e) { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish(null); } }
    w.addEventListener('keydown', onKey, true);
    setTimeout(function () { try { inp.focus(); inp.select(); } catch (e) {} }, 0);
    ok.onclick = function () { finish(inp.value); };
    cancel.onclick = function () { finish(null); };
    shield.onclick = function () { finish(null); };
    inp.addEventListener('keydown', function (e) {
      // Do not let Logseq's global shortcuts see keys typed here (Logseq OG binds
      // single-letter flashcard actions: r/t/s/n/f -> "remembered"/"recall"/...).
      e.stopPropagation();
      if (e.key === 'Enter') { e.preventDefault(); finish(inp.value); }
      else if (e.key === 'Escape') { e.preventDefault(); finish(null); }
    });
  });
}
function askConfirm(msg, danger) {
  return new Promise(function (resolve) {
    var d = td();
    var shield = d.createElement('div'); shield.className = 'mg-ask-shield';
    var box = d.createElement('div'); box.className = 'mg-ask'; box.tabIndex = -1;
    var m = d.createElement('div'); m.className = 'mg-ask-msg'; m.textContent = msg;
    var btns = d.createElement('div'); btns.className = 'mg-ask-btns';
    var cancel = d.createElement('button'); cancel.textContent = LANG === 'de' ? 'Abbrechen' : 'Cancel';
    var ok = d.createElement('button'); ok.textContent = 'OK'; ok.className = 'mg-ask-ok' + (danger ? ' mg-ask-danger' : '');
    btns.appendChild(cancel); btns.appendChild(ok);
    box.appendChild(m); box.appendChild(btns);
    d.body.appendChild(shield); d.body.appendChild(box);
    var w = d.defaultView || top;
    function finish(val) { try { box.remove(); shield.remove(); } catch (e) {} try { w.removeEventListener('keydown', onKey, true); } catch (e) {} resolve(val); }
    function onKey(e) { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish(false); } else if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); finish(true); } }
    w.addEventListener('keydown', onKey, true);
    setTimeout(function () { try { box.focus(); } catch (e) {} }, 0);
    ok.onclick = function () { finish(true); };
    cancel.onclick = function () { finish(false); };
    shield.onclick = function () { finish(false); };
  });
}
async function openPdfCard(st) {
  try { if (st.native && st.native.tagName !== 'IMG' && st.native.click) { st.native.click(); return; } } catch (e) {}
  try {
    var vp = await getGraphPath();
    if (vp) {
      var abs = vp.replace(/[\/\\]+$/, '') + '/assets/' + cardBaseName(st.src || st.url || '');
      try { if (top.open) { top.open('file://' + abs); return; } } catch (e2) {}
      try { if (top.shell && top.shell.openPath) { top.shell.openPath(abs); return; } } catch (e3) {}
      try { if (top.require) { var sh = top.require('electron').shell; if (sh && sh.openPath) { sh.openPath(abs); return; } } } catch (e4) {}
    }
  } catch (e5) {}
  toast(t('open_pdf_failed'));
}
async function openVideoCard(st) {
  try {
    var vp = await getGraphPath();
    if (vp) {
      var abs = vp.replace(/[\/\\]+$/, '') + '/assets/' + cardBaseName(st.src || st.url || '');
      try { if (top.shell && top.shell.openPath) { top.shell.openPath(abs); return; } } catch (e3) {}
      try { if (top.require) { var sh = top.require('electron').shell; if (sh && sh.openPath) { sh.openPath(abs); return; } } } catch (e4) {}
      try { if (top.open) { top.open('file://' + abs); return; } } catch (e2) {}
    }
  } catch (e5) {}
  toast(t('open_video_failed'));
}
function menuItems(st) {
  var cv = st.cv;
  var arr = (MG.sel.size > 1 && MG.sel.has(st)) ? Array.from(MG.sel) : [st];
  function each(fn) { arr.forEach(fn); }
  var M = [
    [t('card_reset'), function () { each(resetCardSize); }],
    [st.aspectLock ? t('ar_unlock_card') : t('ar_lock_card'), function () { each(function (c) { c.aspectLock = !c.aspectLock; writeBlock(c.uuid, function (cc) { return refsRewrite(cc, function (r) { if (normSrc(r.src) !== normSrc(c.src)) return null; r.mgm = Object.assign({}, r.mgm, { ar: c.aspectLock }); return r; }); }); }); }],
    [t('layer_up'), function () { layerStep(cv, 1, arr); }],
    [t('layer_down'), function () { layerStep(cv, -1, arr); }],
    [t('layer_front'), function () { layerTo(cv, true, arr); }],
    [t('layer_back'), function () { layerTo(cv, false, arr); }],
    [t('finder'), function () { each(finderFromCard); }],
    [t('del'), function () { deleteCards(arr); }]
  ];
  if (arr.length === 1) {
    if (arr[0].kind === 'pdf') {
      M.push([t('open_pdf'), function () { each(openPdfCard); }]);
      if (arr[0].pdfs && arr[0].pdfs.length > 1) M.push([t('split_pdf'), function () { splitPdf(arr[0]); }]);
    }
    else if (arr[0].kind === 'yt') M.push([t('yt_open'), function () { try { if (top.open) top.open(arr[0].src); } catch (e) {} }]);
    else if (arr[0].kind === 'sheet') {
      M.push([t('sheet_open'), function () { each(openSheetCard); }]);
      M.push([t('split_sheet'), function () { splitSheet(arr[0]); }]);
      M.push([t('copy_md'), function () { sheetCopyMarkdown(arr[0]); }]);
    }
    else if (arr[0].kind === 'video') M.push([t('open_video'), function () { each(openVideoCard); }]);
    else { M.push([t('mirror_image'), function () { each(mirrorCard); }]); if (arr[0].kind === 'img' && arr[0].images && arr[0].images.length > 1) M.push([t('split_img'), function () { splitImgs(arr[0]); }]); }
  } else if (arr.length > 0 && arr.every(function (c) { return c.kind === 'pdf'; })) {
    M.push([t('open_pdf'), function () { each(openPdfCard); }]);
    M.push([t('merge_pdfs'), function () { mergePdfs(arr); }]);
  } else if (arr.length > 0 && arr.every(function (c) { return c.kind === 'img'; })) {
    M.push([t('merge_imgs'), function () { mergeImgs(arr); }]);
  }
  if (arr.length > 1) M.push([t('group_tile'), function () { groupToTile(cv); }]);
  if (arr.length > 1 && arr.every(function (c) { return c.kind === 'sheet'; })) M.push([t('merge_sheets'), function () { mergeSheets(arr); }]);
  M.push(null);
  M.push([t('card_minimize'), function () { minimizeCards(cv, arr); }]);
  M.push([t('card_maximize'), function () { maximizeCards(cv, arr); }]);
  M.push(null);
  lockMenuItems(st, arr, each).forEach(function (li) { M.push(li); });
  M.push(null);
  M.push([t('reset_all'), function () { resetAll(cv); }]);
  return M.map(function (it) { return it === null ? { sep: true } : { label: it[0], fn: it[1] }; });
}
function parseMdTable(content) {
  var lines = (content || '').split('\n'), start = -1, i, j;
  for (i = 0; i < lines.length; i++) { if (/^\s*\|.*\|\s*$/.test(lines[i])) { start = i; break; } }
  if (start < 0) return null;
  var m0 = /^(\s*)\|/.exec(lines[start]);
  var indent = m0 ? m0[1] : '';
  var end = start;
  while (end + 1 < lines.length && /^\s*\|.*\|\s*$/.test(lines[end + 1])) end++;
  var tl = lines.slice(start, end + 1);
  var cells = function (ln) {
    var body = ln.trim().replace(/^\|/, '').replace(/\|\s*$/, ''), out = [], cur = '', k;
    for (k = 0; k < body.length; k++) {
      if (body[k] === '\\') {
        if (body[k + 1] === '\\') { cur += '\\'; k++; }
        else if (body[k + 1] === '|') { cur += '|'; k++; }
        else cur += '\\';
      }
      else if (body[k] === '|') { out.push(cur.trim()); cur = ''; }
      else cur += body[k];
    }
    out.push(cur.trim());
    return out;
  };
  var sepIndex = -1;
  for (j = 1; j < tl.length; j++) { if (/^\s*\|(\s*:?-+:?\s*\|)+\s*$/.test(tl[j])) { sepIndex = j; break; } }
  var header = sepIndex > 0 ? cells(tl[0]) : null;
  var rows = [];
  for (j = 0; j < tl.length; j++) {
    if (j === sepIndex || (sepIndex > 0 && j === 0)) continue;
    rows.push(cells(tl[j]));
  }
  return { start: start, end: end, lines: tl, sepIndex: sepIndex, header: header, rows: rows, sepLn: sepIndex >= 0 ? tl[sepIndex] : null, indent: indent };
}
function escCell(s) { return String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/\|/g, '\\|'); }
function serializeRow(row) { return '| ' + row.map(escCell).join(' | ') + ' |'; }
function tblNcols(p) { return p.header ? p.header.length : (p.rows[0] ? p.rows[0].length : 2); }
// Data-row offset: org-tables (no separator) keep the head line at rows[0],
// so a data-row index (0-based among tbody rows) maps to model row (idx + 1).
// Pipe-tables hold data rows in rows[] directly (offset 0).
function tblDataOffset(p) { return p.sepIndex >= 0 ? 0 : 1; }
function tblModelRow(p, mdRow) { return mdRow + tblDataOffset(p); }
// Unified cell write: handles both head cells (thead line) and body cells with
// correct org/pipe row mapping.
function tblPutCell(p, mdRow, ci, text, isHead) {
  if (isHead) {
    var hrow = p.sepIndex >= 0 ? p.header : p.rows[0];
    if (hrow && ci >= 0 && ci < hrow.length) hrow[ci] = text;
  } else {
    var ri = tblModelRow(p, mdRow);
    if (p.rows[ri] && ci >= 0 && ci < p.rows[ri].length) p.rows[ri][ci] = text;
  }
}
function padRow(row, n) { var r = [], i; for (i = 0; i < n; i++) r.push(i < row.length ? row[i] : ''); return r; }
function rebuildTableLines(p, header, rows) {
  var pre = p.indent || '';
  var out = [], ncols = 0;
  (header ? [header] : []).concat(rows).forEach(function (r) { if (r.length > ncols) ncols = r.length; });
  if (p.sepIndex > 0 && header) out.push(pre + serializeRow(header));
  if (p.sepIndex >= 0) {
    var sg = p.sepLn ? p.sepLn.trim().replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map(function (s) { return s.trim(); }) : [];
    while (sg.length < ncols) sg.push(sg.length ? sg[sg.length - 1] : '-');
    if (sg.length > ncols) sg = sg.slice(0, ncols);
    out.push(pre + '| ' + sg.join(' | ') + ' |');
  }
  rows.forEach(function (r) { out.push(pre + serializeRow(padRow(r, ncols))); });
  return out;
}
function tblPatchContent(content, p, header, rows) {
  var rebuilt = rebuildTableLines(p, header, rows);
  var lines = content.split('\n');
  return lines.slice(0, p.start).concat(rebuilt, lines.slice(p.end + 1)).join('\n');
}
function tblWriteBack(uuid, mut) {
  return writeBlock(uuid, function (c) {
    var p = parseMdTable(c);
    if (!p) { console.warn('[mg] tblWriteBack: no parsable table in block', uuid); return null; }
    var res = mut(p);
    if (!res) return null;
    return tblPatchContent(c, p, res.header, res.rows);
  });
}
function tblCellPut(p, r, c, newText) { if (p.rows[r] && c >= 0 && c < p.rows[r].length) p.rows[r][c] = newText; }
function tblOpDelRow(rows, vi) { rows.splice(vi, 1); }
function tblOpInsRow(rows, at, cols) { rows.splice(at, 0, padRow([], cols)); }
function tblOpMoveRow(rows, vi, to) { var r = rows.splice(vi, 1)[0]; rows.splice(to > vi ? to - 1 : to, 0, r); }
function tblOpMoveCol(header, rows, ci, to) { var mv = function (a) { if (a && ci < a.length) { var v = a.splice(ci, 1)[0]; a.splice(to > ci ? to - 1 : to, 0, v); } }; mv(header); rows.forEach(mv); }
function tblOpDelCol(header, rows, ci) { var dl = function (a) { if (a && ci < a.length) a.splice(ci, 1); }; dl(header); rows.forEach(dl); }
function tblOpInsCol(header, rows, at) { var ins = function (a) { if (a) a.splice(at, 0, ''); }; ins(header); rows.forEach(ins); }
function dragFlow(mv, up) {
  var d = td();
  function fu(e) { d.removeEventListener('mousemove', mv, true); d.removeEventListener('mouseup', fu, true); up(e); }
  d.addEventListener('mousemove', mv, true); d.addEventListener('mouseup', fu, true);
}
function liveTbl(uuid) {
  var found = null;
  MG.tbls.forEach(function (o, tt) { if (!found && o.uuid === uuid && tt.isConnected) found = tt; });
  return found;
}
function liveOv(uuid) {
  var hit = null;
  MG.tbls.forEach(function (o, tt) { if (!hit && o.uuid === uuid && tt.isConnected && !o.dead) hit = o; });
  return hit;
}
function liveOvBeginEdit(uuid, ri, ci) {
  var hit = null;
  MG.tbls.forEach(function (o, tt) { if (!hit && o.uuid === uuid && tt.isConnected && !o.dead) hit = o; });
  if (!hit || !hit.tbl || !hit.tbl.isConnected) return false;
  var rows = tt_rows(hit.tbl), nr = rows[ri];
  if (nr && nr.children[ci] && nr.isConnected && hit.ovEdit) { hit.ovEdit(nr.children[ci], ri, ci); return true; }
  return false;
}
function tt_tbodies(host) {
  var bs = host.querySelectorAll('tbody'), out = [];
  for (var i = 0; i < bs.length; i++) out.push(bs[i]);
  if (!out.length) {
    // Synthetic grouping: all non-thead rows behave as one group.
    var fake = Array.prototype.filter.call(host.querySelectorAll('tr'), function (x) { return !x.closest('thead'); });
    if (fake.length) out = [{ _trs: fake }];
  }
  return out;
}
// Map DOM rows onto markdown row indexes. Logseq org-style tables render
// EVERY body line as its own tbody; empty lines yield EMPTY tbodies (no tr)
// that still occupy one markdown row slot. Pipe-tables pack all rows into a
// single tbody (one md row per tr). The counter honors both shapes.
function tt_rowDescs(host) {
  var tbs = tt_tbodies(host), descs = [], md = 0;
  for (var i = 0; i < tbs.length; i++) {
    var trs = tbs[i]._trs || tbs[i].querySelectorAll('tr');
    if (!trs.length) { md++; continue; }
    for (var j = 0; j < trs.length; j++) { descs.push({ tr: trs[j], mdRow: md }); md++; }
  }
  return descs;
}
function tt_rows(host) {
  var ds = tt_rowDescs(host), out = [];
  for (var i = 0; i < ds.length; i++) out.push(ds[i].tr);
  return out;
}
function mkGhost(el) {
  var g = el.cloneNode(true), r = el.getBoundingClientRect(), wr = g.tagName === 'TR' ? td().createElement('table') : null;
  if (wr) { var tb = td().createElement('tbody'); tb.appendChild(g); wr.appendChild(tb); g = wr; }
  g.style.cssText = 'position:fixed;z-index:99999;pointer-events:none;opacity:.75;box-shadow:0 6px 18px rgba(0,0,0,.3);margin:0;background:var(--ls-primary-background-color,#fff);left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px;';
  td().body.appendChild(g);
  return g;
}
function makeTbl(tbl) {
  if (tbl.closest('.mg-canvas') && tbl.closest('.ls-block.mg-has-canvas>.flex.flex-row')) return;
  var uuid = blockUuidFrom(tbl); if (!uuid) return;
  var d = td();
  var ov = { tbl: tbl, uuid: uuid, wrap: null, widths: [], tblW: null, tblML: 0, raf: 0, dead: false, editing: null };
  ov.ensureStyle = function () { if (MG.styles[uuid] && MG.styles[uuid].isConnected) return MG.styles[uuid]; var st = d.createElement('style'); st.dataset.mgOwner = uuid; d.head.appendChild(st); MG.styles[uuid] = st; return st; };
  ov.renderCss = function () {
    var parts = [];
    ov.widths.forEach(function (w, i) { if (w !== '' && w != null) { var n = i + 1; parts.push('[blockid="' + uuid + '"] table th:nth-child(' + n + '),[blockid="' + uuid + '"] table td:nth-child(' + n + '){width:' + w + 'px;min-width:' + w + 'px;}'); } });
    ov.ensureStyle().textContent = parts.join('\n');
  };
  ov.persistWidths = function () {
    var vals = ov.widths.slice();
    while (vals.length && (vals[vals.length - 1] === '' || vals[vals.length - 1] == null)) vals.pop();
    var has = vals.some(function (w) { return w !== '' && w != null; });
    var tw = ov.tblW, tm = ov.tblML;
    writeBlock(uuid, function (c) {
      c = setPropStr(c, 'mg-widths', has ? vals.join(',') : null);
      c = setPropStr(c, 'mg-tw', (tw != null && isFinite(tw)) ? String(Math.round(tw)) : null);
      c = setPropStr(c, 'mg-tm', (tm != null && isFinite(tm) && tm !== 0) ? String(Math.round(tm)) : null);
      return c;
    });
  };
  // Overall table box: outer bars set an explicit width (all columns scaled) and
  // may shift the table sideways so it can also shrink from the left edge.
  ov.applyBox = function () {
    var wrap = tbl.closest('.table-wrapper') || tbl;
    if (ov.tblW != null && isFinite(ov.tblW)) {
      tbl.style.tableLayout = 'fixed';
      wrap.style.width = Math.round(ov.tblW) + 'px';
      wrap.style.marginLeft = (ov.tblML ? Math.round(ov.tblML) : 0) + 'px';
    } else {
      tbl.style.tableLayout = '';
      wrap.style.width = '';
      wrap.style.marginLeft = '';
    }
  };
  ov.loadWidths = function (content) {
    var raw = getProp(content || '', 'mg-widths'); ov.widths = raw ? String(raw).split(',') : [];
    var tw = getProp(content || '', 'mg-tw'); ov.tblW = tw ? parseFloat(tw) : null;
    var tm = getProp(content || '', 'mg-tm'); ov.tblML = tm ? parseFloat(tm) : 0;
    ov.renderCss(); ov.applyBox();
  };
  ov.fixW = function () { ov.renderCss(); ov.applyBox(); ov.persistWidths(); };
  ov.buildDom = function () {    ov.wrap = d.createElement('div'); ov.wrap.className = 'mg-tbowrap';
    d.body.appendChild(ov.wrap);
    ov.colhs = [];
    ov.ensureStyle();
    var heads = tbl.querySelectorAll('thead th, thead td');
    if (!heads.length) heads = tbl.querySelectorAll('tr:first-child>*');
    for (var i = 0; i <= (heads.length || 1); i++) {      (function (idx) {
        var h = d.createElement('div'); h.className = 'mg-colh';
        h.addEventListener('mousedown', function (e) {
          if (e.button !== 0 || ov.dead) return;
          e.preventDefault(); e.stopPropagation();
          var sx = e.clientX;
          if (idx === 0 || idx === heads.length) {
            // Outer bars: resize the whole table from that side; every column
            // scales proportionally so the table shrinks/grows as a whole.
            var dir = idx === 0 ? -1 : 1;
            var cols = [], startTotal = 0;
            for (var k = 0; k < heads.length; k++) {
              var w0 = (ov.widths[k] != null && ov.widths[k] !== '') ? parseFloat(ov.widths[k]) : (heads[k] ? heads[k].getBoundingClientRect().width : 100);
              cols.push(w0); startTotal += w0;
            }
            if (!startTotal) startTotal = tbl.offsetWidth || 100;
            var startML = parseFloat((tbl.closest('.table-wrapper') || tbl).style.marginLeft) || 0;
            var minTot = Math.max(56, heads.length * 28);
            dragFlow(function (ev) {
              var factor = (startTotal + (ev.clientX - sx) * dir) / startTotal;
              if (startTotal * factor < minTot) factor = minTot / startTotal;
              for (var k = 0; k < cols.length; k++) ov.widths[k] = String(Math.max(28, Math.round(cols[k] * factor)));
              ov.tblW = Math.round(startTotal * factor);
              ov.tblML = idx === 0 ? Math.round(startML + (startTotal - ov.tblW)) : startML;
              ov.renderCss(); ov.applyBox();
            }, function () { ov.persistWidths(); });
            return;
          }
          var side = idx - 1;
          var startW = ov.widths[side] !== '' && ov.widths[side] != null ? parseFloat(ov.widths[side]) : (heads[side] ? heads[side].getBoundingClientRect().width : 100);
          dragFlow(function (ev) {
            var w = Math.max(28, Math.round(startW + (ev.clientX - sx)));
            ov.widths[side] = String(w); ov.renderCss();
            if (ov.tblW != null) { var tot = 0; for (var q = 0; q < heads.length; q++) { tot += parseFloat(ov.widths[q]) || (heads[q] ? heads[q].getBoundingClientRect().width : 0); } ov.tblW = Math.round(tot); ov.applyBox(); }
          }, function () { ov.persistWidths(); });
        });
        ov.wrap.appendChild(h); ov.colhs.push(h);
      })(i);
    }
  };
  ov.ovEdit = beginEdit;
  // Sequential advance (Enter / Tab): commit the current cell and step to the
  // next cell in reading order — header cells first (left→right), then every
  // body row (left→right). At the very end a fresh empty row is appended.
  ov.enterAdvance = function (cell) {
    var inf = ov.rowInfo(cell);
    if (!inf || inf.ci < 0) return;
    var isHead = inf.isHead, ri = inf.ri, ci = inf.ci;
    var ncols = cell.parentElement ? cell.parentElement.children.length : 2;
    if (ov.forceFinish) ov.forceFinish(true);
    var nextHead = false, nextRow = 0, nextCol = 0, append = false;
    if (isHead) {
      if (ci + 1 < ncols) { nextHead = true; nextCol = ci + 1; }
      else { nextHead = false; nextRow = 0; nextCol = 0; }
    } else {
      if (ci + 1 < ncols) { nextRow = ri; nextCol = ci + 1; }
      else {
        // wrap to the next visible body row; if none, append a fresh row.
        var descs = tt_rowDescs(tbl), vi = -1;
        for (var i = 0; i < descs.length; i++) { if (descs[i].tr === cell.parentElement) { vi = i; break; } }
        if (vi >= 0 && vi + 1 < descs.length) { nextRow = descs[vi + 1].mdRow; nextCol = 0; }
        else { append = true; nextRow = 0; nextCol = 0; }
      }
    }
    if (!append) { Promise.resolve().then(function () { ov.hopToCell(nextCol, nextRow, cell, nextHead); }); return; }
    // Append: open a full-width "new row" editor beneath the table. Logseq does
    // not render an all-empty row, so the row is composed in an overlay that
    // mimics the table row and is written in one go when the row is finished.
    beginRowEdit();
  };
  // Guard-route: document-capture intercepted a key inside OUR editing cell.
  ov.guardAct = function (cell, key, shift) {
    if (ov.editing !== cell) return;
    if (key === 'Enter' && !shift) { ov.enterAdvance(cell); }
    else if (key === 'Tab') { ov.enterAdvance(cell); }
    else if (key === 'Escape') { if (ov.forceFinish) ov.forceFinish(false); }
  };
  // Central hop: bring the caret into cell (mdRow, ci) after a commit+rerender.
  // Handles: same-table targeting, successor-instance takeover, and the
  // phantom-row case (Logseq renders empty md rows as EMPTY tbodies without
  // any <tr>, so the target cell physically does not exist yet). For phantoms
  // we park a floating mini-editor at the caret position and commit its text
  // into the row on blur/Enter.
  ov.hopToCell = function (ci, mdRow, fromCell, isHead) {
    var tries = 0;
    (function hunt() {
      if (++tries > 40) return;
      if (MG.tbls && (function () { var busy = false; MG.tbls.forEach(function (o, tt) { if (o.editingNow) busy = true; }); return busy; })()) { setTimeout(hunt, 120); return; }
      var host = tbl.isConnected && !ov.dead ? tbl : liveTbl(uuid);
      if (!host) { setTimeout(hunt, 120); return; }
      if (host !== tbl) { var lo = liveOv(uuid); if (lo && lo !== ov) { lo.hopToCell(ci, mdRow, fromCell, isHead); return; } }
      if (isHead) {
        var htr = host.querySelector('thead tr') || host.querySelector('tr');
        var hc = htr && htr.children[ci];
        if (hc && hc.isConnected) { beginEdit(hc, -1, ci, true); return; }
        setTimeout(hunt, 120); return;
      }
      var dw = tt_rowDescs(host), nt = null;
      for (var q = 0; q < dw.length; q++) { if (dw[q].mdRow === mdRow) { nt = dw[q].tr; break; } }
      if (nt && nt.children[ci] && nt.isConnected) { beginEdit(nt.children[ci], mdRow, ci, false); return; }
      // Phantom row: no <tr> rendered for this md row. Park a floating editor.
      var anch = fromCell && fromCell.isConnected ? fromCell : (dw.length ? dw[dw.length - 1].tr : (host.querySelector('thead tr') || null));
      if (anch) {
        var rr = anch.getBoundingClientRect();
        if (rr.width > 0) { beginPhantom(ci, mdRow, rr, false); return; }
      }
      setTimeout(hunt, 120);
    })();
  };
  ov.phantomEl = null;
  ov.phantomCleanup = null;
  function removePhantom() {
    if (ov.phantomEl) { try { ov.phantomEl.remove(); } catch (e) {} ov.phantomEl = null; }
    if (ov.phantomCleanup) { try { ov.phantomCleanup(); } catch (e2) {} ov.phantomCleanup = null; }
  }
  function phantomTxt(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim().replace(/\\\|/g, '|') : ''; }
  function normCell(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
  // Delete the markdown row that matches a rendered DOM row. Logseq collapses
  // consecutive empty lines into a single empty <tbody>, so the mdRow counter
  // (tt_rowDescs) drifts; matching by cell content is immune to that drift.
  function deleteRowByTr(domTr) {
    var want = Array.prototype.map.call(domTr.children, function (c) { return normCell(c.textContent); });
    return ov.commitCells(function (p) {
      for (var i = 0; i < p.rows.length; i++) {
        var r = p.rows[i]; if (!r || r.length !== want.length) continue;
        var ok = true; for (var j = 0; j < r.length; j++) { if (normCell(r[j]) !== want[j]) { ok = false; break; } }
        if (ok) { p.rows.splice(i, 1); break; }
      }
      return p;
    });
  }
  // Delete the first empty body row (used from the phantom editor, where the
  // row did not render; all empty rows are equivalent so the exact index is moot).
  function deleteFirstEmptyRow() {
    return ov.commitCells(function (p) {
      var start = p.sepIndex >= 0 ? 0 : 1; // org tables keep the header line at rows[0]
      for (var i = start; i < p.rows.length; i++) {
        var r = p.rows[i], e = true;
        for (var j = 0; j < r.length; j++) { if (normCell(r[j]) !== '') { e = false; break; } }
        if (e) { p.rows.splice(i, 1); break; }
      }
      return p;
    });
  }
  function domNcols(host) {
    var tr = host.querySelector('thead tr') || host.querySelector('tbody tr') || host.querySelector('tr');
    return tr ? tr.children.length : 2;
  }
  function colRects(host) {
    var heads = host.querySelectorAll('thead th, thead td');
    if (!heads.length) heads = host.querySelectorAll('tr:first-child>*');
    var r = host.getBoundingClientRect(), cols = [];
    for (var i = 0; i < heads.length; i++) { var hr = heads[i].getBoundingClientRect(); cols.push({ x: hr.left - r.left, w: hr.width }); }
    return { table: r, cols: cols };
  }
  // Full-width "new row" editor. Logseq drops all-empty rows from the rendered
  // table, so a fresh row is composed in an overlay shaped like the real table
  // (same column widths + theme colors). Enter steps cell by cell; after the
  // last cell the row is appended to the markdown in one write and a new empty
  // row overlay opens beneath it, ready at column 1 again. Focus never leaves
  // the editor for the duration of a row.
  function beginRowEdit() {
    removePhantom();
    var host = tbl.isConnected && !ov.dead ? tbl : liveTbl(uuid);
    if (!host) return;
    var d = td();
    var ncols = domNcols(host);
    var geo = colRects(host), r = geo.table;
    var trS = host.querySelector('tbody tr') || host.querySelector('thead tr');
    var rowH = 28;
    if (trS && trS.getBoundingClientRect().height > 4) rowH = trS.getBoundingClientRect().height;
    var sampleFont = trS ? getComputedStyle(trS).font : '';
    var vals = []; for (var v = 0; v < ncols; v++) vals.push('');
    var cur = 0, done = false;
    var wrapEl = d.createElement('div');
    wrapEl.className = 'mg-phantom-row';
    wrapEl.style.cssText = 'left:' + r.left + 'px;top:' + (r.bottom + 2) + 'px;width:' + r.width + 'px;height:' + rowH + 'px;';
    if (sampleFont) wrapEl.style.font = sampleFont;
    var cells = [];
    for (var i = 0; i < ncols; i++) {
      var c = d.createElement('div');
      c.className = 'mg-phantom-cell';
      var base = geo.cols[i];
      c.style.cssText = base ? ('left:' + base.x + 'px;width:' + base.w + 'px;height:100%;') : ('left:' + (i * r.width / ncols) + 'px;width:' + (r.width / ncols) + 'px;height:100%;');
      c.contentEditable = 'true';
      mgStopKeyBubble(c);
      cells.push(c); wrapEl.appendChild(c);
    }
    d.body.appendChild(wrapEl);
    ov.phantomEl = wrapEl;
    function focusCur() { var c = cells[cur]; if (c) { c.focus(); try { top.getSelection().selectAllChildren(c); } catch (e) {} } }
    function setActive() { for (var k = 0; k < cells.length; k++) cells[k].classList.toggle('is-active', k === cur); focusCur(); }
    function commitRow() {
      if (done) return; done = true;
      for (var k = 0; k < cells.length; k++) vals[k] = phantomTxt(cells[k]);
      var any = false; for (var j = 0; j < vals.length; j++) { if (vals[j] !== '') { any = true; break; } }
      removePhantom();
      if (!any) return;
      writeBlock(uuid, function (content) {
        var pp = parseMdTable(content);
        if (!pp) return null;
        tblOpInsRow(pp.rows, pp.rows.length, tblNcols(pp));
        var mi = pp.rows.length - 1;
        for (var q = 0; q < vals.length; q++) { if (pp.rows[mi] && q < pp.rows[mi].length) pp.rows[mi][q] = vals[q]; }
        return tblPatchContent(content, pp, pp.header, pp.rows);
      }).then(function () {
        schedScan();
        setTimeout(function () { if (!ov.dead && !ov.editing) beginRowEdit(); }, 200);
      });
    }
    setActive();
    var pk = function (ev) {
      if (!ov.phantomEl || ov.phantomEl !== wrapEl || !wrapEl.contains(ev.target)) return;
      if ((ev.key === 'Enter' && !ev.shiftKey) || ev.key === 'Tab') {
        ev.preventDefault(); ev.stopImmediatePropagation();
        vals[cur] = phantomTxt(cells[cur]);
        if (cur + 1 < cells.length) { cur++; setActive(); }
        else commitRow();
      } else if (ev.key === 'Escape') {
        ev.preventDefault(); ev.stopImmediatePropagation(); done = true; removePhantom();
      } else if (ev.key === 'Backspace' && cur === 0 && phantomTxt(cells[0]) === '') {
        // Empty first cell of the not-yet-written row: just drop the row editor.
        ev.preventDefault(); ev.stopImmediatePropagation(); done = true; removePhantom();
      } else { ev.stopPropagation(); }
    };
    var md = function (ev) {
      if (!ov.phantomEl || ov.phantomEl !== wrapEl) return;
      if (wrapEl.contains(ev.target)) return;
      setTimeout(function () {
        if (done || ov.phantomEl !== wrapEl) return;
        if (wrapEl.contains(d.activeElement)) return;
        commitRow();
      }, 0);
    };
    d.addEventListener('keydown', pk, true);
    d.addEventListener('mousedown', md, true);
    ov.phantomCleanup = function () { d.removeEventListener('keydown', pk, true); d.removeEventListener('mousedown', md, true); };
  }
  function beginPhantom(ci, mdRow, anchorRect, isHead) {
    var d = td();
    var pe = d.createElement('div');
    pe.className = 'mg-phantom-edit';
    pe.contentEditable = 'true';
    mgStopKeyBubble(pe);
    pe.style.cssText = 'left:' + anchorRect.left + 'px;top:' + (anchorRect.bottom + 2) + 'px;width:' + Math.max(80, anchorRect.width) + 'px;height:auto;';
    d.body.appendChild(pe);
    pe.focus();
    var doneP = false;
    function commitPhantom(cancel) {
      if (doneP) return; doneP = true;
      var txt = pe.textContent.replace(/\s+/g, ' ').trim().replace(/\\\|/g, '|');
      pe.remove();
      if (cancel) return;
      var write = function (c) {
        var pp = parseMdTable(c);
        if (!pp) return null;
        tblPutCell(pp, mdRow, ci, txt, isHead);
        return tblPatchContent(c, pp, pp.header, pp.rows);
      };
      writeBlock(uuid, write).then(function () { schedScan(); });
    }
    var pb = function () { pe.removeEventListener('blur', pb); commitPhantom(false); };
    pe.addEventListener('blur', pb);
    var pk = function (ev) {
      ev.stopPropagation();
      if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); ev.stopImmediatePropagation(); pe.removeEventListener('blur', pb); commitPhantom(false); }
      else if (ev.key === 'Escape') { ev.preventDefault(); ev.stopImmediatePropagation(); pe.removeEventListener('blur', pb); commitPhantom(true); }
      else if (ev.key === 'Backspace' && !isHead && ci === 0 && normCell(pe.textContent) === '') {
        // Empty first cell of an empty row: remove the whole row.
        ev.preventDefault(); ev.stopImmediatePropagation(); pe.removeEventListener('blur', pb);
        doneP = true; pe.remove();
        deleteFirstEmptyRow().then(function () { schedScan(); });
      }
    };
    pe.addEventListener('keydown', pk);
  }
  // Arrow-key grid navigation: caret walks to neighbour cell (wraps at edges),
  // entering each target cell in edit mode. Vertical arrows respect the
  // md-row mapping (skips phantom empty rows seamlessly).
  ov.arrowNav = function (cell, dr, dc) {
    if (ov.editing !== cell) return;
    var descs = tt_rowDescs(tbl), ri = -1, ci = -1;
    for (var i = 0; i < descs.length; i++) { if (descs[i].tr === cell.parentElement) { ri = descs[i].mdRow; ci = Array.prototype.indexOf.call(cell.parentElement.children, cell); break; } }
    if (ri < 0) return;
    var nrows = 0, ncols = cell.parentElement.children.length;
    for (var q = 0; q < descs.length; q++) { if (descs[q].mdRow + 1 > nrows) nrows = descs[q].mdRow + 1; }
    var nr2 = ri + dr, nc2 = ci + dc;
    if (dc !== 0 && (nc2 < 0 || nc2 >= ncols)) {
      // Horizontal edge: wrap into the adjacent body row (header excluded).
      // Right edge -> next row, column 1. Left edge -> previous row, last column.
      // When no such body row exists, stay put (do NOT end editing) so the cell
      // keeps focus and arrow navigation keeps working in the other direction.
      var wRow = nc2 >= ncols ? ri + 1 : ri - 1;
      var wCol = nc2 >= ncols ? 0 : ncols - 1;
      if (wRow >= 0 && wRow < nrows) { if (ov.forceFinish) ov.forceFinish(true); ov.hopToCell(wCol, wRow, cell); }
      return;
    }
    if (dr !== 0 && (nr2 < 0 || nr2 >= nrows)) { if (ov.forceFinish) ov.forceFinish(true); return; }   // vertical edges likewise
    // commit current, then hop
    if (ov.forceFinish) ov.forceFinish(true);
    ov.hopToCell(nc2, nr2, cell);
  };
  // Force-finalize an ongoing edit of a given cell (used by paste route so the
  // later blur commit cannot wipe freshly inserted markdown).
  ov.finishCell = function (cell, finalRaw) {
    var inf = ov.rowInfo(cell);
    if (!inf || inf.ci < 0 || (!inf.isHead && inf.ri < 0)) return Promise.resolve(false);
    return ov.commitCells(function (p) { tblPutCell(p, inf.ri, inf.ci, finalRaw, inf.isHead); return p; }).then(function () { return true; }, function () { return false; });
  };
  ov.place = function () {
    if (ov.dead || !tbl.isConnected) { ov.destroy(); return; }
    var r = tbl.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) { ov.wrap.style.display = 'none'; return; }
    var sc = tbl.closest('#main-content-container');
    var sr = sc ? sc.getBoundingClientRect() : null;
    var topClip = sr ? Math.max(0, sr.top - r.top) : 0;
    var botClip = sr ? Math.max(0, r.bottom - sr.bottom) : 0;
    if (topClip >= r.height || botClip >= r.height) { ov.wrap.style.display = 'none'; return; }
    ov.wrap.style.display = '';
    ov.wrap.style.cssText = 'left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px;clip-path:inset(' + Math.max(0, topClip) + 'px 0px ' + Math.max(0, botClip) + 'px 0px);';
    var heads = tbl.querySelectorAll('thead th, thead td');
    if (!heads.length) heads = tbl.querySelectorAll('tr:first-child>*');
    var xs = [0], i;
    for (i = 0; i < heads.length; i++) xs.push(heads[i].getBoundingClientRect().right - r.left);
    for (i = 0; i < ov.colhs.length; i++) { var x = xs[Math.min(i, xs.length - 1)]; var lx = Math.max(3, Math.min(x, Math.max(3, r.width - 3))); ov.colhs[i].style.cssText = 'left:' + lx + 'px;top:0;width:6px;height:' + r.height + 'px;transform:translateX(-50%);'; }
  };
  ov.loop = function () {
    if (ov.dead) return;
    if (ov.editing && !ov.editing.isConnected) {
      // Rerender killed our editable cell mid-edit: free the latch so
      // subsequent dblclick/Enter can start a fresh edit session.
      ov.editing = null; ov.editingNow = false;
    }
    ov.place();
    if (ov.dead) return;
    ov.raf = top.requestAnimationFrame(ov.loop);
  };
  ov.destroy = function () { if (ov.dead) return; ov.dead = true; if (ov.raf) top.cancelAnimationFrame(ov.raf); if (typeof removePhantom === 'function') removePhantom(); if (ov.wrap) ov.wrap.remove(); if (MG.styles[uuid] && !tbl.ownerDocument.contains(tbl)) { MG.styles[uuid].remove(); delete MG.styles[uuid]; } MG.tbls.delete(tbl); };
  ov.indicator = function (vert) { var iv = d.createElement('div'); iv.className = vert ? 'mg-cindh' : 'mg-rindh'; d.body.appendChild(iv); return iv; };
  ov.rowInfo = function (target) {
    var cell = target.closest ? target.closest('td,th') : null; if (!cell) return null;
    var tr = cell.parentElement; if (!tr || !tr.parentElement) return null;
    var descs = tt_rowDescs(tbl), mdRow = -1, bodyTrs = [];
    for (var i = 0; i < descs.length; i++) { bodyTrs.push(descs[i].tr); if (descs[i].tr === tr) mdRow = descs[i].mdRow; }
    return { cell: cell, tr: tr, ri: mdRow, ci: Array.prototype.indexOf.call(tr.children, cell), isHead: !!tr.closest('thead'), bodyTrs: bodyTrs };
  };
  ov.commitCells = function (mut) { return tblWriteBack(uuid, mut).then(function () { schedScan(); }); };
  tbl.addEventListener('mousedown', function (e) {
    if (e.button !== 0 || ov.editing) return;
    var inf = ov.rowInfo(e.target); if (!inf || inf.ci < 0) return;
    var d0 = td(), sx = e.clientX, sy = e.clientY, started = false, ghost = null, ind = null, tgt = null;
    var killFx = function () { if (ghost) ghost.remove(); if (ind) ind.remove(); };
    var dropCommit = function (fn) { if (started && tgt != null && tgt !== inf.ci && tgt !== inf.ci + 1) ov.commitCells(fn); };
    if (inf.isHead) {
      dragFlow(function (ev) {
        var dx = ev.clientX - sx, dy = ev.clientY - sy;
        if (!started && Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        if (!started) { started = true; e.preventDefault(); ghost = mkGhost(inf.tr); }
        if (ghost) { ghost.style.left = (sx + dx - inf.cell.getBoundingClientRect().width / 2) + 'px'; ghost.style.top = (sy + dy - 10) + 'px'; }
        var cel = d0.elementFromPoint(ev.clientX, ev.clientY);
        var tInf = cel ? ov.rowInfo(cel) : null;
        tgt = null;
        if (ind) { ind.remove(); ind = null; }
        if (tInf && tInf.tr === inf.tr) {
          var hr = tInf.cell.getBoundingClientRect(), before = ev.clientX < hr.left + hr.width / 2;
          tgt = before ? tInf.ci : tInf.ci + 1;
          ind = ov.indicator(true);
          ind.style.cssText = 'display:block;left:' + (before ? hr.left - 2 : hr.right - 1) + 'px;top:' + hr.top + 'px;height:' + hr.height + 'px;';
        }
      }, function () { killFx(); dropCommit(function (p) { tblOpMoveCol(p.header, p.rows, inf.ci, tgt); return p; }); });
      return;
    }
    if (inf.ci !== 0) return;
    dragFlow(function (ev) {
      var dy = ev.clientY - sy;
      if (!started && Math.abs(dy) < 6 && Math.abs(ev.clientX - sx) < 6) return;
      if (!started) { started = true; e.preventDefault(); ghost = mkGhost(inf.tr); }
      if (ghost) { ghost.style.left = inf.tr.getBoundingClientRect().left + 'px'; ghost.style.top = (sy + dy - 10) + 'px'; }
      var bi = -1;
      inf.bodyTrs.forEach(function (tr, ix) { var rr = tr.getBoundingClientRect(); if (bi < 0 && ev.clientY < rr.top + rr.height / 2) bi = ix; });
      tgt = bi < 0 ? inf.bodyTrs.length : bi;
      if (ind) ind.remove();
      ind = ov.indicator(false);
      var refY = bi < 0 ? inf.bodyTrs[inf.bodyTrs.length - 1].getBoundingClientRect().bottom : inf.bodyTrs[bi].getBoundingClientRect().top;
      var tw = tbl.getBoundingClientRect();
      ind.style.cssText = 'display:block;left:' + tw.left + 'px;top:' + (refY - 2) + 'px;width:' + tw.width + 'px;';
    }, function () { killFx(); if (started && tgt != null && tgt !== inf.ri && tgt !== inf.ri + 1) ov.commitCells(function (p) { tblOpMoveRow(p.rows, tblModelRow(p, inf.ri), tblModelRow(p, tgt)); return p; }); });
  });
  tbl.addEventListener('mousedown', function (e) { e.stopPropagation(); }, true);
  function beginEdit(cell, ri, ci, isHead) {
    if (ov.editing) {
      // Release the latch when the recorded cell lost its editing mark or its
      // connection: either sign means the previous session died somehow.
      if (!ov.editing.isConnected || !ov.editing.classList.contains('mg-tbo-edit')) { ov.editing = null; ov.editingNow = false; }
      else return;
    }
    if (typeof removePhantom === 'function') removePhantom();
    var origRaw = cell.textContent.replace(/\s+/g, ' ').trim().replace(/\\\|/g, '|'), done = false;
    cell.classList.add('mg-tbo-edit');
    mgStopKeyBubble(cell);
    cell._mgInf = { ri: ri, ci: ci, uuid: uuid, isHead: !!isHead };
    ov.editing = cell; ov.editingNow = true; cell.contentEditable = 'true'; cell.focus();
    try { top.getSelection().selectAllChildren(cell); } catch (err) {}
    function finish(saveIt, extra) {
      if (done) return Promise.resolve();
      done = true; ov.editing = null; ov.editingNow = false;
      cell.classList.remove('mg-tbo-edit');
      try { delete cell._mgInf; } catch (e) {}
      var alive = cell.isConnected;
      var txt = alive ? cell.textContent.replace(/\s+/g, ' ').trim().replace(/\\\|/g, '|') : origRaw;
      if (alive) cell.contentEditable = 'false';
      if (!saveIt) { if (alive) cell.textContent = origRaw; return Promise.resolve(); }
      if (txt === origRaw && !extra) return Promise.resolve();
      return ov.commitCells(function (p) { tblPutCell(p, ri, ci, txt, isHead); if (extra) extra(p); return p; });
    }
    var bf = function () { cell.removeEventListener('blur', bf); finish(true); };
    cell.addEventListener('blur', bf);
    var fb = function () { cell.removeEventListener('blur', bf); finish(true); };
    cell.addEventListener('mg-force-blur', fb);
    var ce = function () { cell.removeEventListener('blur', bf); finish(false); };
    cell.addEventListener('mg-cancel-edit', ce);
    ov.forceFinish = finish;
    var tn = function () { cell.removeEventListener('blur', bf); ov.enterAdvance(cell); };
    cell.addEventListener('mg-tab-next', tn);
    var bk = function (ev) {
      ev.stopPropagation();
      if (ev.key === 'Enter' && !ev.shiftKey) {
        ev.preventDefault(); ev.stopImmediatePropagation(); cell.removeEventListener('blur', bf);
        ov.enterAdvance(cell);
      } else if (ev.key === 'Escape') { ev.preventDefault(); ev.stopImmediatePropagation(); cell.removeEventListener('blur', bf); finish(false); }
      else if (ev.key === 'Tab') { ev.preventDefault(); ev.stopImmediatePropagation(); cell.removeEventListener('blur', bf); ov.enterAdvance(cell); }
      else if (ev.key === 'Backspace' && !isHead && ci === 0 && normCell(cell.textContent) === '') {
        // Empty first cell: Backspace removes the whole (empty) row.
        ev.preventDefault(); ev.stopImmediatePropagation(); cell.removeEventListener('blur', bf);
        done = true; ov.editing = null; ov.editingNow = false;
        deleteRowByTr(cell.parentElement).then(function () { schedScan(); });
      }
    };
    cell.addEventListener('keydown', bk);
  }
  tbl.addEventListener('click', function (e) {
    // Single click activates cell editing — header and body cells alike.
    var inf = ov.rowInfo(e.target);
    if (!inf || inf.ci < 0 || ov.editing) return;
    if (!inf.isHead && inf.ri < 0) return;
    e.preventDefault(); e.stopPropagation();
    beginEdit(inf.cell, inf.ri, inf.ci, inf.isHead);
  });
  tbl.addEventListener('dblclick', function (e) {
    var inf = ov.rowInfo(e.target);
    if (!inf || inf.ci < 0 || ov.editing) return;
    if (!inf.isHead && inf.ri < 0) return;
    e.preventDefault(); e.stopPropagation();
    beginEdit(inf.cell, inf.ri, inf.ci, inf.isHead);
  });  tbl.addEventListener('contextmenu', function (e) {
    var inf = ov.rowInfo(e.target);
    if (!inf || inf.ci < 0) return;
    e.preventDefault(); e.stopPropagation();
    var ri = inf.ri, ci = inf.ci, isHead = inf.isHead;
    var run = function (lbl, mut, fx) { return { label: lbl, fn: function () { ov.commitCells(mut); if (fx) fx(); } }; };
    var items = [];
    if (!isHead) {
      items.push(run(t('row_del'), function (p) { tblOpDelRow(p.rows, tblModelRow(p, ri)); return p; }));
      items.push(run(t('row_above'), function (p) { tblOpInsRow(p.rows, tblModelRow(p, ri), tblNcols(p)); return p; }));
      items.push(run(t('row_below'), function (p) { tblOpInsRow(p.rows, tblModelRow(p, ri) + 1, tblNcols(p)); return p; }));
      if (ri > 0) items.push(run(t('row_up'), function (p) { tblOpMoveRow(p.rows, tblModelRow(p, ri), tblModelRow(p, ri - 1)); return p; }));
      if (ri < inf.bodyTrs.length - 1) items.push(run(t('row_down'), function (p) { tblOpMoveRow(p.rows, tblModelRow(p, ri), tblModelRow(p, ri) + 2); return p; }));
      items.push({ sep: true });
    }
    items.push(run(t('col_del'), function (p) { tblOpDelCol(p.header, p.rows, ci); return p; }, function () { ov.widths.splice(ci, 1); ov.fixW(); }));
    items.push(run(t('col_before'), function (p) { tblOpInsCol(p.header, p.rows, ci); return p; }, function () { ov.widths.splice(ci, 0, ''); ov.fixW(); }));
    items.push(run(t('col_after'), function (p) { tblOpInsCol(p.header, p.rows, ci + 1); return p; }, function () { ov.widths.splice(ci + 1, 0, ''); ov.fixW(); }));
    if (ci > 0) items.push(run(t('col_left'), function (p) { tblOpMoveCol(p.header, p.rows, ci, ci - 1); return p; }, function () { var w = ov.widths.splice(ci, 1)[0]; ov.widths.splice(ci - 1, 0, w); ov.fixW(); }));
    if (ci < inf.tr.children.length - 1) items.push(run(t('col_right'), function (p) { tblOpMoveCol(p.header, p.rows, ci, ci + 2); return p; }, function () { var w = ov.widths.splice(ci, 1)[0]; ov.widths.splice(ci + 1, 0, w); ov.fixW(); }));
    items.push({ sep: true });
    items.push({ label: t('widths_reset'), fn: function () { ov.widths = []; ov.tblW = null; ov.tblML = 0; ov.fixW(); } });
    items.push({ sep: true });
    items.push({ label: t('migrate_sheet'), fn: function () { migrateTableToSheet(uuid, ov); } });
    showPopover(e.clientX, e.clientY, items);
  });
  ov.buildDom();
  (async function () { var b = await getBlock(uuid); if (b && !ov.dead) ov.loadWidths(b.content || ''); })();
  ov.loop();
  MG.tbls.set(tbl, ov);
  return ov;
}
function tblEditingGuard() {
  // Intercept navigation keys while a Multigrid table cell is edited. Hooked
  // on WINDOW capture — the earliest station in the propagation chain — so
  // Logseq's own handlers (running later on document capture/bubble) never
  // see Enter/Tab/Escape/arrows destined for our cell editors.
  var d = td();
  var w = d.defaultView || top;
  if (MG.tboGuardInstalled) return;
  MG.tboGuardInstalled = true;
  var handler = function (ev) {
    var t = ev.target;
    var sc = t && t.closest ? t.closest('.mg-sheet-edit') : null;
    if (sc) {
      var kk = ev.key;
      if (kk === 'Enter' || kk === 'Escape' || kk === 'Backspace' || kk === 'ArrowLeft' || kk === 'ArrowRight' || kk === 'ArrowUp' || kk === 'ArrowDown') {
        if (kk === 'Enter' && ev.shiftKey) return;
        if (sc._mgSt) sheetCellKey(sc._mgSt, sc, ev);
        ev.stopPropagation();
      }
      return;
    }
    var ec = t && t.closest ? t.closest('.mg-tbo-edit') : null;
    if (!ec) return;
    var k = ev.key;
    var arrow = ({ ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] })[k];
    if (arrow) {
      ev.preventDefault(); ev.stopPropagation();
      var infA = ec._mgInf;
      if (!infA) return;
      MG.tbls.forEach(function (o, tt) {
        if (!o.arrowNav || o.uuid !== infA.uuid || !tt.isConnected || o.dead) return;
        o.arrowNav(ec, arrow[0], arrow[1]);
      });
      return;
    }
    if (k !== 'Enter' && k !== 'Tab' && k !== 'Escape') return;
    if (k === 'Enter' && ev.shiftKey) return; // let contentEditable insert a line break
    ev.preventDefault(); ev.stopPropagation();
    var inf = ec._mgInf;
    if (!inf) return;
    MG.tbls.forEach(function (o, tt) {
      if (!o.guardAct || o.uuid !== inf.uuid || tt.isConnected === false) return;
      o.guardAct(ec, k, ev.shiftKey);
    });
  };
  w.addEventListener('keydown', handler, true);
}
function main() {
  logseq.provideStyle({ key: PK, style: css() });
  setupMacro();
  var d = td();
  MG.mo = new MutationObserver(schedScan); MG.mo.observe(d.body, { childList: true, subtree: true });
  d.addEventListener('paste', onPaste, true);
  d.addEventListener('keydown', sheetSelKeyDoc, true);
  top.window.addEventListener('dragover', onDragOver, true);
  top.window.addEventListener('drop', onDrop, true);
  d.addEventListener('mousedown', function (e) { if (e.target.closest && !e.target.closest('.mg-canvas,.mg-menu,.mg-emptyzone')) { deselectAll(); clearCvSel(); } }, true);
  d.addEventListener('mousedown', function (e) { if (!e.target.closest || e.target.closest('.mg-sheet,.mg-menu')) return; var f = MG.sheetFocus; if (f && f.sheet && f.sheet.range) sheetClearSel(f); MG.sheetFocus = null; }, true);
  d.addEventListener('mousedown', function (e) {
    var live = d.querySelectorAll('.mg-yt.mg-yt-live');
    if (!live.length) return;
    var within = e.target.closest ? e.target.closest('.mg-yt.mg-yt-live') : null;
    Array.prototype.forEach.call(live, function (y) { if (y !== within) y.classList.remove('mg-yt-live'); });
  }, true);
  top.window.addEventListener('keydown', function (e) {
    if ((e.key === 'Backspace' || e.key === 'Delete') && (e.metaKey || e.ctrlKey)) {
      if (isEditing()) return;
      var sel = Array.from(MG.sel);
      if (!sel.length) return;
      e.preventDefault(); e.stopPropagation();
      deleteCards(sel);
    }
  }, true);
  tblEditingGuard();
  wireTooltips();
  getGraphPath();
  schedScan();
}
logseq.ready(function() { try { console.info('[mg] boot v1.1.0 ' + new Date().toISOString()); main(); } catch(e) { console.error('[mg] main crashed:', e.message, e.stack); } }).catch(function (e) { console.error('[mg] ready:', e); });
