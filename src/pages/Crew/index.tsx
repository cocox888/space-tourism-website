import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { PageContainer } from '../../components/mainComponents'
import { getData } from '../../services/getData'
import { BodyText, Heading } from '../../styles/Typography'
import { getPreferences } from '../../utils/getPreferences'

import { Container } from './styles'

const Crew: React.FC = () => {
	type personType = {
		name: string
		images: {
			png: string
			webp: string
		}
		role: string
		bio: string
	}

	const [person, setPerson] = useState<personType>()
	const [personIndex, setPersonIndex] = useState<number>()

	const { data } = useQuery<personType[]>('crew', () => getData('crew'), {
		staleTime: 5000 * 60,
		refetchOnWindowFocus: false,
	})

	useEffect(() => {
		document.body.classList.add('bg-crew')

		return () => {
			document.body.classList.remove('bg-crew')
		}
	}, [])

	useEffect(() => {
		if (data) {
			setPersonIndex(parseInt(getPreferences().crew))
		}
	}, [data])

	useEffect(() => {
		if (data && personIndex !== undefined) {
			setPerson(data[personIndex])
		}
	}, [personIndex])

	const handleClickNavButton = (e: React.MouseEvent<HTMLElement>) => {
		const newPersonIndex = e.currentTarget.getAttribute('data-number')

		if (newPersonIndex && data) {
			setPersonIndex(parseInt(newPersonIndex))

			localStorage.setItem(
				'preferences',
				JSON.stringify({
					...getPreferences(),
					crew: newPersonIndex,
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
						<span>02</span>
						MEET YOUT CREW
					</Heading>
					<div className='main'>
						<div className='info'>
							<div className='text-area'>
								<Heading
									level={2}
									color={'target'}
									size={'font32'}
									fontWeight={400}
									opacity={50}
								>
									{person?.role.toUpperCase()}
								</Heading>
								<Heading
									level={3}
									color={'target'}
									size={'font56'}
									fontWeight={400}
								>
									{person?.name.toUpperCase()}
								</Heading>
								<BodyText>{person?.bio}</BodyText>
							</div>
							<nav>
								<ul>
									{data?.map((person, index) => (
										<li key={index}>
											<button
												className={
													index === personIndex
														? 'active'
														: ''
												}
												data-number={index}
												onClick={handleClickNavButton}
											></button>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className='img-area'>
							<img
								src={person?.images.png}
								alt={person?.name + 'image'}
							/>
						</div>
					</div>
				</div>
			</PageContainer>
		</Container>
	)
}

export default Crew
