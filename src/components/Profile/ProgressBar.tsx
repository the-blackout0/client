import React from 'react'

const ProgressBar = ({ progress, maxProgress }) => {
	const percentage = Math.min((progress / maxProgress) * 100, 100)

	return (
		<div className="h-2 rounded-lg bg-lighter">
			<div className="h-full rounded-lg bg-primary" style={{ width: `${percentage}%` }}></div>
		</div>
	)
}

export default ProgressBar
