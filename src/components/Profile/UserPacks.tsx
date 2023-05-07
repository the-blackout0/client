import React, { useState } from 'react'
import PackCard from '../NFTs/PackCard'

// Replace this with the actual data fetched from the backend
const packs = [
	{
		id: 1,
		name: 'Starter Pack',
		description: 'A basic pack containing random cards.',
		imageUrl: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2016/04/A-Light-in-the-Darkness-300x424.png',
		rarities: [
			{ name: 'Common', chance: 60 },
			{ name: 'Rare', chance: 30 },
			{ name: 'Epic', chance: 7 },
			{ name: 'Legendary', chance: 2.5 },
			{ name: 'Mythical', chance: 0.5 },
		],
	},
	{
		id: 1,
		name: 'Starter Pack',
		description: 'A basic pack containing random cards.',
		imageUrl: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2016/04/A-Light-in-the-Darkness-300x424.png',
		rarities: [
			{ name: 'Common', chance: 60 },
			{ name: 'Rare', chance: 30 },
			{ name: 'Epic', chance: 7 },
			{ name: 'Legendary', chance: 2.5 },
			{ name: 'Mythical', chance: 0.5 },
		],
	},
	{
		id: 1,
		name: 'Starter Pack',
		description: 'A basic pack containing random cards.',
		imageUrl: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2016/04/A-Light-in-the-Darkness-300x424.png',
		rarities: [
			{ name: 'Common', chance: 60 },
			{ name: 'Rare', chance: 30 },
			{ name: 'Epic', chance: 7 },
			{ name: 'Legendary', chance: 2.5 },
			{ name: 'Mythical', chance: 0.5 },
		],
	},
	// Add more pack data
]

const MyPacks: React.FC = () => {
	const [itemsToShow, setItemsToShow] = useState(6)

	const handleViewMore = () => {
		setItemsToShow(itemsToShow + 6)
	}

	const handleOpenPack = (pack: any) => {
		console.log('Opening pack:', pack)
		// Handle opening the pack and sending the transaction to the blockchain
	}

	const handleViewBlockchain = (pack: any) => {
		console.log('Viewing pack on blockchain:', pack)
		// Handle viewing the pack on the blockchain
	}

	return (
		<div className="container px-4 py-8 mx-auto">
			<h2 className="mb-8 text-3xl font-bold">My Packs</h2>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{packs.slice(0, itemsToShow).map(pack => (
					// @ts-ignore
					<PackCard
						key={pack.id}
						{...pack}
						onOpen={() => handleOpenPack(pack)}
						onViewBlockchain={() => handleViewBlockchain(pack)}
					/>
				))}
			</div>
			{itemsToShow < packs.length && (
				<button
					onClick={handleViewMore}
					className="block px-4 py-2 mx-auto mt-8 transition-colors duration-200 ease-in-out rounded-full shadow-md bg-primary text-secondary hover:bg-secondary hover:text-primary"
				>
					View More
				</button>
			)}
		</div>
	)
}

export default MyPacks
