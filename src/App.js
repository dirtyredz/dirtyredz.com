import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoreleiMcClain from "./pages/LoreleiMcClain";
import CostcoQuotes from "./pages/CostcoQuotes";
import ZipCV from "./pages/ZipCV";
import Donate from "./pages/Donate";
import ReactScrollUpButton from "./pages/ReactScrollUpButton";
import DirtyServerManager from "./pages/DirtyServerManager";
import NotFound from "./pages/NotFound";

const App = ({ match }) => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Donate" component={Donate}/>
                <Route path="/projects" component={({ match }) => (
                    <Switch>
                        <Route exact path={`${match.url}`} component={Projects}/>
                        <Route Angle="false" path={`${match.url}/LoreleiMcClain`} component={LoreleiMcClain}/>
                        <Route Angle="false" path={`${match.url}/ZipCV`} component={ZipCV}/>
                        <Route Angle="false" path={`${match.url}/CostcoQuotes`} component={CostcoQuotes}/>
                        <Route Angle="false" path={`${match.url}/ReactScrollUpButton`} component={ReactScrollUpButton}/>
                        <Route Angle="false" path={`${match.url}/DirtyServerManager`} component={DirtyServerManager}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                )}/>
                <Route Angle="false" path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Layout>
    </Router>
)

export default App
