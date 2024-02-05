import { isKeyOf } from "../guards/isKeyOf.js";

export function pick<T, Keys extends (keyof T)[]>(
  obj: T,
  keys: Keys
): Pick<T, Keys[number]> {
  return keys.reduce(
    (acc, key) =>
      isKeyOf(obj, key) ? Object.assign(acc, { [key]: obj[key] }) : acc,
    {} as Pick<T, Keys[number]>
  );
}
