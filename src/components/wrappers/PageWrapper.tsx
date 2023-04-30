import React from 'react'
import ConnectWallet from '../ConnectWallet'
import Navbar from '../Navbar/Navbar'

const PageWrapper = ({ children }: any) => {
	return (
		<div className="relative flex flex-col justify-center min-h-screen py-4 bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0">
			<Navbar />
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			{children}
		</div>
	)
}

export default PageWrapper
