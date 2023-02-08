import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { PageContainer } from '../../components/mainComponents'
import { getData } from '../../services/getData'
import { BodyText, Heading } from '../../styles/Typography'
import { getPreferences } from '../../utils/getPreferences'

import { Container } from './styles'

const Technology: React.FC = () => {
	type technologyType = {
		name: string
		images: {
			portrait: string
			landscape: string
		}
		description: string
	}

	const [technology, setTechnology] = useState<technologyType>()
	const [technologyIndex, setTechnologyIndex] = useState<number>()
	const [animate, setAnimate] = useState<boolean>()

	const { data } = useQuery<technologyType[]>(
		'technology',
		() => getData('technology'),
		{
			staleTime: 5000 * 60,
			refetchOnWindowFocus: false,
		},
	)

	useEffect(() => {
		document.body.classList.add('bg-technology')

		setAnimate(true)

		return () => {
			document.body.classList.remove('bg-technology')
		}
	}, [])

	useEffect(() => {
		if (data) {
			setTechnologyIndex(parseInt(getPreferences().technology))
		}
	}, [data])

	useEffect(() => {
		if (data && technologyIndex !== undefined) {
			setTechnology(data[technologyIndex])
		}
	}, [technologyIndex])

	useEffect(() => {
		setTimeout(() => setAnimate(true), 100)
	}, [animate])

	const handleClickNavButton = (e: React.MouseEvent<HTMLElement>) => {
		const newTechnologyIndex = e.currentTarget.getAttribute('data-number')

		setAnimate(false)

		if (newTechnologyIndex && data) {
			setTechnologyIndex(parseInt(newTechnologyIndex))

			localStorage.setItem(
				'preferences',
				JSON.stringify({
					...getPreferences(),
					technology: newTechnologyIndex,
				}),
			)
		}
	}

	return (
		<Container>
			<PageContainer>
				<div className='content'>
					<Heading
						level={1}
						color={'target'}
						size={'font28'}
						fontWeight={400}
						letterSpacing={4.75}
						fontFamily={'familyB'}
					>
						<span>03</span>
						SPACE LAUNCH 101
					</Heading>
					<div className='main'>
						<div className='img-area--mobile'>
							<img
								src={technology?.images.landscape}
								alt={technology?.images.landscape + 'image'}
							/>
						</div>
						<div className='info'>
							<nav>
								<ul>
									{data?.map((technology, index) => (
										<li key={index}>
											<button
												className={
													index === technologyIndex
														? 'active'
														: ''
												}
												data-number={index}
												onClick={handleClickNavButton}
											>
												{index + 1}
											</button>
										</li>
									))}
								</ul>
							</nav>
							<div
								className={`text-area ${
									animate ? 'animate' : ''
								}`}
								data-anime='top'
							>
								<Heading
									level={2}
									color={'secondary'}
									size={'font16'}
									fontWeight={400}
									letterSpacing={2.36}
									fontFamily={'familyB'}
								>
									THE TERMINOLOGY...
								</Heading>
								<Heading
									level={3}
									color={'target'}
									size={'font56'}
									fontWeight={400}
								>
									{technology?.name.toUpperCase()}
								</Heading>
								<BodyText>{technology?.description}</BodyText>
							</div>
						</div>
						<div
							className={`img-area ${animate ? 'animate' : ''}`}
							data-anime='bottom'
						>
							<img
								src={technology?.images.portrait}
								alt={technology?.images.portrait + 'image'}
							/>
						</div>
					</div>
				</div>
			</PageContainer>
		</Container>
	)
}

export default Technology
