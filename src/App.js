import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shoppage/shoppage";
import Header from './components/header/header';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop/" component={Shoppage}></Route>
      </Switch>
    </div>
  );
}

export default App;
