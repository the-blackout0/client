import React from 'react'
import ConnectWallet from '../ConnectWallet'

const PageWrapper = ({ children }: any) => {
	return (
		<div className="relative flex justify-center min-h-screen py-4 bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			{children}
		</div>
	)
}

export default PageWrapper
