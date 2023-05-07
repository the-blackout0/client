import React, { useState, useEffect } from 'react'
import Badge from './Badge'
import image2 from '/src/assets/trophies/trophy1.png'
import image1 from '/src/assets/trophies/trophy2.png'
import image3 from '/src/assets/trophies/trophy3.png'

interface UserHeaderProps {
	address: string
	imageUrl: string
	nftCount: number
	xp: number
	level: number
	wins: number
}

interface BadgeNFT {
	image: string
	name: string
	description: string
	tokenId: string
	awardedOn: string
}

const UserHeader: React.FC<UserHeaderProps> = ({ address, imageUrl, nftCount, xp, level, wins }) => {
	const [badges, setBadges] = useState<BadgeNFT[]>([])

	const truncatedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`

	useEffect(() => {
		// Fetch the user's badges here and set the badges state.
		// Replace this example data with a call to fetch the user's actual badges.
		const exampleBadges: BadgeNFT[] = [
			{
				image: image1.src,
				name: 'Player of the Week',
				description: 'Awarded for being the top player during the week.',
				tokenId: '0x1234567890abcdef1',
				awardedOn: '6th May, 2023',
			},
			{
				image: image2.src,
				name: 'Whale',
				description: 'Awarded for holding a large number of valuable NFTs.',
				tokenId: '0x1234567890abcdef2',
				awardedOn: '6th May, 2023',
			},
			{
				image: image3.src,
				name: 'Card Master',
				description: 'Awarded for exceptional play-making.',
				tokenId: '0x1234567890abcdef2',
				awardedOn: '5th May, 2023',
			},
		]
		setBadges(exampleBadges)
	}, [])

	return (
		<div className="p-4 space-y-4 rounded-lg shadow-md bg-darker">
			<div className="flex items-center space-x-4">
				<img
					className="object-cover w-24 h-24 mr-4 border-2 rounded-full border-primary"
					src={imageUrl}
					alt="User Avatar"
				/>

				<div>
					<h2 className="mb-1 text-2xl font-semibold">{truncatedAddress}</h2>

					<div className="flex my-4 space-x-4">
						{badges.map((badge, index) => (
							<div key={index} className="group">
								<Badge {...badge} />
							</div>
						))}
					</div>
					<div className="flex space-x-2 text-sm text-secondary">
						<p>Cards: {nftCount}</p>
						<p>|</p>
						<p>Wins: {wins}</p>
						<p>|</p>
						<p>Packs: {4}</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-2/3 space-x-5 ">
				<div className="flex flex-col w-full space-y-3">
					<div className="text-sm font-semibold">XP: {xp}</div>
					<div className="h-2 rounded-lg bg-secondary">
						<div
							className="h-full rounded-lg bg-primary"
							style={{ width: `${Math.min((xp / 100) * 100, 100)}%` }}
						></div>
					</div>
				</div>
				<div className="flex flex-col w-full space-y-3">
					<div className="text-sm font-semibold">Level: {level}</div>
					<div className="h-2 rounded-lg bg-secondary">
						<div
							className="h-full rounded-lg bg-primary"
							style={{ width: `${Math.min((level / 20) * 100, 100)}%` }}
						></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserHeader
