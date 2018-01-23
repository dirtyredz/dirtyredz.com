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
                <Route path="/donate" component={Donate}/>
                <Route path="/projects" component={({ match }) => (
                    <Switch>
                        <Route exact path={`${match.url}`} component={Projects}/>
                        <Route path={`${match.url}/loreleimcclain`} component={LoreleiMcClain}/>
                        <Route path={`${match.url}/zipcv`} component={ZipCV}/>
                        <Route path={`${match.url}/costcoquotes`} component={CostcoQuotes}/>
                        <Route path={`${match.url}/reactscrollupbutton`} component={ReactScrollUpButton}/>
                        <Route path={`${match.url}/dirtyservermanager`} component={DirtyServerManager}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                )}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Layout>
    </Router>
)

export default App
