import React from 'react';
import { Helmet } from "react-helmet";
import ProjectPage from "../components/ProjectPage";

export default class About extends React.Component {
    render() {

        const Skills = ['PHP','CSS','HTML','JS','FRONT END','BACK END','DNS','SERVER','APACHE','CODEIGNITER']
        const Swatchs = ['#1a9ad6','#99bf38','#ffffff','#ffab18']
        return (
            <div>
                <Helmet>
                    <title>Dirtyredz - ZipCV</title>
                </Helmet>
                <ProjectPage Title="ZipCV" SubTitle1="Jobs" SubTitle2="Resumes" SubTitle3="Powerful"
                  ImageSource="../img/ZipCV.png" ProjectRole="FRONT-END/UI DEVELOPER BACK-END DEVELOPER" Context="Website Development"
                  Year="2015-2016"
                  Description="ZipCV aims to help America's unemployed as well as assisting young professionals and college graduates to start or further their careers."
                  Experience="This is one of my first big websites that I was asked to help with. Initially the team only wanted some Front-End PHP Tie ins. I was then asked to take on more of the project, doing all of the PHP Back-End work as well."
                  Skills={Skills}
                  Swatchs={Swatchs}
                  />
            </div>
        );
    }
}
