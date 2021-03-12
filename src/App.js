import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Vlogs from "./components/Vlogs";
import ApplicationHeader from './components/ApplicationHeader';
import "./shared/index.scss";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {/* <Home /> */}
                    <ApplicationHeader />
                </Route>
                <Route path="/:entryId">
                    <Vlogs />
                </Route>
            </Switch>
        </Router>
    )
}