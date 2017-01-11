import React from "react";

// require("./Contact.css");
import styled from 'styled-components';
const StyledH1 = styled.h1`
  position: relative;
`;
export default class Contact extends React.Component {
    render() {
        return (
            <StyledH1>Thank you for sending me a message, I look forward to talking to you soon.</StyledH1>
        );
    }
}
