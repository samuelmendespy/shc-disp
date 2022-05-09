import { createGlobalStyle } from 'styled-components'
import WorldImg from '../../assets/images/world.jpg'


const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${WorldImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  #ascard1, #ascard2, #ascard3, #ascard4, #ascard5{
    background-color:#2c050573;
    color:#ffe300;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }

`

export default globalStyle