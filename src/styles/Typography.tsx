import styled, { css } from 'styled-components'
import { theme } from './variables'

type HeadingProps = {
	fontFamily?: keyof typeof theme.family
	color?: keyof typeof theme.colors
	size?: keyof typeof theme.sizes
	fontWeight?: 400 | 700
	letterSpacing?: 2.35 | 4.75
	level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
	as: `h${level}`,
}))<HeadingProps>`
	${({
		fontFamily = 'familyA',
		color = 'target',
		size = 'font16',
		fontWeight = 700,
		letterSpacing = 0,
	}) =>
		css`
			font-family: ${theme.family[fontFamily]};
			color: ${theme.colors[color]};
			font-size: ${theme.sizes[size]};
			font-weight: ${fontWeight};
			letter-spacing: ${letterSpacing}px;
		`}
`

export const BodyText = styled.p`
	color: ${theme.colors.secondary};
	font-size: ${theme.sizes.font18};
	font-family: ${theme.family.familyB};
	line-height: 3.2rem;
`
