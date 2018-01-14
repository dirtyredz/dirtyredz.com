import React from "react";
import { Helmet } from "react-helmet";
import ProjectPage from "../components/ProjectPage";

export default class ReactScrollUpButton extends React.Component {
    render() {
        const Skills = ['CSS','HTML','JS','RESPONSIVE','React','React-Dom','Webpack','Babel','ES6','NPM','Github']
        return (
            <div>
                <Helmet>
                    <title>Dirtyredz - React Scroll Up Button</title>
                </Helmet>
                <ProjectPage
                    Title="React Scroll Up Button"
                    SubTitle1="React"
                    SubTitle2="Component"
                    SubTitle3="Utility"
                    ProjectRole="React Developer"
                    Context="Component Creator"
                    Year="2016"
                    Description="React Component for a fixed scroll to top button. The button can use the default button, or can be customized to look like any button you want. The component contains all the code necessary to scroll to the top of the page (or desired position) Utilizing Easing effects."
                    Experience="I've had this little utilitarian tool on my website for some time now, but it wasn't until I started developing in react that I realized its potential as a component. I really enjoyed the experience of finally releasing some of my work to the public, and not in the form of a website.  This component has the potential of being used on hundreds of websites, which is a very exciting prospect."
                    Skills={Skills}
                    CodeExample={true}
                    CodeExampleBash={"npm install react-scroll-up-button --save"}
                    CodeExampleJS={"import React from 'react';\nimport ScrollUpButton from 'react-scroll-up-button'; //Add this line Here\n\nexport default class Index extends React.Component {\n  render() {\n    return (\n      <div>\n        <ScrollUpButton /> //Add this where ever you would like.\n      </div>\n    );\n  }\n}"}
                    href="https://github.com/dirtyredz/react-scroll-up-button"
                    hrefText="View On Github"
                />
            </div>
        );
    }
}
