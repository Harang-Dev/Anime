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
  background-color: #2a2a2a;  // 다크 그레이 톤
  color: #e0e0e0;  // 텍스트 색상
`;

const GradientLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.8) 100%);
  z-index: 1;  // ContentBox 위에 그라데이션 레이어가 오도록 설정
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
      <GradientLayer />
    </ContentWrapper>
    <StyledFooter>Footer</StyledFooter>
  </AppContainer>
);

export default App;
