import React from 'react';
import ReactDOM from 'react-dom';
import ProjectPage from '../ProjectPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectPage Title="MockedTitle" SubTitle1="MockedData" SubTitle2="MockedData" SubTitle3="MockedData"
        ProjectRole="MockedData" Context="MockedData"
        Year="MockedData"
        Description="MockedData"
        Experience="MockedData"
        Skills={['MockedSkill','MockedSkill']}
        CodeExample={true}
        CodeExampleBash={"MockedBash"}
        href="MockedData"
        hrefText="MockedData"
        />, div);

    let divs = div.getElementsByTagName("div");
    let MockedTitle = Array.from(divs).reduce((x,y)=>{return y.textContent == "MockedTitle" ? true : x},false)
    expect(MockedTitle).toBe(true);

    let Skills = Array.from(divs).reduce((x,y)=>{return y.textContent == "MockedSkill" ? x + 1 : x},0)
    expect(Skills).toBe(2);

    let pre = div.getElementsByTagName("pre");
    let MockedBash = Array.from(pre).reduce((x,y)=>{return y.textContent == "MockedBash" ? true : x},false)
    expect(MockedBash).toBe(true);
});