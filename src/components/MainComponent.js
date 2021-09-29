import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Page2 from "./page2";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch location={this.props.location}>
            <Route path="/home" component={() => <Home />} />
            <Route exact path="/talk" component={() => <Page2 />} />

            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
