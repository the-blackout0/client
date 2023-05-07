import React, { useState, useEffect } from 'react'
import NFTCard from './NFTCard'
import { fetchNFTs } from './fetchNFTs'
import { useAtom } from 'jotai'
import { selectedDeckAtom } from '@/store/atom'
import useGetUserId from '@/hooks/useGetUserId'
import { useAccount } from 'wagmi'

const UserNFTs = () => {
	const { address } = useAccount()

	const { userId } = useGetUserId(address)

	const [nfts, setNfts] = useState<any>([])
	const [itemsToShow, setItemsToShow] = useState(4)
	const [selectedDeck, setSelectedDeck] = useAtom(selectedDeckAtom)

	console.log('selectedDeck', selectedDeck)

	const handleViewMore = () => {
		setItemsToShow(itemsToShow + 6)
	}

	const handleSelect = (id: number) => {
		if (selectedDeck.includes(id)) {
			setSelectedDeck(selectedDeck.filter(cardId => cardId !== id))
		} else {
			setSelectedDeck([...selectedDeck, id])
		}
	}

	useEffect(() => {
		const getNFTs = async () => {
			const fetchedNFTs = await fetchNFTs(userId)
			setNfts(fetchedNFTs)
		}

		getNFTs()
	}, [])

	return (
		<div className="container px-4 py-8 mx-auto">
			<h2 className="mb-8 text-3xl font-bold">My NFTs</h2>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{nfts.slice(0, itemsToShow).map(nft => (
					<NFTCard
						key={nft.id}
						nft={nft}
						isSelected={selectedDeck.includes(nft.id)}
						onSelect={handleSelect}
					/>
				))}
			</div>
			{itemsToShow < nfts.length && (
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

export default UserNFTs
