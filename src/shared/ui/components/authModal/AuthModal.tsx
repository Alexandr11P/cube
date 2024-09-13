import { useUnit } from 'effector-react'
import { Button, Input } from '..'
import classes from './authModal.module.scss'
import { $authModal, close } from '../../../model/authModal'
import { authPostFx } from '../../../api/authPost'
import { useState } from 'react'



function AuthModal() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [authFx] = useUnit([authPostFx])
    const [closeModal, isOpen] = useUnit([close, $authModal])

    const defaultErrorText = {
        login: 'Логин может состоять из цифр и букв A-Z',
        password: 'Пароль должен быть от 6 до 16 символов'
    }

    const [errorText, setErrorText] = useState<typeof defaultErrorText | null>(defaultErrorText)
    const [authError, setAuthError] = useState(false)

    function validLogin() {
        if (login.match(/\W/)) { return true }
        else { return false }
    }
    function validPassword() {
        if (!password.match(/^.{6,16}$/) && !!password) { return true }
        else { return false }
    }

    return (
        isOpen && <div className={classes.back}>
            <div className={classes.main}>
                <div className={classes.close} onClick={() => closeModal()}></div>
                <Input
                    onFocus={() => { setErrorText(defaultErrorText); setAuthError(false) }}
                    placeholder='Login'
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    errorText={errorText?.login}
                    isError={validLogin() || authError} />
                <Input
                    onFocus={() => { setErrorText(defaultErrorText); setAuthError(false) }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                    errorText={errorText?.password}
                    isError={validPassword() || authError} />
                <Button typeStyle="button_violet" disabled={validLogin() || validPassword()}
                    onClick={() => {
                        if (!login || !password) { setAuthError(true); return }
                        authFx({ login: login, password: password })
                            .catch(e => {
                                if (e.error) { setErrorText({ login: ' ', password: 'Неверный логин или пароль' }) }
                                else { setErrorText(null) }
                                setAuthError(true)
                            })
                    }
                    }
                >Войти</Button>
            </div>
        </div>
    )
}

export { AuthModal }