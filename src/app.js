import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Menu from "./pages/home";

import Discover from "./pages/discover";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <PageContainer>
          <Menu />
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} {...this.props} />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}

const ContentWrapper = styled.main`
  padding-left: 280px;
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
