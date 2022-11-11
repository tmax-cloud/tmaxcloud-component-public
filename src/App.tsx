import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/theme";
import { fakeDefaultTheme } from "styles/faketheme";
import TextArea from "components/Common/TextArea/TextArea";

const Test = styled.div`
  background-color: ${({ theme }) => theme.color.marine._700};
`;

function App() {
  const [click, isClick] = useState(false);
  return (
    <ThemeProvider theme={click ? fakeDefaultTheme : defaultTheme}>
      <Test className="App">
        <div>hello world</div>
      </Test>
      <TextArea />
      <button onClick={() => isClick(!click)}>모드변경</button>
    </ThemeProvider>
  );
}

export default App;
