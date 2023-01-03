import React from 'react'
import { PageContainer } from '../mainComponents'

import { Container } from './styles'

const Header: React.FC = () => {
	return (
		<Container>
			<PageContainer>
				<div className='content'>
					<div className='logo'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='48'
							height='48'
						>
							<g fill='none' fillRule='evenodd'>
								<circle cx='24' cy='24' r='24' fill='#FFF' />
								<path
									fill='#0B0D17'
									d='M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z'
								/>
							</g>
						</svg>
					</div>
					<div className='line'></div>
					<nav>
						<ul>
							<li>
								<a href='#'>
									<span>00</span>HOME
								</a>
							</li>
							<li>
								<a href='#'>
									<span>01</span>DESTINATION
								</a>
							</li>
							<li>
								<a href='#'>
									<span>04</span>CREW
								</a>
							</li>
							<li>
								<a href='#'>
									<span>03</span>TECHNOLOGY
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</PageContainer>
		</Container>
	)
}

export { Header }
