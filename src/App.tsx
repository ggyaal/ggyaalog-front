import { useReactiveVar } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { isDarkModeVar } from "./apollo";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import { darkTheme, GlobalStyled, lightTheme } from "./styles";

function App() {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <ThemeProvider theme={!isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyled />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <NotFound />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
