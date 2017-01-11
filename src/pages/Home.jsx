import React from "react";

import LogoSection from "../components/LogoSection";
import WelcomeSection from "../components/WelcomeSection";
import ProjectSection from "../components/ProjectSection";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <LogoSection />
                <WelcomeSection />
                <ProjectSection max="3"/>
                <br class="clear" />
            </div>
        );
    }
}
