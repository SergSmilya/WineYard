import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import "./App.css";

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
