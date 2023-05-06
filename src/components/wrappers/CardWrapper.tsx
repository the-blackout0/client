import React from 'react'

const CardWrapper = ({ title, children, onClick, customClassName }) => {
	return (
		<div className={`p-4 rounded-lg shadow-lg bg-darker ${customClassName}`} onClick={onClick}>
			{title && (
				<div className="p-2 rounded-t-lg bg-lighter text-secondary">
					<h2>{title}</h2>
				</div>
			)}
			<div className="p-4">{children}</div>
		</div>
	)
}

export default CardWrapper
