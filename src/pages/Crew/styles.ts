import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-top: 7.5rem;
	overflow: hidden;

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;

		h1 {
			@media (max-width: ${theme.devices.tablet}) {
				font-size: ${theme.sizes.font20};
			}

			@media (max-width: ${theme.devices.mobile}) {
				font-size: ${theme.sizes.font16};
				text-align: center;
			}
		}

		.main {
			display: flex;
			flex: 1;
			position: relative;

			.img-area--mobile {
				display: none;
				width: 100%;
				height: 26rem;
				border-bottom: 1px solid #979797;
				margin-top: 3.2rem;

				img {
					max-width: 17.7rem;
				}

				@media (max-width: ${theme.devices.mobile}) {
					display: flex;
					justify-content: center;
					align-items: flex-end;
				}
			}

			.info {
				display: flex;
				flex-direction: column;
				flex: 1;

				.text-area {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					height: 25rem;
					margin-top: 15.5rem;

					h2 {
						opacity: 50%;

						@media (max-width: ${theme.devices.tablet}) {
							font-size: ${theme.sizes.font24};
						}

						@media (max-width: ${theme.devices.mobile}) {
							font-size: ${theme.sizes.font16};
						}
					}

					h3 {
						@media (max-width: ${theme.devices.tablet}) {
							font-size: ${theme.sizes.font40};
						}

						@media (max-width: ${theme.devices.mobile}) {
							font-size: ${theme.sizes.font24};
						}
					}

					p {
						max-width: 44rem;

						@media (max-width: ${theme.devices.tablet}) {
							max-width: none;
						}
					}

					@media (max-width: ${theme.devices.tablet}) {
						margin-top: 6.4rem;
						height: auto;
					}
				}

				.nav,
				.nav-mobile {
					margin-top: 15rem;

					ul {
						display: flex;
						gap: 2.2rem;

						li {
							button {
								width: 1.5rem;
								height: 1.5rem;
								border-radius: 50%;
								background-color: ${theme.colors.target};
								opacity: 17.44%;
								transition: 0.3s;

								&:hover {
									opacity: 50%;
								}

								&.active {
									opacity: 100%;
								}

								@media (max-width: ${theme.devices.tablet}) {
									width: 1rem;
									height: 1rem;
								}
							}
						}

						@media (max-width: ${theme.devices.tablet}) {
							gap: 1.6rem;
						}
					}

					@media (max-width: ${theme.devices.tablet}) {
						margin-top: 4rem;
					}
				}

				.nav {
					@media (max-width: ${theme.devices.mobile}) {
						display: none;
					}
				}

				.nav-mobile {
					display: none;

					@media (max-width: ${theme.devices.mobile}) {
						display: flex;
					}
				}

				@media (max-width: ${theme.devices.tablet}) {
					align-items: center;
					flex: 1;
				}
			}

			.img-area {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				margin-right: -3rem;

				img {
					max-height: 64rem;
					@media (max-width: ${theme.devices.tablet}) {
						max-width: 36rem;
					}
				}

				@media (max-width: ${theme.devices.tablet}) {
					margin-left: 0;
					align-items: center;
				}

				@media (max-width: ${theme.devices.mobile}) {
					display: none;
				}
			}

			@media (max-width: ${theme.devices.tablet}) {
				flex-direction: column;
				align-items: center;
				text-align: center;
				padding: 0 6.4rem;
			}

			@media (max-width: ${theme.devices.mobile}) {
				padding: 0 0 4rem 0;
			}
		}
	}

	@media (max-width: ${theme.devices.mobile}) {
		margin-top: 2.4rem;
	}
`
