import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: string;
    white: string;
    main: string;
    red: string;
    black1B: string;
    grayF0: string;
    gray8D: string;
    grayE2: string;
    grayEA: string;
    gray70: string;
    gray37: string;
    hover: {
      main: string;
    };
    typography: {
      bigHeading: {};
    };
  }
  export interface ExecutionContext {
    color: string;
  }
}
