import React from 'react'
import NFT from '../NFTs/NFT'
import Button from '../Button'

const MintedCard = () => {
	return (
		<div>
			<p className="text-3xl">NFT minted!</p>
			<div>
				<p>You have received: </p>
				<NFT id="523523" name="Air Raid" uri="asda" />
			</div>
			<Button>OK</Button>
		</div>
	)
}

export default MintedCard
