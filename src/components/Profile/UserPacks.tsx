import React, { useState } from 'react'
import PackCard from '../NFTs/PackCard'
import image1 from '/src/assets/deck/deck1.png'
import image2 from '/src/assets/deck/deck2.png'
import image3 from '/src/assets/deck/deck3.png'
import image4 from '/src/assets/deck/deck4.png'

// Replace this with the actual data fetched from the backend
const packs = [
	{
		id: 1,
		name: 'Starter Pack',
		description: 'A basic pack containing random cards.',
		imageUrl: image1.src,
		rarities: [
			{ name: 'Common', chance: 60 },
			{ name: 'Rare', chance: 30 },
			{ name: 'Epic', chance: 7 },
			{ name: 'Legendary', chance: 3 },
		],
	},
	{
		id: 2,
		name: 'Rare Pack',
		description: 'One of the best ways to update your deck with quality cards.',
		imageUrl: image2.src,
		rarities: [
			{ name: 'Common', chance: 40 },
			{ name: 'Rare', chance: 40 },
			{ name: 'Epic', chance: 10 },
			{ name: 'Legendary', chance: 10 },
		],
	},
	{
		id: 3,
		name: 'Legendary Pack',
		description: 'The most prestigious pack, having a significant change of dropping legendary cards.',
		imageUrl: image3.src,
		rarities: [
			{ name: 'Common', chance: 10 },
			{ name: 'Rare', chance: 17 },
			{ name: 'Epic', chance: 23 },
			{ name: 'Legendary', chance: 50 },
		],
	},
	{
		id: 3,
		name: 'Super Rare Pack',
		description: 'Better than a Rare Pack, but not as good as a Legendary Pack.',
		imageUrl: image4.src,
		rarities: [
			{ name: 'Common', chance: 10 },
			{ name: 'Rare', chance: 17 },
			{ name: 'Epic', chance: 23 },
			{ name: 'Legendary', chance: 50 },
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
