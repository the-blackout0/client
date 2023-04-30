import React from 'react'
import Button from '../Button'
import useGetNftDetails from '@/hooks/getNftDetails'

const NFT = ({ id, name, uri }) => {
	const details = useGetNftDetails({ url: uri })
	const tags = ['rare', 'minted']

	console.log('details', details)

	console.log('id,name,uri', id, name, uri)
	return (
		<div>
			<div>{/* image */}</div>
			<div>
				<p className="text-3xl">Air Raid</p>
				<p>Occaecat nisi et consequat velit elit enim minim ad velit.</p>
				{/* map through tags */}
				<div className="flex mt-5 space-x-2">
					{tags.map((tag, index) => (
						<div className="px-2 py-1 bg-red-600 rounded-md " key={index}>
							<p>{tag}</p>
						</div>
					))}
				</div>
				<div className="w-full mt-5 space-x-5">
					<Button>Trade</Button>
					<Button>View on Blockchain</Button>
				</div>
			</div>
		</div>
	)
}

export default NFT
