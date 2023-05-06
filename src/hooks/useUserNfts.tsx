// src/hooks/useUserNFTs.ts
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { fetchNFTs } from '@/components/NFTs/fetchNFTs'
import { nftsAtom } from '@/store/atom'

export default function useUserNFTs(userId: number) {
	const [nfts, setNfts] = useAtom(nftsAtom)

	useEffect(() => {
		if (userId) {
			fetchNFTs(userId).then(fetchedNFTs => {
				// todo: fix type error
				// @ts-ignore
				setNfts(fetchedNFTs)
			})
		}
	}, [userId, setNfts])
}
