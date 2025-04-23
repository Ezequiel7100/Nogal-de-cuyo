import { useRef, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import cn from "classnames";
import styles from "./index.module.scss";
import ThumbnailIndicator from "@/components/ThumbnailIndicator";
import useDebounce from "@/hooks/useDebounce";
import useForceRender from "@/hooks/useForceRender";
import Items from "@/components/Gallery/Items";
import useDeviceType from "@/hooks/useDeviceType";

const Slider = ({
  items,
  interval = 6000,
  automatic,
  hightlight,
  color,
  width,
  withoutBackgroundChevron,
  withoutChevrons,
  withDots,
}) => {
  const { isTablet } = useDeviceType();
  const sliderRef = useRef(null);
  const container = useRef(null);
  const [dotSelected, setDotSelected] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  useForceRender([sliderRef.current]);
  const debounce = useDebounce(50);
  const getNumberOfDots = () => {
    let numberOfDots = 1;
    let indexSelected = 0;
    if (
      typeof window !== "undefined" &&
      sliderRef.current &&
      sliderRef.current.children[0]?.children[0]
    ) {
      const widthOfChild =
        sliderRef.current.children[0].children[0].offsetWidth - 0.2;
      const productsInScreen = Math.round(window.innerWidth / widthOfChild);
      numberOfDots = Math.ceil(items.length / productsInScreen);
      indexSelected = Math.round(
        sliderRef.current.scrollLeft / (widthOfChild * productsInScreen)
      );
    }

    if (
      typeof numberOfDots !== "number" ||
      numberOfDots < 1 ||
      numberOfDots % 1 > 0
    ) {
      numberOfDots = 1;
    }
    return { numberOfDots, indexSelected };
  };
  const next = () => {
    const slider = sliderRef.current;

    if (
      slider &&
      slider.scrollLeft >=
        slider.children[0].offsetWidth - slider.offsetWidth - 8
    ) {
      slider?.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider?.scrollTo({
        left: slider.scrollLeft + slider.clientWidth + 8,
        behavior: "smooth",
      });
    }
  };
  // setea el autoScroll
  useEffect(() => {
    if (autoplay && automatic) {
      const autoScroll = setInterval(next, interval);
      // elimina el autoScroll
      return () => {
        clearInterval(autoScroll);
      };
    }

    return () => {};
  }, [autoplay]);

  const back = () => {
    const wrapper = container.current;
    const slider = sliderRef.current;
    if (slider.scrollLeft <= 0) {
      slider.scrollTo({
        left: wrapper.clientWidth * items.length,
        behavior: "smooth",
      });
    } else {
      slider.scrollTo({
        left: slider.scrollLeft - slider.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const chevronStyles = cn({
    [styles.chevrons]: true,
    [styles.withoutBackgroundChevron]: withoutBackgroundChevron,
    [styles.chevronHighlight]: hightlight,
  });

  const onScroll = () => {
    if (withDots) {
      debounce(() => {
        const { indexSelected } = getNumberOfDots();
        setDotSelected(indexSelected);
      });
    }
  };
  const onClickDot = (dotPosition) => {
    setAutoplay(false);
    const slider = sliderRef.current;
    const widthOfChild =
      sliderRef.current.children[0].children[0].offsetWidth - 0.2;
    const productsInScreen = Math.round(window.innerWidth / widthOfChild);
    slider?.scrollTo({
      left: dotPosition * widthOfChild * productsInScreen,
      behavior: "smooth",
    });
    setTimeout(() => {
      setAutoplay(true);
    }, 6000);
  };
  return (
    <>
      <div
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        onTouchStart={() => {
          setAutoplay(false);
          setTimeout(() => {
            setAutoplay(true);
          }, 15000);
        }}
        className={styles.container}
        ref={container}
      >
        <div
          className={styles.slider}
          ref={sliderRef}
          style={{ width }}
          onScroll={onScroll}
        >
          <div className={styles.sliderContainer}>
            <Items
              style={{ minWidth: isTablet ? "160px" : "300px" }}
              items={items}
            />
          </div>
        </div>
        {!withoutChevrons && (
          <>
            <button
              aria-label="Retroceder en el carrusel de imágenes"
              onClick={() => {
                back();
                setAutoplay(false);
              }}
              className={chevronStyles}
              style={{ left: 0 }}
            >
              <BiChevronLeft color={color} fontSize={50} />
            </button>
            <button
              aria-label="Avanzar en el carrusel de imágenes"
              onClick={() => {
                next();
                setAutoplay(false);
              }}
              className={chevronStyles}
              style={{ right: 0 }}
            >
              <BiChevronRight color={color} fontSize={50} />
            </button>
          </>
        )}
      </div>
      {withDots && sliderRef.current && (
        <ThumbnailIndicator
          indexShowing={dotSelected}
          size={getNumberOfDots().numberOfDots}
          onClick={(i) => onClickDot(i)}
          className={styles.indicators}
        />
      )}
    </>
  );
};

export default Slider;
