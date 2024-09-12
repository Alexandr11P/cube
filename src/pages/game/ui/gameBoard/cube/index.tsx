import classes from './styles.module.scss'

function Cube({ num, isRepeat }: { num: 1 | 2 | 3 | 4 | 5 | 6, isRepeat: number }) {

    const anim = {
        1: [90, 360],
        2: [0, 90],
        3: [180, 720],
        4: [360, 1440],
        5: [360, 990],
        6: [-90, 1440]
    }

    return (
        <ul className={classes.cube}
            style={{
                transform: `rotateY(${anim[num][0] + isRepeat * 360}deg) rotateX(${anim[num][1] + isRepeat * 360}deg)`
            }}>
            <li className={classes.one}><div className={classes.circle}></div></li>
            <li className={classes.two}>
                <div className={classes.circleBox}>
                    <div className={classes.circle} style={{ top: 20, left: 20 }}></div>
                    <div className={classes.circle} style={{ bottom: 20, right: 20 }}></div>
                </div>
            </li>
            <li className={classes.three}>
                <div className={classes.circleBox}>
                    <div className={classes.circle} style={{ top: 20, left: 20 }}></div>
                    <div className={classes.circle}
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    </div>
                    <div className={classes.circle} style={{ bottom: 20, right: 20 }}></div>
                </div>
            </li>
            <li className={classes.four}>
                <div className={classes.circle} style={{ top: 20, left: 20 }}></div>
                <div className={classes.circle} style={{ top: 20, right: 20 }}></div>
                <div className={classes.circle} style={{ bottom: 20, left: 20 }}></div>
                <div className={classes.circle} style={{ bottom: 20, right: 20 }}></div>
            </li>
            <li className={classes.five}>
                <div className={classes.circle} style={{ top: 18, left: 18 }}></div>
                <div className={classes.circle} style={{ top: 18, right: 18 }}></div>
                <div className={classes.circle} style={{ bottom: 18, left: 18 }}></div>
                <div className={classes.circle} style={{ bottom: 18, right: 18 }}></div>
                <div className={classes.circle}
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                </div>
            </li>
            <li className={classes.six}>
                <div className={classes.circle} style={{ top: 15, left: 20 }}></div>
                <div className={classes.circle} style={{ top: 15, right: 20 }}></div>
                <div className={classes.circle} style={{ bottom: 15, left: 20 }}></div>
                <div className={classes.circle} style={{ bottom: 15, right: 20 }}></div>
                <div className={classes.circle}
                    style={{ top: '50%', left: 20, transform: 'translateY(-50%)' }}>
                </div>
                <div className={classes.circle}
                    style={{ top: '50%', right: 20, transform: 'translateY(-50%)' }}>
                </div>
            </li>
        </ul>
    )
}

export { Cube }