// keyof
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

interface Student {
  userID: string;
  districtID: string;
}

type StudentKeys = keyof Student;
type StudentKeys2 = keyof {
  userID: string;
  districtID: string;
};

function getProperty(obj: any, key: string) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: "hello" };
getProperty(x, "a");
getProperty(x, "q");

// typeof
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// Can get the type of a value

const obj = {
  x: "hello",
  y: "world",
};

type ObjectType = typeof obj;

const pages = {
  homepage: {},
  messaging: {},
};

type PageType = keyof typeof pages;

// indexed access types
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];
