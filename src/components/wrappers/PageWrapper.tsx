import React from 'react'
import ConnectWallet from '../ConnectWallet'
import Navbar from '../Navbar/Navbar'

const PageWrapper = ({ children }: any) => {
	return (
		<div className="relative flex flex-col justify-center min-h-screen py-4 mt-[100px] items-top sm:items-center sm:pt-0 items-center">
			<Navbar />

			{children}
		</div>
	)
}

export default PageWrapper
