import type { Maybe } from "../types/maybe.js";

export function isUndefined<T>(value: Maybe<T>): value is undefined {
  return value === undefined;
}
