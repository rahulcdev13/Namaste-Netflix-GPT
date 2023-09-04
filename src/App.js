import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import appStore from "./redux/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
