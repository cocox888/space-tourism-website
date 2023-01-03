import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        width: 100%;
		background-image: url('./assets/home/background-home-desktop.jpg');
		background-size: cover;
    }

    img {
        width: 100%;
    }

    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

	h1,h2,h3,h4,h5,h6 {
		font-weight: normal;
		font-style: normal;
	}

    a {
        text-decoration: none;
    }

    input {
        border: 0;
        outline: 0;
        background-color: transparent;
    }
`
