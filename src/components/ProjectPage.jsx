import React from "react";
import Highlight from "react-highlight";
import './highlight.css';
import styled from 'styled-components';

const TitleSection = styled.section`
  @media (max-width: 767px) {
      padding-left: 0px !important;padding-right: 0px !important;
  }
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
`;
const Container = styled.div`
  display: table;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 767px) {
      width: 100% !important; padding-top: 0 !important;
  }
`;
const TitleContainer = styled.div`
  @media (max-width: 767px) {
      padding-bottom: 0 !important;
      width: 100% !important;
      float: left;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
      padding-right: 0 !important;
  }
  font-size: 16px;
  padding-top: 50px;
  text-align: center;
  height: 150px;
  padding-bottom: 50px;
  width: 50%;
  vertical-align: middle;
  display: table-cell;
`;
const Title = styled.div`
  font-size: 65px;
  @media (max-width: 767px) {
    font-size: 10vw !important;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 55px !important;
  }
`;
const SubTitle = styled.div`
  font-size: 20px;
`;
const RedTitle = styled.span`
  color: #8a1315;
`;
const Details = styled.ul`
  @media (max-width: 767px) {
      margin-top: 50px !important;
  }
  width: 100%;
  height: 50px;
  margin-top: 100px;
  text-align: center;
  & li{
    @media (max-width: 767px) {
      width: 100% !important;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100% !important;
    }
    width: 33.33%;
    font-size: 0.8em;
  }
`;
const RedDetails = styled.span`
  color: #8a1315;
  padding-right: 8px;
  @media (max-width: 767px) {
        padding-right: 0 !important;
        display: block;
        padding-bottom: 5px;
  }
`;
const TitleImgContainer = styled.div`
  @media (max-width: 767px) {
    width: 100% !important;
    float: left !important;
  }
  vertical-align: middle;
  width: 50%;
  display: table-cell;
  margin: 0 auto;
  text-align: center;
  & img{
    @media (max-width: 767px) {
        width: 100% !important;
        min-width: 100% !important;
    }
    font-size: 16px;
    height: auto;
    width: 80%;
    min-width: 450px;
  }
`;
const DescriptionSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  background-color: rgb(25,25,25);
  & p{
    text-align: center;
    font-size: 20px;
    width: 20%;
    margin: 0 auto;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 40% !important;
    }
    @media (max-width: 767px) {
        width: 100% !important;
    }
  }
  & p::first-letter{
    font-size: 90px;
    float: left;
    line-height: 1;
    margin: -33px 11px 0 0;
    color: #8a1315;
    font-weight: 700;
  }
`;
const ExperienceSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  & > div{
    margin: 0 auto;
    width: 60%;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80% !important;
    }
    @media (max-width: 767px) {
        width: 100% !important;
    }
  }
  & > div:after{
    content: "";
    clear: both;
    display: block;
  }
  & p{
    width: 45%;
    float: left;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100% !important;
    }
    @media (max-width: 767px) {
        width: 100% !important;
    }
  }
`;
const SkillsContainer = styled.div`
  width: 45%;
  float: left;
  margin-left: 10%;
  font-size: 0.8em;
  border-top: 2px solid red;
  position: relative;
  border-bottom: 2px solid red;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100% !important;margin-left: 0 !important; margin-top: 75px;
  }
  @media (max-width: 767px) {
    width: 100% !important;margin-left: 0 !important; margin-top: 75px;
  }
  & > div:first-of-type{
    width: 100%;
    text-align: center;
    position: absolute;
    top: -12px;
  }
  & > div:first-of-type > span{
    padding: 6px 15px;
    background-color: rgb(12,12,12);
  }
`;
const Skill = styled.div`
  padding: 1em;
`;
const DesignSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  background-color: rgb(25,25,25);
  overflow: hidden;
  & > div{
    margin: 0 auto;
    display: table;
  }
`;
const ColorSwatchContainer = styled.div`
  float: left;
  padding-left: 50px;
  padding-right: 50px;
  letter-spacing: 3px;
  font-size: 0.8em;
  text-align: center;
  @media (min-width: 768px) and (max-width: 1024px) {
      padding-left: 25px !important;padding-right: 25px !important;
  }
  @media (max-width: 767px) {
      width: 100% !important; display: table-row !important; padding: 0 !important; margin-top: 15px !important;
  }
  & > div{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.47);
    margin-bottom: 10px;
    @media (max-width: 767px) {
        margin: 0 auto !important;
    }
  }
  & > div:hover{
    box-shadow: 0 13px 14px 0 rgba(0, 0, 0, 0.47);
  }
`;
const CodeSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  background-color: rgb(25,25,25);
  overflow: hidden;
  & > div{
    margin: 0 auto;
    width: 75%;
    @media (max-width: 767px) {
        width: 90%;
    }
  }
  & pre{
    border-radius: 6px;
    padding: 5px;
    background: #232323;
    font-size: 0.7em;
  }
`;
const ButtonSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  & > div{
    display: table;
    width: 100%;
    text-align: center;
  }
`;
const StyledSvg = styled.svg`
  fill: #b50404;
  background-color: transparent;
  width: 50%;
  z-index: -1;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
        width: 70% !important;
  }
  @media (max-width: 767px) {
        width: 100% !important;
  }
  & rect{
    width: 60%;
    transition: transform 500ms;
    height: 20px;
  }
  & text{
    fill: white;
    font-size: 16px;
  }
  &:hover text{
    fill: black;
  }
  & rect:nth-of-type(1){
    transform: skewX(-47deg);
    opacity: 0.18;
  }
  & rect:nth-of-type(2){
    transform: skewX(-47deg);
    opacity: 0.75;
  }
  & rect:nth-of-type(3){
    transform: skewX(-47deg);
  }
  &:hover rect:nth-of-type(1){
    transform: translateX(-20px) skewX(-47deg);
    opacity: 0.18;
  }
  &:hover rect:nth-of-type(2){
    transform: translateX(20px) skewX(-47deg);
    opacity: 0.75;
  }
  &:hover rect:nth-of-type(3){
    transform: translateX(-20px) skewX(-47deg);
  }
`;

export default class ProjectPage extends React.Component {
    render() {
        return (
          <div>
            <TitleSection>
              <Container>
                  <TitleContainer>
                      <Title>{this.props.Title}</Title>
                      <SubTitle>{this.props.SubTitle1}<RedTitle> | </RedTitle>{this.props.SubTitle2}<RedTitle> | </RedTitle>{this.props.SubTitle3}</SubTitle>
                  </TitleContainer>
                  {this.props.ImageSource &&
                    <TitleImgContainer>
                      <img alt="" src={this.props.ImageSource}/>
                    </TitleImgContainer>
                  }
              </Container>
              <Details>
                  <li><RedDetails>ROLE  </RedDetails>{this.props.ProjectRole}</li>
                  <li><RedDetails>CONTEXT  </RedDetails>{this.props.Context}</li>
                  <li><RedDetails>YEAR  </RedDetails>{this.props.Year}</li>
              </Details>
            </TitleSection>
            <DescriptionSection>
                <p>{this.props.Description}</p>
            </DescriptionSection>
            <ExperienceSection>
                <div>
                    <p>{this.props.Experience}</p>
                    <SkillsContainer>
                        <div><span>SKILLS</span></div>
                        {this.props.Skills.map((item,index) =>(
                          <Skill key={index}>{item}</Skill>
                        ))}
                    </SkillsContainer>
                </div>
            </ExperienceSection>
            {this.props.Swatchs &&
              <DesignSection>
                  <div>
                      {this.props.Swatchs.map((item,index) =>(
                        <ColorSwatchContainer key={index}><div style={{backgroundColor: item}}></div>{item}</ColorSwatchContainer>
                      ))}
                  </div>
              </DesignSection>
            }
            {this.props.CodeExample &&
              <CodeSection>
                <div>
                  <Highlight className='Markdown'>
                    {this.props.CodeExampleBash}
                  </Highlight>
                </div>
                <br/>
                <div>
                  <Highlight className='javascript'>
                    {this.props.CodeExampleJS}
                  </Highlight>
                </div>
              </CodeSection>
            }
            <ButtonSection>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href={this.props.href}>
                        <StyledSvg viewBox="0 0 400 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <rect x="140" y="20" height="20px" width="60%"/>
                          <rect x="150" y="42" height="20px" width="60%"/>
                          <rect x="160" y="64" height="20px" width="60%"/>
                          <text x="170" y="57">{this.props.hrefText}</text>
                        </StyledSvg>
                    </a>
                </div>
            </ButtonSection>
            </div>
        );
    }
}
