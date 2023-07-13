// Interfaces
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}

// Type aliases
type Animal2 = {
  name: string;
};
type Bear2 = Animal2 & { honey: boolean };

// --------------------

// Interface declaration merging example
interface ExpressRequest {
  url: string;
}
interface ExpressRequest {
  // note this interface has the same name!
  session: Bear;
}
