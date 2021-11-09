//libraries
import { createGlobalStyle } from "styled-components";
import { breakpoints } from ".";
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

        --max-width:120rem;
        --side-p:2rem;
        --top-p:4rem;
        --gap:1.9rem;

        --mh:calc(2.8rem / var(--divider));
        --smh:calc(1.8rem / var(--divider));
        --t:calc(1.6rem / var(--divider));
        --bt:calc(1.8rem / var(--divider));
        --h:calc(2.3rem / var(--divider));

        --divider:1;

    }

    html{
        font-size: 62.5%;
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

    @media ${breakpoints.mobileM}{
        :root{
            --divider:.88;
            --side-p:4rem;
        }
    }

    @media ${breakpoints.tabletS}{
        :root{
            --side-p:8rem;
        }
    }

    @media ${breakpoints.desktopS}{
        :root{
            --mh: calc(3.6rem / var(--divider));
            --smh: calc(2rem / var(--divider));
            --t: calc(1.6rem / var(--divider));
            --bt: calc(2.3rem / var(--divider));
            --h: calc(3.3rem / var(--divider));

            --gap:6rem;
            --side-p:14rem;
            --top-p:10rem;
        }
    }

    @media ${breakpoints.desktopX}{
       :root{
            --mh: calc(5rem / var(--divider));
            --smh: calc(2.4rem / var(--divider));
            --h: calc(4rem / var(--divider));
            --t: calc(1.8rem / var(--divider));
            --bt: calc(2.5rem / var(--divider));
       }
    }
`;
