// components/RewardCard.tsx
import React from 'react'

interface RewardCardProps {
	icon: React.ReactNode
	name: string
	quantity: number
}

const RewardCard: React.FC<RewardCardProps> = ({ icon, name, quantity }) => {
	return (
		<div className="flex items-center justify-start p-4 border rounded-lg shadow-sm bg-dark">
			<span className="mr-2">{icon}</span>
			<div>
				<h3 className="text-lg font-semibold">{name}</h3>
				<p className="text-sm text-gray-600">x {quantity}</p>
			</div>
		</div>
	)
}

export default RewardCard
