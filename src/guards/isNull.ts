import type { Maybe } from "../types/maybe.js";

export function isNull<T>(value: Maybe<T>): value is null {
  return value === null;
}
