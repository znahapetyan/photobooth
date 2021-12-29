import React from 'react';
import { useRouter } from 'next/router';
import { createUseStyles } from 'react-jss';

import Timer from '../Timer';

const useStyles = createUseStyles({
    container: {
        position: 'fixed',
        bottom: 30,
        right: 30,
        fontSize: 40,
    },
});

interface Props {
    timeout: number;
    to: string;
}

const RedirectTimer: React.FC<Props> = ({ timeout, to }) => {
    const classes = useStyles();

    const router = useRouter();

    const handleTimerEnd = () => {
        router.push(to);
    };

    return (
        <div className={classes.container}>
            <Timer timeout={timeout} onEnd={handleTimerEnd} />
        </div>
    );
};

export default RedirectTimer;
