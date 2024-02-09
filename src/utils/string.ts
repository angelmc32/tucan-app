export function truncateAddress(
  address: string | undefined,
  start = 6,
  end = 4,
) {
  if (!address) return "Could not format address...";
  return `${address.slice(0, start)}...${address.slice(0 - end)}`;
}

export function copyToClipboard(entryText: string) {
  void navigator.clipboard.writeText(entryText);
}
