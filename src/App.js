import './App.css';
import Homepage from './pages/homepage/Homepage'
import {Route} from 'react-router-dom';


const Hatspage=()=>{
  return(
    <div>Hatspage</div>
  );
}
function App() {
  return (
    <div>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop/hats' component={Hatspage}></Route>
    </div>
  );
}

export default App;
