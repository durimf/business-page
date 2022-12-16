import { DefaultTheme } from "styled-components";

export const theme = {
  color: {
    blue: {
      primary: "#4C40F7",
      secondary: "#00113B",
    },
    yellow: {
      primary: "#FFCC00",
    },
  },
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },
};

export function color(
  name: keyof DefaultTheme["color"],
  shade: keyof DefaultTheme["color"]["blue"]
) {
  return ({ theme }: { theme: DefaultTheme }) => theme.color[name][shade];
}

export function space(...names: Array<keyof DefaultTheme["space"]>) {
  return ({ theme }: { theme: DefaultTheme }) => {
    const spaces = names.map((name) => theme.space[name]);
    return spaces.join(" ");
  };
}
