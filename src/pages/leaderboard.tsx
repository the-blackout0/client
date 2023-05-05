import Leaderboard from '@/components/Leaderboard/Leaderboard'
import { fetchLeaderboardData } from '@/components/Leaderboard/fetchLeaderboardData'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import { supabase } from '@/utils/supabase-client'
import React, { useEffect, useState } from 'react'

const LeaderboardPage = () => {
	const [users, setUsers] = useState<any>([])
	const [leaderboardData, setLeaderboardData] = useState<any>([])

	useEffect(() => {
		fetchLeaderboard()
	}, [])

	const fetchLeaderboard = async () => {
		const fetchedLeaderboard = await fetchLeaderboardData()
		setLeaderboardData(fetchedLeaderboard)
	}

	const fetchUsers = async () => {
		const { data, error } = await supabase.from('players').select('*').order('nfts', { ascending: false })

		if (error) console.error('Error fetching users:', error)
		if (data) setUsers(data)
	}

	return (
		<PageWrapper>
			<Leaderboard leaderboardData={leaderboardData} />
		</PageWrapper>
	)
}

export default LeaderboardPage
