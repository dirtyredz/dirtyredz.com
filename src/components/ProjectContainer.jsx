import React from "react";
import Waypoint from "react-waypoint";
import { Link } from "react-router-dom";
import styled from 'styled-components'
//import EQCSS from "eqcss";

const Container = styled.div`
  width: 75%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border-top: red solid 1px;
  border-bottom: red solid 1px;
  top: 0;
  opacity: 1;
  transition: top 1s, opacity 1s;
  @media (max-width: 767px) {
    height: 150px !important;
  }

`;
const Display = styled.div`
  font-family: 'Anton';
  height: 210px;
  width: 40%;
  background-color: rgb(19, 18, 18);
  margin-top: -10px;
  float: ${props => props.right ? 'right' : 'left'};
  margin-left: ${props => props.right ? '0' : '2%'};
  margin-right: ${props => props.right ? '2%' : '0'};
  position: relative;
  padding-top: 10px;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 767px) {
    height: 160px !important;
    width: 96% !important;
  }
  & span{
    transition: all 500ms ease;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  & svg{
    position: absolute;
    width: 150px;
    height: 150px;
    margin-top: auto;
    margin-bottom: auto;
    bottom: 0;
    top: 0;
    fill: rgb(21, 20, 20);
    margin-right: auto;
    margin-left: auto;
    left: 0;
    right: 0;
    display: inline-block;
    stroke-width: 0;
    stroke: white;
  }
  &:after{
    content: "";
    position: absolute;
    top: -207%;
    left: -210%;
    width: 200%;
    height: 207%;
    opacity: 0;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.37);
    background: -webkit-linear-gradient( left, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.09) 77%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0.0) 100%);
    background: linear-gradient( to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.09) 77%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0.0) 100%);
  }
  &:hover:after{
    opacity: 1;
    top: -30%;
    left: -30%;
    transition: left 0.7s ease, top 0.7s ease, opacity 0.15s ease;
  }
`;
const Overview = styled.div`
  width: 40%;
  height: 200px;
  float: left;
  margin-left: 10%;
  display: table;
  font-size: 15px;
  @media (max-width: 767px) {
    display: none !important;
  }
`;
const Row = styled.div`
  display: table-row;
  & span{
    display: table-cell;
    vertical-align: middle;
    padding-right: 10px;
    text-transform: uppercase;
    transition: all 500ms ease;
  }
`;
const Highlight = styled.span`
  color: #6b6b6b;
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}

export default class ProjectContainer extends React.Component {
    constructor(){
      super();
      this.state = {RemoveOnScroll: true};
    }
    render() {
        //EQCSS.process(PreRenderedEqcss)
        return (
            <Container id={this.props.id} style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}} className="ProjectContainer_EQCSS_1">
                <Waypoint
                  bottomOffset='-400px'
                  scrollableAncestor={window}
                  onEnter={()=> this.setState({RemoveOnScroll: false})}
                />
                <Link to={this.props.to}>
                    <Display className="ProjectContainer_EQCSS_2">
                        <svg viewBox="0 0 32 32">
                            <path d="M0 16v16h4.008v-32h-4.008v16z"></path>
                            <path d="M6.83 8.593v8.593h4.165c4.146 0 4.713-0.013 5.534-0.115 1.51-0.189 2.921-0.728 3.896-1.485 1.283-0.994 2.261-2.645 2.642-4.457 0.366-1.728 0.285-4.107-0.192-5.784-0.279-0.968-0.818-2.004-1.43-2.732-1.109-1.327-2.507-2.126-4.248-2.421-0.991-0.17-1.013-0.17-5.852-0.183l-4.515-0.013v8.596zM14.541 2.95c1.517 0.080 2.254 0.285 3.004 0.84 0.693 0.51 1.241 1.449 1.449 2.479 0.122 0.606 0.154 0.965 0.17 2.036 0.029 1.767-0.096 2.738-0.468 3.687-0.426 1.093-1.036 1.674-2.119 2.014-0.715 0.224-1.247 0.263-3.755 0.263h-2.017v-11.351h1.565c0.859 0 1.837 0.016 2.171 0.032z"></path>
                            <path d="M22.541 0.16c-0.131 0.087-0.24 0.173-0.24 0.186s0.080 0.096 0.176 0.183c0.34 0.298 0.956 0.955 1.18 1.25 0.112 0.151 0.552 0.814 0.552 0.837 0 0.010 0.042 0.077 0.090 0.151 0.051 0.074 0.16 0.273 0.244 0.439s0.157 0.308 0.164 0.314c0.003 0.006 1.138-0.728 2.52-1.632s2.6-1.699 2.703-1.767l0.189-0.122h-7.336l-0.24 0.16z"></path>
                            <path d="M28.794 4.492c-1.754 1.148-3.194 2.087-3.197 2.094-0.006 0.003 0.019 0.253 0.051 0.551 0.138 1.193 0.164 2.777 0.067 3.777-0.019 0.192-0.026 0.356-0.019 0.366 0.022 0.019 6.275-4.066 6.291-4.111 0.006-0.019 0.010-1.1 0.006-2.398l-0.010-2.363-3.19 2.084z"></path>
                            <path d="M28.457 13.198c-1.921 1.257-3.508 2.293-3.524 2.299-0.016 0.003 0.266 0.891 0.625 1.972 0.442 1.327 0.667 1.959 0.693 1.95 0.022-0.010 1.324-0.856 2.895-1.882l2.854-1.863v-2.386c0-1.311-0.010-2.386-0.022-2.382-0.016 0-1.597 1.032-3.521 2.293z"></path>
                            <path d="M21.611 18.53c-0.087 0.064-0.654 0.356-0.693 0.356-0.013 0-0.048 0.019-0.074 0.042-0.029 0.026-0.109 0.067-0.18 0.093-0.071 0.029-0.208 0.087-0.305 0.131-0.196 0.087-0.696 0.256-0.946 0.314-0.087 0.022-0.167 0.051-0.176 0.064-0.022 0.029-0.779 0.18-1.065 0.208-0.17 0.016-0.218 0.032-0.215 0.074 0 0.029 0.914 2.777 2.026 6.111l2.026 6.060 2.11 0.010c1.157 0.003 2.107-0.003 2.107-0.016 0.003-0.045-4.505-13.509-4.521-13.509-0.010 0.003-0.051 0.029-0.096 0.061z"></path>
                            <path d="M29.627 21.008c-1.295 0.846-2.36 1.542-2.363 1.542 0 0.003 0.292 0.888 0.654 1.969l0.657 1.959 0.26-0.167c0.949-0.612 3.091-2.020 3.126-2.052 0.029-0.029 0.038-0.539 0.032-2.414l-0.010-2.379-2.357 1.542z"></path>
                            <path d="M6.862 25.94v6.060h4.008v-12.12h-4.008v6.060z"></path>
                            <path d="M30.81 28.896l-1.177 0.77 0.391 1.167 0.388 1.167h1.587v-1.94c0-1.068-0.003-1.94-0.006-1.937-0.006 0-0.539 0.349-1.183 0.773z"></path>
                        </svg>
                        <span>{this.props.title}</span>
                    </Display>
                </Link>
                <Overview>
                    <Row><Highlight>Year</Highlight><span>{this.props.year}</span></Row>
                    <Row><Highlight>Context</Highlight><span>{this.props.context}</span></Row>
                    <Row><Highlight>Role</Highlight><span>{this.props.projectRole}</span></Row>
                </Overview>
            </Container>
        );
    }
}
