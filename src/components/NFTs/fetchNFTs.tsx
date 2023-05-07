import image1 from '/src/assets/cards/C_tech_specialist.png'
import image2 from '/src/assets/cards/C_energy_shield.png'
import image3 from '/src/assets/cards/C_cyborg_warrior.png'
import image4 from '/src/assets/cards/C_scavenger.png'

export const fetchNFTs = async userId => {
	// Replace this mock function with the actual function to fetch NFTs from the blockchain.
	return new Promise(resolve => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					name: 'Tech Specialist',
					description: 'A skilled hacker who can help players gain access to valuable resources. ',
					image: image1.src,
					blockchainLink: 'https://example.com/blockchain-link/1',
					tags: ['Rare', 'Level 3'],
				},
				{
					id: 2,
					name: 'Energy Shield',
					description: 'A high-tech shield that can absorb damage.',
					image: image2.src,
					blockchainLink: 'https://example.com/blockchain-link/2',
					tags: ['Super Rare', 'Level 1'],
				},
				{
					id: 3,
					name: 'Cyborg Warrior',
					description: 'A soldier who has been augmented with cybernetic enhancements.',
					image: image3.src,
					blockchainLink: 'https://example.com/blockchain-link/2',
					tags: ['Legendary', 'Level 2'],
				},
				{
					id: 4,
					name: 'Scavenger',
					description: 'A survivor who is skilled at scavenging for supplies in the post-apocalyptic world.',
					image: image4.src,
					blockchainLink: 'https://example.com/blockchain-link/2',
					tags: ['Epic', 'Level 1'],
				},
				{
					id: 5,
					name: 'EMP Grenade',
					description: 'A powerful weapon that can disable enemy cards.',
					image: image1.src,
					blockchainLink: 'https://example.com/blockchain-link/2',
					tags: ['Super Rare', 'Level 9'],
				},
				{
					id: 6,
					name: 'Cyborg Warrior',
					description: 'A soldier who has been augmented with cybernetic enhancements.',
					image: image3.src,
					blockchainLink: 'https://example.com/blockchain-link/2',
					tags: ['Legendary', 'Level 4'],
				},
				{
					id: 7,
					name: 'Tech Specialist',
					description: 'A skilled hacker who can help players gain access to valuable resources. ',
					image: image1.src,
					blockchainLink: 'https://example.com/blockchain-link/1',
					tags: ['Rare', 'Level 7'],
				},
			])
		}, 1000)
	})
}
