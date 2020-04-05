import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Home, NotFoundPage, Category } from "./pages";
export default class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/course" component={Category} />
            <Route exact={true} path="/category/:name" component={Category} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainLayout>
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
