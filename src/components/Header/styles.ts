import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.header`
	margin-top: 4rem;

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 9.6rem;

		.line {
			z-index: 1;
			width: 47.3rem;
			height: 0.1rem;
			transform: translateX(6.3rem);
			background-color: rgba(255, 255, 255, 0.25);
		}

		nav {
			display: flex;
			justify-content: center;
			flex: 1;
			height: inherit;
			margin-left: 3.2rem;
			background: rgba(255, 255, 255, 0.04);
			backdrop-filter: blur(40.7742px);

			ul {
				display: flex;
				gap: 0 4.8rem;
				height: inherit;

				li {
					height: inherit;

					a {
						position: relative;
						display: flex;
						align-items: center;
						height: inherit;
						font-size: 1.6rem;
						letter-spacing: 2.7px;
						color: ${theme.colors.target};
						font-family: 'Barlow Condensed';

						&::after {
							content: '';
							position: absolute;
							bottom: 0;
							width: 100%;
							height: 3px;
							transform: scaleX(0);
							background-color: rgba(255, 255, 255, 50%);
							transition: 0.3s;
						}

						&.active::after {
							background-color: ${theme.colors.target};
							transform: scaleX(1);
						}

						&:hover::after {
							transform: scaleX(1);
						}

						span {
							font-size: 1.6rem;
							font-weight: bold;
							margin-right: 1rem;
						}
					}
				}
			}
		}
	}
`
