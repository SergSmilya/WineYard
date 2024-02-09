import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ThemeProvider from "./theme";

function App() {
  return (
    <BrowserRouter basename="/WineYard/">
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
