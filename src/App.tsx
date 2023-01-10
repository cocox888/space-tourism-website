import { Routes } from './routes'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/global'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Routes />
		</>
	)
}

export default App
