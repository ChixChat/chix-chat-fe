import "./App.css";
import Welcome from "../Welcome/Welcome";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <p>Hello Chix</p>
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
      </Switch>
    </div>
  );
}

export default App;
