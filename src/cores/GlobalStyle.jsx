import { createGlobalStyle } from "styled-components";
import iransansFont from "../assets/fonts/FontsFree-Net-ir_sans.ttf";

const GlobalStyle = createGlobalStyle(
  () => `
    @font-face {
        src: url("${iransansFont}");
        font-family: iransans;
    }

    * {
        font-family: iransans;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #eee;
        direction: rtl;
    }
`
);

export default GlobalStyle;
