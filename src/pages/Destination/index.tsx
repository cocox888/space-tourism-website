import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { PageContainer } from '../../components/mainComponents'
import { getData } from '../../services/getData'
import { BodyText, Heading } from '../../styles/Typography'
import { getPreferences } from '../../utils/getPreferences'

import { Container } from './styles'

const Destination: React.FC = () => {
	type destinationType = {
		name: string
		images: {
			png: string
			webp: string
		}
		description: string
		distance: string
		travel: string
	}

	const [destination, setDestination] = useState<destinationType>()
	const [destinationIndex, setDestinationIndex] = useState<number>()
	const [animate, setAnimate] = useState<boolean>()

	const { data } = useQuery<destinationType[]>(
		'destinations',
		() => getData('destinations'),
		{
			staleTime: 5000 * 60,
			refetchOnWindowFocus: false,
		},
	)

	useEffect(() => {
		document.body.classList.add('bg-destination')

		setAnimate(true)

		return () => {
			document.body.classList.remove('bg-destination')
		}
	}, [])

	useEffect(() => {
		if (data) {
			setDestinationIndex(parseInt(getPreferences().destination))
		}
	}, [data])

	useEffect(() => {
		if (data && destinationIndex !== undefined) {
			setDestination(data[destinationIndex])
		}
	}, [destinationIndex])

	useEffect(() => {
		setTimeout(() => setAnimate(true), 100)
	}, [animate])

	const handleClickNavLink = (e: React.MouseEvent<HTMLElement>) => {
		const newDestinationIndex = e.currentTarget.getAttribute('data-number')

		setAnimate(false)

		if (newDestinationIndex && data) {
			setDestinationIndex(parseInt(newDestinationIndex))

			localStorage.setItem(
				'preferences',
				JSON.stringify({
					...getPreferences(),
					destination: newDestinationIndex,
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
						<span>01</span>
						PICK YOUR DESTINATION
					</Heading>

					<div className='main'>
						<div
							className={`img-area ${animate ? 'animate' : ''}`}
							data-anime='left'
						>
							<img
								src={destination?.images.webp}
								alt={destination?.name + 'image'}
							/>
						</div>
						<div className='info'>
							<nav>
								<ul>
									{data?.map((destination, index) => (
										<li key={index}>
											<a
												href='#'
												className={
													index === destinationIndex
														? 'active'
														: ''
												}
												data-number={index}
												onClick={handleClickNavLink}
											>
												{destination.name.toUpperCase()}
											</a>
										</li>
									))}
								</ul>
							</nav>
							<div
								className={`text-area ${
									animate ? 'animate' : ''
								}`}
								data-anime='right'
							>
								<Heading
									level={2}
									color={'target'}
									size={'font100'}
									fontWeight={400}
									fontFamily={'familyA'}
								>
									{destination?.name.toUpperCase()}
								</Heading>
								<BodyText>{destination?.description}</BodyText>
								<div className='line'></div>
								<div className='footer'>
									<div className='distance'>
										<Heading
											level={3}
											color={'secondary'}
											size={'font14'}
											fontWeight={400}
											letterSpacing={2.36}
											fontFamily={'familyB'}
										>
											AVG. DISTANCE
										</Heading>
										<Heading
											level={4}
											color={'target'}
											size={'font28'}
											fontWeight={400}
											fontFamily={'familyA'}
										>
											{destination?.distance.toUpperCase()}
										</Heading>
									</div>
									<div className='travel-time'>
										<Heading
											level={3}
											color={'secondary'}
											size={'font14'}
											fontWeight={400}
											letterSpacing={2.36}
											fontFamily={'familyB'}
										>
											EST. TRAVEL TIME
										</Heading>
										<Heading
											level={4}
											color={'target'}
											size={'font28'}
											fontWeight={400}
											fontFamily={'familyA'}
										>
											{destination?.travel.toUpperCase()}
										</Heading>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PageContainer>
		</Container>
	)
}

export default Destination
