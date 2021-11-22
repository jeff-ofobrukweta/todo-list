import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 :root{
    --accent-color: #f36b74;;
    --accent-color-active: #ed7c83d4;
    --text-color: #ffffff;
    --background-color: #49486c;
    --list-container-background: #232323;
    --error-color: #ff4d4d;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body, textarea, input, button {
    color: var(--text-color);
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--background-color);
  }

  html, body, #root {
    height: 100%;
  }
`
