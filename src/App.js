import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import { device } from "./cssInJs/breakpoints";
import { colors } from "./cssInJs/colors";
import MediaQuery from "react-responsive";
import Button from "./components/Button";
import Form from "./components/Form";
import Card from "./components/Card";
import Logo from "./components/Logo";

import bgMobile from "../src/assets/mobile/image-host.jpg";
import bgTablet from "../src/assets/tablet/image-host.jpg";
import bgDesktop from "../src/assets/desktop/image-host.jpg";
import dots from "../src/assets/desktop/bg-pattern-dots.svg";

// const Page = styled.div `
//   margin: auto;
//   font-family: "sans-serif";
//   text-align: center;
//
//   @media ${device.laptop} {
//     max-width: 800px;
//   }
//
//   @media ${device.desktop} {
//     max-width: 1400px;
//   }
// `;

const Body = styled.body`
  background-color: ${colors.dark};
  width: 100vw;
  height: 100vh;
  display: grid;

  position: relative;

  @media ${device.mobile} {
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-size: 100vw;
    background-blend-mode: soft-light;
  }

  @media ${device.tablet} {
    background-image: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: right top;
  }

  @media ${device.laptop} {
    background-image: none;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.mobile} {
    width: 100vw;
    justify-content: center;
  }

  @media ${device.tablet} {
    grid-template-rows: auto auto;
    margin-top: 50px;
    margin-left: 30px;
  }

  @media ${device.laptop} {
    margin-left: 165px;

    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`;

const MainCard = styled(Card)`
  @media ${device.laptop} {
    position: absolute;
    bottom: 0px;
  }
`;

const Background = styled.img`
  @media ${device.tablet} {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
`;

const Dots = styled.img`
  @media ${device.tablet} {
    position: absolute;
    bottom: 0px;
  }
  @media ${device.laptop} {
    position: absolute;
    right: 0;
    bottom: 78px;
  }
`;

const App = () => {
  return (
    <Body>
      <Container>
        <Logo />
        <MainCard
          title="Publish your podcasts everywhere."
          desc="Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!"
          btnText="Request Access"
          placeholder="Email Address"
        />
      </Container>
      <MediaQuery query={device.tablet}>
        <Dots src={dots} alt="dots" />
      </MediaQuery>
      <MediaQuery query={device.laptop}>
        <Dots src={dots} alt="dots" />
      </MediaQuery>
    </Body>
  );
};

export default App;
