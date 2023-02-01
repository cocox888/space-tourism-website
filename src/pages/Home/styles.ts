import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	display: flex;
	flex: 1;
	padding: 11rem 0;

	.content {
		display: flex;
		flex: 1;
		align-items: center;

		@media (max-width: ${theme.devices.tablet}) {
			flex-direction: column;
			align-items: center;
		}

		.text-area {
			max-width: 44.4rem;
			width: 100%;

			h1 {
				margin: 2.4rem 0 1.8rem 0;

				@media (max-width: ${theme.devices.tablet}) {
					font-size: ${theme.sizes.font20};
				}

				@media (max-width: ${theme.devices.mobile}) {
					font-size: ${theme.sizes.font16};
				}
			}

			h2 {
				@media (max-width: ${theme.devices.mobile}) {
					font-size: ${theme.sizes.font80};
				}
			}

			@media (max-width: ${theme.devices.tablet}) {
				text-align: center;
			}
		}

		.button-area {
			display: flex;
			justify-content: end;
			align-items: flex-end;
			flex: 1;

			a {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 27.4rem;
				height: 27.4rem;
				font-family: ${theme.family.familyA};
				font-size: ${theme.sizes.font32};
				border-radius: 50%;
				color: ${theme.colors.primary};
				background-color: ${theme.colors.target};
				letter-spacing: 2px;
				transition: all 0.3s;

				&:hover {
					box-shadow: 0 0 0 83px rgb(255, 255, 255, 0.1);
				}

				@media (max-width: ${theme.devices.tablet}) {
					width: 24.2rem;
					height: 24.2rem;
				}

				@media (max-width: ${theme.devices.mobile}) {
					width: 15rem;
					height: 15rem;
					font-size: 2rem;
				}
			}

			@media (max-width: ${theme.devices.mobile}) {
				align-items: flex-start;
				margin-top: 8rem;
			}
		}
	}

	@media (max-width: ${theme.devices.mobile}) {
		padding: 2.4rem 0;
	}
`
