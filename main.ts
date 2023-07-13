// Some basic types
let x: string;
let y: boolean;
let z: number;
// Arrays
let a: string[];
let b: Array<string>;
// Objects
let c: { hello: string; world?: boolean };
// Functions
let d: (id: string, isStudent: boolean) => string[];
let e: () => void;
// Escape hatches
let f: any = 5; // boo
let g: unknown;

// --------------------

// The Danger of 'any'
let h: any = 5;
h.toLowerCase(); // no typecheck error! :(
let h2: number = 5;
h2.toLowerCase(); // Error: Property 'toLowerCase' does not exist on type 'number'

let i: any = "boo";
i.toLwoerCsae(); // no typecheck error! :(
let i2: string = "boo";
i2.toLwoerCsae(); // Error: Property 'toLwoerCsae' does not exist on type 'string'.
// Did you mean 'toLowerCase'?

let j: any = null;
j.toLowerCase(); // no typecheck error! :(
let j2 = null;
j2.toLowerCase(); // Error: 'j2' is possibly 'null'

// --------------------

// Type inference: full type safety despite no type annotations
const words = ["hello", "world"]; // type inferred as string[]

const lengths = words.map((item) => item.length); // type inferred as number[]

const foos = words.map((item) => item.foo); // Error: Property 'foo' does not exist on type 'string'

const firstCharacters = words.map((item) => item.charAt(0)); // type inferred as string[]

// --------------------

// Structural types
// class Car {
//   drive() {
//     // hit the gas
//   }
// }
// class Golfer {
//   drive() {
//     // hit the ball far
//   }
// }
// // No error? :surprised-pikachu:
// let driver: Car = new Golfer();

// --------------------

class Car {
  drive() {
    // hit the gas
  }
  hasWheels = true;
}
class Golfer {
  drive() {
    // hit the ball far
  }
}
let driver: Car = new Golfer();
// Error: Property 'hasWheels' is missing in type 'Golfer' but required in type 'Car'

// --------------------

class Empty {}

function fn(arg: Empty) {
  // do something?
}

// No error, but this isn't an 'Empty' ?
fn({ k: 10 });

// --------------------

// Erased types example

interface Student {
  userID: string;
}

const student: Student = { userID: "adam" };
if (typeof student === Student) {
}

// --------------------
// stuff to reincorporate
// --------------------
// Type manipulation example
interface UserProfile {
  id: string;
  displayName: string;
  email: string;
}

function patchUserProfile(changes: UserProfile) {
  // ...
}

patchUserProfile({ email: "adam.victor@clever.com" });
// Error: Type '{ email: string; }' is missing the following properties from type 'UserProfile': id, displayName

// --------------------
let k: unknown = "adam";
k.toLowerCase(); // Error: 'j' is of type 'unknown'

// --------------------

interface Vector2 {
  x: number;
  y: number;
}

type Vector3 = {
  x: number;
  y: number;
  z: number;
};

function normalize(vector: Vector2) {
  // pretend Adam knows math
}

const v2: Vector2 = { x: 5, y: 6 };
const v3: Vector3 = { x: 5, y: 6, z: 7 };
normalize(v3); // No error, but there probably should be...
