import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import '../styles/tailwind.css'
import Web3Provider from '@/components/Web3Provider'
import FloatingButton from '@/components/Button/FloatingButton'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
			<Web3Provider>
				<Component {...pageProps} />
				<FloatingButton text="Go to the Game" />
			</Web3Provider>
		</ThemeProvider>
	)
}

export default App
