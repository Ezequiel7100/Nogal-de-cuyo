import { useEffect } from "react";
import useDebounce from "../useDebounce";

const useScroll = (cb = () => {}, height = 100) => {
  const debounce = useDebounce(100);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > height) {
        debounce(() => cb(true));
      } else {
        debounce(() => cb(false));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);
};
export default useScroll;
