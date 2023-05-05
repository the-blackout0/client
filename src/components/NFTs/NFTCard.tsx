import React from 'react'
import CardWrapper from '../Wrappers/CardWrapper'

const NFTCard = ({ nft }) => {
	const { name, description, image, blockchainLink, tags } = nft

	const handleShare = () => {
		// Add your sharing functionality here.
		console.log('Sharing NFT:', name)
	}

	const handleTrade = () => {
		// Add your trading functionality here.
		console.log('Trading NFT:', name)
	}

	return (
		<CardWrapper title={name.toUpperCase()}>
			{image && (
				<div className="mb-4">
					<img src={image} alt={name} className="mx-auto rounded-lg" />
				</div>
			)}
			<p className="mb-4 text-secondary">{description}</p>
			<div className="mb-4">
				<a
					href={blockchainLink}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-2 py-1 space-x-1 rounded-lg bg-primary text-secondary"
				>
					<span>See on blockchain</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-1-1l-5-5m0 0l5 5m-5-5v5"
						/>
					</svg>
				</a>
			</div>
			<div className="mb-4">
				{tags.map((tag, index) => (
					<span key={index} className="inline-block px-2 py-1 mb-2 mr-2 rounded-lg text-primary bg-secondary">
						{tag}
					</span>
				))}
			</div>
			<div>
				<button className="px-4 py-2 mr-4 rounded-lg bg-primary text-secondary" onClick={handleShare}>
					Share
				</button>
				<button className="px-4 py-2 rounded-lg bg-primary text-secondary" onClick={handleTrade}>
					Trade
				</button>
			</div>
		</CardWrapper>
	)
}

export default NFTCard
