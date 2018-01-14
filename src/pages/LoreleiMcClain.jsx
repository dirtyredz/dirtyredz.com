import React from "react";
import { Helmet } from "react-helmet";
import ProjectPage from "../components/ProjectPage";

export default class LoreleiMcClain extends React.Component {
    render() {
        const Skills = ['PHP','CSS','HTML','JS','FRONT END','BACK END','DNS','SERVER','APACHE','PHP FRAMEWORK','RESPONSIVE']
        const Swatchs = ['#000000','#3e2719','#52aedd','#727272','#ffffff']
        return (
            <div>
                <Helmet>
                    <title>Dirtyredz - Lorelei McClain</title>
                </Helmet>
                <ProjectPage Title="LoreleiMcClain" SubTitle1="Photographer" SubTitle2="Mother" SubTitle3="Love"
                  ImageSource="../img/Lorelei.png" ProjectRole="FRONT-END/UI/UX DEVELOPER" Context="Website Development"
                  Year="2016"
                  Description="A small website for my wife. She has been wanting to further her photgraphy career for some time. I hope that this website will help her further her passion of photography."
                  Experience="Being a personal project; I did everything. Working for myself I have the freedom to work at my own pace.  I built the site from setting up the domain to creating my own UI/UX. Including setting up the server, performing Back-End Development, and a custom layout."
                  Skills={Skills}
                  Swatchs={Swatchs}
                  />
            </div>
        );
    }
}
