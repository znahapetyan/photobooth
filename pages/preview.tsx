import type { NextPage } from 'next';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';

import Preview from '../components/Preview';
import FrameSelector from '../components/FrameSelector';

import { useImagesContext } from '../context/Images';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to left, #ffa751, #ffe259)',
        backgroundColor: '#ffe259',
    },
    title: {
        marginBottom: 30,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        marginRight: 40,
        width: 400,
    },
    print: {
        position: 'fixed',
        bottom: 40,
        right: 40,
        fontSize: 40,
        textDecoration: 'underline',
    },
});

const TakePhoto: NextPage = () => {
    const classes = useStyles();
    const { images, frame, setFrame } = useImagesContext();

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Choose a frame</h1>

            <div className={classes.content}>
                <Preview images={images} frame={frame} className={classes.preview} />
                <FrameSelector onSelect={setFrame} />
            </div>

            <Link href="/print">
                <a className={classes.print}>
                    <span>Print</span>
                </a>
            </Link>
        </div>
    );
};

export default TakePhoto;
