import "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/theme";
import "../src/styles/global.css";
export const decorators = [
  (Story) => (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: decorators,
};
