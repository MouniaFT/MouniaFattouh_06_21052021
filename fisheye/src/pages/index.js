import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./home";
import Photographe from "./photographe";

    
const Pages=() => {    
    return(
        <Router>
            <Route exact path="/" component={Home}>
                <Home />
            </Route>
            <Route path="/photographe/:id" component={Photographe}>
                <Photographe />
            </Route>
        </Router>
    );
};
export default Pages;