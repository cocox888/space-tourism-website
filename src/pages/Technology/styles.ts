import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	margin-top: 7.5rem;
	display: flex;
	flex: 1;

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 0 11.5rem 0 11rem;

		.main {
			display: flex;
			align-items: center;
			flex: 1;

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
							}
						}
					}
				}

				.text-area {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					max-width: 47rem;
				}
			}

			.img-area {
				margin-right: -15.5%;
			}
		}
	}
`
