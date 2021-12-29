import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

import { CAMERA_WIDTH, CAMERA_HEIGHT } from '../../constants';

const videoConstraints = {
    width: CAMERA_WIDTH,
    height: CAMERA_HEIGHT,
};

interface Props {
    capture: React.MutableRefObject<any>;
    className?: string;
}

const WebCamCam = ({ capture, className }: Props) => {
    const webcamRef = useRef<Webcam>(null);

    const captureImage = React.useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        return imageSrc as string;
    }, []);

    useEffect(() => {
        capture.current = captureImage;
    });

    return (
        <Webcam
            ref={webcamRef}
            mirrored
            width={CAMERA_WIDTH}
            height={CAMERA_HEIGHT}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
            className={className}
        />
    );
};

export default WebCamCam;
