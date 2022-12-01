import React, {useEffect, useState} from 'react';
import './App.module.css';
import styles from './App.module.css'
import {Setter} from "./components/Setter";
import {Counter} from "./components/Counter";

const getDataLS = (key: string) : number | null => {
    let value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    }
    return null;
}

function App() {
    // значения в дисплее для настроек
    const [maxValue, setMaxValue] = useState<number | null>(getDataLS('maxSetValue'))
    const [startValue, setStartValue] = useState<number | null>(getDataLS('startSetValue'))
    // данные в счетчике
    const [maxScore, setMaxScore] = useState<number>(maxValue ? maxValue : 0)
    const [startScore, setStartScore] = useState<number>(startValue ? startValue : 0)
    // значение счетчика

    // const [score, setScore] = useState<number | null>(startValue ? startValue : null)
    const [score, setScore] = useState<number | null>(getDataLS('score'))

    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        maxValue !== null && localStorage.setItem('maxSetValue', JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(() => {
        startValue !== null && localStorage.setItem('startSetValue', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        score !== null && localStorage.setItem('score', JSON.stringify(score))
    }, [score])
    useEffect(() => {
        let score = localStorage.getItem('score')
        if (score) {
            setScore(JSON.parse(score))
        }
    }, [])

    const increaseCount = () => {
        if (score !== null) {
            setScore(score + 1)
        }
    }
    const decreaseCount = () => {
        if (score !== null) {
            setScore(score - 1)
        }
    }
    const resetCount = () => {
        if (startValue !== null) {
            setScore(startValue)
        }
    }
    const setNewSettings = () => {
        if (startValue !== null && maxValue !== null) {
            if (startValue >= maxValue || (startValue || maxValue) < 0) {
                setError('value is incorrect')
            } else {
                setMaxScore(maxValue)
                setStartScore(startValue)
                setScore(startValue)
                setError(null)
                localStorage.setItem('startSetValue', JSON.stringify(startValue))
            }
        }
    }

    return (
        <div className={styles.app}>
            <Setter
                maxScore={maxScore}
                startScore={startScore}
                startValue={startValue ? startValue : 0}
                maxValue={maxValue ? maxValue : 0}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                setNewSettings={setNewSettings}/>
            <Counter
                score={score ? score : 0}
                startScore={startScore}
                maxScore={maxScore}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                resetCount={resetCount}
                error={error}/>
        </div>
    );
}

export default App;
