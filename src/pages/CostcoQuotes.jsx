import React from "react";
import { Helmet } from "react-helmet";
import ProjectPage from "../components/ProjectPage";

export default class CostcoQuotes extends React.Component {

    render() {
        const Skills = ['CSS','HTML','JS','FRONT END','JQuery', 'Inputmask.js']
        const Swatchs = ['#8cb7d7','#e03a40','#01539c','#94ce58','#ffffff']
        return (
            <div>
                <Helmet>
                    <title>Dirtyredz - Costo Quotes</title>
                </Helmet>
                <ProjectPage Title="Costco Quotes" SubTitle1="Insurance" SubTitle2="Family" SubTitle3="Well-Known"
                  ImageSource="../img/Costco.png" ProjectRole="FRONT-END/UX DEVELOPER" Context="Website Redesign"
                  Year="2016"
                  Description="Costco Health Insurance Marketplace - Individual and business health insurance plans - Enhanced benefits for Executive Members - Affordable Care Act information and resources"
                  Experience="I was subcontracted to do javascript work, to give the insurance forms a responsive and progressive style while completing the forms. This was the first website that I've ever worked on where I was asked to only work on the Front-End. It was an adjustment for sure to not be so involved, but I also enjoyed focusing on one area. This project encouraged me to start getting my name out in the web developemnt world more."
                  Skills={Skills}
                  Swatchs={Swatchs}
                  />
            </div>
        );
    }
}
