import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/800.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: theme.palette.background.default,
        },
      }}
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
