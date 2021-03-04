import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Vlogs from "./Vlogs";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/:entryId">
                    <Vlogs />
                </Route>
            </Switch>
        </Router>
    )
}