import React, { ForwardedRef, forwardRef, useState } from 'react'
import classes from './select.module.scss'
type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

const Select = forwardRef(({ onClick, onBlur, className, children, ...props }: InputProps, ref: ForwardedRef<HTMLSelectElement>) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <select ref={ref} className={`${isOpen ? classes.up : classes.down} ${classes.select} ${className || ''}`} {...props}
            onBlur={(e) => {
                if (typeof onBlur === 'function') { onBlur(e) }
                setIsOpen(false)
            }}
            onClick={(e) => {
                if (typeof onClick === 'function') { onClick(e) }
                setIsOpen(s => !s)
            }}>
            {children}
        </select>
    )
})

export { Select }