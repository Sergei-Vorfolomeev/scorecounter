import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import styles from './App.module.css'
import {SetDisplay} from "./components/SetDisplay";

function App() {
    // значения в дисплее для настроек
    const [maxValue, setMaxValue] = useState<number>(99)
    const [startValue, setStartValue] = useState<number>(0)
    // данные в счетчике
    const [maxScore, setMaxScore] = useState<number>(maxValue)
    const [startScore, setStartScore] = useState<number>(startValue)
    // значение счетчика
    const [score, setScore] = useState<number>(startScore)

    const [error, setError] = useState<null | string>(null)

    const increaseCount = () => {
            setScore(score + 1)
    }
    const decreaseCount = () => {
        setScore(score - 1)
    }
    const resetCount = () => {
        setScore(startValue)
    }
    const setNewSettingsScore = () => {
        if (startValue >= maxValue || (startValue || maxValue) < 0) {
            setError('value is incorrect')
        } else {
            setMaxScore(maxValue)
            setStartScore(startValue)
            setScore(startValue)
            setError(null)
        }
    }

    return (
        <div className={styles.app}>
            <div className={styles.setBox}>
                <div className={styles.setDisplayBox}>
                    <SetDisplay setMaxValue={setMaxValue}
                                setStartValue={setStartValue}
                                startValue={startValue}
                                maxValue={maxValue}/>
                </div>
                <div className={styles.buttonBox}>
                    <Button name={'set'} callBack={setNewSettingsScore} isDisabled={startScore === startValue && maxScore === maxValue}/>
                </div>
            </div>
            <div className={styles.counterBox}>
                <div className={styles.countDisplayBox}>
                    <Display score={score} maxScore={maxScore} error={error}/>
                </div>
                <div className={styles.buttonBox}>
                    <Button name={'inc'} callBack={increaseCount} isDisabled={score === maxScore}/>
                    <Button name={'dec'} callBack={decreaseCount} isDisabled={score === startScore}/>
                    <Button name={'res'} callBack={resetCount} isDisabled={score === startScore}/>
                </div>
            </div>
        </div>
    );
}

export default App;
