import React from "react";

export const useElementSize = () => {
  const elementRef = React.useRef(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const element = elementRef.current;
    const updateSize = () => {
      const { width, height } = element.getBoundingClientRect();
      if (height > 0 && width > 0) {
        setSize({ width, height });
      }
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, [elementRef]);

  return [elementRef, size];
};
