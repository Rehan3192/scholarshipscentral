export function toSegment(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("_", "-")
    .replaceAll(/\s+/g, "-");
}

export function cleanDisplayText(value: string) {
  return value
    .replaceAll("â€™", "'")
    .replaceAll("â€˜", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-")
    .replaceAll("â€¢", "•")
    .replaceAll("Â©", "©")
    .replaceAll("Ã—", "×")
    .replaceAll("Ã¶", "ö")
    .replaceAll("Ã–", "Ö")
    .replaceAll("Ã¼", "ü")
    .replaceAll("Ãœ", "Ü")
    .replaceAll("Ã¤", "ä")
    .replaceAll("Ã„", "Ä");
}
