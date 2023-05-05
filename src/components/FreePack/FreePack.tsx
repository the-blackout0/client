import React from 'react'

import Button from '../Button'
import CardWrapper from '../Wrappers/CardWrapper'

const FreePackCard = ({ onSendTransaction }) => {
	const handleClick = () => {
		onSendTransaction()
	}

	return (
		<CardWrapper title="Get Your Free Starting Pack">
			<p className="mb-4 text-secondary">Receive 1 Avatar, 5 Cards, and 1 Regular Pack for free.</p>
			<Button onClick={handleClick}>Claim Now</Button>
		</CardWrapper>
	)
}

export default FreePackCard
