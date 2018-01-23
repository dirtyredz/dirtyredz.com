import React from "react";
import { Helmet } from "react-helmet";
import Waypoint from "react-waypoint";
import styled from 'styled-components';
import Angles from "../components/Angles";
import ProjectContainer from "../components/ProjectContainer";
import HeaderTitle from "../components/HeaderTitle";

const Project = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
`;
const StyledSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
`;
const Content = styled.div`
  margin: 0 auto;
  @media (max-width: 767px) {
    max-width: 85%;
  }
  @media (min-width: 1025px) {
    max-width: 60%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 80%;
  }
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}

export default class Projects extends React.Component {
    constructor(){
      super();
      this.state = {RemoveOnScroll: true};
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Dirtyredz - Projects</title>
                </Helmet>
                <Angles/>
                <StyledSection style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}}>
                    <Waypoint
                    bottomOffset='-200px'
                    scrollableAncestor={window}
                    onEnter={()=> this.setState({RemoveOnScroll: false})}
                    />
                    <Content>
                        <Project>
                          <HeaderTitle centered title="Some of my work and personal projects, enjoy!" background="experience"/>
                          <br />
                        </Project>
                        <ProjectContainer to="projects/dirtyservermanager" title="Dirty Server Manager" year="2017" context="Developer" projectRole="Project Lead"/><br/><br/>
                        <ProjectContainer right={true} to="projects/costcoquotes" title="Costco Quotes" year="2016" context="Website Redesign" projectRole="FRONT-END/UX DEVELOPER"/><br/><br/>
                        <ProjectContainer to="projects/reactscrollupbutton" title="react-scroll-up-button" year="2016" context="React Component" projectRole="React Developer"/><br/><br/>
                        <ProjectContainer right={true} to="projects/zipcv" title="ZipCV" year="2015 - 2016" context="Website Development" projectRole="FRONT-END/UX, BACK-END DEVELOPER"/><br/><br/>
                        <ProjectContainer to="projects/loreleimcClain" title="Lorelei McClain" year="2016" context="Website Development" projectRole="FRONT-END/UI/UX, BACK-END DEVELOPER"/><br/><br/>
                    </Content>
                </StyledSection>
            </div>
        );
    }
}
