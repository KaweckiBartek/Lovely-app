import './App.css';
import Header from "./Header"
import LovelyCards from "./LovelyCards"
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"
import SwipeButtons from './SwipeButtons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
            <Header backButton={false} path="/profile"/>
            <LovelyCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
