import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import LandingPage from '@/components/Landing/Landing'

const Home: FC = () => {
	return (
		<PageWrapper>
			{/* <ThemeSwitcher className="absolute bottom-6 right-6" /> */}
			<LandingPage />
		</PageWrapper>
	)
}

export default Home
