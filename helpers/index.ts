import { FRAMES_PATH, FRAME_THUMBS_PATH } from '../constants';

export const framePath = (frame: string, isThumb?: boolean) => {
    return `${isThumb ? FRAME_THUMBS_PATH : FRAMES_PATH}${frame}.png`;
};
