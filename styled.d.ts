// styled.d.ts
import "styled-components";

interface Colors {
  primary: string;
  secondary?: string;
  tertiary?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      blue: Colors;
      yellow: Colors;
    };
    space: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      8: string;
      10: string;
      12: string;
      16: string;
      20: string;
      24: string;
    };
  }
}
