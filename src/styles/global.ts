import { createGlobalStyle } from 'styled-components'
import { theme } from './variables'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		font-size: 62.5%;
    }

	[data-anime] {
		opacity: 0;
	}

	[data-anime='top'] {
		transform: translateY(-4rem);
	}

	[data-anime='bottom'] {
		transform: translateY(4rem);
	}

	[data-anime='left'] {
		transform: translateX(-4rem);
	}

	[data-anime='right'] {
		transform: translateX(4rem);
	}

	[data-anime].animate {
		opacity: 1;
		transform: translate(0);
		transition: 0.8s;
	}

    body {
		display: flex;
        min-height: 100vh;
        width: 100%;
		background-color: #000;
		background-image: url('./assets/home/background-home-desktop.jpg');
		background-size: cover;
		transition: background-image 0.3s;

		@media (max-width: ${theme.devices.tablet}) {
			background-image: url('./assets/home/background-home-tablet.jpg');
		}

		@media (max-width: ${theme.devices.mobile}) {
			background-image: url('./assets/home/background-home-mobile.jpg');
		}
    }

	#root {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	body.bg-destination {
		background-image: url('./assets/destination/background-destination-desktop.jpg');

		@media (max-width: ${theme.devices.tablet}) {
			background-image: url('./assets/destination/background-destination-tablet.jpg');
		}

		@media (max-width: ${theme.devices.mobile}) {
			background-image: url('./assets/destination/background-destination-mobile.jpg');
		}
	}

	body.bg-crew {
		background-image: url('./assets/crew/background-crew-desktop.jpg');

		@media (max-width: ${theme.devices.tablet}) {
			background-image: url('./assets/crew/background-crew-tablet.jpg');
		}

		@media (max-width: ${theme.devices.mobile}) {
			background-image: url('./assets/crew/background-crew-mobile.jpg');
		}
	}

	body.bg-technology {
		background-image: url('./assets/technology/background-technology-desktop.jpg');

		@media (max-width: ${theme.devices.tablet}) {
			background-image: url('./assets/technology/background-technology-tablet.jpg');
		}

		@media (max-width: ${theme.devices.mobile}) {
			background-image: url('./assets/technology/background-technology-mobile.jpg');
		}
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
