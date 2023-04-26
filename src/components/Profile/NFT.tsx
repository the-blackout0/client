import React from 'react'

const NFT = ({ id, name, uri }) => {
	console.log('id,name,uri', id, name, uri)
	return (
		<div>
			<p>ID: {id}</p>
			<p>name: {name}</p>
			<p>url: {uri}</p>
		</div>
	)
}

export default NFT
