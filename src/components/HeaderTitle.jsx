import React from "react"
import styled from 'styled-components';
//import EQCSS from "eqcss";

const StyledHeader = styled.header`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 25px;
  font-family: 'Anton';
`;
const BackgroundText = styled.h1`
  color: #111010;
  font-size: 4em;
  padding-left: 50px;
  white-space: nowrap;
`;
const TitlePop = styled.h2`
  left: 0;
  bottom: 0;
  color: #8a1315;
  font-size: 3em;
`;

export default (props) => {
    //EQCSS.process(PreRenderedEqcss)
    return(
        <StyledHeader style={props.centered ? {textAlign: "center"} : {}} className="LeftTest">
            <div style={props.centered ? {display: "inline-block", textAlign: "left"} : {}}>
                <BackgroundText><b>{props.background}</b></BackgroundText>
                <TitlePop><b>{props.title}</b></TitlePop>
            </div>
        </StyledHeader>
    );
}