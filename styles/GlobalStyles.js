//libraries
import { createGlobalStyle } from "styled-components";
//breakpoints
// import { breakpoints } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    :root{
        --font1:"Roboto", sans-serif;
        --font2:"Righteous", cursive;

        --col1:#001427;
        --col2: #F8F8F8;
        --col3:#8D0801;
        --col4:#EBEBEB;
        --col5:#D6D6D6;

        --max-width:140rem;
        --side-p:2rem;
        --gap:1.9rem;

        --mh:2.8rem;
        --smh:1.8rem;
        --t:1.6rem;
        --bt:1.8rem;
        --h:2.3rem;

    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
        background-color: var(--col2);
    }

    body{
        font-family:var(--font1);
        font-size: 1.6rem;
        color: var(--col1);
    }

    a[href^="tel"],a[href^="mail"]{
		color:inherit;
		text-decoration:none;
	}
`;
