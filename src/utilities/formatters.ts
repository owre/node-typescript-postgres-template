export function formatString(str: string) {
  return str.split('').join('_').replaceAll('_ _', '_-_')
}
