import React from 'react'

interface UserHeaderProps {
	address: string
	imageUrl: string
	nftCount: number
	xp: number
	level: number
	wins: number
}

const UserHeader: React.FC<UserHeaderProps> = ({ address, imageUrl, nftCount, xp, level, wins }) => {
	const truncatedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`

	return (
		<div className="p-4 space-y-4 rounded-lg shadow-md bg-darker">
			<div className="flex items-center space-x-4">
				<img className="w-24 h-24 border-2 rounded-full border-primary" src={imageUrl} alt="User Avatar" />
				<div>
					<h2 className="mb-1 text-xl font-semibold">{truncatedAddress}</h2>
					<div className="text-sm text-secondary">
						<p>Cards: {nftCount}</p>
						<p>Wins: {wins}</p>
					</div>
				</div>
			</div>
			<div className="space-y-2">
				<div className="text-sm font-semibold">XP: {xp}</div>
				<div className="h-2 rounded-lg bg-secondary">
					<div
						className="h-full rounded-lg bg-primary"
						style={{ width: `${Math.min((xp / 100) * 100, 100)}%` }}
					></div>
				</div>
				<div className="text-sm font-semibold">Level: {level}</div>
				<div className="h-2 rounded-lg bg-secondary">
					<div
						className="h-full rounded-lg bg-primary"
						style={{ width: `${Math.min((level / 100) * 100, 100)}%` }}
					></div>
				</div>
			</div>
		</div>
	)
}

export default UserHeader
