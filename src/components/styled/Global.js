import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Poppins:wght@200;300;500;700&display=swap');
    
    *{
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: system-ui;
    }
    body{
        background-color: ${({theme})=>theme.colors.body};
    }
    a{
        text-decoration:none;
    }
    
    /* width */
::-webkit-scrollbar {
  width: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(22 28 41/33%);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #807ae8;
    border: 4px solid #030217;
    border-radius: 0.5em;
}

`;
export default GlobalStyles;
