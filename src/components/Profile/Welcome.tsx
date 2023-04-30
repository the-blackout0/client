import React from 'react'
import Button from '../Button'

const Welcome = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-700 max-w-[500px] p-10 rounded-lg text-center space-y-10">
			<div>
				<p className="mb-5 text-3xl">Welcome to Canto Game!</p>
				<p className="text-gray-100 text-md">
					Adipisicing magna eu magna elit nulla adipisicing proident amet. Sunt dolor quis est culpa Lorem
					incididunt duis consequat irure nisi.
				</p>
			</div>
			<div>
				<Button>Mint free deck</Button>
			</div>
		</div>
	)
}

export default Welcome
