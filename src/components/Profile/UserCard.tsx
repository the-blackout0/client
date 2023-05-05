import React from 'react'
import ProgressBar from './ProgressBar'
import CardWrapper from '../Wrappers/CardWrapper'

const UserCard = ({ userData }) => {
	const { address, image, numNFTs, xp, level } = userData

	const maxXP = level * 100 // Adjust this based on your XP leveling system.

	return (
		<CardWrapper title="User Information">
			<div className="flex items-center mb-4">
				<img className="w-16 h-16 mr-4 border-2 rounded-full border-primary" src={image} alt="User Avatar" />
				<div>
					<p className="text-secondary">Address: {address}</p>
					<p className="text-secondary">Number of NFTs: {numNFTs}</p>
				</div>
			</div>
			<div className="mb-2">
				<p className="text-secondary">
					XP: {xp} / {maxXP}
				</p>
			</div>
			<ProgressBar progress={xp} maxProgress={maxXP} />
		</CardWrapper>
	)
}

export default UserCard
