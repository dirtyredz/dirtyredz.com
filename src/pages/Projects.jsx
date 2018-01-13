import React from "react";
import { Helmet } from "react-helmet";
import ProjectSection from "../components/ProjectSection";
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 25px;
  text-align: center;
`;
const StyledP = styled.p`
  padding-left: 5%;
  padding-right: 1%;
`;
const Title = styled.span`
  position: relative;
  left: 0;
  bottom: 0;
  color: #690e10;
  font-size: 4.5em;
`;
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

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Dirtyredz - Projects</title>
                </Helmet>
                <ProjectSection max="10" right='true'>
                    <Project>
                      <StyledHeader>
                          <Title><b>My Projects</b></Title>
                      </StyledHeader>
                      <br />
                      <StyledP>
                         From LAMP Installations and Configuring DNS's to Back-End Development and Front-End Development. Take a look at my latest projects.
                      </StyledP>
                    </Project>
                </ProjectSection>
            </div>
        );
    }
}
