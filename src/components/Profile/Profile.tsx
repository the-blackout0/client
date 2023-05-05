import React, { useState } from 'react'
import { useAccount, useBalance, useConnect, useDisconnect, usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ConnectWallet from '../ConnectWallet'
import PageWrapper from '../Wrappers/PageWrapper'
import { BigNumber } from 'ethers'
import UserNFTs from '../NFTs/UserNFTs'
import Welcome from './Welcome'
import FreePack from '../FreePack/FreePack'
import Button from '../Button'
import UserCard from './UserCard'

const ProfileComponent = () => {
	const { address, isConnected } = useAccount()
	const { connect } = useConnect({
		connector: new InjectedConnector(),
	})
	const { disconnect } = useDisconnect()
	const { data, isError, isLoading } = useBalance({
		addressOrName: address,
	})
	const { config } = usePrepareSendTransaction({
		request: { to: 'moxey.eth', value: BigNumber.from('10000000000000000') },
	})
	const { data: txData, isLoading: isTxLoading, isSuccess, sendTransaction } = useSendTransaction(config)

	const [canMintFree, setCanMintFree] = useState(true)

	return !isConnected ? (
		<PageWrapper>
			<p>Please log in to access your profile</p>
		</PageWrapper>
	) : (
		<PageWrapper>
			<div className="flex flex-col w-2/3 space-y-5">
				<div>
					<UserCard userData={{ address: 'asdasodkpo', image: 'asd', numNFTs: 532, xp: 1032, level: 5 }} />
				</div>

				{canMintFree && (
					<div>
						<FreePack />
					</div>
				)}
				<div>
					<UserNFTs />
				</div>
			</div>
		</PageWrapper>
	)
}

export default ProfileComponent
