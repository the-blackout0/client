export const fetchLeaderboardData = async () => {
	// Replace this mock function with the actual function to fetch leaderboard data from your backend.
	return new Promise(resolve => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					username: 'User1',
					nftsOwned: 50,
					xp: 1000,
					gamesWon: 25,
				},
				{
					id: 2,
					username: 'User2',
					nftsOwned: 30,
					xp: 1500,
					gamesWon: 20,
				},
				{
					id: 3,
					username: 'User3',
					nftsOwned: 10,
					xp: 800,
					gamesWon: 10,
				},
			])
		}, 1000)
	})
}
