import React, { useState } from 'react'

const Opening = () => {
	const [packName, setPackName] = useState('Rare Pack')

	const chances = [
		{ rarity: 'rare', chances: 50 },
		{ rarity: 'epic', chances: 30 },
		{ rarity: 'legendary', chances: 15 },
		{ rarity: 'mythic', chances: 5 },
	]
	return (
		<div>
			<p>You are about to open {packName}!</p>
			<p>Chances:</p>
			{chances.map((chance, index) => {
				return (
					<div key={index}>
						<p>
							{chance.rarity}: {chance.chances}%
						</p>
					</div>
				)
			})}
		</div>
	)
}

export default Opening
