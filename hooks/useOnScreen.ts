import { useState, useRef, useEffect } from "react";
export const useOnScreen = (options: {
  rootMargin: string;
  threshold: number;
}):[boolean,((instance: HTMLElement | null) => void)
  | React.RefObject<HTMLElement>
  | null
  | undefined]=> {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(():(()=>void) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => (ref.current ? observer.unobserve(ref.current) : null);
  }, [ref, options]);

  return [isVisible, ref];
};
