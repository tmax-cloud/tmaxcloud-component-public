import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/theme";
import { BrowserRouter } from "react-router-dom";

const StyledComponentRenderSetting = (props) =>
  render(<ThemeProvider theme={defaultTheme}>{props}</ThemeProvider>);

const StyledComponentRenderRouterSetting = (props) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>{props}</ThemeProvider>
    </BrowserRouter>,
  );

export { StyledComponentRenderSetting, StyledComponentRenderRouterSetting };
