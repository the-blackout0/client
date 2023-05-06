import { FC, useCallback } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'

type Visibility = 'always' | 'connected' | 'not_connected'

interface ConnectWalletProps {
	show?: Visibility
	onConnect?: () => void
}

const ConnectWallet: FC<ConnectWalletProps> = ({ show = 'always', onConnect }) => {
	const { isConnected } = useAccount()

	const handleConnect = useCallback(async () => {
		if (!isConnected) return
		if (onConnect) onConnect()
	}, [isConnected, onConnect])

	if ((show == 'connected' && !isConnected) || (show == 'not_connected' && isConnected)) return null

	return <ConnectKitButton />
}

export default ConnectWallet
