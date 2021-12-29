import type { NextPage } from 'next';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to right, #ff9068, #fd746c)',
        backgroundColor: '#fd746c',
    },
});

const Home: NextPage = () => {
    const classes = useStyles();

    return (
        <h1>
            <Link href="/payment">
                <a className={classes.wrapper}>Tap to start</a>
            </Link>
        </h1>
    );
};

export default Home;
