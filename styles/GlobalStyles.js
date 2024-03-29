//libraries
import { createGlobalStyle } from 'styled-components'
import { breakpoints } from '.'

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    :root{
        --font1:"Barlow", sans-serif;
        
        --col1:#185E64;
        --col2: #F8F8F8;//mb remove
        --col3:#C3562D;
        --col4:#EBEBEB;
        --col5:#D6D6D6;
        --col-bg:#F6F4F0;
        --col-b:#020202;

        --fw-light:300;
        --fw-regular:400;
        --fw-medium:500;
        --fw-bold:600;

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
        background-image: url("/assets/pattern.png");
    }

    body{
        font-family:var(--font1);
        font-size: 1.6rem;
        color: var(--col1);
    }

    //removing border-radius from gallery image
    .media-image{
        border-radius: 0 !important;
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

            --gap:3rem;
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
`
