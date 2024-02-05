import { isKeyOf } from "./isKeyOf.js";

export function hasPath<T, Path extends string[]>(
  object: T,
  ...path: Path
): object is T & WalkPath<Path> {
  let obj: unknown = object;
  return path.every((key) => {
    if (!isKeyOf(obj, key)) return false;
    obj = obj[key];
    return true;
  });
}

type WalkPath<Path extends string[]> = Path extends [
  infer Head extends string,
  ...infer Tail extends string[]
]
  ? { [K in Head]: WalkPath<Tail> }
  : unknown;
