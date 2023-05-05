import React, { useState } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'

interface PackCardProps {
	id: string
	name: string
	description: string
	imageUrl: string
	rarities: Array<{ name: string; chance: number }>
	onOpen: () => void
	onViewBlockchain: (pack: any) => void
}

const PackCard: React.FC<PackCardProps> = ({ id, name, description, imageUrl, rarities, onOpen, onViewBlockchain }) => {
	const [selectedPack, setSelectedPack] = useState<any>(null)

	const handleClosePackModal = () => {
		setSelectedPack(null)
	}

	const handleOpenPackModal = () => {
		setSelectedPack({ id, name, description, rarities })
	}

	return (
		<div className="p-4 space-y-4 rounded-lg shadow-md bg-cardBackground">
			<img src={imageUrl} alt={name} className="object-cover w-full h-48 rounded-lg" />
			<h3 className="text-xl font-bold">{name}</h3>
			<p>{description}</p>
			<button
				onClick={handleOpenPackModal}
				className="px-4 py-2 transition-colors duration-200 ease-in-out rounded-full shadow-md bg-primary text-secondary hover:bg-secondary hover:text-primary"
			>
				Open
			</button>

			{/* Pack Modal */}
			{selectedPack && (
				<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
					<div className="p-4 space-y-4 rounded-lg shadow-md bg-dark w-96">
						<h3 className="text-xl font-semibold">{selectedPack.name}</h3>
						<p className="text-sm text-secondary">{selectedPack.description}</p>
						<hr />
						<h4 className="mb-2 text-lg font-semibold">Rarities</h4>
						<ul className="list-disc list-inside">
							{selectedPack.rarities.map((rarity: any) => (
								<li key={rarity.name}>
									<span className="font-semibold">{rarity.name}:</span> {rarity.chance}%
								</li>
							))}
						</ul>
						<hr />
						<div className="flex justify-between">
							<button
								type="button"
								className="px-4 py-2 transition-colors duration-200 ease-in-out rounded-full shadow-md bg-secondary text-primary hover:bg-primary hover:text-secondary"
								onClick={() => onViewBlockchain(selectedPack)}
							>
								<RiExternalLinkLine className="inline-block mr-2" /> Open
							</button>
							<button
								type="button"
								className="px-4 py-2 transition-colors duration-200 ease-in-out rounded-full shadow-md bg-primary text-secondary hover:bg-secondary hover:text-primary"
								onClick={handleClosePackModal}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default PackCard
