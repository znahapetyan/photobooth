import React, { useCallback, useRef } from 'react';
import Image from 'next/image';
import { useBoolean, useCounter } from 'react-use';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import Timer from '../Timer';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        marginLeft: '-50px',
        cursor: 'pointer',
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '5px',
            left: '5px',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            border: '5px solid #000',
            boxSizing: 'border-box',
        },
    },
    timer: {
        color: '#000',
        fontSize: 50,
        fontWeight: 'bold',
    },
    hide: {
        display: 'none',
    },
});

interface Props {
    onTimerEnd: () => void;
    onSessionEnd: () => void;
    captureCount?: number;
    className?: string;
}

const WebCamCam: React.FC<Props> = ({ onTimerEnd, onSessionEnd, className, captureCount = 6 }) => {
    const classes = useStyles();

    const startTimer = useRef<() => void>(null);
    const [isTimerRunning, toggleIsTimerRunning] = useBoolean(false);

    const handleStart = useCallback(() => {
        if (isTimerRunning) {
            return;
        }

        toggleIsTimerRunning(true);
        startTimer.current?.();
    }, [isTimerRunning, toggleIsTimerRunning]);

    const [capturedCount, { inc: incrementCapturedCount, reset: resetCapturedCount }] =
        useCounter(0);

    const handleTimerEnd = useCallback(() => {
        onTimerEnd();

        if (capturedCount < captureCount - 1) {
            incrementCapturedCount();

            setTimeout(() => {
                startTimer.current?.();
            }, 300);
        } else {
            onSessionEnd();
            toggleIsTimerRunning(false);
            resetCapturedCount();
        }
    }, [
        captureCount,
        capturedCount,
        incrementCapturedCount,
        onSessionEnd,
        onTimerEnd,
        resetCapturedCount,
        toggleIsTimerRunning,
    ]);

    return (
        <div className={`${className} ${classes.container}`} onClick={handleStart}>
            <div className={classnames({ [classes.hide]: isTimerRunning })}>
                <Image src="/assets/icons/camera-solid.svg" height={45} width={45} alt="" />
            </div>
            <div className={classnames(classes.timer, { [classes.hide]: !isTimerRunning })}>
                <Timer timeout={3} immediate={false} start={startTimer} onEnd={handleTimerEnd} />
            </div>
        </div>
    );
};

export default WebCamCam;
