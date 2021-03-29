import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import ScrollToTop from "./commons/ScrollToTop";

import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Hotline from "./pages/Hotline";

class Main extends Component {
  componentDidMount() {
    const darkSwitch = document.getElementById("darkSwitch");

    window.addEventListener("load", () => {
      if (darkSwitch) {
        initTheme();
        darkSwitch.addEventListener("change", () => {
          resetTheme();
        });
      }
    });

    function initTheme() {
      const darkThemeSelected = localStorage.getItem("darkSwitch") !== null && localStorage.getItem("darkSwitch") === "dark";
      darkSwitch.checked = darkThemeSelected;
      darkThemeSelected ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme");
    }

    function resetTheme() {
      if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <div className="header">
            <Navbar />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/hotline" component={Hotline} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
          <ScrollToTop />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
