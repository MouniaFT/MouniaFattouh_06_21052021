import {HashRouter, Switch, Route} from "react-router-dom";
import Home from "./home";
import Photographe from "./photographe";
    
const Pages=() => {    
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}>
                    <Home />
                </Route>
                <Route path="/photographe/:id" component={Photographe}>
                    <Photographe />
                </Route>
            </Switch>
        </HashRouter>
    );
};
export default Pages;