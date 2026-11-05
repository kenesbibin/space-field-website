/** Print a standalone report, never the surrounding marketing page. */
export function printEstimate(title: string, headings: string[], rows: string[][], total: string) {
  const frame = document.createElement('iframe');
  frame.title = title;
  frame.style.cssText = 'position:fixed;width:0;height:0;border:0;';
  document.body.appendChild(frame);
  const doc = frame.contentDocument;
  if (!doc) { frame.remove(); return; }
  doc.open();
  doc.write('<!doctype html><html><head><title>Estimate</title><style>body{font:12px Arial;color:#111}table{width:100%;border-collapse:collapse;table-layout:fixed}th,td{padding:8px;text-align:left;border-bottom:1px solid #ccc;overflow-wrap:anywhere}tr{break-inside:avoid}thead{display:table-header-group}</style></head><body></body></html>');
  doc.close();
  doc.title = title;
  const heading = doc.createElement('h1');
  heading.textContent = title;
  doc.body.appendChild(heading);
  const table = doc.createElement('table');
  const header = table.createTHead().insertRow();
  headings.forEach(text => { const cell = doc.createElement('th'); cell.textContent = text; header.appendChild(cell); });
  const body = table.createTBody();
  rows.forEach(values => { const row = body.insertRow(); values.forEach(text => { row.insertCell().textContent = text; }); });
  doc.body.appendChild(table);
  const summary = doc.createElement('h2');
  summary.textContent = total;
  doc.body.appendChild(summary);
  const note = doc.createElement('p');
  note.textContent = 'Estimates are for planning purposes only. Verify rates locally.';
  doc.body.appendChild(note);
  const view = frame.contentWindow;
  if (!view) { frame.remove(); return; }
  view.addEventListener('afterprint', () => frame.remove(), { once: true });
  view.focus();
  view.print();
}
