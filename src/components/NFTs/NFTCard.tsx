import React from 'react'
import CardWrapper from '../Wrappers/CardWrapper'
import { ExternalLinkIcon, ShareIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'

const getRarityGradient = (rarity: string) => {
	switch (rarity) {
		case 'Rare':
			return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
		case 'Super Rare':
			return 'bg-gradient-to-r from-green-400 to-green-600 text-white'
		case 'Epic':
			return 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
		case 'Legendary':
			return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
		default:
			return 'bg-gray-200'
	}
}

const NFTCard = ({ nft, isSelected, onSelect }) => {
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

	console.log('id', id)

	const handleClick = () => {
		onSelect(id)
	}

	console.log('isSelected', isSelected)

	return (
		<CardWrapper
			title={name}
			onClick={handleClick}
			customClassName={`${isSelected ? 'border-green-500' : 'border-gray-200'} relative flex flex-col h-full`}
		>
			<div className="flex-shrink-0">
				{isSelected && <p>selected</p>}
				{image && (
					<div>
						<img src={image} alt={name} className="mx-auto rounded-lg" />
					</div>
				)}
			</div>
			<div className="flex flex-col justify-between flex-grow">
				<div>
					<div className="my-4 mb-4">
						{tags.map((tag, index) => (
							<span
								key={index}
								className={`inline-block px-2 py-1 mb-2 mr-2 rounded-lg cursor-pointer text-primary bg-secondary ${
									tag === 'Rare' || tag === 'Super Rare' || tag === 'Epic' || tag === 'Legendary'
										? getRarityGradient(tag)
										: 'bg-dark'
								} `}
							>
								{tag}
							</span>
						))}
					</div>
					<p className="mb-4 text-sm text-secondary">{description}</p>
				</div>
				<div className="mt-auto">
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
				</div>
			</div>
		</CardWrapper>
	)
}

export default NFTCard
