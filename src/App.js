import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
    </Router>
  );
}

export default App;
