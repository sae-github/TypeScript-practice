// 10.これはなにをする型か説明してください(とくにinfer)

//A. Tが関数(引数は可変長でany型=型チェックを無視する)であればRとなり、
//   関数でなければany型となる。
// 　また、Rには関数の返り値が格納され、変数の様に使用することができる
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 使用例
type F = (num1: number, num2: number) => number;
type O = string;

type A = ReturnType<F>;
// Aはnumber型

type B = ReturnType<O>;
// Bはany型
