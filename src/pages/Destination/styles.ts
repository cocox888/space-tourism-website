import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	margin-top: 7.5rem;

	.content {
		padding: 0 11.5rem 0 11rem;

		.main {
			display: flex;
			justify-content: space-between;
			margin-top: 9rem;

			.img-area {
				display: flex;
				flex: 1;
				padding-left: 6rem;

				img {
					max-width: 44.5rem;
					height: 100%;
				}
			}

			.info {
				display: flex;
				flex-direction: column;
				max-width: 44.4rem;
				flex: 1;

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

				p {
					margin-top: 2.4rem;
				}

				.line {
					width: 100%;
					height: 1px;
					margin-top: 4.8rem;
					background-color: #383b4b;
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
					}
				}
			}
		}
	}
`
