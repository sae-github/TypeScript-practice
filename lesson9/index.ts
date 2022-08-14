// これは、どういう意味ですか？
// (...args: any[]) => any

// 引数には可変長引数をとり、型はanyのためなんでもOK
// 返り値もany型のためなんでも返してOK

// ex.)
const f = (...args: any[]): any => {
  console.log(...args);
};
const h = (...args: any[]): any => {
  return true;
};

f([1, 2, 3, 4, 5]);
h([true, false, true, false]);
