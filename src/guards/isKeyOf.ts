export function isKeyOf<T, const Key extends PropertyKey>(
  obj: T,
  key: Key
): obj is T & { [K in Key]: unknown } {
  return !!obj && typeof obj === "object" && key in obj;
}
