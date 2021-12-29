import React, { createContext, useCallback, useContext, useState } from 'react';

const defaultFrame = 'frame_1';

const ImagesContext = createContext<{
    images: string[];
    setImages: React.Dispatch<React.SetStateAction<string[]>>;
    frame: string;
    setFrame: React.Dispatch<React.SetStateAction<string>>;
    reset: () => void;
}>({ images: [], setImages: () => {}, frame: defaultFrame, setFrame: () => {}, reset: () => {} });

export const ImagesContextProvider: React.FC = ({ children }) => {
    const [images, setImages] = useState<string[]>([]);
    const [frame, setFrame] = useState(defaultFrame);

    const reset = useCallback(() => {
        setImages([]);
        setFrame(defaultFrame);
    }, []);

    return (
        <ImagesContext.Provider value={{ images, setImages, frame, setFrame, reset }}>
            {children}
        </ImagesContext.Provider>
    );
};

export const useImagesContext = () => {
    return useContext(ImagesContext);
};
