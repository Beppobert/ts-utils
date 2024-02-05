import { keys } from "./keys.js";

export function omit<
  T extends Record<PropertyKey, unknown>,
  Keys extends (keyof T)[]
>(obj: T, ...objKeys: Keys): Omit<T, Keys[number]> {
  return keys(obj).reduce(
    (acc, key) =>
      objKeys.includes(key) ? acc : Object.assign(acc, { [key]: obj[key] }),
    {} as Omit<T, Keys[number]>
  );
}
