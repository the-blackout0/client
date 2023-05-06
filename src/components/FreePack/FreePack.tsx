import React, { useEffect } from 'react'

import Button from '../Button'
import CardWrapper from '../Wrappers/CardWrapper'
import { usePacks } from '@/hooks/usePacks'
import { useAccount, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi'
import { updatePlayerDeck, updateUserDeck } from '@/utils/supabase-client'
import useGetUserId from '@/hooks/useGetUserId'

const cardIds = [1, 4, 5, 2, 8]

const FreePackCard = ({ onSendTransaction }) => {
	const { address, isConnecting, isDisconnected } = useAccount()
	console.log('address', address)
	const { userId, loading } = useGetUserId(address)

	const { mintPack } = usePacks()
	const handleClick = () => {
		mintPack()
	}

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

	console.log('userId', userId)

	useEffect(() => {
		if (!isSuccess && address && userId) {
			console.log('ran')
			// Update the user's deck in Supabase when the transaction is successful
			// Replace `newCardId` with the actual new card ID
			cardIds.map((item, index) => {
				console.log('ran & checked')

				updateUserDeck(userId, item)
					.then(data => {
						if (data) {
							console.log('User deck updated successfully:', data)
						}
					})
					.catch(error => {
						console.error('Error updating user deck:', error)
					})
			})
		}
	}, [isSuccess, address, userId])

	return (
		<CardWrapper title="Get Your Free Starting Pack">
			<p className="mb-4 text-secondary">Receive 1 Avatar, 5 Cards, and 1 Regular Pack for free.</p>

			<Button onClick={() => sendTransaction?.()} disabled={isLoading || !sendTransaction}>
				{isLoading ? 'Claiming...' : 'Claim now'}
			</Button>
			{isSuccess && (
				<div>
					Successfully claimed the free pack!{' '}
					<div>
						<a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
					</div>
				</div>
			)}
		</CardWrapper>
	)
}

export default FreePackCard
