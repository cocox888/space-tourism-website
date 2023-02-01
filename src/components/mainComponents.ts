import styled from 'styled-components'
import { theme } from '../styles/variables'

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 144rem;
	width: 100%;
	padding: 0 17rem 0 16.6rem;
	margin: 0 auto;

	@media (max-width: ${theme.devices.desktop}) {
		padding: 0 5.6rem;
	}

	@media (max-width: ${theme.devices.tablet}) {
		padding: 0 4rem;
	}

	@media (max-width: ${theme.devices.mobile}) {
		padding: 0 2.4rem;
	}
`
