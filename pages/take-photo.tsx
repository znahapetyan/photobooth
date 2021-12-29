import { useCallback, useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { createUseStyles } from 'react-jss';

import CaptureButton from '../components/CaptureButton';
import Webcam from '../components/Webcam';
import Flash from '../components/Flash';
import Preview from '../components/Preview';

import { useImagesContext } from '../context/Images';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to right, #00dbde, #fc00ff)',
        backgroundColor: '#fc00ff',
    },
    cameraContainer: {
        position: 'relative',
        borderRadius: 25,
        overflow: 'hidden',
    },
    camera: {
        display: 'block',
    },
    captureButton: {
        position: 'absolute',
        bottom: '30px',
        left: '50%',
    },
    previewContainer: {
        position: 'relative',
        width: 0,
    },
    preview: {
        marginLeft: 40,
        width: 200,
    },
});

const TakePhoto: NextPage = () => {
    const classes = useStyles();
    const { setImages, reset, images, frame } = useImagesContext();

    useEffect(() => {
        reset();
    }, [reset]);

    const capture = useRef<() => string>(null);
    const flash = useRef<() => string>(null);

    const handleTimerEnd = useCallback(() => {
        flash.current?.();
        const image = capture.current?.() as string;

        setImages((images) => [...images, image]);
    }, [setImages]);

    const router = useRouter();
    const handleSessionEnd = useCallback(() => {
        setTimeout(() => {
            router.push('/preview');
        }, 500);
    }, [router]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.cameraContainer}>
                <Webcam capture={capture} className={classes.camera} />

                <CaptureButton
                    className={classes.captureButton}
                    onTimerEnd={handleTimerEnd}
                    onSessionEnd={handleSessionEnd}
                />
            </div>

            <Flash flash={flash} />

            <div className={classes.previewContainer}>
                <Preview className={classes.preview} images={images} frame={'blank'} />
            </div>
        </div>
    );
};

export default TakePhoto;
