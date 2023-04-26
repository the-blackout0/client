import React from 'react'
import { useAccount, useBalance, useConnect, useDisconnect, usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ConnectWallet from '../ConnectWallet'
import PageWrapper from '../wrappers/PageWrapper'
import { BigNumber } from 'ethers'
import UserNFTs from './UserNFTs'

const ProfileComponent = () => {
	const { address, isConnected } = useAccount()
	const { connect } = useConnect({
		connector: new InjectedConnector(),
	})
	const { disconnect } = useDisconnect()
	const { data, isError, isLoading } = useBalance({
		addressOrName: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
	})

	// tx

	const { config } = usePrepareSendTransaction({
		request: { to: 'moxey.eth', value: BigNumber.from('10000000000000000') },
	})
	const { data: txData, isLoading: isTxLoading, isSuccess, sendTransaction } = useSendTransaction(config)

	return (
		<div>
			{!isConnected ? (
				<PageWrapper>Profile</PageWrapper>
			) : (
				<PageWrapper>
					<div className="flex flex-col space-y-5">
						<div>
							<div className="flex flex-col items-start">
								Connected to {address}
								<button onClick={() => disconnect()}>Disconnect</button>
							</div>
							<div>
								Balance: {data?.formatted} {data?.symbol}
							</div>
						</div>
						<div>
							<button
								className="px-6 py-2 text-lg bg-red-800 rounded-md"
								onClick={() => sendTransaction?.()}
							>
								Mint
							</button>
						</div>
						<div>
							<UserNFTs />
						</div>
					</div>
				</PageWrapper>
			)}
		</div>
	)
}

export default ProfileComponent
