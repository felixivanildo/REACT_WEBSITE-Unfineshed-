import React from "react";
import { Switch, Route } from "native-base";

import { Home } from "../screens/home.js";
import { LoginScreen } from "../screens/login.js";

export default ()=> {
    return (
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>

            <Route exact path= "/theather">
                <LoginScreen></LoginScreen>
            </Route>
        </Switch>
    );
}