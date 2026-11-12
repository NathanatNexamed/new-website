// Headline helper: wrap the one phrase that matters in [[double brackets]].
// "More [[booked patients]]. One practice per market." -> <mark>booked patients</mark>
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function hl(text: string): string {
  return esc(text).replace(/\[\[(.+?)\]\]/g, "<mark>$1</mark>");
}

export function plain(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, "$1");
}
