import type { Maybe } from "../types/maybe.js";

export function isNil<T>(value: Maybe<T>): value is null | undefined {
  return value === null || value === undefined;
}
