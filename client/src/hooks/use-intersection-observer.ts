import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // If we only want to trigger once (like viewport={{ once: true }})
                observer.unobserve(element);
            }
        }, {
            threshold: 0.1,
            root: null,
            rootMargin: '0px',
            ...options
        });

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return { elementRef, isVisible };
}
