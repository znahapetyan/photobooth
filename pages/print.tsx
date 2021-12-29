import type { NextPage } from 'next';
import { createUseStyles } from 'react-jss';

import Preview from '../components/Preview';
import RedirectTimer from '../components/RedirectTimer';

import { useImagesContext } from '../context/Images';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to left, #78ffd6, #a8ff78)',
        backgroundColor: '#a8ff78',
    },
    title: {
        marginBottom: 30,
    },
    preview: {
        width: 400,
    },
});

const Payment: NextPage = () => {
    const classes = useStyles();

    const { images, frame } = useImagesContext();

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Printing...</h1>

            <Preview images={images} frame={frame} className={classes.preview} />

            <RedirectTimer timeout={60} to="/" />
        </div>
    );
};

export default Payment;
