import {HashRouter, BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./home";
import Photographe from "./photographe";
    
const Pages=() => {    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}>
                    <Home />
                </Route>
                <Route path="/photographe/:id" component={Photographe}>
                    <Photographe />
                </Route>
            </Switch>
        </BrowserRouter> 
    );
};
export default Pages;