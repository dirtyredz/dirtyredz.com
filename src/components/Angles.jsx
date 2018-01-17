import React from "react";
import styled from 'styled-components';

const Aside = styled.aside`
  height: calc(100% - 50px);
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`;
const ScrollBars = styled.svg`
  fill: #8a1315;
  background-color: transparent;
  position: relative;
  float: left;
  width: 500px;
  z-index: -1;
  clear: both;
  margin-bottom: -250px;
  transition: margin-left 1s, margin-right 1s, margin-bottom 1s;
  @media (max-width: 789px) {
    margin-left: -353px;
    margin-bottom: -90px;
  }
  @media (min-width: 780px) and (max-width: 1099px) {
    margin-left: -297px;
    margin-bottom: -250px;
  }
  @media (min-width: 1100px) and (max-width: 1299px) {
    margin-left: -171px;
    margin-bottom: -250px;
  }
  @media (min-width: 1300px) and (max-width: 1599px) {
    margin-left: -82px;
    margin-bottom: -250px;
  }
  & rect:nth-child(2){
    opacity: 0.75;
  }
  & rect:nth-child(3){
    opacity: 0.57;
  }
`;
const ScrollBarsRight = styled.svg`
  fill: #8a1315;
  background-color: transparent;
  position: relative;
  width: 500px;
  z-index: -1;
  clear: both;
  margin-bottom: -250px;
  transition: margin-left 1s, margin-right 1s, margin-bottom 1s;
  right: 0;
  transform: scaleX(-1);
  -webkit-filter: FlipH;
  filter: FlipH;
  -ms-filter: "FlipH";
  float: right;
  @media (max-width: 789px) {
    margin-right: -353px;
  }

  @media (min-width: 780px) and (max-width: 1099px) {
    margin-right: -325px;
  }

  @media (min-width: 1100px) and (max-width: 1299px) {
    margin-right: -262px;
  }

  @media (min-width: 1300px) and (max-width: 1599px) {
    margin-right: -195px;
  }
  & rect:nth-child(2){
    opacity: 0.75;
  }
  & rect:nth-child(3){
    opacity: 0.57;
  }
`;
const Rect = styled.rect`
  transform: translate(-340px, 363.8px) skewY(-47deg);
  width: 300px;
  transition: transform 1s;
  height: 65px;
`;
export default class Angles extends React.Component {
    AnglesScroll(){
        var obj = document.getElementsByClassName("Angles__ScrollBars__DR16");
        //Loop through all SVG's
        for (var i = 0; i < obj.length; i++) {
          //Get top of SVG
          var SvgTop = obj[i].getBoundingClientRect().top + document.body.scrollTop - 200;
          //If Scroll Position is Greater then SVG top
          if (window.scrollY > SvgTop) {
              //Get all Angles inside SVG
              var obj2 = obj[i].getElementsByTagName("rect");
              //Loop through Angles
              for (var x = 0; x < obj2.length; x++) {
                var CurrentObj = obj2[x];
                var adjust = window.scrollY - SvgTop;
                adjust = adjust / CurrentObj.getAttribute('data-divisible');
                var intY = adjust * 1.07;
                var intX = -Math.abs(adjust);
                this.SetAngle(CurrentObj,intX,intY);
              }
          }
        }
    }
    SetAngle(Element,X,Y){
      let transform = "translate("+X+"px, "+Y+"px) skewY(-47deg)";
      Element.style.transform = transform;
    }
    ResetAngle(obj,AngleClass){
        for (let i = 0; i < obj.length; i++) {
          this.SetAngle(obj[i].getElementsByClassName(AngleClass)[0],0,0)
        }
    }
    ResetAllAngles(SvgClass){
        let obj = document.getElementsByClassName(SvgClass);
        this.ResetAngle(obj,"Angles__One__DR16")
        setTimeout(this.ResetAngle(obj,"Angles__Two__DR16"),100)
        setTimeout(this.ResetAngle(obj,"Angles__Three__DR16"),200)
        setTimeout(this.ResetAngle(obj,"Angles__Four__DR16"),300)
    }
    componentDidMount(){
        SVGElement.prototype.getElementsByClassName = function(search) {
            return this.querySelectorAll("." + search)
        }
        window.addEventListener('scroll', this.AnglesScroll.bind(this));

        //Setting Timeout for 1ms allows transition effects to work.
        setTimeout(this.ResetAllAngles("Angles__ScrollBars__DR16"), 1);
    }
    render() {
        return (
          <Aside>
              <ScrollBars className="Angles__ScrollBars__DR16" viewBox="0 0 400 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <Rect className="Angles__One__DR16" x="30" y="390" height="65px" width="300px" data-divisible="1.5"></Rect>
                  <Rect className="Angles__Two__DR16" x="-25" y="460" height="65px" width="300px" data-divisible="2"></Rect>
                  <Rect className="Angles__Three__DR16" x="-5" y="530" height="65px" width="300px" data-divisible="2.5"></Rect>
                  <Rect className="Angles__Four__DR16" x="40" y="600" height="65px" width="300px" data-divisible="3"></Rect>
              </ScrollBars>
              <ScrollBarsRight className="Angles__ScrollBars__DR16" viewBox="0 0 400 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <Rect className="Angles__One__DR16" x="30" y="390" height="65px" width="300px" data-divisible="1.5"></Rect>
                  <Rect className="Angles__Two__DR16" x="-25" y="460" height="65px" width="300px" data-divisible="2"></Rect>
                  <Rect className="Angles__Three__DR16" x="-5" y="530" height="65px" width="300px" data-divisible="2.5"></Rect>
                  <Rect className="Angles__Four__DR16" x="40" y="600" height="65px" width="300px" data-divisible="3"></Rect>
              </ScrollBarsRight>
              <ScrollBars className="Angles__ScrollBars__DR16" viewBox="0 0 400 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <Rect className="Angles__One__DR16" x="30" y="390" height="65px" width="300px" data-divisible="1.5"></Rect>
                  <Rect className="Angles__Two__DR16" x="-25" y="460" height="65px" width="300px" data-divisible="2"></Rect>
                  <Rect className="Angles__Three__DR16" x="-5" y="530" height="65px" width="300px" data-divisible="2.5"></Rect>
                  <Rect className="Angles__Four__DR16" x="40" y="600" height="65px" width="300px" data-divisible="3"></Rect>
              </ScrollBars>
              <ScrollBarsRight className="Angles__ScrollBars__DR16" viewBox="0 0 400 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <Rect className="Angles__One__DR16" x="30" y="390" height="65px" width="300px" data-divisible="1.5"></Rect>
                  <Rect className="Angles__Two__DR16" x="-25" y="460" height="65px" width="300px" data-divisible="2"></Rect>
                  <Rect className="Angles__Three__DR16" x="-5" y="530" height="65px" width="300px" data-divisible="2.5"></Rect>
                  <Rect className="Angles__Four__DR16" x="40" y="600" height="65px" width="300px" data-divisible="3"></Rect>
              </ScrollBarsRight>
          </Aside>
        );
    }
}
