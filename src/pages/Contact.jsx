import React from "react";
import { Helmet } from "react-helmet";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ContactForm from "../components/ContactForm";
import ContactSuccess from "../components/ContactSuccess";
import Angles from "../components/Angles";
import styled, { injectGlobal } from 'styled-components';
import HeaderTitle from "../components/HeaderTitle";
//import EQCSS from "eqcss";

const ContactSection = styled.section`
  width: 100%;
  padding-top:15vh;
  padding-bottom: 35vh;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  & header{
    margin-bottom: 60px;
    position: relative;
    padding-bottom: 25px;
  }
  & p{
    font-size: 0.7em;
    padding-bottom: 100px;
    padding-left: 5%;
    padding-right: 1%;
  }
  & p a{
    color: #8a1315;
    transition: color 500ms;
  }
  & p a:hover{
    color: #6b6b6b;
  }
`;
const Content = styled.div`
  position: relative;
  margin: 0 auto;
  @media (min-width: 1025px) {
    max-width: 50%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 80%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
const ContactContainer = styled.div`
  width: 100%;
  position: absolute;
`;

export default class Contact extends React.Component {
    constructor(props){
      super(props);
      this.state = {Success: null};
    }
    handleSubmit(FormData){
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://api.dirtyredz.com/Email',true);
      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onload = () => {
          if (xhr.status === 200) {
            this.setState({Success:true});
          }
      };
      xhr.send(FormData);
    }
    componentWillMount(){
      this.setState({Success: false});
    }
    render() {
        //EQCSS.process(PreRenderedEqcss)
        return (
          <ContactSection id="FormHeader">
              <Helmet>
                  <title>Dirtyredz - Contact</title>
              </Helmet>
              <Angles/>
              <Content>
                  <HeaderTitle background='Lets Talk' title="Contact Me"/>
                  <p>
                      I am currently doing freelance work. Do you need a website or even some consultation done?
                      Talk to me by either filling out the form below or you can send an email to <a target="_blank" rel="noopener noreferrer" href="mailto:david.mcclain@dirtyredz.com">david.mcclain@dirtyredz.com</a>
                    <br/>
                    Thank you for visiting my site. I look forward to talking to you!
                  </p>
                  <ContactContainer id="ChildContainer">
                    <CSSTransitionGroup
                      transitionName="ContactChild"
                      transitionAppear={true}
                      transitionAppearTimeout={1500}
                      transitionEnterTimeout={1500}
                      transitionLeaveTimeout={1500}>
                    {this.state.Success === false ? <ContactForm handleSubmit={this.handleSubmit.bind(this)}/> : <ContactSuccess />}
                    </CSSTransitionGroup>
                </ContactContainer>
              </Content>
          </ContactSection>
        );
    }
}
