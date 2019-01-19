import styled from "styled-components";
import store from "../../../stores/pong/store";

const px = l => l + "px";

let Width = store.width;

const Container = styled.div`
  .game {
    width: 100%;
    height: 100vh;
    background-color: black;
    position: relative;
    overflow: hidden;
    color: white;
    .gamewontext {
      background-color: transparent;
      position: absolute;
      height: 100vh;
      width: 50%;
      text-align: center;
      font-size: 4em;
      display: flex;
      justify-content: center;
      flex-flow: column;
      opacity: 0;
    }
    & > h1 {
      position: absolute;
      width: 100%;
      text-align: center;
      code {
        padding: ${Width * 4 + "px"};
        font-size: ${Width / 5 + "em"};
      }
    }
    & div {
      position: absolute;
      background-color: white;
    }
    .middash {
      height: 100vh;
      width: ${px(Width / 5)};
      background-color: transparent;
      background-image: linear-gradient(
        to bottom,
        #fff 60%,
        rgba(0, 0, 0, 0) 0%
      );
      background-position: left;
      background-size: ${px(Width / 5)} ${px(13 * (Width / 5))};
      background-repeat: repeat-y;
      left: 50%;
      margin-left: ${px(-(Width / 5) / 2)};
    }
    .bars {
      width: ${px(Width)};
      height: ${px(Width * 6)};
      margin: ${px(-Width * 3)} ${px(-Width / 2)} 0;
    }
    .ball {
      width: ${px(Width)};
      height: ${px(Width)};
      margin: ${px(-Width / 2)} 0 0 ${px(-Width / 2)};
    }
  }
`;

export default Container;
