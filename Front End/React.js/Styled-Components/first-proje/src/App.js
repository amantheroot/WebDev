import React, { Component } from "react";
import styled, { ThemeProvider, keyframes, css } from "styled-components";
import Para from "./components/para";
import AnotherPara from "./components/anotherpara";

class App extends Component {
  render() {
    const App = styled.div`
      text-align: center;
      font-family: sans-serif;
    `;

    const FirstWrapper = styled.div`
      background-color: black;
      padding: 5em;
    `;
    const Title = styled.h1`
      color: pink;
    `;

    const ColoredHead = styled.h1`
      color: ${props => props.color};
    `;
    const IsRed = styled.h1`
      color: ${props => (props.isred ? "red" : "blue")};
    `;

    const NormalPara = styled.p`
      background-color: pink;
      font-weight: bold;
      font-size: 3em;
      padding: 2em;
    `;
    const DiffPara = styled(NormalPara)`
      background-color: black;
      color: pink;
    `;

    const AmILink = styled.h1`
      color: blue;
      text-decoration: none;
    `;
    const Really = styled.button`
      font-size: 1em;
    `;

    const NeedClass = ({ className, children }) => <Title>{children}</Title>;

    const StyledHead = styled.h1`
      color: magenta;
      text-decoration: line-through;
    `;
    const Head = ({ children }) => <StyledHead>{children}</StyledHead>;

    const Thing = styled.div`
      color: red;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
      font-size: 5em;
      :hover {
        color: blue;
        cursor: pointer;
      }
      ::after {
        content: "aside";
      }
    `;

    const AnotherThings = styled(Thing)`
      font-family: sans-serif;
      font-size: 2em;
      :hover {
        color: red;
      }
      ::after {
        content: "";
      }
      & & {
        color: red;
      }
      & > & {
        color: green;
      }
      & + & {
        color: blue;
      }
      & ~ & {
        color: cyan;
      }
      .outer & {
        color: yellow;
      }
      &.inner {
        color: magenta;
      }
      .inside {
        color: black;
      }
    `;

    const Iamspecific = styled.h1`
      color: red;
      && {
        text-decoration: line-through;
      }
    `;
    const Bespecific = styled.div`
      h1 {
        color: blue;
        text-decoration: none;
      }
    `;

    const Checkit = styled.input.attrs({
      type: "text",
      value: "Whatever?!",

      fontSize: props => props.fontSize || "1em"
    })`
      font-size: ${props => props.fontSize};
    `;

    const anime = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;
    const Animated = styled.div`
      animation: ${anime} 1s linear infinite;
      padding: 2em;
      background-color: yellow;
      color: black;
      font-weight: bolder;
      font-size: 2em;
      width: 100px;
    `;

    const ThemedButton = styled.button`
      padding: 1em;
      border: 3px solid ${props => props.theme.mainColor};
      color: ${props => props.theme.secondaryColor};
      font-size: ${props => props.theme.size};
      background-color: ${props => props.theme.back || "transparent"};
      :focus {
        outline: none;
      }
    `;
    ThemedButton.defaultProps = {
      theme: {
        mainColor: "green",
        secondaryColor: "blue",
        size: "2em"
      }
    };
    const theme = {
      mainColor: "pink",
      secondaryColor: "chocolate",
      size: "3em",
      back: "red"
    };

    const Button = styled.button`
      color: ${props => props.theme.fg};
      border: 2px solid ${props => props.theme.fg};
      background: ${props => props.theme.bg};

      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border-radius: 3px;
    `;
    const innotheme = {
      fg: "black",
      bg: "white"
    };

    const sizes = {
      desktop: 992,
      tablet: 768,
      phone: 576
    };
    const media = Object.keys(sizes).reduce((acc, label) => {
      acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
          ${css(...args)}
        }
      `;

      return acc;
    }, {});
    const MediaSucks = styled.div`
      color: green;
      padding: 3em;
      font-size: 2em;
      font-weight: bold;

      background-color: skyblue;
      ${media.desktop`background-color: skyblue;`}
      ${media.tablet`background-color: red;`}
      ${media.phone`background-color: green;`}
    `;

    const Hoverme = styled.div`
      background-color: pink;
      color: chocolate;
      font-size: 2em;
      padding: 2em;
    `;
    const NoDont = styled.p`
      transition: color 1s;
      ${Hoverme}:hover & {
        color: green;
      }
    `;

    const Wrapper = styled.div`
      background-color: pink;
      color: chocolate;
      padding: 4em;
      font-size: 4em;
    `;
    const StyledAnotherPara = styled(AnotherPara)`
      color: red;
      background: green;
      padding: 2em;
      font-size: 2em;
    `;
    return (
      <App>
        <FirstWrapper>
          <Title>The Title</Title>
        </FirstWrapper>

        <ColoredHead color="red">Red</ColoredHead>
        <ColoredHead color="green">Green</ColoredHead>
        <ColoredHead color="blue">Blue</ColoredHead>
        <IsRed isred>Is it red?</IsRed>

        <NormalPara>I'm no different</NormalPara>
        <DiffPara>But I am</DiffPara>

        <AmILink>Am I?</AmILink>
        <AmILink as="a" href="#">
          Am I?
        </AmILink>
        <AmILink as="a" href="#">
          Am I?
        </AmILink>
        <NormalPara as={DiffPara}>What I am?</NormalPara>
        <Really as={DiffPara}>Really?</Really>

        <NeedClass>I need What?</NeedClass>

        <Head>I'm Dead</Head>

        <Thing>Serif</Thing>

        <div className="contain">
          <AnotherThings>
            <AnotherThings>& &</AnotherThings>
            <AnotherThings>& &</AnotherThings>
            <AnotherThings>& &</AnotherThings>
          </AnotherThings>
        </div>

        <div className="contain">
          <AnotherThings>
            <AnotherThings>
              & > & <AnotherThings>ception</AnotherThings>
            </AnotherThings>
          </AnotherThings>
        </div>

        <div className="contain">
          <AnotherThings>first</AnotherThings>
          <AnotherThings>& + &</AnotherThings>
          <AnotherThings>last</AnotherThings>
        </div>

        <div className="contain">
          <AnotherThings>& ~ &</AnotherThings>
          <AnotherThings>& ~ &</AnotherThings>
          <AnotherThings>& ~ &</AnotherThings>
          <AnotherThings>& ~ &</AnotherThings>
          <AnotherThings>& ~ &</AnotherThings>
        </div>

        <div className="contain">
          <div className="outer">
            <AnotherThings>.outer &</AnotherThings>
          </div>
        </div>

        <div className="contain">
          <AnotherThings className="inner">&.inner</AnotherThings>
        </div>

        <div className="contain">
          <AnotherThings>
            .inside
            <div className="inside">Inside</div>
          </AnotherThings>
        </div>

        <Bespecific>
          <Iamspecific>Right?</Iamspecific>
        </Bespecific>

        <Checkit />
        <Checkit fontSize="4em" />

        <Animated>I'll throw up</Animated>

        <ThemedButton>Howdy?</ThemedButton>
        <ThemeProvider theme={theme}>
          <ThemedButton>Mate?</ThemedButton>
        </ThemeProvider>

        <Button theme={innotheme}>I'm Innocent</Button>
        <Button theme={{ fg: "red", bg: "blue" }}>He's Not</Button>

        <MediaSucks>Am I Right?</MediaSucks>

        <Hoverme>
          <NoDont>NOooooooooooooooooooooooooooo.........</NoDont>
        </Hoverme>

        <Wrapper>
          <Para />
        </Wrapper>
        <StyledAnotherPara />
      </App>
    );
  }
}

export default App;
