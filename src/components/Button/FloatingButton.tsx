import React from 'react'

interface FloatingButtonProps {
	href: string
	text: string
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ href, text }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="fixed px-4 py-2 text-black transition-colors duration-200 ease-in-out rounded-full shadow-md bottom-8 right-8 bg-primary hover:bg-secondary hover:text-primary"
		>
			{text}
		</a>
	)
}

export default FloatingButton
