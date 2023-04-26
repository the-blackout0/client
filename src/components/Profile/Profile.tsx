import React from 'react'
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ConnectWallet from '../ConnectWallet'
import PageWrapper from '../wrappers/PageWrapper'

const ProfileComponent = () => {
	const { address, isConnected } = useAccount()
	const { connect } = useConnect({
		connector: new InjectedConnector(),
	})
	const { disconnect } = useDisconnect()
	const { data, isError, isLoading } = useBalance({
		addressOrName: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
	})

	return (
		<div>
			{!isConnected ? (
				<PageWrapper>Profile</PageWrapper>
			) : (
				<PageWrapper>
					<div>
						<div className="flex flex-col items-start">
							Connected to {address}
							<button onClick={() => disconnect()}>Disconnect</button>
						</div>
						<div>
							Balance: {data?.formatted} {data?.symbol}
						</div>
					</div>
				</PageWrapper>
			)}
		</div>
	)
}

export default ProfileComponent
