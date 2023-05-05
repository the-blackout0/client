import React from 'react'

const LandingPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-darker text-secondary">
			{/* Hero section */}
			<section className="container px-4 py-16 mx-auto">
				<h1 className="mb-4 text-4xl font-bold">Welcome to Canto Game</h1>
				<p className="mb-8">
					Inspired by Hearthstone, Canto Game is a fun and engaging way to introduce new players to the world
					of blockchain gaming.
				</p>
				<button className="px-8 py-2 rounded-lg bg-primary text-secondary">Try the Game</button>
			</section>

			{/* Unique features */}
			<section className="container px-4 py-16 mx-auto">
				<h2 className="mb-8 text-3xl font-bold">Game Features</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="p-8 rounded-lg bg-dark-secondary">
						<h3 className="mb-4 text-2xl font-bold">Avatars</h3>
						<p>Showcase your unique personality with customizable NFT avatars.</p>
					</div>
					<div className="p-8 rounded-lg bg-dark-secondary">
						<h3 className="mb-4 text-2xl font-bold">Cards</h3>
						<p>Collect and trade blockchain-based cards with various abilities and rarities.</p>
					</div>
					<div className="p-8 rounded-lg bg-dark-secondary">
						<h3 className="mb-4 text-2xl font-bold">Packs</h3>
						<p>Earn cards by opening packs of different rarities and expanding your collection.</p>
					</div>
					<div className="p-8 rounded-lg bg-dark-secondary">
						<h3 className="mb-4 text-2xl font-bold">Trophies</h3>
						<p>Receive special NFT awards for your in-game accomplishments and leaderboard positions.</p>
					</div>
				</div>
			</section>

			{/* In-game cards and avatars showcase */}
			<section className="container px-4 py-16 mx-auto">
				<h2 className="mb-8 text-3xl font-bold">In-game Cards & Avatars</h2>
				{/* Replace the following with actual card and avatar images */}
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					<img src="path/to/card-image-1.png" alt="Card 1" className="w-full h-auto rounded-lg" />
					<img src="path/to/card-image-2.png" alt="Card 2" className="w-full h-auto rounded-lg" />
					<img src="path/to/avatar-image-1.png" alt="Avatar 1" className="w-full h-auto rounded-lg" />
					<img src="path/to/avatar-image-2.png" alt="Avatar 2" className="w-full h-auto rounded-lg" />
				</div>
			</section>

			{/* Canto Online Hackathon */}
			<section className="container px-4 py-16 mx-auto">
				<h2 className="mb-8 text-3xl font-bold">Canto Online Hackathon C1:S7</h2>
				<p className="mb-8">
					{' '}
					Canto Game is developed as part of the Canto Online Hackathon C1:S7, pushing the boundaries of the
					Canto Blockchain ecosystem. Our goal is to create a fun, engaging game that attracts new users and
					contributes
				</p>
			</section>

			{/* Footer */}
			<footer className="container px-4 py-8 mx-auto">
				<div className="flex items-center justify-between">
					<div>
						<h3 className="mb-2 text-xl font-bold">Canto Game</h3>
						<p>&copy; 2023 Canto Game. All rights reserved.</p>
					</div>
					<div className="flex items-center space-x-4">
						<a href="https://twitter.com/CantoGame" className="text-primary hover:text-secondary ">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="https://discord.gg/CantoGame" className="text-primary hover:text-secondary">
							<i className="fab fa-discord"></i>
						</a>
						<a href="https://github.com/CantoGame" className="text-primary hover:text-secondary">
							<i className="fab fa-github"></i>
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default LandingPage
