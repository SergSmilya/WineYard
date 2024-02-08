import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/WineYard">
      <Router />
    </BrowserRouter>
  );
}

export default App;
