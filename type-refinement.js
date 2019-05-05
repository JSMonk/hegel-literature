const variable1: number | Array<number> = 2;
const variable2: { a: { b: number }, c: string } | { a: { b: string }, d: ?boolean } = { a: { b: "str" } };

if (typeof variable1 === "number") {
  const res = variable1;
} else {
  const res = variable1;
}


if (typeof variable2.a.b === "number") {
  const res = variable2.c;
}

if ("c" in variable2) {
  const res = variable2;
} else {
  const res = variable2;
}

if (variable1 instanceof Array) {
  const res = variable1;
}