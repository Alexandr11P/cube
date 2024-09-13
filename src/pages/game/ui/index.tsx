import classes from './styles.module.scss'
import { GameBoard } from './gameBoard'
import { useUnit } from 'effector-react'
import { $money } from '../../../shared/model/money'
import { Button } from '../../../shared/ui/components'
import { $auth } from '../../../shared/model/auth'
import { AuthModal } from '../../../shared/ui/components/authModal/AuthModal'
import { open } from '../../../shared/model/authModal'
import { authCookieFx } from '../../../shared/api/authCookie'
import { useEffect } from 'react'


function GamePage() {
    const [auth] = useUnit([authCookieFx])

    useEffect(() => {
        if (document.cookie.includes('connect.sid=')) { auth() }
    }, [])

    const [openModal] = useUnit([open])
    const [isAuth] = useUnit([$auth])
    const [money] = useUnit([$money])

    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.name}>Test Game</div>
                {!isAuth
                    ? <div className={classes.authBtn}>
                        <Button typeStyle="button_violet" onClick={() => openModal()}>Вход</Button>
                        <Button typeStyle="button_violet" style={{ marginLeft: '10px' }}>Регистрация</Button>
                    </div>
                    : <div className={classes.balance}>{money} (TND)</div>
                }
            </div>
            <GameBoard />
            <AuthModal />
        </div>
    )
}

export { GamePage }