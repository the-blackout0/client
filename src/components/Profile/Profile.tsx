import React, { useState } from 'react'
import { useAccount, useBalance, useConnect, useDisconnect, usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ConnectWallet from '../ConnectWallet'
import PageWrapper from '../Wrappers/PageWrapper'
import { BigNumber } from 'ethers'
import UserNFTs from '../NFTs/UserNFTs'
import FreePack from '../FreePack/FreePack'
import UserPacks from './UserPacks'
import UserAvatars from './UserAvatars'
import UserHeader from './UserHeader'
import { upsertPlayer } from '@/utils/supabase-client'
import profileImage from '/src/assets/avatars/avatar1.png'

// images
import image1 from '/src/assets/avatars/avatar1.png'
import image2 from '/src/assets/avatars/avatar2.png'
import image3 from '/src/assets/avatars/nova.gif'
import image4 from '/src/assets/avatars/blitz.gif'
import image5 from '/src/assets/avatars/cypher.gif'

const userAvatars = [
	{
		id: '1',
		name: 'Cyber Samurai',
		imageUrl: image5.src,
	},
	{
		id: '2',
		name: 'Techno Ninja',
		imageUrl: image1.src,
	},
	{
		id: '3',
		name: 'Nova',
		imageUrl: image3.src,
	},
	{
		id: '4',
		name: 'Blitz ',
		imageUrl: image4.src,
	},
]

const userData = {
	address: '0x9b4fd89d6aF616214e3ee6A4b27714f84B90A8CF',
	nftCount: 532,
	xp: 1032,
	level: 5,
	wins: 20,
	imageUrl: profileImage.src,
}
const ProfileComponent = () => {
	const { address, isConnected } = useAccount({
		onConnect({ address, connector, isReconnected }) {
			console.log('connected!')
			upsertPlayer({ walletAddr: address, name: address })
		},
	})
	const { connect } = useConnect({
		onSuccess(data) {
			console.log('Connect', data)
		},
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

	connect

	return !isConnected ? (
		<PageWrapper>
			<p>Please log in to access your profile</p>
		</PageWrapper>
	) : (
		<PageWrapper>
			<div className="flex flex-col w-2/3 space-y-5">
				<UserHeader {...userData} />

				<UserAvatars avatars={userAvatars} />

				{canMintFree && (
					<div>
						<FreePack />
					</div>
				)}

				<div>
					<UserNFTs />
				</div>
				<UserPacks />
			</div>
		</PageWrapper>
	)
}

export default ProfileComponent
