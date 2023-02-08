import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.header`
	position: relative;
	max-width: 144rem;
	width: 100%;
	padding: 4rem 5.6rem 0;
	margin: 0 auto;

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 9.6rem;

		.logo {
			width: 4.8rem;
			height: 4.8rem;

			@media (max-width: ${theme.devices.mobile}) {
				width: 4rem;
				height: 4rem;
			}
		}

		.line {
			z-index: 1;
			max-width: 47.3rem;
			width: 100%;
			height: 0.1rem;
			transform: scaleX(0) translateX(6.3rem);
			background-color: rgba(255, 255, 255, 0.25);
			transform: scaleX(0);
			transition: 0.8s;

			@media (max-width: ${theme.devices.desktop}) {
				display: none;
			}

			&.animate {
				transform: scaleX(1) translateX(6.3rem);
			}
		}

		.burger-btn {
			display: none;
			z-index: 99;
			width: 2.4rem;
			border-top: 3px solid ${theme.colors.secondary};
			color: ${theme.colors.secondary};
			transition: 0.3s;

			&::before,
			&::after {
				content: '';
				position: relative;
				display: flex;
				width: inherit;
				height: 3px;
				margin-top: 6px;
				background-color: currentColor;
				transition: 0.3s;
			}

			&.is-open {
				border-top-color: transparent;

				&::before {
					transform: rotate(45deg);
				}

				&::after {
					transform: rotate(-45deg);
					top: -9px;
				}
			}

			@media (max-width: ${theme.devices.mobile}) {
				display: block;
			}
		}

		.nav {
			display: flex;
			flex: 1;
			justify-content: center;
			max-width: 75.5rem;
			height: inherit;
			padding: 0 5.6rem;
			margin-left: 3.2rem;
			background: rgba(255, 255, 255, 0.04);
			backdrop-filter: blur(40.7742px);
			transition: 0.8s;
			transform: scaleY(0);
			overflow-y: hidden;

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
						font-size: ${theme.sizes.font16};
						letter-spacing: 2.7px;
						color: ${theme.colors.target};
						font-family: ${theme.family.familyB};

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

							@media (max-width: ${theme.devices.mobile}) {
								display: none;
							}
						}

						&:hover::after {
							transform: scaleX(1);
						}

						span {
							font-size: ${theme.sizes.font16};
							font-weight: bold;
							margin-right: 1rem;

							@media (max-width: ${theme.devices.tablet}) {
								display: none;
							}

							@media (max-width: ${theme.devices.mobile}) {
								display: block;
							}
						}

						@media (max-width: ${theme.devices.tablet}) {
							font-size: ${theme.sizes.font14};
						}

						@media (max-width: ${theme.devices.mobile}) {
							height: auto;
							font-size: ${theme.sizes.font16};
						}
					}

					@media (max-width: ${theme.devices.mobile}) {
						height: auto;
					}
				}

				@media (max-width: ${theme.devices.tablet}) {
					gap: 3.6rem;
				}

				@media (max-width: ${theme.devices.mobile}) {
					flex-direction: column;
					height: auto;
				}
			}

			@media (max-width: ${theme.devices.tablet}) {
				position: absolute;
				right: 0;
				max-width: 45rem;
				width: 100%;
				padding: 0;
				margin-left: 0;
			}

			@media (max-width: ${theme.devices.mobile}) {
				display: none;
				justify-content: start;
				position: fixed;
				top: 0;
				bottom: 0;
				z-index: 2;
				width: 70vw;
				height: 100vh;
				padding-left: 3.2rem;
				padding-top: 12rem;
				transform: translateX(70vw) !important;
				opacity: 0;
				transition: 0.5s;

				&.active {
					display: flex;
				}

				&.mobile-animate {
					opacity: 1;
					transform: translateX(0) !important;
				}
			}

			&.animate {
				transform: scaleY(1);
			}
		}
	}

	@media (max-width: ${theme.devices.tablet}) {
		padding: 0 4rem;
	}

	@media (max-width: ${theme.devices.mobile}) {
		padding: 0 2.4rem;
	}
`
