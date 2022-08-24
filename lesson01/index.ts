interface Foo {
  bar?: string;
  baz?: number;
}

const test: Foo = {};
console.log(test);

// 別の解
// interface Foo {
//   bar: string;
//   baz: number;
// }

// const test: Partial<Foo> = {};
