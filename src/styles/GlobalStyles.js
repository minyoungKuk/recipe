import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  label {
    display: block;
    margin-bottom: 15px;
    font-size: 20px;
    text-align: left;
  }

  input {
    width: 100%;
    height: 60px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #cecece;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 25px;

    &:focus {
      outline-color: #02024a;
    }
  }
`;

export default GlobalStyle;
