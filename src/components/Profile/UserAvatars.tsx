import React from 'react'
import AvatarCard from '../Cards/AvatarCard'

interface UserAvatarsProps {
	avatars: Array<{
		id: string
		name: string
		imageUrl: string
	}>
}

const UserAvatars: React.FC<UserAvatarsProps> = ({ avatars }) => {
	const handleViewBlockchain = (avatar: any) => {
		// View avatar on blockchain
	}

	const handleEquipAvatar = () => {
		// Equip the avatar
	}

	return (
		<div className="space-y-4">
			<h2 className="mb-2 text-xl font-semibold">My Avatars</h2>
			<p className="text-sm text-secondary">
				Avatars are NFTs that represent your in-game character. You can equip your favorite avatar to customize
				your appearance in the game.
			</p>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{avatars.map(avatar => (
					<AvatarCard
						key={avatar.id}
						id={avatar.id}
						name={avatar.name}
						imageUrl={avatar.imageUrl}
						onViewBlockchain={handleViewBlockchain}
						onEquip={handleEquipAvatar}
					/>
				))}
			</div>
		</div>
	)
}

export default UserAvatars
