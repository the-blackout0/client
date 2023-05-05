export const fetchNFTs = async () => {
	// Replace this mock function with the actual function to fetch NFTs from the blockchain.
	return new Promise(resolve => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					name: 'NFT 1',
					description: 'This is NFT 1 description.',
					image: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2016/04/A-Light-in-the-Darkness-300x424.png',
					blockchainLink: 'https://example.com/blockchain-link/1',
					tags: ['Tag1', 'Tag2'],
				},
				{
					id: 2,
					name: 'NFT 2',
					description: 'This is NFT 2 description.',
					image: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2016/04/A-Light-in-the-Darkness-300x424.png',
					blockchainLink: 'https://example.com/blockchain-link/2',
					tags: ['Tag1', 'Tag3'],
				},
			])
		}, 1000)
	})
}
