import { useEffect, useRef } from 'react';
import { trackSectionView } from '../utils/analytics';

export const useScrollTracking = (sectionName, threshold = 0.5) => {
  const ref = useRef();
  const hasBeenViewed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenViewed.current) {
          trackSectionView(sectionName);
          hasBeenViewed.current = true;
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionName, threshold]);

  return ref;
};