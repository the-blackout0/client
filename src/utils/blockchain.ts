import wagmi from 'wagmi'
import { Contract } from '@ethersproject/contracts'
import { BigNumber, ethers } from 'ethers'

import PacksContractABI from '../contracts/Packs.json'

// ERC-721 ABI with the required methods
const erc721Abi = [
	'function balanceOf(address _owner) view returns (uint256)',
	'function tokenOfOwnerByIndex(address _owner, uint256 _index) view returns (uint256)',
	'function tokenURI(uint256 _tokenId) view returns (string)',
]

export const getUserNFTs = async (userAddress, contractAddress, signer) => {
	const erc721Contract = new Contract(contractAddress, erc721Abi, signer)

	console.log('ran')

	const nftBalance = await erc721Contract.balanceOf(userAddress)
	console.log('nftBalance', nftBalance.valueOf())
	const userNFTs = []

	for (let i = 0; i < nftBalance; i++) {
		const tokenId = await erc721Contract.tokenOfOwnerByIndex(userAddress, i)
		const tokenURI = await erc721Contract.tokenURI(tokenId)

		userNFTs.push({ tokenId, tokenURI })
	}

	console.log('userNFTs', userNFTs)
	return userNFTs
}

const contractAddresses = {
	Packs: 'YOUR_PACKS_CONTRACT_ADDRESS',
	Cards: 'YOUR_CARDS_CONTRACT_ADDRESS',
	Avatars: 'YOUR_AVATARS_CONTRACT_ADDRESS',
}

export const getPacksContract = (provider: ethers.providers.Provider) => {
	// todo: fix this
	// @ts-ignore
	return new ethers.Contract(contractAddresses.Packs, PacksContractABI, provider.getSigner())
}

// export const getCardsContract = (provider: ethers.providers.Provider) => {
// 	return new ethers.Contract(contractAddresses.Cards, CardsContractABI, provider.getSigner())
// }

// export const getAvatarsContract = (provider: ethers.providers.Provider) => {
// 	return new ethers.Contract(contractAddresses.Avatars, AvatarsContractABI, provider.getSigner())
// }
