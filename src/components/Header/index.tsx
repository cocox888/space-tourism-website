import React from 'react'
import { NavLink } from 'react-router-dom'
import { PageContainer } from '../mainComponents'

import { Container } from './styles'

export const Header: React.FC = () => {
	const activeClassName = 'active'

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
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									<span>00</span>HOME
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/destination'
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									<span>01</span>DESTINATION
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/crew'
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									<span>02</span>CREW
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/technology'
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									<span>03</span>TECHNOLOGY
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</PageContainer>
		</Container>
	)
}
