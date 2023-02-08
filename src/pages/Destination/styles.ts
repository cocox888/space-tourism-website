import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}

	margin-top: 7.5rem;
	display: flex;
	flex: 1;

	@media (max-width: ${theme.devices.tablet}) {
		margin-top: 7.5rem;
	}

	h1 {
		@media (max-width: ${theme.devices.tablet}) {
			font-size: ${theme.sizes.font20};
		}

		@media (max-width: ${theme.devices.mobile}) {
			font-size: ${theme.sizes.font16};
			text-align: center;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;

		.main {
			display: flex;
			justify-content: space-between;
			flex: 1;
			align-items: center;
			padding: 6.4rem 0;

			.img-area {
				padding-left: 6rem;

				img {
					max-width: 44.5rem;
					transition: 0.3s;

					@media (max-width: ${theme.devices.tablet}) {
						max-width: 30rem;
					}

					@media (max-width: ${theme.devices.mobile}) {
						max-width: 17rem;
					}

					animation: spinner 40s linear infinite;
				}

				@media (max-width: ${theme.devices.tablet}) {
					padding-left: 0;
				}
			}

			.info {
				display: flex;
				flex-direction: column;
				max-width: 44.4rem;
				flex: 1;
				margin-left: 6.4rem;

				nav {
					display: flex;
					height: 4.2rem;
					margin-bottom: 2.8rem;

					ul {
						display: flex;
						gap: 0 3.4rem;
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
								color: ${theme.colors.secondary};
								font-family: ${theme.family.familyB};
								transition: all 0.3s;

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

								&.active {
									color: ${theme.colors.target};
								}

								&.active::after {
									transform: scaleX(1);
									background-color: ${theme.colors.target};
								}

								&:hover::after {
									transform: scaleX(1);
								}

								span {
									margin-right: 1rem;
									font-size: ${theme.sizes.font16};
									font-weight: bold;
								}
							}
						}
					}
				}

				.text-area {
					h2 {
						font-size: ${theme.sizes.font80};

						@media (max-width: ${theme.devices.mobile}) {
							font-size: ${theme.sizes.font56};
						}
					}

					.line {
						width: 100%;
						height: 1px;
						margin-top: 4.8rem;
						background-color: #979797;
					}

					p {
						margin-top: 2.4rem;
					}

					.footer {
						display: flex;
						margin-top: 2.4rem;

						div {
							display: flex;
							flex-direction: column;
							gap: 1.1rem;
						}

						.travel-time {
							margin-left: 7.5rem;

							@media (max-width: ${theme.devices.mobile}) {
								margin-left: 0;
							}
						}

						@media (max-width: ${theme.devices.tablet}) {
							justify-content: center;
						}

						@media (max-width: ${theme.devices.mobile}) {
							flex-direction: column;
							gap: 4rem;
						}
					}

					@media (max-width: ${theme.devices.tablet}) {
						text-align: center;
					}
				}

				@media (max-width: ${theme.devices.tablet}) {
					justify-content: center;
					align-items: center;
					max-width: none;
					padding: 4rem 12rem;
					margin-left: 0;
				}

				@media (max-width: ${theme.devices.mobile}) {
					padding: 4rem 0;
				}
			}

			@media (max-width: ${theme.devices.tablet}) {
				flex-direction: column;
				align-items: center;
			}
		}
	}

	@media (max-width: ${theme.devices.mobile}) {
		margin-top: 2.4rem;
	}
`
