// Fooからnameだけを取得したtypeを作ってください
type Foo = {
  name?: string;
  age?: number;
};

type PickType = Pick<Foo, "name">;
const obj: PickType = { name: "sae" };

console.log(obj);
