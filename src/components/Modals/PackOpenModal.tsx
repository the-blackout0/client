// src/components/PackOpenedModal.tsx
import React from 'react'

interface Card {
	id: number
	name: string
	image: string
}

interface PackOpenedModalProps {
	isOpen: boolean
	onClose: () => void
	cards: Card[]
	txHash: string
}

const PackOpenedModal: React.FC<PackOpenedModalProps> = ({ isOpen, onClose, cards, txHash }) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-50 bg-dark">
			<div className="relative w-full max-w-2xl p-6 rounded-lg bg-dark">
				<button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4">
					<span className="sr-only">Close</span>
					<svg
						className="w-6 h-6 text-gray-600 hover:text-gray-800"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<h2 className="text-3xl font-bold">Pack Opened</h2>
				<p className="mt-4">You have received the following cards:</p>
				<div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-5">
					{cards.map(card => (
						<div key={card.id} className="flex flex-col items-center">
							<img src={card.image} alt={`Card #${card.id}`} className="w-24 h-36" />
							<p className="mt-2">{card.name}</p>
						</div>
					))}
				</div>
				<div className="mt-6">
					<a
						href={`https://etherscan.io/tx/${txHash}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-4 py-2 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700"
					>
						View TX on Canto Explorer
					</a>
				</div>
			</div>
		</div>
	)
}

export default PackOpenedModal
