export function keys<T extends Record<PropertyKey, unknown>>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj) as any;
}
