import type { Maybe } from "../types/maybe.js";

export function isDefined<T>(value: Maybe<T>): value is T & {} {
  return value !== undefined && value !== null;
}
