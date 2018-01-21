import React from 'react';
import { Helmet } from "react-helmet";
import Angles from "../components/Angles";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
    display: table;
    height: 83vh;
    width: 100%;
`;
const NotFoundContent = styled.div`
    display: table-cell;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    font-size: 2.5em;
`;

export default () => {
    return (
        <div>
            <Helmet>
                <title>Dirtyredz - Not Found</title>
            </Helmet>
            <Angles/>
            <NotFoundWrapper>
              <NotFoundContent>
                <h1>404</h1>
                <h2>Page not found!</h2>
                <p>
                  <Link to="/">Go back to the main page</Link>
                </p>
              </NotFoundContent>
            </NotFoundWrapper>
        </div>

    );
}
