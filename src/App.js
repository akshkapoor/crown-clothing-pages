import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shoppage/shoppage";
import Header from './components/header/header';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop/" component={Shoppage}></Route>
        <Route exact path="/signin/" component={SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
