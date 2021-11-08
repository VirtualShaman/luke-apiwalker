import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search></Search>
        <Switch>
          <Route path = "/:category/:id">
            <Info></Info>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
