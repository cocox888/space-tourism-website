export const getData = async (page: 'destinations' | 'crew' | 'technology') => {
	const res = await fetch('./data/data.json')
	const data = await res.json()
	return data[page]
}
