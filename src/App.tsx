import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/theme";
import { fakeDefaultTheme } from "styles/faketheme";
import TextArea from "components/Common/TextArea/TextArea";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [click, isClick] = useState(false);
  return (
    <ThemeProvider theme={click ? fakeDefaultTheme : defaultTheme}>
      <BrowserRouter>
        <div>hello world</div>
        <TextArea />
        <button onClick={() => isClick(!click)}>모드변경</button>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
