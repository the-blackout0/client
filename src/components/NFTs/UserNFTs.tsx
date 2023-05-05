import React, { useState, useEffect } from 'react'
import NFTCard from './NFTCard'
import { fetchNFTs } from './fetchNFTs'

const UserNFTs = () => {
	const [nfts, setNfts] = useState<any>([])

	useEffect(() => {
		const getNFTs = async () => {
			const fetchedNFTs = await fetchNFTs()
			setNfts(fetchedNFTs)
		}

		getNFTs()
	}, [])

	return (
		<div className="container px-4 py-8 mx-auto">
			<h2 className="mb-4 text-2xl font-bold text-secondary">Your NFTs</h2>
			{nfts.length === 0 ? (
				<p className="text-secondary">Loading NFTs...</p>
			) : (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{nfts.map(nft => (
						<NFTCard key={nft.id} nft={nft} />
					))}
				</div>
			)}
		</div>
	)
}

export default UserNFTs
