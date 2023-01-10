import styled from 'styled-components'
import { theme } from '../../styles/variables'

export const Container = styled.div`
	margin-top: 25rem;

	.content {
		display: flex;
		padding: 0 11.5rem 0 11rem;

		.text-area {
			width: 44.4rem;

			h1 {
				margin: 2.4rem 0 1.8rem 0;
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
			}
		}
	}
`
