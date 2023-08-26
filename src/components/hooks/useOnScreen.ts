import { useState, useMemo, useEffect, RefObject } from "react";
export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
