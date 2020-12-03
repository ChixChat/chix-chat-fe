import "./App.css";
import Welcome from "../Welcome/Welcome";
import SignUp from "../SignUp/SignUp";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

// build out routes
// state management with hooks

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <h1>Hello Chix</h1>
      </Link>
      <Switch>
        <Route path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/" render={() => <Welcome />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
