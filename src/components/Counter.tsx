import React from 'react';
import styles from "../App.module.css";
import {Display} from "./Display";
import {Button} from "./Button";

type CounterPropsType = {
    score: number
    maxScore: number
    startScore: number
    increaseCount: () => void
    decreaseCount: () => void
    resetCount: () => void
    error: string | null
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className={styles.counterBox}>
            <div className={styles.countDisplayBox}>
                <Display score={props.score ? props.score : 0} maxScore={props.maxScore} error={props.error}/>
            </div>
            <div className={styles.buttonBox}>
                <Button name={'inc'} callBack={props.increaseCount} isDisabled={props.score === props.maxScore}/>
                <Button name={'dec'} callBack={props.decreaseCount} isDisabled={props.score === props.startScore}/>
                <Button name={'res'} callBack={props.resetCount} isDisabled={props.score === props.startScore}/>
            </div>
        </div>
    );
};

