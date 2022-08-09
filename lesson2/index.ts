// Fooが持つプロパティ全て必須にしてください

type Foo = {
  name?: string;
  age?: number;
};

const obj: Required<Foo> = { name: "sae", age: 25 };
console.log(obj);
