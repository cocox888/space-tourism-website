import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'

export const Header: React.FC = () => {
	const activeClassName = 'active'

	const [showMobileNav, setShowMobileNav] = useState<boolean>()
	const [mobileAnimate, setMobileAnimate] = useState<boolean>()
	const [animate, setAnimate] = useState<boolean>()

	useEffect(() => {
		setAnimate(true)
	}, [])

	const closeNav = () => {
		setMobileAnimate(false)
		setTimeout(() => setShowMobileNav(false), 500)
	}

	const openNav = () => {
		setShowMobileNav(true)
		setTimeout(() => setMobileAnimate(true), 10)
	}

	const handleClickBurgerBtn = (e: React.MouseEvent<HTMLElement>) => {
		e.currentTarget.classList.toggle('is-open')
		showMobileNav ? closeNav() : openNav()
	}

	return (
		<Container>
			<div className='content'>
				<div className='logo'>
					<img src='./assets/shared/logo.svg' alt='logo' />
				</div>
				<div className={`line ${animate ? 'animate' : ''}`}></div>
				<button
					className='burger-btn'
					onClick={handleClickBurgerBtn}
				></button>
				<nav
					className={`nav ${showMobileNav ? 'active' : ''} ${
						animate ? 'animate' : ''
					} ${mobileAnimate ? 'mobile-animate' : ''}`}
				>
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
		</Container>
	)
}
