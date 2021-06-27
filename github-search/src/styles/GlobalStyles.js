import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: Roboto, sans-serif;
  }

  button{
    cursor: pointer;

    &:hover{
      background: #9E9E9E;
    }
  }

  input{
    &:focus{
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: none;
    }
  }

`