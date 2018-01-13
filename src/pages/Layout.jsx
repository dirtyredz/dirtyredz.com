import React from "react";
import { Helmet } from "react-helmet";
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
                <Helmet>
                    <title>Dirtyredz - Developer/Designer/Websites/Servers/</title>
                    <meta name="viewport" content=" width=device-width, initial-scale=1, minimum-scale=1" />
                    <meta name="referrer" content="always" />
                    <meta name="robots" content="all" />
                    <meta name="keywords" content="Designer, Developer, HTML, CSS, Creative, Coding, Frontend Development, Photoshop, PHP, Servers, Backend Development, DNS, Javascript, Jquery" />
                    <meta name="description" content="David McClain is a self taught Developer with over 5 years experience. I started my programming career while I was serving in the Unites States Marine Corps. Not many say they Love the work they do, and in both  my careers that&#39;s what I&#39;ve done.."/>
                    <link rel="canonical" href="https://dirtyredz.com/" />
                    <meta name="geo.region" content="US-WI" />
                    <meta name="geo.placename" content="Birchwood" />
                    <meta name="geo.position" content="45.658044;-91.5559" />
                    <meta name="ICBM" content="45.658044, -91.5559" />
                    <meta property="fb:profile_id" content="" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://dirtyredz.com/" />
                    <meta property="og:title" content="David McClain | David McClain - Designer &amp; Developer" />
                    <meta property="og:description" content="David McClain is a self taught Developer with over 5 years experience. I started my programming career while I was serving in the Unites States Marine Corps. Not many say they Love the work they do, and in both  my careers that&#39;s what I&#39;ve done.."/>
                    <meta property="og:image" content="http://static.dirtyredz.com/dirtyredz logo.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="500" />
                    <meta property="og:image:height" content="500" />
                    <meta property="og:site_name" content="David McClain - Designer &amp; Developer" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@DM_Dirtyredz" />
                    <meta name="twitter:title" content="David McClain | David McClain - Designer &amp; Developer" />
                    <meta name="twitter:description" content="David McClain is a self taught Developer with over 5 years experience. I started my programming career while I was serving in the Unites States Marine Corps. Not many say they Love the work they do, and in both  my careers that&#39;s what I&#39;ve done.."/>
                    <meta name="twitter:image" content="http://static.dirtyredz.com/dirtyredz logo.png" />
                </Helmet>
                <Header />
                {this.props.children && this.props.children.props.Angle !== "false" && <Angles />}
                {this.props.children}
                <ScrollUpButton />
                <Footer />
            </div>
        );
    }
}
