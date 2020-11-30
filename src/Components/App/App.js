import "./App.css";
import Welcome from "../Welcome/Welcome";
import SignUp from "../SignUp/SignUp";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/">
        <h1>Hello Chix</h1>
      </Link>
      <Switch>
        <Route path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/" render={() => <Welcome />} />
      </Switch>
    </div>
  );
}

export default App;
