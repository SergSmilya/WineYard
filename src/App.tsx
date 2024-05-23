import Router from "./routes/router";
import ThemeProvider from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
