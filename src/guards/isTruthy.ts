export function isTruthy<T>(
  value: T
): value is Exclude<T, false | "" | 0 | null | undefined> {
  return !value;
}
