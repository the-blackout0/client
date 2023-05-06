import { supabase } from '@/utils/supabase-client'
import { useState, useEffect } from 'react'

const useGetUserId = walletAddr => {
	const [userId, setUserId] = useState(null)
	const [loading, setLoading] = useState(true)

	console.log('userId', userId)

	console.log('walletAddr', walletAddr)

	useEffect(() => {
		async function fetchUserId() {
			try {
				const { data, error } = await supabase.from('players').select('*').eq('walletAddr', walletAddr).single()
				console.log('data', data)
				if (error) throw error

				if (data) {
					setUserId(data.id)
				}
			} catch (error) {
				console.error('Error fetching user ID:', error)
			} finally {
				setLoading(false)
				console.log('done')
			}
		}

		if (walletAddr) {
			fetchUserId()
		}
	}, [walletAddr])

	return { userId, loading }
}

export default useGetUserId
