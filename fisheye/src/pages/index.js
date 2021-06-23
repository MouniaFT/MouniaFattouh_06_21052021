import {BrowserRouter as Router, Route, HashRouter} from "react-router-dom";
import Home from "./home";
import Photographe from "./photographe";

    
const Pages=() => {    
    return(
        <HashRouter>
            <Route exact path="/" component={Home}>
                <Home />
            </Route>
            <Route path="/photographe/:id" component={Photographe}>
                <Photographe />
            </Route>
        </HashRouter>
    );
};
export default Pages;