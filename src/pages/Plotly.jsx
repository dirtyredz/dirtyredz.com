import React from "react";
// import styles from "./About.css"
import styled, { keyframes } from 'styled-components';
import createPlotlyComponent from 'react-plotlyjs';
import PlotlyBasic from 'plotly.js/dist/plotly-basic';

const PlotlyComponent = styled(createPlotlyComponent(PlotlyBasic))`
  height: 500px;
  text-align: center;
  width: 100%;
  position: relative;
`;
const PlotlyHalfPie = styled(createPlotlyComponent(PlotlyBasic))`
  text-align: center;
  width: 225px;
  position: relative;
`;
const AboutSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
`;
const Content = styled.div`
  margin: 0 auto;
  @media (min-width: 1025px) {
    max-width: 60%;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    max-width: 80%;
  }
  @media (max-width: 699px) {
    max-width: 100%;
  }
`;
const WorpPop = styled.span`
  color: #8a1315;
  & a{
    color: #8a1315;
    text-decoration: none;
    border-bottom: 1px solid #8a1315;
    transition: border-bottom 0.5s linear;
    z-index: 1;
    position: relative;
  }
  & a:hover{
    border-bottom: 1px solid #fff;
  }
`;
const StyledHeader = styled.header`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 25px;
  text-align: center;
`;
const BackgroundText = styled.span`
  padding-left: 50px;
  color: #111010;
  font-size: 4em;
`;
const Title = styled.h1`
  padding-top: 50px;
  @media (max-width: 700px) {
    text-align: center;
  }
`;
const TitlePop = styled.span`
  left: 20%;
  position: absolute;
  bottom: 0;
  color: #8a1315;
  font-size: 3em;
`;
const StyledP = styled.p`
  padding-left: 5%;
  padding-right: 1%;
  float: right;
  width: 60%;
  @media (max-width: 700px) {
    float: none !important;
    width: 90% !important;
  }
`;
const StyledP2 = styled.p`
  padding-left: 5%;
  padding-right: 1%;
  float: left;
  width: 60%;
  @media (max-width: 700px) {
    float: none !important;
    width: 90% !important;
  }
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}
export default class Plotly extends React.Component {
    constructor(){
      super()
      this.state = {RemoveOnScroll: true};
    }
    componentWillMount(){

    }
    componentDidMount(){
      //Run on next tick to allow styles to take effect
      setTimeout(()=>{
        this.setState({RemoveOnScroll: false})
      },1);

    }
    render() {
      let trace1 = {
        x: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE'],
        y: [100.00, 180.00, 320.00, 380.00, 570.00, 310.00],
        name: 'Cost',
        type: 'bar',
        opacity: '1',
        marker: {
          color: 'rgba(224, 127, 26, 1)'
        }
      };

      let trace2 = {
        x: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE'],
        y: [700.00, 700.00, 700.00, 700.00, 700.00, 700.00],
        name: 'Actual',
        type: 'bar',
        opacity: '1',
        marker: {
          color: 'rgba(19, 174, 223, 1)'
        }
      };

      let data = [trace1, trace2];
      let layout = {                     // all "layout" attributes: #layout
        showlegend: false,
        paper_bgcolor:'rgba(0,0,0,0)',
        plot_bgcolor:'rgba(0,0,0,0)',
        yaxis: {
          gridcolor: 'rgba(56,0,0,1)',
          tickprefix: '$',
          tickfont: {
            color: '#cccccc'
          }
        },
        xaxis: {
          gridcolor: 'rgba(0,0,0,0)',
          tickfont: {
            color: '#cccccc'
          }
        },
        margin: {
            l: 30,
            r: 30,
            t: 30,
            b: 30
        },
      };
      let config = {
        showLink: false,
        displayModeBar: false
      };

      var data2 = [{
      values: [81,11,8],
      type: 'pie',
      labels: ['Gross Plan Costs', 'Fixed Costs', 'Stop Loss'],
      direction: 'counterclockwise',
      roation: 1,
      hole: 0,
      textposition: 'inside',
      textfont: {
        color: 'rgba(0,0,0,1)',
        size: '30'
      },
      marker: {
        colors: ['rgba(11, 2, 180, 1)', 'rgba(19, 174, 223, 1)','rgba(224, 127, 26, 1)']
      }
      }];

      var layout2 = {
      height: 400,
      width: 500,
      showlegend: true,
      paper_bgcolor:'rgba(0,0,0,0)',
      plot_bgcolor:'rgba(0,0,0,0)',
      margin: {
          l: 30,
          r: 30,
          t: 30,
          b: 30
      },
      legend: {
        font:{
          color: '#cccccc'
        }
      },
      hovermode: !1
      };

      let trace3 = {
        x: ['Januarary', 'Febuarary', 'March', 'April', 'May', 'June'],
        y: [200000.00, 350000.00, 570000.00, 700000.00, 1000000.00, 600000.00],
        mode: 'lines+markers',
        name: 'Adujstable Paid Claims',
        opacity: '1',
        marker: {
          color: 'rgba(224, 127, 26, 1)'
        }
      };

      let data3 = [trace3];
      let layout3 = {                     // all "layout" attributes: #layout
        showlegend: false,
        paper_bgcolor:'rgba(0,0,0,0)',
        plot_bgcolor:'rgba(0,0,0,0)',
        yaxis: {
          gridcolor: 'rgba(56,0,0,1)',
          tickprefix: '$',
          tickfont: {
            color: '#cccccc'
          },
          tickformat : "04,2f"
        },
        xaxis: {
          gridcolor: 'rgba(0,0,0,0)',
          tickfont: {
            color: '#cccccc'
          }
        },
        margin: {
            l: 60,
            r: 60,
            t: 60,
            b: 60
        },
      };
        return (
          <AboutSection style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}}>
            <Content>
                <StyledHeader>
                    <BackgroundText><b>Solutions</b></BackgroundText>
                    <TitlePop><b>Plotly.js</b></TitlePop>
                </StyledHeader>
                <div>
                    <StyledP>
                      Here is a set of examples where I use <WorpPop><a href="http://google.com" target="_blank">plotly.js</a></WorpPop> to create dynamic, besutifuul graphs, and charts.
                      <br/>
                      <br/>
                    </StyledP>
                    <br class="clear"/>
                    <PlotlyComponent data={data} layout={layout} config={config}/>
                    <StyledP2>
                      <br/>
                      <br/>
                      These graphs are compltly dynamic. Only requiring an array for both X and Y axis, and an Array of labels.  Every aspect of these graphs can be styled.
                      <br/>
                      <br/>
                    </StyledP2>
                    <br class="clear"/>
                    <PlotlyHalfPie className="HalfPie" data={data2} layout={layout2} config={config}/>
                    <StyledP>
                      <br/>
                      <br/>
                      You can also have a combinations of diffrent graph types, shown below is a combination of a scatter plot and a line graph. There is also a wide range of customizable option not shown here such as annotations, Error bars, Map graphs, 3D Graphs, and many more.
                      <br/>
                      <br/>
                    </StyledP>
                    <br class="clear"/>
                    <PlotlyComponent data={data3} layout={layout3} config={config}/>
                </div>
            </Content>
        </AboutSection>
        );
    }
}
