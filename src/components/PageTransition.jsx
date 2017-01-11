import React from "react";
import { browserHistory } from "react-router"

// import styles from "./PageTransition.css";





import styled from 'styled-components';

const Angles = styled.svg`
  fill: #8a1315;
  background-color: transparent;
  position: relative;
  float: left;
  width: 100%;
  z-index: -1;
  clear: both;
  margin-bottom: -250px;
  transition: margin-left 1s, margin-right 1s, margin-bottom 1s;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 150%;
  }

  @media (max-width: 767px) {
    width: 200%;
  }
`;
const RectOne = styled.rect`
  width: 507px;
  transition: x 1s ease-out;
  height: 22px;
  stroke: rgb(12,12,12);
  stroke-width: 1.8;
  transform: translate(30px, 90px) skewY(-47deg);
`;
const RectTwo = styled.rect`
  width: 507px;
  transition: x 1s ease-out;
  height: 22px;
  stroke: rgb(12,12,12);
  stroke-width: 1.8;
  transform: translate(-3px, 124px) skewY(-47deg);
  fill: #6a1112;
`;
const RectThree = styled.rect`
  width: 507px;
  transition: x 1s ease-out;
  height: 22px;
  stroke: rgb(12,12,12);
  stroke-width: 1.8;
  transform: translate(20px, 98px) skewY(-47deg);
  fill: #530f10;
`;
const RectFour = styled.rect`
  width: 507px;
  transition: x 1s ease-out;
  height: 22px;
  stroke: rgb(12,12,12);
  stroke-width: 1.8;
  transform: translate(57px, 57px) skewY(-47deg);
`;
const PageTransition = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
`;
export default class Projects extends React.Component {

    render() {
        browserHistory.listenBefore(function (location, callback) {
          var Container = document.getElementById("PageTransitionContainer");
          var obj = document.getElementById("PageTransitionSVG");
          Container.style.display = 'block';

          setTimeout(function(){
            for (var i = 0; i < obj.childNodes.length; i++) {
                var rect = obj.childNodes[i];
                rect.setAttribute('x', 800);
            }
          },1)
          setTimeout(function(){
            callback();
          },100)
          setTimeout(function(){
            Container.style.display = 'none';
            for (var i = 0; i < obj.childNodes.length; i++) {
                var rect = obj.childNodes[i];
                rect.setAttribute('x', -800);
            }
          },1000)
        });
        return (
          <PageTransition id="PageTransitionContainer">
            <Angles id="PageTransitionSVG" viewBox="0 0 400 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <RectOne x="-800" y="-125" height="65px" width="300px" data-divisible="1.5"></RectOne>
              <RectTwo x="-800" y="-100" height="65px" width="300px" data-divisible="2"></RectTwo>
              <RectThree  x="-800" y="-75" height="65px" width="300px" data-divisible="2.5"></RectThree>
              <RectFour x="-800" y="-50" height="65px" width="300px" data-divisible="3"></RectFour>
              <RectOne x="-800" y="-30" height="65px" width="300px" data-divisible="1.5"></RectOne>
              <RectTwo x="-800" y="-5" height="65px" width="300px" data-divisible="2"></RectTwo>
              <RectThree  x="-800" y="20" height="65px" width="300px" data-divisible="2.5"></RectThree>
              <RectFour x="-800" y="45" height="65px" width="300px" data-divisible="3"></RectFour>
              <RectOne x="-800" y="65" height="65px" width="300px" data-divisible="1.5"></RectOne>
              <RectTwo x="-800" y="90" height="65px" width="300px" data-divisible="2"></RectTwo>
              <RectThree  x="-800" y="115" height="65px" width="300px" data-divisible="2.5"></RectThree>
              <RectFour x="-800" y="140" height="65px" width="300px" data-divisible="3"></RectFour>
              <RectOne x="-800" y="160" height="65px" width="300px" data-divisible="1.5"></RectOne>
              <RectTwo x="-800" y="185" height="65px" width="300px" data-divisible="2"></RectTwo>
              <RectThree  x="-800" y="210" height="65px" width="300px" data-divisible="2.5"></RectThree>
              <RectFour x="-800" y="235" height="65px" width="300px" data-divisible="3"></RectFour>
              <RectOne x="-800" y="255" height="65px" width="300px" data-divisible="1.5"></RectOne>
              <RectTwo x="-800" y="280" height="65px" width="300px" data-divisible="2"></RectTwo>
              <RectThree  x="-800" y="305" height="65px" width="300px" data-divisible="2.5"></RectThree>
              <RectFour x="-800" y="330" height="65px" width="300px" data-divisible="3"></RectFour>
              <RectOne x="-800" y="350" height="65px" width="300px" data-divisible="1.5"></RectOne>
              <RectTwo x="-800" y="375" height="65px" width="300px" data-divisible="2"></RectTwo>
              <RectThree  x="-800" y="400" height="65px" width="300px" data-divisible="2.5"></RectThree>
              <RectFour x="-800" y="425" height="65px" width="300px" data-divisible="3"></RectFour>
              <RectOne x="-800" y="445" height="65px" width="300px" data-divisible="1.5"></RectOne>
              <RectTwo x="-800" y="470" height="65px" width="300px" data-divisible="2"></RectTwo>
              <RectThree  x="-800" y="495" height="65px" width="300px" data-divisible="2.5"></RectThree>
              <RectFour x="-800" y="520" height="65px" width="300px" data-divisible="3"></RectFour>
            </Angles>
          </PageTransition>
        );
    }
}
