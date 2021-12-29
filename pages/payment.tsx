import type { NextPage } from 'next';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';

import RedirectTimer from '../components/RedirectTimer';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to left, #00f260, #0575e6)',
        backgroundColor: '#00f260',
    },
    note: {
        paddingTop: 10,
        fontSize: 12,
    },
});

const Payment: NextPage = () => {
    const classes = useStyles();

    return (
        <>
            <h1>
                <Link href="/take-photo">
                    <a className={classes.wrapper}>
                        Pay <span className={classes.note}>(Tap to continue)</span>
                    </a>
                </Link>
            </h1>

            <RedirectTimer timeout={60} to="/" />
        </>
    );
};

export default Payment;
