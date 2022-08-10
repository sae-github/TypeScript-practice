// Fooからageを省略した型を作ってください
type Foo = {
  name?: string;
  age?: number;
};

type OmitType = Omit<Foo, "age">;

const obj: OmitType = {
  name: "sae",
};

console.log(obj);
