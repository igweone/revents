import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./features/events/EventDashboard/EventDashboard";
import NavBar from "./features/nav/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./features/events/Home/Homepage";
import SettingsDashboard from "./features/user/Settings/SettingsDashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDashboard} />
                  <Route path="/people" component={EventDashboard} />
                  <Route path="/profile/:id" component={EventDashboard} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventDashboard} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
