import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Home } from "./pages";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <MainLayout>
            <Route exact path="/" component={Home} />
          </MainLayout>
        </Switch>
      </Router>
    );
  }
}

/* Example changeState 
<Route
exact
path="/video/:id"
render={(props) => (
  <Video key={props.match.params.id} {...props} />
)}
/>
*/
