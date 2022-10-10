import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import * as Styled from "./style";
import theme from "./theme";

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.App></Styled.App>
      </ThemeProvider>
    </>
  );
};

export default App;
