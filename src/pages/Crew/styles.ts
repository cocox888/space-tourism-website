import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-top: 7.5rem;

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0 11.5rem 0 11rem;

		.main {
			display: flex;
			flex: 1;
			position: relative;

			.info {
				display: flex;
				flex-direction: column;
				flex: 1;

				.text-area {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					margin-top: 15.5rem;
					height: 25rem;

					h2 {
						opacity: 50%;
					}

					p {
						max-width: 44rem;
					}
				}

				nav {
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
							}
						}
					}
				}
			}

			.img-area {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				margin-right: -3rem;
			}
		}
	}
`
