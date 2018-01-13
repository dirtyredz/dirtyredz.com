import React from "react";
import WelcomeSection from "../components/WelcomeSection";
import ProjectSection from "../components/ProjectSection";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <WelcomeSection />
                <ProjectSection max="3"/>
                <br className="clear" />
            </div>
        );
    }
}
