import React from "react";
import { Helmet } from "react-helmet";
import Angles from "../components/Angles";
import styled from 'styled-components';
import HeaderTitle from "../components/HeaderTitle";

const AboutSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  height: 750px;
  top: 0;
  transition: all 500ms, opacity 2s, top 2s;
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
const FlexContainer = styled.div`
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
`;
const FlexItem = styled.div`
    flex-grow: 1;
    padding: 5px;
    & a{
        text-align: center;
        display: inherit;
    }
`;
const Icon = styled.svg`
  display: inline-block;
  stroke-width: 0;
  stroke: white;
  height: 2em;
  width: 2em;
  fill: white;
  padding: 10px;
  &:hover{
    fill: #8a1315;
  }
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}

export default class Donate extends React.Component {
    constructor(){
      super()
      this.state = {RemoveOnScroll: true};
    }
    componentDidMount(){
      //Run on next tick to allow styles to take effect
      setTimeout(()=>{
        this.setState({RemoveOnScroll: false})
      },1);
    }
    render() {
        return (
          <AboutSection style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}}>
            <Helmet>
                <title>Dirtyredz - Donate</title>
            </Helmet>
            <Angles/>
            <Content>
                <HeaderTitle centered background="Help me out" title="Donate"/>
                <FlexContainer>
                    <FlexItem>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.me/Dirtyredz">
                            <Icon viewBox="0 0 32 32">
                                <path d="M29.063 9.644c-1.494 6.631-6.106 10.131-13.375 10.131h-2.419l-1.681 10.675h-2.025l-0.106 0.688c-0.069 0.456 0.281 0.863 0.738 0.863h5.175c0.613 0 1.131-0.444 1.231-1.050l0.050-0.262 0.975-6.181 0.063-0.337c0.094-0.606 0.619-1.050 1.231-1.050h0.769c5.012 0 8.938-2.038 10.088-7.925 0.431-2.238 0.269-4.137-0.712-5.55z"></path>
                                <path d="M25.969 2.413c-1.481-1.688-4.163-2.413-7.587-2.413h-9.944c-0.7 0-1.3 0.506-1.406 1.2l-4.144 26.262c-0.081 0.519 0.319 0.988 0.844 0.988h6.144l1.544-9.781-0.050 0.306c0.106-0.694 0.7-1.2 1.4-1.2h2.919c5.731 0 10.219-2.325 11.531-9.063 0.038-0.2 0.075-0.394 0.1-0.581 0.387-2.487 0-4.188-1.35-5.719z"></path>
                            </Icon>
                        </a>
                        Wanna help me out? Send me a small donation, I really appreciate it. Thxs
                    </FlexItem>
                    <FlexItem>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/Dirtyredz">
                            <Icon viewBox="0 0 32 32">
                                <path className="path1" d="M0 15.56c0-7.454 6.054-14.44 14.036-15.44 5.72-0.666 10.046 1.53 13.040 4.392 2.792 2.66 4.456 6.056 4.856 10.050 0.332 4-0.532 7.46-2.86 10.72-2.328 3.2-6.92 6.72-12.64 6.72h-7.784v-15.362c0.068-3.394 1.2-6.324 5.32-7.72 3.594-1.066 7.786 0.93 9.050 4.724 1.32 4.060-0.6 6.788-2.86 8.452-2.28 1.664-5.8 1.664-8.12 0.066v5.26c1.52 0.74 3.46 0.94 4.86 0.86 5.040-0.72 8.98-3.58 10.64-7.92 1.72-4.58 0.52-9.92-3.060-13.24-4.32-3.54-9.060-4.4-14.1-1.94-3.54 1.8-6 5.46-6.6 9.46v17.358h-3.718l-0.060-16.44z"></path>
                            </Icon>
                        </a>
                        I also have a Patreon that you can sign up and become a patron of mine.
                    </FlexItem>
                </FlexContainer>
            </Content>
        </AboutSection>
        );
    }
}
