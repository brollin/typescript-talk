type Vector4 = [number, number, number, number];
type Palette = { palette: boolean };
type Texture = { texture: boolean };

export type ParamType = number | Vector4 | Palette | Texture | null;

export type PatternParam<T = ParamType> = {
  readonly name: string;
  value: T;
};

export type StandardParams = {
  readonly u_time: {
    name: "Time";
    value: number;
  };
  // for effects
  readonly u_texture: {
    name: "Input Texture";
    value: Texture | null;
  };
};

export type ExtraParams = Record<string, PatternParam>;

export type PatternParams = StandardParams & ExtraParams;

let p: PatternParam;
p = {
  name: "Time",
  value: 5,
};

if (typeof p.value === "number") {
  console.log(p.value);
  p as PatternParam<number>;
}
