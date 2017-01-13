import React from "react";
import ScrollUpButton from "react-scroll-up-button";

import Header from "../components/Header";
import Angles from "../components/Angles";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default class Layout extends React.Component {
    constructor(){
        super()
        this.state = {Loading: false, showWelcome: false,showProject: false}

        this.EQCSS = null;
    }
    RemoveClass(ClassName){
        console.log('Removing Class: ' + ClassName);
        var Arr = document.getElementsByClassName(ClassName);
        //Working in reverse due to document.getElementsByClassName is a live list.
        //Which removes the element when the class name is removed thus adjusting the length.
        for (var i = Arr.length - 1; i > -1; i--) {
            Arr.item(i).classList.remove(ClassName);
        }
    }
    componentDidUpdate() {
      console.log('Update');
      window.scrollTo(0,0);
      this.EQCSS.apply();
    }
    componentDidMount(){
      //Called here instead of head because it uses, the window/document object.
      this.EQCSS = require('eqcss');
    }
    render() {
        if(!this.state.Loading){
            return (
                <div>
                    <Header />
                    {this.props.children.props.route.Angle != "false" && <Angles />}
                    
                    {this.props.children}
                    <ScrollUpButton />
                    <Footer />
                </div>
            );
        }else{
            (new Image).src="../img/david logo.png"
            return null;
        }
    }
}
