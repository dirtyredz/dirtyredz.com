import React from "react";
import { Helmet } from "react-helmet";
import WelcomeSection from "../components/WelcomeSection";
import ProjectSection from "../components/ProjectSection";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Dirtyredz - Home</title>
                </Helmet>
                <WelcomeSection />
                <ProjectSection max="3"/>
                <br className="clear" />
            </div>
        );
    }
}
