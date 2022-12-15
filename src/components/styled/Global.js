import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Poppins:wght@200;300;500;700&display=swap');
    
    *{
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: ${({theme})=>theme.colors.body};
    }
`;
export default GlobalStyles;