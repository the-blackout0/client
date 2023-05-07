// components/Badge.tsx
import React, { useState } from 'react'

import { ExternalLinkIcon, InformationCircleIcon } from '@heroicons/react/outline'
import Button from '../Button'
import { RiTrophyFill } from 'react-icons/ri'

interface BadgeProps {
	image: string
	name: string
	description: string
	tokenId: string
	awardedOn: string
}

const Badge: React.FC<BadgeProps> = ({ image, name, description, tokenId, awardedOn }) => {
	const [isInfoVisible, setIsInfoVisible] = useState(false)

	const handleMouseEnter = () => {
		setIsInfoVisible(true)
	}

	const handleMouseLeave = () => {
		setIsInfoVisible(true)
	}

	return (
		<div className="badge" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<img src={image} alt={name} className="object-cover w-10 h-10 rounded-full" />
			{isInfoVisible && (
				<div className="badge-info" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<h3 className="text-lg font-bold">
						{name} <RiTrophyFill className="inline w-5 h-5 ml-1 text-yellow-400" />
					</h3>
					<p className="mt-2 text-sm">{description}</p>
					<p className="mt-4 text-sm text-gray-200">Earned on: {awardedOn}</p>
					<div className="flex mt-1">
						<Button
							onClick={() => window.open(`https://etherscan.io/token/${tokenId}`, '_blank')}
							className="mr-2 text-sm h-[30px] flex"
							icon={<ExternalLinkIcon className="w-4 h-4 mr-1" />}
						>
							See on blockchain
						</Button>
						<Button
							variant="outline"
							icon={<InformationCircleIcon className="w-4 h-4 mr-1 " />}
							className="h-[30px] text-sm flex "
						>
							Learn more
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Badge
