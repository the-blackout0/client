import React, { useEffect, useState } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi'
import PackOpenedModal from '../Modals/PackOpenModal'
import image1 from '/src/assets/cards/C_energy_shield.png'
import image2 from '/src/assets/cards/C_cyborg_warrior.png'
import image3 from '/src/assets/cards/C_tech_specialist.png'

interface PackCardProps {
	id: string
	name: string
	description: string
	imageUrl: string
	rarities: Array<{ name: string; chance: number }>
	onOpen: () => void
	onViewBlockchain: (pack: any) => void
}

interface Card {
	id: number
	name: string
	image: any
}

const PackCard: React.FC<PackCardProps> = ({ id, name, description, imageUrl, rarities, onOpen, onViewBlockchain }) => {
	const [selectedPack, setSelectedPack] = useState<any>(null)
	const [isPackOpenedModalOpen, setIsPackOpenedModalOpen] = useState(false)
	const [openedCards, setOpenedCards] = useState<Card[]>([])
	const [txHash, setTxHash] = useState('')

	const { config } = usePrepareSendTransaction({
		request: {
			to: '0x9e1cd1affb00BE10Be510CD2ceD8df8c6BdDa568',
			value: undefined,
		},
	})
	const { data, sendTransaction } = useSendTransaction(config)

	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash,
	})

	// This is just an example of how to open the modal with sample cards and a transaction hash.
	// You'll need to replace this with the actual logic for opening packs and receiving cards.
	const handleOpenPack = () => {
		// wait 3 seconds
		setTimeout(() => {
			const sampleCards: Card[] = [
				{ id: 1, name: 'Energy Shield', image: image1.src },
				{ id: 2, name: 'Cyborg Warrior', image: image2.src },
				{ id: 3, name: 'Tech Specialist', image: image3.src },
				{ id: 4, name: 'Cyborg Warrior', image: image2.src },
				{ id: 5, name: 'Tech Specialist', image: image3.src },
			]
			const sampleTxHash = data?.hash

			setOpenedCards(sampleCards)
			setTxHash(sampleTxHash)
			setIsPackOpenedModalOpen(true)
		}, 3000) // 3000 milliseconds = 3 seconds
	}

	// useEffect(() => {
	// 	isSuccess && handleOpenPack()
	// }, [isSuccess, data?.hash])

	const handleClosePackModal = () => {
		setSelectedPack(null)
	}

	const handleOpenPackModal = () => {
		setSelectedPack({ id, name, description, rarities })
	}

	return (
		<div className="p-4 space-y-4 rounded-lg shadow-md bg-darker">
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
								onClick={handleOpenPack}
							>
								Open Pack
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

			{/* after minting modal */}
			<PackOpenedModal
				isOpen={isPackOpenedModalOpen}
				onClose={() => setIsPackOpenedModalOpen(false)}
				cards={openedCards}
				txHash={txHash}
			/>
		</div>
	)
}

export default PackCard
