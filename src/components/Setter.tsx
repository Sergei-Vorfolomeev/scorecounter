import React from 'react';
import styles from "../App.module.css";
import {SetDisplay} from "./SetDisplay";
import {Button} from "./Button";

type SetterPropsType = {
    startScore: number
    maxScore: number
    maxValue: number
    startValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    setNewSettings: () => void
}

export const Setter: React.FC<SetterPropsType> = (props) => {
    return (
        <div className={styles.setBox}>
            <div className={styles.setDisplayBox}>
                <SetDisplay setMaxValue={props.setMaxValue}
                            setStartValue={props.setStartValue}
                            startValue={props.startValue ? props.startValue : 0}
                            maxValue={props.maxValue ? props.maxValue : 0}/>
            </div>
            <div className={styles.buttonBox}>
                <Button name={'set'}
                        callBack={props.setNewSettings}
                        isDisabled={props.startScore === props.startValue && props.maxScore === props.maxValue}/>
            </div>
        </div>
    );
};

