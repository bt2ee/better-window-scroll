export default function isWindows() {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return /windows|win32/i.test(navigator.userAgent);
}
