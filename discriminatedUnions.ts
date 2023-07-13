interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2; // Error: shape.radius is possibly undefined
}

// --------------------

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
type DiscriminatedShape = Circle | Square;
function getAreaDiscriminated(shape: DiscriminatedShape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

// --------------------

// Invalid states! No error!
const shape: Shape = { kind: "circle", radius: 5, sideLength: 6 };
const shape2: Shape = { kind: "circle" };

// Invalid states! Error!
const shape3: DiscriminatedShape = { kind: "circle", radius: 5, sideLength: 6 };
const shape4: DiscriminatedShape = { kind: "circle" };
