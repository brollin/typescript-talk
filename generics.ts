// Without generics
export function getRandomElementV1(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const v1 = getRandomElementV1(["hello", "world"]);

// With generics
function getRandomElementGeneric<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const generic = getRandomElementGeneric(["hello", "world"]);

function logValue(value: any) {
  console.log("my value is: " + value);
}
// Generics are unecessary here! We never refer to the generic in the output.
function logValueGeneric<T>(value: T) {
  console.log("my value is: " + value);
}

class FakeReactComponentBase<Props, State> {
  state!: State;
  props!: Props;
  setState(newState: State) {}
}

interface TextInputProps {
  label: string;
}
interface TextInputState {
  currentValue: string;
}
class MyFakeTextInput extends FakeReactComponentBase<
  TextInputProps,
  TextInputState
> {
  render() {
    this.props.label;
    this.state.currentValue;
    this.setState({ currentValue: "hello" });
  }
}

function getLongest(input: any[]) {
  let longestLength = input[0].length;
  let longest = input[0];
  for (const value of input) {
    if (value.length > longestLength) {
      longestLength = value.length;
      longest = value;
    }
  }
  return longest;
}

const l1 = getLongest([[1, 2], [1], [1, 2, 3]]);
const l2 = getLongest(["ab", "a", "abc"]);

type OrNull<T> = T | null;
type StringOrNull = OrNull<string>;

interface FetchResult<T> {
  statusCode: number;
  value: T;
}
declare const f: FetchResult<string>;
f.value;
