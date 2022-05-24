import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./components/Routes";
import { Header } from "./layout/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
