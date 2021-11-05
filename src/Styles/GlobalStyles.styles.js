import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-pallets-blue: #7E94D9;
        --color-pallets-blue-light: #A3B0D9;
        --color-pallets-yellow: #F2E96B;
        --color-pallets-cream: #F2E9BB;
        --color-pallets-black: #0D0D0D;
        --color-background : rgba(0,0,0,0.5);
        --color-white: #fff;
        --color-alert: red;

        font-size: 62.5%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        background-color: var(--color-pallets-cream)
    }

`;

