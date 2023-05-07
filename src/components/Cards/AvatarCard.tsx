import React from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'

interface AvatarCardProps {
	id: string
	name: string
	imageUrl: string
	onViewBlockchain: (avatar: any) => void
	onEquip: () => void
}

const AvatarCard: React.FC<AvatarCardProps> = ({ id, name, imageUrl, onViewBlockchain, onEquip }) => {
	return (
		<div className="p-4 space-y-2 rounded-lg shadow-md bg-cardBackground">
			<img
				className="object-cover w-full h-32 rounded-md "
				style={{ objectPosition: '50% 25%' }}
				src={imageUrl}
				alt={name}
			/>
			<p className="mb-2 text-lg">{name}</p>
			<div className="flex items-center justify-between">
				<button
					type="button"
					className="px-2 py-1 text-xs transition-colors duration-200 ease-in-out rounded-full shadow-md text-secondary hover:bg-primary hover:text-secondary"
					onClick={() => onViewBlockchain({ id, name })}
				>
					<RiExternalLinkLine className="inline-block mr-1" />
					View on Blockchain
				</button>
				<button
					type="button"
					className="px-2 py-1 text-xs transition-colors duration-200 ease-in-out rounded-full shadow-md text-primary hover:bg-secondary hover:text-primary"
					onClick={onEquip}
				>
					Equip
				</button>
			</div>
		</div>
	)
}

export default AvatarCard
