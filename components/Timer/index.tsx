import React, { useCallback, useEffect, useState } from 'react';
import { useBoolean, useInterval } from 'react-use';

interface Props {
    timeout: number;
    start?: React.MutableRefObject<any>;
    onEnd: () => void;
    immediate?: boolean;
}

const Timer: React.FC<Props> = ({ start, timeout, onEnd, immediate = true }) => {
    const [secondsLeft, setSecondsLeft] = useState<number>();
    const [isRunning, toggleIsRunning] = useBoolean(false);

    useInterval(
        () => {
            const newSecondsLeft = secondsLeft ? secondsLeft - 1 : 0;
            setSecondsLeft(newSecondsLeft);

            if (newSecondsLeft === 0) {
                toggleIsRunning();
                onEnd();
            }
        },
        isRunning ? 1000 : null,
    );

    const startTimer = useCallback(() => {
        setSecondsLeft(timeout);
        toggleIsRunning();
    }, [timeout, toggleIsRunning]);

    useEffect(() => {
        if (start) {
            start.current = startTimer;
        }
    });

    useEffect(() => {
        if (immediate) {
            startTimer();
        }
    }, [immediate, startTimer]);

    return <>{secondsLeft}</>;
};

export default Timer;
