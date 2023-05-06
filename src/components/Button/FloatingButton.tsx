import { GAME_URL } from '@/config'
import useGetUserId from '@/hooks/useGetUserId'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import React from 'react'
import { useAccount, useConnect } from 'wagmi'

interface FloatingButtonProps {
	text: string
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ text }) => {
	const { address, isConnecting, isDisconnected } = useAccount()

	const { userId } = useGetUserId(address)
	return (
		<a
			href={`${GAME_URL}/#/lobby?userId=${userId}`}
			target="_blank"
			rel="noreferrer"
			className="fixed flex items-center justify-center px-4 py-2 text-black transition-colors duration-200 ease-in-out rounded-full shadow-md bottom-8 right-8 bg-primary hover:bg-secondary hover:text-primary"
		>
			{text}
			{/* <ExternalLinkIcon className="w-4 h-4 ml-2 " /> */}
		</a>
	)
}

export default FloatingButton
