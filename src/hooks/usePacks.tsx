import { useCallback } from 'react'
import { useProvider } from 'wagmi'
import { getPacksContract } from '../utils/blockchain'

export const usePacks = () => {
	const provider = useProvider()

	console.log('provider', provider)

	const mintPack = useCallback(async () => {
		if (!provider) return

		const packsContract = getPacksContract(provider)
		const tx = await packsContract.mintPack()
		await tx.wait()
	}, [provider])

	return { mintPack }
}
