import React from "react";
// import styles from "./About.css"
import styled, {injectGlobal} from 'styled-components';

const AboutSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fff;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  @media print{
    padding-top:0;
  }
`;
const Content = styled.div`
  margin: 0 auto;
  @media (min-width: 1025px) {
    max-width: 80%;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    max-width: 100%;
  }
  @media print{
    padding: 50px;
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
  @media print{
    display: none;
  }
`;
const BottomMessage = styled.div`
  color: #000;
  & span{
    color: rgb(115, 115, 115);
    font-size: 15px;
  }
`;
const BackgroundText = styled.span`
  padding-left: 50px;
  color: rgba(180,180,180, 0.32);
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
const chartdiv = styled.div`
  width: 100%;
  height: 500px;
`;
const DemoBox = styled.div`
  border: 1px solid black;
  color: black;
  display: flex;
  flex-direction: column;
  margin-left: 2.5px;
  margin-right: 2.5px;
`;
const DemoBox25 = styled(DemoBox)`
  width: 25%;
`;
const DemoBox30 = styled(DemoBox)`
  width: 30%;
`;
const DemoBox45 = styled(DemoBox)`
  width: 45%;
`;
const DemoBox50 = styled(DemoBox)`
  width: 50%;
`;
const DemoBox57 = styled(DemoBox)`
  width: 57%;
`;
const DemoBoxContent = styled.div`
  padding: 5px;
  font-size: 50%;
  flex-grow: 1;
  height: 200px;
  overflow: hidden;
  position: relative;
`;
const DemoBoxContent50 = styled(DemoBoxContent)`
  width: 50%;
`;
const DemoBoxContent50Centered = styled(DemoBoxContent50)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const DemoBoxContent50Space = styled(DemoBoxContent)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DemoBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;
const Catagory = styled.div`
  order: 1;
  flex-grow: 1;
  white-space: nowrap;
  border-bottom: black 1px solid;
`;
const CatagoryValue = styled.div`
  font-weight: bold;
  order: 2;
`;
const LossCatagory = styled(Catagory)`
  font-weight: bold;
`;
const LossCatagoryValue = styled(CatagoryValue)`
  color: green;
`;
const UnBoldCatagoryValue = styled(CatagoryValue)`
  font-weight: normal;
`;
const DemoBoxHeader = styled.div`
  background-color: #1e6a95;
  color: white;
  height: 30px;
  font-size: 60%;
  padding: 5px;
  width: calc(100% - 10px);
`;
const DemoSection = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const SolidBar = styled.div`
  border-top: 2px solid black;
  height: 2px;
  width: 100%;
`;
const DemoBoxContentWPie = styled.div`
  display: flex;
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}
injectGlobal`
  #chartdiv {
    height: 500px;
    width: 100%;
  }
  @page {
  size: landscape;
  margin: 0;
}
  #chartdiv2 {
    height: 200px;
    width: 100%;
  }
  #chartdiv3 {
    height: 200px;
    width: 100%;
  }
  #PieChart1 {
    height: 300px;
    width: 100%;
  /*width: 500px;
    position: absolute !important;
    left: 50% !important;
    overflow: visible !important;*/
  }
  /*#PieChart1 > div {
    position: absolute !important;
    left: -50% !important;
  }*/
  #PieChart2 {
    height: 300px;
    width: 100%;
  /*width: 500px;
    position: absolute !important;
    left: 50% !important;
    overflow: visible !important;*/
  }
  /*#PieChart2 > div {
    position: absolute !important;
    left: -50% !important;
  }*/
  #BarGraph2 {
    height: 230px;
    width: 100%
  }
  #PlotGraph1 {
    height: 200px;
    width: 100%
  }
  #MultiGraph1 {
    height: 200px;
    width: 100%
  }

  div > div > div.amcharts-chart-div > a{
    display: none !important;
  }
  .amChartsDemoPrint{
    display: none;
    padding-top: 15px;
    padding-left: 30px;
    font-weight: bold;
    color: white;
  }
  .amChartsDemoPrint > span{
    color: rgb(12, 35, 80);
    font-weight: lighter;
    font-size: 40px;
  }
  @media print{
    body{
      background-color: #00b6f0;
    }
    .amChartsDemoPrintOnly{
      display: none;
    }
    .amChartsDemoPrint{
      display: block;
    }
  }
`;
export default class AmChartsDemo extends React.Component {
    constructor(){
      super();
      this.state = {RemoveOnScroll: true};
      this.WindowObject = null;
      if(!this.is_server()){
        this.WindowObject = window;
      }
      this.AmCharts = null;
    }
    is_server() {
      return ! (typeof window != 'undefined' && window.document);
    }
    componentWillMount(){
        if(this.WindowObject === null){
          return false;
        }
        return true;
    }
    componentDidMount(){
      //Run on next tick to allow styles to take effect
      setTimeout(()=>{
        this.setState({RemoveOnScroll: false})
      },1);

      this.AmCharts = require('amcharts3/amcharts/amcharts.js');
      this.AmCharts = require('amcharts3/amcharts/serial.js');
      this.AmCharts = require('amcharts3/amcharts/gauge.js');
      this.AmCharts = require('amcharts3/amcharts/pie.js');
      this.AmCharts = require('amcharts3/amcharts/themes/light.js');

      var chart = AmCharts.makeChart("chartdiv", {
        "theme": "light",
        "type": "serial",
        "depth3D": 15,
        "angle": 30,
      	"startDuration": 2,
        "legend": {
            "align": "center",
            "autoMargins": true,
            "borderAlpha": 0,
            "equalWidths": true,
            "horizontalGap": 10,
            "markerSize": 10,
            "useGraphSettings": true,
            "valueAlign": "left",
            "valueWidth": 0
        },
        "dataProvider": [{
            "month": "JAN",
            "cost": 184.89,
            "actual": 670.95,
            "colorCost": "#fa9b5e",
            "colorActual": "#2badeb",
        },{
            "month": "FEB",
            "cost": 256.53,
            "actual": 673.34,
            "colorCost": "#fa9b5e",
            "colorActual": "#2badeb",
        },{
            "month": "MARCH",
            "cost": 421.40,
            "actual": 674.24,
            "colorCost": "#fa9b5e",
            "colorActual": "#2badeb",
        },{
            "month": "APRIL",
            "cost": 482.66,
            "actual": 678.16,
            "colorCost": "#fa9b5e",
            "colorActual": "#2badeb",
        },{
            "month": "MAY",
            "cost": 651.12,
            "actual": 671.90,
            "colorCost": "#fa9b5e",
            "colorActual": "#2badeb",
        },{
            "month": "JUNE",
            "cost": 394.85,
            "actual": 672.85,
            "colorCost": "#fa9b5e",
            "colorActual": "#2badeb",
        }],
        "valueAxes": [{
            "unit": "$",
            "unitPosition": "left",
        }],
        "graphs": [{
            "fillAlphas": 0.6,
            "lineAlpha": 0.1,
            "fillColorsField": "colorCost",
            "labelText": "[[value]]",
            "title": "Cost",
            "type": "column",
            "fillColor": "#efa167",
            "color": "#fff",
            "valueField": "cost",
            "balloonText": ""
        },{
            "fillAlphas": 0.6,
            "lineAlpha": 0.1,
            "fillColorsField": "colorActual",
            "labelText": "[[value]]",
            "title": "Actual",
            "type": "column",
            "fillColor": "#f0a357",
            "color": "#fff",
            "valueField": "actual",
            "balloonText": ""
        }],
        "categoryField": "month",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 0
        },
        "listeners": [{
          "event": "drawn",
          "method": this.addLabelBoxes
        }]
      });
      this.gaugeChart = AmCharts.makeChart("chartdiv2", {
        "theme": "light",
        "type": "gauge",
        "axes": [{
          "topTextFontSize": 30,
          "topTextYOffset": 30,
          "topTextColor": '#fff',
          "axisColor": "#31d6ea",
          "tickAlpha": 0,
          "axisThickness": 0,
          "endValue": 120,
          "inside": true,
          "radius": "50%",
          "startAngle": -90,
          "endAngle": 90,
          "labelFrequency": 0,
          "unit": "",
          "bandAlpha": 1,
          "bandGradientRatio": [0.5, -0.5, 0.5],
          "bands": [{
            "color": "#51aa48",
            "endValue": 70,
            "innerRadius": "105%",
            "radius": "170%",
            "startValue": 0
          }, {
            "color": "#f8d80f",
            "endValue": 90,
            "startValue": 70,
            "innerRadius": "105%",
            "radius": "170%",
          }, {
            "color": "#e26d1f",
            "endValue": 100,
            "startValue": 90,
            "innerRadius": "105%",
            "radius": "170%",
          }, {
            "color": "#dc2b37",
            "endValue": 120,
            "startValue": 100,
            "innerRadius": "105%",
            "radius": "170%",
          }]
        }],
        "arrows": [{
          "alpha": 1,
          "innerRadius": "85%",
          "nailRadius": 0,
          "radius": "105%"
        }],
        "listeners": [{
          "event": "drawn",
          "method": this.assignValue.bind(this)
        },{
          "event": "drawn",
          "method": this.addLabelCircleGauge
        }],
      });
      this.gaugeChart2 = AmCharts.makeChart("chartdiv3", {
        "theme": "light",
        "type": "gauge",
        "axes": [{
          "topTextFontSize": 30,
          "topTextYOffset": 30,
          "topTextColor": '#fff',
          "axisColor": "#31d6ea",
          "tickAlpha": 0,
          "axisThickness": 0,
          "endValue": 120,
          "inside": true,
          "radius": "50%",
          "startAngle": -90,
          "endAngle": 90,
          "labelFrequency": 0,
          "unit": "",
          "bandAlpha": 1,
          "bandGradientRatio": [0.5, -0.5, 0.5],
          "bands": [{
            "color": "#51aa48",
            "endValue": 70,
            "innerRadius": "105%",
            "radius": "170%",
            "startValue": 0
          }, {
            "color": "#f8d80f",
            "endValue": 90,
            "startValue": 70,
            "innerRadius": "105%",
            "radius": "170%",
          }, {
            "color": "#e26d1f",
            "endValue": 100,
            "startValue": 90,
            "innerRadius": "105%",
            "radius": "170%",
          }, {
            "color": "#dc2b37",
            "endValue": 120,
            "startValue": 100,
            "innerRadius": "105%",
            "radius": "170%",
          }]
        }],
        "arrows": [{
          "alpha": 1,
          "innerRadius": "85%",
          "nailRadius": 0,
          "radius": "105%"
        }],
        "listeners": [{
          "event": "drawn",
          "method": this.assignValue2.bind(this)
        },{
          "event": "drawn",
          "method": this.addLabelCircleGauge
        }],
      });
      var PieChart1 = AmCharts.makeChart( "PieChart1", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [ {
          "category": "Stop Loss",
          "value": 8
        }, {
          "category": "Fixed Costs",
          "value": 11
        }, {
          "category": "Gross Paid Claims",
          "value": 81
        }],
        "labelRadius": -10,
        "valueField": "value",
        "colors": ['#f69a51','#19aae3','#1972aa'],
        "titleField": "category",
        "outlineAlpha": 0,
        "depth3D": 15,
        "maxLabelWidth": 100,
        "marginTop": -80,
        "marginRight": 30,
        "angle": 30,
        "balloonText": "",
        "listeners": [{
          "event": "drawn",
          "method": this.addLabelBoxesPieChart
        }]
      } );
      var BarGraph2 = AmCharts.makeChart("BarGraph2", {
        "theme": "light",
        "type": "serial",
        "depth3D": 15,
        "angle": 30,
        "autoMargins": false,
        "marginBottom": 70,
        "marginLeft": 50,
      	"startDuration": 2,
        "fontSize": 12,
        "dataProvider": [{
            "enrollmentType": "EE ONLY",
            "enrollmentAmount": 1430,
            "color": "#2584c8",
        },{
            "enrollmentType": "EE + SPOUSE",
            "enrollmentAmount": 144,
            "color": "#ee9750",
        },{
            "enrollmentType": "EE + CHILDREN",
            "enrollmentAmount": 269,
            "color": "#20abe4",
        },{
            "enrollmentType": "EE + FAMILY",
            "enrollmentAmount": 225,
            "color": "#42beb9",
        }],
        "valueAxes": [{
            "unitPosition": "left",
        }],
        "graphs": [{
            "fillAlphas": 0.6,
            "lineAlpha": 0.1,
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "title": "Cost",
            "type": "column",
            "fillColor": "#efa167",
            "color": "#000",
            "balloonText": "",
            "valueField": "enrollmentAmount",
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "enrollmentType",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 20,
            "fontSize":10
        }
      });
      var PieChart2 = AmCharts.makeChart( "PieChart2", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [ {
          "category": "RX",
          "value": 23
        }, {
          "category": "Medical",
          "value": 77
        }],
        "labelRadius": -10,
        "valueField": "value",
        "colors": ['#19aae3','#1972aa'],
        "titleField": "category",
        "balloonText": "",
        "outlineAlpha": 0,
        "depth3D": 15,
        "maxLabelWidth": 100,
        "marginTop": -80,
        "marginRight": 30,
        "angle": 30,
        "listeners": [{
          "event": "drawn",
          "method": this.addLabelBoxesPieChart
        }]
      } );
      var PlotGraph1 = AmCharts.makeChart("PlotGraph1", {
          "type": "serial",
          "theme": "light",
          "marginRight": 40,
          "marginLeft": 40,
          "autoMarginOffset": 20,
          "categoryField": "date",
          "categoryAxis": {
              "axisAlpha": 0
          },
          "valueAxes": [{
              "axisAlpha": 0
          }],
          "graphs": [{
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 5,
              "labelText": "[[value]]",
              "lineThickness": 2,
              "balloonText": "",
              "useLineColorForBulletBorder": true,
              "valueField": "value",
          }],
          "dataProvider": [{
              "date": "Januarary",
              "value": 190000.00
          }, {
              "date": "Febuarary",
              "value": 250000.00
          }, {
              "date": "March",
              "value": 550000.00
          }, {
              "date": "April",
              "value": 675000.00
          }, {
              "date": "May",
              "value": 1000000.00
          }, {
              "date": "June",
              "value": 590000.00
          }]
      });
      var MultiGraph1 = AmCharts.makeChart("MultiGraph1", {
          "type": "serial",
          "theme": "light",
          "legend": {
              "align": "center",
              "autoMargins": true,
              "borderAlpha": 0,
              "equalWidths": true,
              "horizontalGap": 10,
              "markerSize": 10,
              "useGraphSettings": true,
              "valueAlign": "left",
              "valueWidth": 0,
              "data": [{'title':'Anthem $4,500 Accrual','color':"#42beb9"},{'title':'Anthem $4,500 Paid Claims','color':"#ee9750"}]
          },
          "dataProvider": [{
              "date": "Januarary",
              "accrual": 354.92,
              "paidClaims": 102.63,
              "colorAccrual": "#42beb9",
              "colorPaidClaims": "#ee9750",
          }, {
              "date": "February",
              "accrual": 357.87,
              "paidClaims": 137.76,
              "colorAccrual": "#42beb9",
              "colorPaidClaims": "#ee9750",
          }, {
              "date": "March",
              "accrual": 354.92,
              "paidClaims": 229.94,
              "colorAccrual": "#42beb9",
              "colorPaidClaims": "#ee9750",
          }, {
              "date": "April",
              "accrual": 415.05,
              "paidClaims": 356.15,
              "colorAccrual": "#42beb9",
              "colorPaidClaims": "#ee9750",
          }, {
              "date": "May",
              "accrual": 348.73,
              "paidClaims": 248.70,
              "colorAccrual": "#42beb9",
              "colorPaidClaims": "#ee9750",
          }, {
              "date": "June",
              "accrual": 346.75,
              "paidClaims": 213.49,
              "colorAccrual": "#42beb9",
              "colorPaidClaims": "#ee9750",
          }],
          "valueAxes": [{
              "unit": "$",
              "unitPosition": "left",
          }],
          "graphs": [{
              "alphaField": "alpha",
              "dashLengthField": "dashLength",
              "fillAlphas": 0.7,
              "fillColorsField": "colorAccrual",
              "legendPeriodValueText": "total: [[value.sum]] mi",
              "legendValueText": "[[value]] mi",
              "title": "distance",
              "type": "column",
              "labelText": "[[value]]",
              "balloonText": "",
              "valueField": "accrual",
              "color": "#fff",
          }, {
              "bullet": "round",
              "lineColorField": "colorPaidClaims",
              "lineAlpha": 1,
              "labelText": "[[value]]",
              "lineThickness": 5,
              "bulletSize": 10,
              "bulletBorderAlpha": 1,
              "useLineColorForBulletBorder": true,
              "bulletColor": "#FFFFFF",
              "bulletSizeField": "townSize",
              "dashLengthField": "dashLength",
              "descriptionField": "townName",
              "labelPosition": "right",
              "balloonText": "",
              "legendValueText": "[[value]]/[[description]]",
              "title": "latitude/city",
              "fillAlphas": 0,
              "valueField": "paidClaims",
              "color": "#fff",
          }],
          "categoryField": "date",
          "categoryAxis": {
              "autoGridCount": false,
              "axisColor": "#555555",
              "gridAlpha": 0.1,
              "gridColor": "#FFFFFF",
              "gridCount": 50
          },
          "listeners": [{
            "event": "drawn",
            "method": this.addLabelBoxes2
          }]
      });
    }
    assignValue() {
      var value = Math.round( Math.random() * 120 );
      if ( this.gaugeChart ) {
        if ( this.gaugeChart.arrows ) {
          if ( this.gaugeChart.arrows[ 0 ] ) {
            if ( this.gaugeChart.arrows[ 0 ].setValue ) {
              this.gaugeChart.arrows[ 0 ].setValue( 60 );
              this.gaugeChart.axes[0].setTopText(60 + " %");
            }
          }
        }
      }
    }
    assignValue2() {
      var value = Math.round( Math.random() * 120 );
      if ( this.gaugeChart2 ) {
        if ( this.gaugeChart2.arrows ) {
          if ( this.gaugeChart2.arrows[ 0 ] ) {
            if ( this.gaugeChart2.arrows[ 0 ].setValue ) {
              this.gaugeChart2.arrows[ 0 ].setValue( 79 );
              this.gaugeChart2.axes[0].setTopText(79 + " %");
            }
          }
        }
      }
    }
    addLabelBoxes(event) {
      var label = document.querySelector("#chartdiv > div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g:nth-child(1) > path");
      label.setAttribute("fill", "#fa9b5e");
      var label = document.querySelector("#chartdiv > div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g:nth-child(2) > path");
      label.setAttribute("fill", "#2badeb");
      var labels = document.querySelectorAll("#chartdiv > div > div.amcharts-chart-div > svg > g:nth-child(13) > g:nth-child(1) > text");
      Array.prototype.forEach.call(labels, function(label, i) {
        var parent = label.parentNode;
        var className = parent.getAttribute("class");
        var svgRect = label.getBBox();
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");;
        rect.setAttribute("x", svgRect.x-3);
        rect.setAttribute("y", svgRect.y-3);
        rect.setAttribute("transform", label.getAttribute("transform"))
        rect.setAttribute("width", svgRect.width+6);
        rect.setAttribute("height", svgRect.height+6);
        rect.setAttribute("stroke", "#fff");
        rect.setAttribute("fill", "#fa9b5e");
        rect.setAttribute("opacity", 1);
        parent.insertBefore(rect, label);
      });
      var labels = document.querySelectorAll("#chartdiv > div > div.amcharts-chart-div > svg > g:nth-child(13) > g:nth-child(2) > text");
      Array.prototype.forEach.call(labels, function(label, i) {
        var parent = label.parentNode;
        var className = parent.getAttribute("class");
        var svgRect = label.getBBox();
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");;
        rect.setAttribute("x", svgRect.x-3);
        rect.setAttribute("y", svgRect.y-3);
        rect.setAttribute("transform", label.getAttribute("transform"))
        rect.setAttribute("width", svgRect.width+6);
        rect.setAttribute("height", svgRect.height+6);
        rect.setAttribute("stroke", "#fff");
        rect.setAttribute("fill", "#2badeb");
        rect.setAttribute("opacity", 1);
        parent.insertBefore(rect, label);
      });
    }
    addLabelBoxes2(event) {
      var label = document.querySelector("#MultiGraph1 > div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g:nth-child(1) > path");
      label.setAttribute("fill", "#42beb9");
      var label = document.querySelector("#MultiGraph1 > div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g:nth-child(2) > path");
      label.setAttribute("fill", "#ee9750");
      var labels = document.querySelectorAll("#MultiGraph1 > div > div.amcharts-chart-div > svg > g:nth-child(13) > g:nth-child(1) > text");
      Array.prototype.forEach.call(labels, function(label, i) {
        var parent = label.parentNode;
        var className = parent.getAttribute("class");
        var svgRect = label.getBBox();
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");;
        rect.setAttribute("x", svgRect.x-3);
        rect.setAttribute("y", svgRect.y-3);
        rect.setAttribute("transform", label.getAttribute("transform"))
        rect.setAttribute("width", svgRect.width+6);
        rect.setAttribute("height", svgRect.height+6);
        rect.setAttribute("stroke", "#fff");
        rect.setAttribute("fill", "#42beb9");
        rect.setAttribute("opacity", 1);
        parent.insertBefore(rect, label);
      });
      var labels = document.querySelectorAll("#MultiGraph1 > div > div.amcharts-chart-div > svg > g:nth-child(13) > g:nth-child(2) > text");
      Array.prototype.forEach.call(labels, function(label, i) {
        var parent = label.parentNode;
        var className = parent.getAttribute("class");
        var svgRect = label.getBBox();
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");;
        rect.setAttribute("x", svgRect.x-3);
        rect.setAttribute("y", svgRect.y-3);
        rect.setAttribute("transform", label.getAttribute("transform"))
        rect.setAttribute("width", svgRect.width+6);
        rect.setAttribute("height", svgRect.height+6);
        rect.setAttribute("stroke", "#fff");
        rect.setAttribute("fill", "#ee9750");
        rect.setAttribute("opacity", 1);
        parent.insertBefore(rect, label);
      });
    }
    addLabelBoxesPieChart(event) {
      var labelGroups = document.querySelectorAll("#" + event.chart.containerDiv.parentNode.id + " > div > div > svg > g:nth-child(10) > g");
      Array.prototype.forEach.call(labelGroups, function(labelG, i) {
        var label = labelG.childNodes[0];
        var svgRect = label.getBBox();
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");;
        rect.setAttribute("x", svgRect.x-3);
        rect.setAttribute("y", svgRect.y-3);
        rect.setAttribute("transform", label.getAttribute("transform"))
        rect.setAttribute("width", svgRect.width+6);
        rect.setAttribute("height", svgRect.height+6);
        rect.setAttribute("stroke", "#162cc1");
        rect.setAttribute("fill", "#fff");//event.chart.colors[i]);
        rect.setAttribute("opacity", 1);
        labelG.insertBefore(rect, label);
      });
    }
    addLabelCircleGauge(event){
      var label = document.querySelector("#" + event.chart.containerDiv.parentNode.id + " > div > div > svg > g:nth-child(8) > g:nth-child(1) > text")
      var parent = label.parentNode;
      var svgRect = label.getBBox();
      var width = event.chart.containerDiv.parentNode.offsetWidth / 8.5
      var fontSize = width / 2
      label.setAttribute('font-size',fontSize)
      var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");;
      ellipse.setAttribute("cx", svgRect.x+45);
      ellipse.setAttribute("cy", svgRect.y+20);
      ellipse.setAttribute("rx", width+10);
      ellipse.setAttribute("ry", width+10);
      ellipse.setAttribute("transform", label.getAttribute("transform"))
      ellipse.setAttribute("stroke", "#fff");
      ellipse.setAttribute("fill", "#e6e7e9");
      ellipse.setAttribute("opacity", 1);
      parent.insertBefore(ellipse, label);
      var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");;
      ellipse.setAttribute("cx", svgRect.x+45);
      ellipse.setAttribute("cy", svgRect.y+20);
      ellipse.setAttribute("rx", width);
      ellipse.setAttribute("ry", width);
      ellipse.setAttribute("transform", label.getAttribute("transform"))
      ellipse.setAttribute("stroke", "#fff");
      ellipse.setAttribute("fill", "#818286");
      ellipse.setAttribute("opacity", 1);
      parent.insertBefore(ellipse, label);

    }
    render() {
        return (
              <AboutSection style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}}>
                <Content>
                  <StyledHeader>
                      <BackgroundText><b>Solutions</b></BackgroundText>
                      <TitlePop><b>amCharts Demo</b></TitlePop>
                  </StyledHeader>
                    <DemoSection>

                      <DemoBox30>
                        <DemoBoxHeader>Accrual Summary</DemoBoxHeader>
                        <DemoBoxContent>
                          <DemoBoxRow>
                            <Catagory>
                              Gross Accrual
                            </Catagory><CatagoryValue>$6,961,548.00</CatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <DemoBoxRow>
                            <Catagory>
                              Gross Plan Cost
                            </Catagory><CatagoryValue>$4,158,885.04</CatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <SolidBar/>
                          <br/>
                          <DemoBoxRow>
                            <LossCatagory>
                              Loss Ratio
                            </LossCatagory><LossCatagoryValue>60%</LossCatagoryValue>
                          </DemoBoxRow>
                        </DemoBoxContent>

                        <DemoBoxHeader>Accrual Summary with UHC Runout</DemoBoxHeader>
                        <DemoBoxContent>
                          <DemoBoxRow>
                            <Catagory>
                              Gross Accrual
                            </Catagory><CatagoryValue>$6,961,548.00</CatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <DemoBoxRow>
                            <Catagory>
                              UHC Runout
                            </Catagory><CatagoryValue>$1,333,630.00</CatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <DemoBoxRow>
                            <Catagory>
                              Gross Plan Cost
                            </Catagory><CatagoryValue>$4,158,885.04</CatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <DemoBoxRow>
                            <Catagory>
                              Total Cost
                            </Catagory><CatagoryValue>$5,508,904.04</CatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <SolidBar/>
                          <br/>
                          <DemoBoxRow>
                            <LossCatagory>
                              Loss Ratio
                            </LossCatagory><LossCatagoryValue>79%</LossCatagoryValue>
                          </DemoBoxRow>
                        </DemoBoxContent>
                      </DemoBox30>

                      <DemoBox25>
                        <DemoBoxHeader>Loss Ratio</DemoBoxHeader>
                        <DemoBoxContent>
                          <div id="chartdiv2"></div>
                        </DemoBoxContent>
                        <DemoBoxHeader>Loss Ratio W/UHC Runout</DemoBoxHeader>
                        <DemoBoxContent>
                          <div id="chartdiv3"></div>
                        </DemoBoxContent>
                      </DemoBox25>

                      <DemoBox45>
                        <DemoBoxHeader>PEPM Cost Vs Accrual</DemoBoxHeader>
                        <DemoBoxContent>
                          <div id="chartdiv"></div>
                        </DemoBoxContent>
                      </DemoBox45>

                    </DemoSection>

                    <DemoSection>

                      <DemoBox57>

                        <DemoBoxHeader>Gross Plan Cost Detail</DemoBoxHeader>

                        <DemoBoxContentWPie>

                        <DemoBoxContent50Space>
                          <DemoBoxRow>
                            <LossCatagory>
                              Gross Paid Claims
                            </LossCatagory><CatagoryValue>$3,184,572.45</CatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              Stop Loss Reimbursements
                            </Catagory><UnBoldCatagoryValue>$ .</UnBoldCatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              Rebates
                            </Catagory><UnBoldCatagoryValue>$ .</UnBoldCatagoryValue>
                          </DemoBoxRow>
                          <SolidBar/>
                          <DemoBoxRow>
                            <LossCatagory>
                              Adjusted Paid Claims
                            </LossCatagory><CatagoryValue>$3,184,572.45</CatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              Stop Loss Fees
                            </Catagory><UnBoldCatagoryValue>$429,821.58</UnBoldCatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              Fixed Costs
                            </Catagory><UnBoldCatagoryValue>$544,491.01</UnBoldCatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <SolidBar/>
                          <DemoBoxRow>
                            <LossCatagory>
                              Gross Plan Cost
                            </LossCatagory><CatagoryValue>$4,158,885.04</CatagoryValue>
                          </DemoBoxRow>
                        </DemoBoxContent50Space>

                        <DemoBoxContent50>
                          <div id="PieChart1"></div>
                        </DemoBoxContent50>

                        </DemoBoxContentWPie>

                        <DemoBoxHeader>Claim Costs Detail</DemoBoxHeader>

                        <DemoBoxContentWPie>

                        <DemoBoxContent50>
                          <DemoBoxRow>
                            <Catagory>
                              Medical
                            </Catagory><UnBoldCatagoryValue>$2,438,311.89</UnBoldCatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              RX
                            </Catagory><UnBoldCatagoryValue>$746,260.56</UnBoldCatagoryValue>
                          </DemoBoxRow>
                          <br/>
                          <SolidBar/>
                          <br/>
                          <DemoBoxRow>
                            <LossCatagory>
                              Gross Paid Claims
                            </LossCatagory><CatagoryValue>$3,184,572.45</CatagoryValue>
                          </DemoBoxRow>
                        </DemoBoxContent50>

                        <DemoBoxContent50>
                          <div id="PieChart2"></div>
                        </DemoBoxContent50>

                        </DemoBoxContentWPie>
                      </DemoBox57>

                      <DemoBox45>
                        <DemoBoxHeader>Enrollment Summary</DemoBoxHeader>
                        <DemoBoxContentWPie>
                        <DemoBoxContent50>
                          <div id="BarGraph2"></div>
                        </DemoBoxContent50>
                        <DemoBoxContent50Centered>
                          <DemoBoxRow>
                            <Catagory>
                              Employee Only
                            </Catagory><CatagoryValue>1430</CatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              Employee + Spouse
                            </Catagory><CatagoryValue>144</CatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              Employee + Child(ren)
                            </Catagory><CatagoryValue>269</CatagoryValue>
                          </DemoBoxRow>
                          <DemoBoxRow>
                            <Catagory>
                              Employee + Family
                            </Catagory><CatagoryValue>225</CatagoryValue>
                          </DemoBoxRow>
                        </DemoBoxContent50Centered>
                        </DemoBoxContentWPie>

                        <DemoBoxHeader>Adjusted Paid Claims</DemoBoxHeader>
                        <DemoBoxContentWPie>
                        <DemoBoxContent>
                          <div id="PlotGraph1"></div>
                        </DemoBoxContent>
                        </DemoBoxContentWPie>

                      </DemoBox45>

                    </DemoSection>
                    <br/>

                    <DemoSection>
                      <DemoBox50>
                        <DemoBoxHeader>Anthem $4,500 PEPM</DemoBoxHeader>
                        <DemoBoxContent>
                          <div id="MultiGraph1"></div>
                        </DemoBoxContent>
                      </DemoBox50>
                    </DemoSection>
                    <BottomMessage>
                      <br class="clear"/>
                      <br/>
                      <br/>
                      <h1>Printing Settings:</h1>
                      &nbsp;&nbsp;&nbsp;&nbsp; Margins:&nbsp;&nbsp;&nbsp;&nbsp; none,<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Orientation:&nbsp;&nbsp;&nbsp;&nbsp; Landscape,<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Background Graphics:&nbsp;&nbsp;&nbsp;&nbsp; Enabled <span>(https://its.yale.edu/how-to/article-printing-web-page-background-colors-and-images)</span><br/>
                      <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Refresh page to ensure no graphical errors prior to printing.<br/>
                      <br/>
                      <br/>
                    </BottomMessage>
                </Content>

            </AboutSection>

        );

    }
}
