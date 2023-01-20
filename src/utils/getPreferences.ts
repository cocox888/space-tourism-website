export type preferencesType = {
	destination: string
	crew: string
	technology: string
}

export const getPreferences = () => {
	const LSPreferences = localStorage.getItem('preferences')

	if (LSPreferences) {
		const preferences: preferencesType = JSON.parse(LSPreferences)

		return preferences
	} else {
		const preferences = {
			destination: '0',
			crew: '0',
			technology: '0',
		}

		localStorage.setItem('preferences', JSON.stringify(preferences))

		return preferences
	}
}
