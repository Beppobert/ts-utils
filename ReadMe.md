# ts-utils

A collection of TypeScript utilities. I will never want to re-write these again.

## Installation

```bash
npm install @beppobert/ts-utils
```

## Typeguards

### `isDefined`

```typescript
import { isDefined } from "@beppobert/ts-utils";

const value: string | undefined = "Hello, World!";
if (isDefined(value)) {
  // value is string here
  console.log(value);
} else {
  // value is undefined here
  console.log("value is undefined");
}

[1, 2, null, undefined].filter(isNil); // number[]
```

### `isNull`

```typescript
import { isNull } from "@beppobert/ts-utils";

const value: string | null = "Hello, World!";

if (isNull(value)) {
  // value is null here
  console.log("value is null");
} else {
  // value is string here
  console.log(value);
}
```

### `isUndefined`

```typescript
import { isUndefined } from "@beppobert/ts-utils";

declare const value: string | undefined;

if (isUndefined(value)) {
  // value is undefined here
  console.log("value is undefined");
} else {
  // value is string here
  console.log(value);
}
```

### `isNil`

```typescript
import { isNil } from "@beppobert/ts-utils";

declare const value: string | null | undefined;
if (isNil(value)) {
  // value is null or undefined here
  console.log("value is null or undefined");
} else {
  // value is string here
  console.log(value);
}

[1, 2, null, undefined].filter(isNil); // (null| undefined)[]
```

### `isTruthy`

```typescript
import { isTruthy } from "@beppobert/ts-utils";

declare const value: string | null | undefined;

if (isTruthy(value)) {
  // value is string here
  console.log(value);
} else {
  // value is null or undefined here
  console.log("value is null or undefined");
}
```

### `isFalsy`

```typescript
import { isFalsy } from "@beppobert/ts-utils";

declare const value: string | null | undefined;

if (isFalsy(value)) {
  // value is null or undefined or "" here
  console.log("value is null or undefined");
} else {
  // value is string here
  console.log(value);
}
```

### `isKeyOf`

```typescript
import { isKeyOf } from "@beppobert/ts-utils";

type MyType = {
  a: string;
  b: number;
  c: boolean;
};

declare const obj: MyType;

if (isKeyOf(obj, "a")) {
  // obj.a is string here
  console.log(obj.a);
} else if (isKeyOf(obj, "d")) {
  const v: unknown = obj.d; // no error; obj.d is unknown
}
```

### `isTypeOf`

```typescript
import { isTypeOf } from "@beppobert/ts-utils";

declare const value: unknown;

if (isTypeOf(value, "string")) {
  // value is string here
  console.log(value);
} else if (isTypeOf(value, "number")) {
  // value is number here
  console.log(value);
} else if (isTypeOf(value, "boolean")) {
  // value is boolean here
  console.log(value);
} else if (isTypeOf(value, "object", "undefined")) {
  // value is object/unknown here
  console.log(value);
}
```

### `hasPath`

```typescript
import { hasPath } from "@beppobert/ts-utils";

declare const obj: { a: { b: { c: string } } };

if (hasPath(obj, "a", "b", "c")) {
  // obj.a.b.c is string here
  console.log(obj.a.b.c);
}
if (hasPath(obj, "a.b.d")) {
  // obj.a.b.d is unknown here
  console.log(obj.a.b.d);
}
```

## Flow

### `assertNever`

```typescript
import { assertNever } from "@beppobert/ts-utils";

type MyType = "a" | "b" | "c";

declare const value: MyType;

switch (value) {
  case "a":
    console.log("a");
    break;
  case "b":
    console.log("b");
    break;
  case "c":
    console.log("c");
    break;
  default:
    assertNever(value);
}

switch (value) {
  case "a":
    console.log("a");
    break;
  case "b":
    console.log("b");
    break;
  default:
    assertNever(value); // error; value is "c"
}
```

## Object-Helper

### `entries`

```typescript
import { entries } from "@beppobert/ts-utils";

const obj = { a: 1, b: 2, c: 3 };
const objectEntries = entries(obj); // (["a",1]|["b",2]|["c",3])[]
for (const [key, value] of entries(obj)) {
  console.log(key, value);
}
```

### `fromEntries`

```typescript
import { fromEntries } from "@beppobert/ts-utils";

const objectEntries = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
] as const;

const obj = fromEntries(objectEntries); // { a: 1, b: 2, c: 3 }
```

### `keys`

```typescript
import { keys } from "@beppobert/ts-utils";

const obj = { a: 1, b: 2, c: 3 };
const objectKeys = keys(obj); // ("a"|"b"|"c")[]
for (const key of keys(obj)) {
  console.log(key);
}
```

### omit

```typescript
import { omit } from "@beppobert/ts-utils";

const obj = { a: 1, b: 2, c: 3 };
const newObj = omit(obj, "a", "b"); // { c: 3 }
```

### `pick`

```typescript
import { pick } from "@beppobert/ts-utils";

const obj = { a: 1, b: 2, c: 3 };
const newObj = pick(obj, "a", "b"); // { a: 1, b: 2 }
```

## Common Types

### `Maybe`

```typescript
import { Maybe } from "@beppobert/ts-utils";

const value: Maybe<string> = "Hello, World!";
value = undefined;
value = null;
```

### `Unknown`

```typescript
import { Unknown } from "@beppobert/ts-utils";

const value: Unknown = "Hello, World!";

value = 42;
value = true;
value = {};
value = [];
value = undefined;
//.../
```

### `fn`

```typescript
import { Fn } from "@beppobert/ts-utils";

const fn: Fn = (...args) => 0;
const fn2: Fn<[string], null> = (arg) => null;
const fn3: Fn<[string, number], boolean> = (arg1, arg2) => true;
```
