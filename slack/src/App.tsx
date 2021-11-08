import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import theme from "./theme";
import { AppRouter } from "./routers/AppRouter";
import { ApplicationContextPorvider } from "./contexts/ApplicationContext";
import { appoloClient } from "./apolloClient";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={appoloClient}>
        <ApplicationContextPorvider>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </ApplicationContextPorvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
