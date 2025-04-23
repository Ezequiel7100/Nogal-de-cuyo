import { useMediaQuery } from "@react-hook/media-query";

const useDeviceType = (isMobileServerSide) => {
  const isTablet = useMediaQuery("(max-width: 1090px)");
  return {
    isTablet: typeof document === "undefined" ? isMobileServerSide : isTablet,
  };
};
export default useDeviceType;
