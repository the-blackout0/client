import React from 'react'

const Navbar = () => {
	return (
		<div className="absolute items-center justify-center w-2/3 p-5 mb-3 top-3">
			<div className="flex items-center justify-center mt-5 space-x-3 text-xl">
				<a href="/supa">Supabase</a>
				<a href="/profile">Profile</a>
				<a href="/leaderboard">Leaderboard</a>
			</div>
		</div>
	)
}

export default Navbar
