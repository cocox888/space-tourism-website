import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	margin-top: 7.5rem;
	display: flex;
	flex: 1;
	overflow: hidden;

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;

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
			align-items: center;
			flex: 1;

			.img-area--mobile {
				display: none;
				height: 31rem;

				img {
					position: absolute;
					left: 0;
					right: 0;
					margin: 0 auto;
					max-width: 76.8rem;
					width: 100%;

					@media (max-width: ${theme.devices.mobile}) {
						height: 17rem;
					}
				}

				@media (max-width: ${theme.devices.tablet}) {
					display: flex;
				}

				@media (max-width: ${theme.devices.mobile}) {
					height: 17rem;
				}
			}

			.info {
				display: flex;
				flex: 1;
				gap: 7.7rem;

				nav {
					ul {
						display: flex;
						flex-direction: column;
						gap: 3rem;

						li {
							button {
								width: 8rem;
								height: 8rem;
								font-size: ${theme.sizes.font32};
								font-family: ${theme.family.familyA};
								border: 1px solid rgba(255, 255, 255, 0.25);
								border-radius: 50%;
								color: ${theme.colors.target};
								transition: all 0.3s;

								&:hover {
									border-color: ${theme.colors.target};
									color: ${theme.colors.target};
								}

								&.active {
									background-color: ${theme.colors.target};
									color: ${theme.colors.primary};
								}

								@media (max-width: ${theme.devices.tablet}) {
									width: 6rem;
									height: 6rem;
									font-size: ${theme.sizes.font24};
								}

								@media (max-width: ${theme.devices.mobile}) {
									width: 4rem;
									height: 4rem;
									font-size: ${theme.sizes.font16};
								}
							}
						}

						@media (max-width: ${theme.devices.tablet}) {
							flex-direction: row;
							gap: 1.4rem;
						}
					}
				}

				.text-area {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					max-width: 47rem;

					h2 {
						@media (max-width: ${theme.devices.mobile}) {
							font-size: ${theme.sizes.font14};
						}
					}

					h3 {
						font-size: ${theme.sizes.font40};

						@media (max-width: ${theme.devices.mobile}) {
							font-size: ${theme.sizes.font24};
						}
					}
				}

				@media (max-width: ${theme.devices.tablet}) {
					flex-direction: column;
					align-items: center;
					margin-top: 5.6rem;
					text-align: center;
					gap: 4rem 0;
				}
			}

			.img-area {
				margin-left: 6.4rem;
				margin-right: -15.5%;

				@media (max-width: ${theme.devices.tablet}) {
					display: none;
				}
			}

			@media (max-width: ${theme.devices.tablet}) {
				flex-direction: column;
				padding: 4.8rem 0;
			}
		}
	}

	@media (max-width: ${theme.devices.mobile}) {
		margin-top: 2.4rem;
	}
`
