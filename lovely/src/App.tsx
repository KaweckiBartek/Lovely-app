import './App.css';
import Header from "./Header"
import Login from "./Login"
import LovelyCards from "./LovelyCards"
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"
import SwipeButtons from './SwipeButtons'
import {useStateValue} from "./StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue(null);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <Router>
            <Switch >
              <Route path="/chat/:person">
                <Header backButton={true} path="/chat" />
                <ChatScreen />
              </Route>
          
              <Route path="/chat">
                <Header backButton={true} path="/" />
                <Chats />
              </Route>

              <Route path="/">
                <Header backButton={false} path="/profile" />
                <LovelyCards />
                <SwipeButtons />
              </Route>
            </Switch>
          </Router>)}
    </div>
  );
}

export default App;
