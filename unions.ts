// Unions and intersections
type G1 = number | string | null;
type G2 = number | undefined;
type UnionExample = G1 | G2;
type IntersectionExample = G1 & G2;

// UnionExample        number | string | null | undefined
// IntersectionExample number

// --------------------

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101); // OK
printId("202"); // OK
printId({ myId: 22342 }); // Error: Argument of type '{ myID: number; }' is not
// assignable to parameter of type 'string | number'

// --------------------

// Alternatively, give this type a name
type IdType = number | string;
// and then we can use it in other locations
type IdOrBoolean = IdType | boolean;

function maybeGetString(): string | null {
  if (Math.random() > 0.5) {
    return "hello";
  }
  return null;
}

// --------------------

function printId2(id: number | string) {
  console.log(id.toUpperCase()); // Error: Property 'toUpperCase' does not exist on
  // type 'string | number'
}

function printId3(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
