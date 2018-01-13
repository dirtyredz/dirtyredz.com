import React from "react";
import ScrollUpButton from "react-scroll-up-button";

import Header from "../components/Header";
import Angles from "../components/Angles";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state = {Loading: false, showWelcome: false,showProject: false}

        this.EQCSS = null;
    }
    componentDidUpdate() {
      window.scrollTo(0,0);
      this.EQCSS.apply();
    }
    componentDidMount(){
      //Called here instead of head because it uses, the window/document object.
      this.EQCSS = require('eqcss');
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.children && this.props.children.props.Angle !== "false" && <Angles />}
                {this.props.children}
                <ScrollUpButton />
                <Footer />
            </div>
        );
    }
}
