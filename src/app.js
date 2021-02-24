import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

import Home from "./pages/home";

import Discover from "./pages/discover";

import "./css/app.css";

export default function App() {
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PageContainer>
        <Home />
        <ContentWrapper isNotMobile={isNotMobile}>
          <Switch>
            <Route path="/discover" component={Discover} />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const ContentWrapper = styled.div`
  ${(props) =>
    props.isNotMobile
      ? css`
          padding-left: 280px;
        `
      : css`
          padding: 0;
        `}
`;

const PageContainer = styled.div``;
