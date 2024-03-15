export function numberWithOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function timestampToDate(timestamp: string) {
  const d = new Date(parseInt(timestamp, 10));
  return new Date(
    new Date(d).setMinutes(
      new Date(d).getMinutes() + new Date(d).getTimezoneOffset(),
    ),
  );
}
