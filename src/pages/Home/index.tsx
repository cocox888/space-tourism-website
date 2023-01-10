import React from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../../components/mainComponents'
import { BodyText, Heading } from '../../styles/Typography'

import { Container } from './styles'

export const Home: React.FC = () => {
	return (
		<Container>
			<PageContainer>
				<div className='content'>
					<div className='text-area'>
						<Heading
							level={5}
							color={'secondary'}
							size={'font28'}
							fontWeight={400}
							letterSpacing={4.75}
							fontFamily='familyB'
						>
							SO, YOU WANT TO TRAVEL TO
						</Heading>
						<Heading
							level={1}
							color={'target'}
							size={'font150'}
							fontWeight={400}
						>
							SPACE
						</Heading>
						<BodyText>
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</BodyText>
					</div>
					<div className='button-area'>
						<Link to={'/destination'}>EXPLORE</Link>
					</div>
				</div>
			</PageContainer>
		</Container>
	)
}