import React from "react";
import { Route, Switch } from "react-router-dom";
import Services from "../Pages/Services/Services";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/services">
                <Services />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default AppRouter;
