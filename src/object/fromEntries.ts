export function fromEntries<T extends [PropertyKey, any][]>(
  entries: T
): { [K in T[number][0]]: Extract<T[number], [K, any]>[1] } {
  return Object.fromEntries(entries) as any;
}
