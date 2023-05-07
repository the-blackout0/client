import React from 'react'

interface ButtonProps {
	onClick?: () => void
	label?: string
	newTab?: boolean
	link?: string
	className?: string
	children?: any
	variant?: string
	icon?: any
}

const Button = ({ onClick, label, newTab, link, className, children, variant, icon }: ButtonProps) => {
	return (
		<a
			href={link}
			target={newTab ? '_blank' : ''}
			rel="noreferrer"
			onClick={onClick}
			className={`btn ${className} ${variant === 'outline' ? 'btn-outline' : ''} `}
		>
			{icon && icon}
			{children}
		</a>
	)
}

export default Button
