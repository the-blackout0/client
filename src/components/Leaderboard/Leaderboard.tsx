import React, { useState, useEffect } from 'react'
import { fetchLeaderboardData } from './fetchLeaderboardData'

const Leaderboard = () => {
	const [leaderboardData, setLeaderboardData] = useState<any>([])
	const [sortBy, setSortBy] = useState<any>('nftsOwned')

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchLeaderboardData()
			setLeaderboardData(data)
		}

		fetchData()
	}, [])

	const sortedLeaderboardData = [...leaderboardData].sort((a, b) => b[sortBy] - a[sortBy])

	return (
		<div className="container px-4 py-8 mx-auto">
			<h2 className="mb-4 text-2xl font-bold text-secondary">Leaderboard</h2>
			<div className="flex items-center mb-4 space-x-4">
				<label htmlFor="sortby" className="text-secondary">
					Sort by:
				</label>
				<select
					id="sortby"
					className="p-2 border-2 rounded-lg bg-dark text-secondary border-primary"
					value={sortBy}
					onChange={e => setSortBy(e.target.value)}
				>
					<option value="nftsOwned">NFTs Owned</option>
					<option value="xp">XP</option>
					<option value="gamesWon">Games Won</option>
				</select>
			</div>
			<table className="w-full text-secondary">
				<thead>
					<tr className="bg-primary">
						<th className="p-4">#</th>
						<th className="p-4">Username</th>
						<th className="p-4">NFTs Owned</th>
						<th className="p-4">XP</th>
						<th className="p-4">Games Won</th>
					</tr>
				</thead>
				<tbody>
					{sortedLeaderboardData.map((user, index) => (
						<tr key={user.id} className={index % 2 ? 'bg-dark' : 'bg-secondary'}>
							<td className="p-4">{index + 1}</td>
							<td className="p-4">{user.username}</td>
							<td className="p-4">{user.nftsOwned}</td>
							<td className="p-4">{user.xp}</td>
							<td className="p-4">{user.gamesWon}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Leaderboard
