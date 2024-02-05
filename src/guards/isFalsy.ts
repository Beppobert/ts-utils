export type Falsy = false | "" | 0 | null | undefined;

export function isFalsy<T>(value: T): value is T & Falsy {
  return !value;
}
