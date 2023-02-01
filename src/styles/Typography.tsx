import styled, { css } from 'styled-components'
import { theme } from './variables'

type HeadingProps = {
	level: 1 | 2 | 3 | 4 | 5 | 6
	size?: keyof typeof theme.sizes
	color?: keyof typeof theme.colors
	opacity?: number
	fontFamily?: keyof typeof theme.family
	fontWeight?: 400 | 700
	letterSpacing?: 2.36 | 4.75
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
	as: `h${level}`,
}))<HeadingProps>`
	${({
		fontFamily = 'familyA',
		color = 'target',
		size = 'font16',
		fontWeight = 700,
		opacity = 100,
		letterSpacing = 0,
	}) =>
		css`
			font-family: ${theme.family[fontFamily]};
			color: ${theme.colors[color]};
			opacity: ${opacity + '%'};
			font-size: ${theme.sizes[size]};
			font-weight: ${fontWeight};
			letter-spacing: ${letterSpacing}px;

			span {
				margin-right: 2.8rem;
				font-size: inherit;
				font-weight: 700;
				opacity: 25%;
			}
		`}
`

export const BodyText = styled.p`
	color: ${theme.colors.secondary};
	font-size: ${theme.sizes.font18};
	font-family: ${theme.family.familyC};
	line-height: 3.2rem;

	@media (max-width: ${theme.devices.tablet}) {
		font-size: ${theme.sizes.font16};
	}

	@media (max-width: ${theme.devices.mobile}) {
		font-size: ${theme.sizes.font15};
	}
`
