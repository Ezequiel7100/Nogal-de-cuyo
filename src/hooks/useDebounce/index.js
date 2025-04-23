import { useRef } from "react";

const useDebounce = (time = 1000) => {
  const debounceRef = useRef();
  return (cb) => {
    if (debounceRef) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      (async function () {
        try {
          cb();
        } catch (err) {}
      })();
    }, time);
  };
};

export default useDebounce;
