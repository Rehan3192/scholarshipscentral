export function toSegment(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("_", "-")
    .replaceAll(/\s+/g, "-");
}
