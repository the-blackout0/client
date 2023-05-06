import React from 'react'
import CardWrapper from '../Wrappers/CardWrapper'
import { ExternalLinkIcon, ShareIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'

const NFTCard = ({ nft }) => {
	const { id, name, description, image, blockchainLink, tags } = nft

	console.log('nft', nft)

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
					href={`https://blockchain.example.com/nft/${id}`}
					target="_blank"
					rel="noreferrer"
					className="flex items-center space-x-1 text-sm text-secondary"
				>
					<ExternalLinkIcon className="w-4 h-4" />
					<span>See on Blockchain</span>
				</a>
			</div>
			<div className="mb-4">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="inline-block px-2 py-1 mb-2 mr-2 rounded-lg cursor-pointer text-primary bg-secondary"
					>
						{tag}
					</span>
				))}
			</div>
			<div className="flex items-center justify-between">
				<div className="flex space-x-2">
					<button className="flex items-center px-3 py-1 space-x-1 text-white rounded-md bg-primary">
						<SwitchHorizontalIcon className="w-4 h-4" />
						<span>Trade</span>
					</button>
					<button className="flex items-center px-3 py-1 space-x-1 border rounded-md text-primary border-primary">
						<ShareIcon className="w-4 h-4" />
						<span>Share</span>
					</button>
				</div>
			</div>
		</CardWrapper>
	)
}

export default NFTCard
