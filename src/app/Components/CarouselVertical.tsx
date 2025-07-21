"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

interface CarouselProps {
    children: React.ReactNode[];
    className: string;
    auto: boolean;
    id: string;
    itemsToShow?: number;
    onValueChange: (data: number) => void;
}

const CarouselVertical: React.FC<CarouselProps> = ({ auto, children, className, id, itemsToShow, onValueChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const itemsToShowRef = useRef(itemsToShow ?? 9);
    const [height, setHeight] = useState(85 * itemsToShowRef.current);
    const totalPages = children.length;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        ((prevIndex - 1 + totalPages) % (totalPages) > totalPages - itemsToShowRef.current + 1
            ? totalPages - itemsToShowRef.current
            : prevIndex - 1
        ));
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 2000);
    };

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (totalPages - itemsToShowRef.current + 1)
        );
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 2000);
    }, [totalPages]);

    const handleButtonClick = (dataToSend: number) => {
        onValueChange(dataToSend);
    }

    useEffect(() => {
        const updateItemsToShow = () => {
            itemsToShowRef.current = Math.round((document.getElementById(id)!.offsetHeight - 150) / 85);
            setHeight(85 * itemsToShowRef.current);
        };
        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, [id]);

    useEffect(() => {
        if (isPaused)
            return;
        if (auto) {
            const interval = setInterval(() => {
                handleNext();
            }, 1500);
            return () => clearInterval(interval);
        }
    }, [isPaused, totalPages, auto, handleNext]);

    return (
        <div id={id} className={`${className} flex items-center justify-center flex-col`}>
            <button onClick={handlePrev} className="text-white hover:text-amber-700 transition rounded-full">
                <BsChevronCompactUp size={75} viewBox="0 0 16 16" role='button' aria-label='Parfum précédent' />
            </button>
            <div className={`flex overflow-hidden`} style={{ height: `${height}px` }}>
                <div className={`flex flex-col transition-transform duration-500 py-[5px]`} style={{ transform: `translateY(-${currentIndex * 85}px)` }}>
                    {
                        children.map((child, index) => (
                            <div onClick={() => handleButtonClick(index)} key={index} id={`carousel-${index}`} className={`flex justify-center py-[5px]`} style={{ flex: `0 0 calc(75px)` }}>
                                {child}
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={handleNext} className="text-white hover:text-amber-700 transition rounded-full">
                <BsChevronCompactDown size={75} viewBox="0 0 16 16" role='button' aria-label="Parfum suivant" />
            </button>
        </div>
    );
};

export default CarouselVertical;