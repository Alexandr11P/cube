import { useMemo, useRef, useState } from 'react'
import { Button, Input, Select } from '../../../../shared/ui/components'
import classes from './styles.module.scss'
import { Cube } from './cube';
import { useUnit } from 'effector-react';
import { minus, plus } from '../../../../shared/model/money';

function GameBoard() {

    const [plusFn, minusFn] = useUnit([plus, minus])

    const [win, setWin] = useState<1 | 0 | -1>(0)

    const [isRepeat, setIsRepeat] = useState(1);
    const [dice, setDice] = useState(1);

    const [numActive, setNumActive] = useState(false);
    const [even, setEven] = useState(false);
    const [odd, setOdd] = useState(false);
    const [three, setThree] = useState(false);
    const [six, setSix] = useState(false);

    const [num, setNum] = useState<'' | number>(1);

    const betSelect = useRef<HTMLSelectElement>(null);

    const winText = useMemo(() => { return betSelect.current?.value }, [dice, isRepeat]);

    function resetAllbtn() { setNumActive(false); setEven(false); setOdd(false); setThree(false); setSix(false) }

    function onClickDice() {
        minusFn(Number(betSelect.current?.value))
        const random = Math.ceil(Math.random() * 10 / 1.67)
        if (random === dice) { setIsRepeat(s => -s) }
        if ((random % 2 === 0 && even) ||
            (random % 2 === 1 && odd) ||
            (random > 0 && random < 4 && three) ||
            (random > 3 && random < 7 && six)) { setWin(1); plusFn(Number(betSelect.current?.value) * 2) }
        else {
            if (random === num && numActive) { setWin(1); plusFn(Number(betSelect.current?.value) * 3) }
            else { setWin(-1) }
        }

        setDice(random)
    }

    return (
        <div className={classes.main}>{
            win === 1 && <div className={classes.header}>Результат броска кубика: {dice}<br />
                <div>Вы выйграли {winText} TND!</div>
            </div> ||
            win === -1 && <div className={classes.header}>Результат броска кубика: {dice}<br />
                <div>Повезет в следующий раз!</div>
            </div> ||
            <div className={classes.header}>Сделайте ставку</div>}
            <div className={classes.cube}>
                <Cube num={dice as 1} isRepeat={isRepeat} />
            </div>
            <div className={classes.bet}>
                <div className={classes.text}>Размер ставки</div>
                <Select ref={betSelect}>
                    <option value="1">1.00</option>
                    <option value="5">5.00</option>
                    <option value="10">10.00</option>
                    <option value="15">15.00</option>
                    <option value="20">20.00</option>
                </Select>
            </div>
            <div>
                <div className={classes.text}>Варианты ставок</div>
                <div className={classes.variants}>
                    <Button typeStyle="button_violet" isActive={even}
                        onClick={() => { resetAllbtn(); setEven(true) }}>
                        Четное</Button>
                    <Button typeStyle="button_violet" isActive={odd}
                        onClick={() => { resetAllbtn(); setOdd(true) }}>
                        Нечетное</Button>
                    <Button typeStyle="button_violet" isActive={three}
                        onClick={() => { resetAllbtn(); setThree(true) }}>
                        От 1 до 3</Button>
                    <Button typeStyle="button_violet" isActive={six}
                        onClick={() => { resetAllbtn(); setSix(true) }}>
                        От 4 до 6</Button>
                    <Button className={classes.big} typeStyle="button_violet" isActive={numActive}
                        onClick={() => { resetAllbtn(); setNumActive(true) }}>
                        Конкретное число
                        <Input autoFocus className={classes.input} disabled={!numActive}
                            value={num} onChange={(e) => {
                                if (+e.target.value <= 6 && +e.target.value >= 0) {
                                    if (+e.target.value === 0) { setNum('') }
                                    else { setNum(+e.target.value) }
                                }
                            }} />
                    </Button>
                </div>
            </div>
            <Button
                disabled={!((numActive && num !== '') || even || odd || three || six)}
                className={classes.makeBet} typeStyle='button_green'
                onClick={onClickDice}>
                Сделать ставку
            </Button>
        </div>
    )
}

export { GameBoard }