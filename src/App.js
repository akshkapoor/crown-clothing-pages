import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shoppage/shoppage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop/" component={Shoppage}></Route>
      </Switch>
    </div>
  );
}

export default App;
