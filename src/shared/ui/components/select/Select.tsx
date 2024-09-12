import React, { ForwardedRef, forwardRef, useState } from 'react'
import classes from './select.module.scss'
import up from './img/up.svg'
import down from './img/down.svg'
type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

const Select = forwardRef(({ onClick, onBlur, className, children, style, ...props }: InputProps, ref: ForwardedRef<HTMLSelectElement>) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <select ref={ref} className={`${classes.select} ${className || ''}`} {...props}
            style={{ ...style, backgroundImage: `url(${isOpen ? up : down})` }}
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