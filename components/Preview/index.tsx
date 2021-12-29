import React from 'react';
import Image from 'next/image';
import { createUseStyles } from 'react-jss';

import { framePath } from '../../helpers';
import { PREVIEW_ASPECT_RATIO } from '../../constants';

const useStyles = createUseStyles({
    wrapper: {
        position: 'relative',
        paddingTop: `${100 / PREVIEW_ASPECT_RATIO}%`,
    },
    inner: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: '3.3%',
        paddingLeft: '5.9%',
        backgroundSize: 'cover',
        backgroundColor: '#fff',
        fontSize: 0,
    },
    image: {
        position: 'relative',
        display: 'inline-block',
        width: '42.5%',
        height: '31.7%',
        '&:nth-child(even)': {
            marginLeft: '8%',
        },
        '&:nth-child(n+3)': {
            marginTop: '2%',
        },
    },
});

interface Props {
    images: string[];
    frame: string;
    className?: string;
}

const Preview: React.FC<Props> = ({ images, frame, className }) => {
    const classes = useStyles();

    return (
        <div className={className}>
            <div className={classes.wrapper}>
                <div
                    className={classes.inner}
                    style={{ backgroundImage: `url(${framePath(frame)})` }}
                >
                    {images.map((image, index) => {
                        return (
                            <div className={classes.image} key={index}>
                                <Image src={image} alt="" layout="fill" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Preview;
