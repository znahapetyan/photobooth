import React, { useRef } from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

import { PREVIEW_ASPECT_RATIO } from '../../constants';
import { framePath } from '../../helpers';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 220,
    },
    frameWrapper: {
        width: 100,
        '&:nth-child(n+3)': {
            marginTop: 20,
        },
        '&:nth-child(even)': {
            marginLeft: 20,
        },
    },
    frame: {
        position: 'relative',
        paddingTop: `${100 / PREVIEW_ASPECT_RATIO}%`,
        cursor: 'pointer',
    },
});

interface Props {
    onSelect: (frame: string) => void;
    className?: string;
}

const FrameSelector: React.FC<Props> = ({ onSelect, className }) => {
    const classes = useStyles();

    const frames = useRef(['frame_1', 'frame_2', 'frame_3', 'frame_4', 'frame_5', 'frame_6']);

    const handleSelect = (frame: string) => () => {
        onSelect(frame);
    };

    return (
        <div className={classnames(className, classes.wrapper)}>
            {frames.current.map((frame) => {
                return (
                    <div key={frame} className={classes.frameWrapper}>
                        <div className={classes.frame}>
                            <Image
                                src={framePath(frame, true)}
                                alt=""
                                layout="fill"
                                onClick={handleSelect(frame)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FrameSelector;
