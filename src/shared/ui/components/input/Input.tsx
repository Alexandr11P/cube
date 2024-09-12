import React from 'react'
import classes from './input.module.scss'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
{ isError?: boolean, errorText?: string }

function Input({ isError, errorText, className, ...props }: InputProps) {
    return (
        <label className={classes.label}>
            <input className={`${classes.input} ${className || ''} ${isError ? classes.error : ''}`} {...props} />
            {isError ? errorText || 'Error' : ''}
        </label>
    )
}

export { Input }