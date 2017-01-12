import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ContactForm from "../components/ContactForm";
import ContactSuccess from "../components/ContactSuccess";
// require("./Contact.css");
import styled, { injectGlobal } from 'styled-components';

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
const BackgroundText = styled.span`
  padding-left: 50px;
  color: #111010;
  font-size: 4em;
`;
const TitlePop = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #8a1315;
  font-size: 3em;
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
injectGlobal`
@element '#FormHeader' {
  $this #ChildContainer {
    height: eval('querySelector("ul").offsetHeight')px;
  }
  $this {
    padding-bottom: calc(35vh + eval('querySelector("textarea").offsetHeight')px);
  }
}
.ContactChild-enter {
  opacity: 0.01;
  top:300px;
}
.ContactChild-enter.ContactChild-enter-active {
  opacity: 1;
  top:0;
  transition: opacity 1s ease-out, top 1s ease-out;
}
.ContactChild-leave {
  opacity: 1;
  top:0;
}
.ContactChild-leave.ContactChild-leave-active {
  opacity: 0.01;
  top:300px;
  transition: opacity 1s ease-in, top 1s ease-in;
}
.ContactChild-appear {
  opacity: 0.01;
  top:300px;
}
.ContactChild-appear.ContactChild-appear-active {
  opacity: 1;
  top:0;
  transition: opacity 1s ease-out, top 1s ease-out;
}
`;
export default class Contact extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        Success: false
      };
    }
    handleSubmit(FormData){
      let self = this;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://api.dirtyredz.com/Email',true);
      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onload = function() {
          console.log(xhr.responseText);
          if (xhr.status==200) {
            self.setState({Success:true});
          }else{

          }
      };
      xhr.send(FormData);
    }
    render() {
        return (
          <ContactSection id="FormHeader">
              <Content>
                  <header>
                      <BackgroundText><b>Lets Talk</b></BackgroundText>
                      <TitlePop>Contact Me</TitlePop>
                  </header>
                  <p>
                      I am currently doing freelance work. Do you need a website or even some consultation done?
                      Talk to me by either filling out the form below or you can send an email to <a target="_blank" href="mailto:david.mcclain@dirtyredz.com">david.mcclain@dirtyredz.com</a>
                    <br/>
                    Thank you for visiting my site. I look forward to talking to you!
                  </p>
                  <ContactContainer id="ChildContainer">
                    <ReactCSSTransitionGroup
                      transitionName="ContactChild"
                      transitionAppear={true}
                      transitionAppearTimeout={1500}
                      transitionEnterTimeout={1500}
                      transitionLeaveTimeout={1500}>
                    {this.state.Success === false ? <ContactForm key="123" handleSubmit={this.handleSubmit.bind(this)}/> : <ContactSuccess key="456"/>}
                    </ReactCSSTransitionGroup>
                </ContactContainer>
              </Content>
          </ContactSection>
        );
    }
}
