import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetNftDetails = ({ url }: { url: string }) => {
	const [nftDetails, setNftDetails] = useState({})

	const fetchDetails = async () => {
		const res = await axios.get(url)

		return res
	}

	useEffect(() => {
		fetchDetails().then(res => setNftDetails(res.data))
	}, [])

	return nftDetails
}

export default useGetNftDetails
