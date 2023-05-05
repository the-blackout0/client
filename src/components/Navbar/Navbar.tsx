import React from 'react'
import ConnectWallet from '../ConnectWallet'

const Navbar: React.FC = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 py-4 bg-dark bg-opacity-60 text-secondary backdrop-blur-md">
			<div className="container flex items-center justify-between px-4 mx-auto">
				<div className="text-2xl font-bold">
					<a href="/">Canto Game</a>
				</div>
				<div className="flex items-center space-x-8">
					<a href="/profile" className="hover:text-primary">
						Profile
					</a>
					<a href="/nfts" className="hover:text-primary">
						NFTs
					</a>
					<a href="/leaderboard" className="hover:text-primary">
						Leaderboard
					</a>
					<ConnectWallet />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
