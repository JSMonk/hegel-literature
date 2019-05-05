function id(x) {
  return x;
}

const num = id(2);
const str = id("str");
const fn = id(id);
