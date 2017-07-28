import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactHeader from "./pages/ContactHeader";
import LoreleiMcClain from "./pages/LoreleiMcClain";
import CostcoQuotes from "./pages/CostcoQuotes";
import ZipCV from "./pages/ZipCV";
import Services from "./pages/Services";
import Donate from "./pages/Donate";
import Plotly from "./pages/Plotly";
import ReactScrollUpButton from "./pages/ReactScrollUpButton";
import DirtyServerManager from "./pages/DirtyServerManager";
import NotFound from "./pages/NotFound";

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="Services" component={Services}></Route>
    <Route path="Donate" component={Donate}></Route>
    <Route path="Plotly" component={Plotly}></Route>
    <Route path="Projects">
      <IndexRoute component={Projects}></IndexRoute>
      <Route Angle="false" path="LoreleiMcClain" component={LoreleiMcClain}></Route>
      <Route Angle="false" path="CostcoQuotes" component={CostcoQuotes}></Route>
      <Route Angle="false" path="ZipCV" component={ZipCV}></Route>
      <Route Angle="false" path="ReactScrollUpButton" component={ReactScrollUpButton}></Route>
      <Route Angle="false" path="DirtyServerManager" component={DirtyServerManager}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
    <Route Angle="false" path="About" component={About}></Route>
    <Route path="Contact" component={ContactHeader}></Route>
    <Route path="*" component={NotFound}></Route>
  </Route>
);

export default routes;
