import { useState, useEffect } from "react";

const useTrackToBottom = ({ ref }) => {
  const [isScrollBottom, setIsScrollBottom] = useState(false);

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 70;
  };

  const trackScrolling = () => {
    const wrappedElement = ref?.current;
    if (isBottom(wrappedElement)) {
      setIsScrollBottom(true);
    } else {
      setIsScrollBottom(false);
    }
  };

  useEffect(() => {
    if (ref.current) {
      document.addEventListener("scroll", trackScrolling);
    }

    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [ref.current]);

  return [isScrollBottom];
};

export default useTrackToBottom;
