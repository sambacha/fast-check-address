/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
export default function (fst, snd) {
  let i, sub;
  let asc, end;
  let asc1, end1;
  if (fst.length < 2 || fst.length < 2) {
    return 0;
  }

  const map = new Map();
  for (i = 0, end = fst.length - 2, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    sub = fst.substr(i, 2);
    if (map.has(sub)) {
      map.set(sub, map.get(sub) + 1);
    } else {
      map.set(sub, 1);
    }
  }

  let match = 0;
  for (
    i = 0, end1 = snd.length - 2, asc1 = 0 <= end1;
    asc1 ? i <= end1 : i >= end1;
    asc1 ? i++ : i--
  ) {
    sub = snd.substr(i, 2);
    if (map.get(sub) > 0) {
      match++;
      map.set(sub, map.get(sub) - 1);
    }
  }

  return (2.0 * match) / (fst.length + snd.length - 2);
}
