import { getUserNFTs } from '@/utils/blockchain'
import React, { useEffect, useState } from 'react'
import { useAccount, useSigner } from 'wagmi'
import NFT from './NFT'

const UserNFTs = () => {
	const { data: signer, isError, isLoading } = useSigner()
	const { address, isConnected } = useAccount()

	const [userNFTs, setUserNFTs] = useState<any>([])

	useEffect(() => {
		signer &&
			getUserNFTs(
				'0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
				'0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270',
				signer
			)
				.then(res => {
					console.log('res', res)
					setUserNFTs(res)
				})
				.catch(err => console.log('err', err))
	}, [signer])

	return (
		<div>
			{userNFTs &&
				userNFTs.map((item, index) => {
					return (
						<NFT
							uri={item.tokenURI}
							name={item.tokenURI}
							id={item.tokenId.toNumber()}
							key={item.tokenId.toNumber()}
						/>
					)
				})}
		</div>
	)
}

export default UserNFTs
