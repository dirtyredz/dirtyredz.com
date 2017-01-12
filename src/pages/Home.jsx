import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LogoSection from "../components/LogoSection";
import WelcomeSection from "../components/WelcomeSection";
import ProjectSection from "../components/ProjectSection";
import { injectGlobal } from 'styled-components';

injectGlobal`
.LogoSection-enter {
  opacity: 0.01;
  top:300px;
}
.LogoSection-enter.LogoSection-enter-active {
  opacity: 1;
  top:0;
  transition: opacity 1s ease-out, top 1s ease-out;
}
.LogoSection-leave {
  opacity: 1;
  top:0;
}
.LogoSection-leave.LogoSection-leave-active {
  opacity: 0.01;
  top:300px;
  transition: opacity 1s ease-in, top 1s ease-in;
}
.LogoSection-appear {
  opacity: 0.01;
  top:300px;
}
.LogoSection-appear.LogoSection-appear-active {
  opacity: 1;
  top:0;
  transition: opacity 1s ease-out, top 1s ease-out;
}
`;
export default class Home extends React.Component {

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                  transitionName="LogoSection"
                  transitionAppear={true}
                  transitionAppearTimeout={1500}
                  transitionEnterTimeout={1500}
                  transitionLeaveTimeout={1500}>
                  <LogoSection />
                </ReactCSSTransitionGroup>
                <WelcomeSection />
                <ProjectSection max="3"/>
                <br class="clear" />
            </div>
        );
    }
}
