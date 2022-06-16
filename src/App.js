import { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./components/Routes";
import { Header } from "./layout/Header";
import { store } from "./redux/store";
import { getUserData } from "./api/index";
import {
  setIsLogedInUserTrueAction,
  setIsLogedInUserFalseAction,
  setUserDataAction,
} from "./redux/actions/auth-actions";

function ConnectedApp({
  setIsLogedInUserTrue,
  setIsLogedInUserFalse,
  setUserData,
}) {
  useEffect(() => {
    getUserData()
      .then((data) => {
        setUserData(data);
        setIsLogedInUserTrue();
      })
      .catch((err) => {
        console.log("🚀 ~ err", err);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

const App = connect(null, {
  setIsLogedInUserTrue: setIsLogedInUserTrueAction,
  setIsLogedInUserFalse: setIsLogedInUserFalseAction,
  setUserData: setUserDataAction,
})(ConnectedApp);

export default App;
