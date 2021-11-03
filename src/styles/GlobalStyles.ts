import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        background-color: #040714;
        color: #f9f9f9;

        font-family: Avenir-Roman, sans-serif;
    }

    a{
        color: #f9f9f9;
        text-decoration: none;
    }

    @media only screen and (min-width: 768px){
        font-size: 16px;
    }

    @media only screen and (min-width: 480px) and (max-width: 768px) {
        body{
            font-size: 15px;
        }
    }

    @media only screen and (max-width: 479px){
        body{
            font-size: 14px;
        }
    }
`