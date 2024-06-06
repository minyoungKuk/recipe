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

  textarea {
    width: 100%;
    min-height: 120px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #cecece;
    border-radius: 5px;

    font-family: "Noto Sans KR";

    &:focus {
      outline-color: #02024a;
    }
  }

  .main {
  width: 1080px;
  margin: auto;

  display: flex;
  justify-content: center;

  /* background-color: skyblue; */
  }

  .wrapper {
  width: 720px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  /* background-color: yellow; */
  }

  .modal {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    max-width: 360px;
    width: 100%;

    p {
      padding-bottom: 40px;
    }
  }

  .modal-box {
    padding: 20px 0 40px 0;
  }

  .modal-btn-wrap {
    display: flex;
    justify-content: space-around;
  }
`;

export default GlobalStyle;
