import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import NavBar from '../components/Layout/NavBar';
import ContentBox from '../components/ContentBox';

const { Header, Content, Footer } = Layout;

const AppContainer = styled(Layout)`
  background-color: #1a1a1a;  // 어두운 배경색
  color: #e0e0e0;  // 밝은 텍스트 색상
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  text-align: center;
  color: #fff;
  padding-inline: 48px;
  line-height: 64px;
  background-color: transparent;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledContent = styled(Content)`
  width: 100%;
  height: 100%;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  color: #b0b0b0;
  background-color: #121212;  // 매우 어두운 배경
  line-height: 64px;
  padding: 0;
`;

const App = () => (
  <AppContainer>
    <StyledHeader><NavBar /></StyledHeader>
    <ContentWrapper>
      <StyledContent>
        <ContentBox />
      </StyledContent>
    </ContentWrapper>
    <StyledFooter>Footer</StyledFooter>
  </AppContainer>
);

export default App;
