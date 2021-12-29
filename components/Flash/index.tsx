import React, { useEffect } from 'react';
import { useBoolean } from 'react-use';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
    container: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        opacity: 0,
        transition: 'opacity 0.1s',
        pointerEvents: 'none',
    },
    show: {
        opacity: 1,
        transition: 'opacity 0.3s',
    },
});

interface Props {
    flash: React.MutableRefObject<any>;
}

let shutterSound: HTMLAudioElement;
if (typeof window !== 'undefined') {
    shutterSound = new Audio('/assets/audio/shutter.wav');
}

const Timer: React.FC<Props> = ({ flash }) => {
    const classes = useStyles();
    const [isFlashing, toggleIsFlashing] = useBoolean(false);

    const flashScreen = () => {
        toggleIsFlashing(true);
        shutterSound.play();

        setTimeout(() => {
            toggleIsFlashing(false);
        }, 300);
    };

    useEffect(() => {
        flash.current = flashScreen;
    });

    return <div className={classNames(classes.container, { [classes.show]: isFlashing })} />;
};

export default Timer;
