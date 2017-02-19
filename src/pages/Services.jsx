import React from "react";
// import styles from "./About.css"
import { Link } from "react-router";
import TweenFunctions from "tween-functions";
import styled, {injectGlobal} from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  margin-bottom: 200px;
  flex-wrap: wrap;
  @media (max-width: 767px){
    margin-bottom: 200px;
  }
`;
const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 60px;
  @media (max-width: 767px){
    padding-bottom: 0;
    padding-top: 75px;
  }
`;
const ServiceContainer = styled.div`
  display: inline-flex;
  width: 150px;
  min-width: 150px;
  height: 150px;
  margin: 10px 10px;
  background-color: rgba(138, 19, 21, 0.5);
  cursor: pointer;
  transition: background-color 0.5s;
  box-shadow: 5px 5px 5px #000;
  &:hover{
    background-color: rgba(138, 19, 21, 1);
  }
`;
const Content = styled.div`
  width: 90%;
  max-width: 500px;
  height: 150px;
  text-align: center;
`;
const ServiceTitle = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: 'Anton';
  color: #ccc;
`;
injectGlobal`
  @element '.Services_EQCSS_2' {
      $this {
          font-size: 17ew !important;
      }
  }
  @element '#Services_EQCSS_1' {
      $this {
          font-size: 5ew !important;
      }
  }
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}
export default class About extends React.Component {
    constructor(){
      super()
      this.state = {
        RemoveOnScroll: true,
        Content: 'As a web designer I can help you get your online presence started. If you need a website designer that will stand by you through the entire development process, then let me help you succeed online.'
      };
      this.Animation = {CurrentAnimationTime: 0, StartTime:null,AnimationFrame:null}
    }
    componentDidMount(){
      //Run on next tick to allow styles to take effect
      setTimeout(()=>{
        this.setState({RemoveOnScroll: false})
      },1);
    }
    HandleServicesClick(Service, Elem){
      this.Design.style.backgroundColor = null;
      this.Developer.style.backgroundColor = null;
      this.Consultation.style.backgroundColor = null;
      this.Hosting.style.backgroundColor = null;
      Elem.style.backgroundColor = "rgba(138, 19, 21, 1)";
      
      switch (Service) {
        case 'Design':
          this.setState({Content:
            "As a web designer I can help you get your online presence started. If you need a website designer that will stand by you through the entire development process, then let me help you succeed online."
          })
          break;
        case 'Consultation':
          this.setState({Content:
            "The world wide web can be a scary place for some people. Let me help you by guiding you through the waters that make up the web and its many faccets."
          })
          break;
        case 'Developer':
          this.setState({Content:
            "Got a design already, but want more functionality or are you a design company looking for a developer for your team? Contact me and i'll see what I can do to help."
          })
          break;
        case 'Hosting':
          this.setState({Content:
            "I provide hosting to small companies or people with websites that dont have any e-commerce."
          })
          break;
        default:
          this.setState({Content: "Sad Face"})
      }
      this.StopScrolling();
      this.Animation.CurrentAnimationTime = 0;
      this.Animation.StartTime = null;
      this.Animation.AnimationFrame = window.requestAnimationFrame(this.ScrollingFrame.bind(this));
    }
    ScrollingFrame(){
      let timestamp = Math.floor(Date.now());
      //If StartTime has not been assigned a value, assign it the start timestamp.
      if (!this.Animation.StartTime) {
          this.Animation.StartTime = timestamp;
      }

      //set CurrentAnimationTime every iteration of ScrollingFrame()
      this.Animation.CurrentAnimationTime = timestamp - this.Animation.StartTime;
      //if we hit the StopPosition, StopScrollingFrame()
      if (window.pageYOffset <= 0) {
          this.StopScrolling();
      } else {
        let YPos = TweenFunctions['easeOutCubic'](
                        this.Animation.CurrentAnimationTime,window.pageYOffset,0,500
                    );
        window.scrollTo(0, YPos);
        this.Animation.AnimationFrame = window.requestAnimationFrame(this.ScrollingFrame.bind(this));
      }

    }
    StopScrolling(){
      //Stop the Animation Frames.
        window.cancelAnimationFrame(this.Animation.AnimationFrame);
    }
    HandleMouseDown(Elem){
      Elem.style.boxShadow = "1px 1px 1px #000";
    }
    HandleMouseUp(Elem){
      Elem.style.boxShadow = null;
    }
    render() {
        return (
          <div>
            <Information>
              <Content id="Services_EQCSS_1">
                {this.state.Content}
              </Content>
            </Information>
            <Container>
              <ServiceContainer style={{backgroundColor: 'rgba(138, 19, 21, 1)'}} innerRef={(z) => { this.Design = z; }} onMouseDown={this.HandleMouseDown.bind(this, this.Design)} onMouseUp={this.HandleMouseUp.bind(this, this.Design)} onClick={this.HandleServicesClick.bind(this, 'Design', this.Design)} class="Services_EQCSS_2"><ServiceTitle>DESIGN</ServiceTitle></ServiceContainer>
              <ServiceContainer innerRef={(z) => { this.Consultation = z; }} onMouseDown={this.HandleMouseDown.bind(this, this.Consultation)} onMouseUp={this.HandleMouseUp.bind(this, this.Consultation)} onClick={this.HandleServicesClick.bind(this, 'Consultation', this.Consultation)} class="Services_EQCSS_2"><ServiceTitle>CONSULTAION</ServiceTitle></ServiceContainer>
              <ServiceContainer innerRef={(z) => { this.Developer = z; }} onMouseDown={this.HandleMouseDown.bind(this, this.Developer)} onMouseUp={this.HandleMouseUp.bind(this, this.Developer)} onClick={this.HandleServicesClick.bind(this, 'Developer', this.Developer)} class="Services_EQCSS_2"><ServiceTitle>DEVELOPER</ServiceTitle></ServiceContainer>
              <ServiceContainer innerRef={(z) => { this.Hosting = z; }} onMouseDown={this.HandleMouseDown.bind(this, this.Hosting)} onMouseUp={this.HandleMouseUp.bind(this, this.Hosting)} onClick={this.HandleServicesClick.bind(this, 'Hosting', this.Hosting)} class="Services_EQCSS_2"><ServiceTitle>HOSTING</ServiceTitle></ServiceContainer>
            </Container>
          </div>
        );
    }
}
