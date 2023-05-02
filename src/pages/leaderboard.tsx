import PageWrapper from '@/components/wrappers/PageWrapper'
import { supabase } from '@/utils/supabase-client'
import React, { useEffect, useState } from 'react'

const Leaderboard = () => {
	const [users, setUsers] = useState<any>([])

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		const { data, error } = await supabase.from('players').select('*').order('nfts', { ascending: false })

		if (error) console.error('Error fetching users:', error)
		if (data) setUsers(data)
	}

	return (
		<PageWrapper>
			<div className="w-2/3">
				<div className="container mx-auto my-10">
					<h1 className="mb-5 text-3xl font-bold">Leaderboard</h1>
					<table className="w-full table-auto">
						<thead>
							<tr>
								<th className="px-4 py-2">Rank</th>
								<th className="px-4 py-2">User</th>
								<th className="px-4 py-2">NFT Amount</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={user.id} className={`${index % 2 ? 'bg-gray-100 text-black' : ''}`}>
									<td className="px-4 py-2">{index + 1}</td>
									<td className="px-4 py-2">{user.name}</td>
									<td className="px-4 py-2">{user.nfts}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</PageWrapper>
	)
}

export default Leaderboard
