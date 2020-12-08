import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribefromAuth=null;

  componentDidMount(){
    this.unsubscribefromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      //console.log(user)
    });
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop/" component={Shoppage}></Route>
          <Route exact path="/signin/" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
