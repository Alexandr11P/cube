import React from 'react'
import classes from './button.module.scss'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
{ typeStyle: 'button_green' | 'button_violet', isActive?: boolean }

function Button({ isActive, typeStyle, children, className, ...props }: ButtonProps) {
    return (
        <button className={`${classes[typeStyle]} ${isActive && classes.active} ${className || ''}`} {...props}>
            {children}
        </button>
    )
}

export { Button }