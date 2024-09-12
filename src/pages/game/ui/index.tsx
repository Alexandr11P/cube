import classes from './styles.module.scss'
import { GameBoard } from './gameBoard'
import { useUnit } from 'effector-react'
import { $money } from '../../../shared/model/money'

function GamePage() {

    const [money] = useUnit([$money])

    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.name}>name</div>
                <div className={classes.balance}>{money} (TND)</div>
            </div>
            <GameBoard />
        </div>
    )
}

export { GamePage }