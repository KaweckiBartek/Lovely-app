import './App.css';
import Header from "./Header"
import LovelyCards from "./LovelyCards"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch >
          <Route path="/chat">
            <h1>chat</h1>
          </Route>

          <Route path="/">
            <LovelyCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
