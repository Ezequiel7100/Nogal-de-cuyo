/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "./bannerSlider.module.scss";

import useDeviceType from "@/hooks/useDeviceType";
import Image from "@/components/Image";
import ThumbnailIndicator from "@/components/ThumbnailIndicator";

const BannerSlider = ({
  banners = [],
  interval = 4500,
  automatic,
  border,
  priority,
  withChevrons,
  withDots,
}) => {
  const { isTablet } = useDeviceType();
  const [autoplay, setAutoplay] = useState(true);
  const [index, setIndex] = useState(0);
  const scrolling = useRef();
  const sliderRef = useRef();
  const wrapperRef = useRef();

  const next = () => {
    const wrapper = wrapperRef.current;
    const slider = sliderRef.current;

    if (
      slider &&
      slider.scrollLeft >=
        slider.scrollWidth - slider.children[0].offsetWidth - 20
    ) {
      setIndex(0);
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      setIndex((prev) => prev + 1);
      slider?.scrollTo({
        left: slider.scrollLeft + wrapper.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // setea el autoScroll
  useEffect(() => {
    if (banners.length > 1 && autoplay && automatic) {
      const autoScroll = setInterval(next, interval);
      // elimina el autoScroll
      return () => {
        clearInterval(autoScroll);
      };
    }
    return () => {};
  }, [autoplay]);

  const back = () => {
    const wrapper = wrapperRef.current;
    const slider = sliderRef.current;

    if (slider.scrollLeft <= 0) {
      setIndex(banners.length - 1);
      slider.scrollTo({
        left: wrapper.clientWidth * banners.length,
        behavior: "smooth",
      });
    } else {
      setIndex((prev) => prev - 1);
      slider.scrollTo({
        left: slider.scrollLeft - wrapper.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const sliderClass = cn({
    [styles.slider]: true,
    [styles.border]: border,
  });

  const goToImage = (i) => {
    setIndex(i);

    const wrapper = wrapperRef.current;
    const slider = sliderRef.current;
    slider?.scrollTo({
      left: wrapper.clientWidth * i,
      behavior: "smooth",
    });
  };
  const onScroll = () => {
    const slider = sliderRef.current;
    if (scrolling) {
      clearTimeout(scrolling.current);
    }
    scrolling.current = setTimeout(() => {
      if (Math.floor(slider.scrollLeft / slider.clientWidth) % 2 !== 0) {
        goToImage(Math.floor(slider.scrollLeft / slider.clientWidth), true);
      }
      if (
        Math.ceil(slider.scrollLeft / slider.clientWidth) -
          slider.scrollLeft / slider.clientWidth <
        0.4
      ) {
        goToImage(Math.ceil(slider.scrollLeft / slider.clientWidth), true);
      }
    }, 100);
  };

  const renderSliders = (b, i) => {
    return (
      <div
        style={{
          width: "100%",
          height: !isTablet ? "26rem" : "100vw",
          maxHeight: "42rem",
        }}
      >
        <Image
          fill
          imageStyles={{
            objectFit: "cover",
            borderRadius: "5px",
            objectPosition: "50% 80%",
          }}
          src={!isTablet ? b?.desktop_image?.url : b?.mobile_image?.url}
          alt={`banner_${i}`}
          heightSkeleton={!isTablet ? "261.1px" : "400px"}
          priority={i === 0 ? priority : false}
        />
      </div>
    );
  };

  return (
    banners?.length > 0 && (
      <div
        onMouseEnter={() => {
          setAutoplay(false);
          if (withChevrons && isTablet) {
            setTimeout(() => {
              setAutoplay(true);
            }, interval * 3);
          }
        }}
        onMouseLeave={() => {
          setAutoplay(true);
        }}
        className={styles.container}
      >
        {withChevrons && banners?.length > 1 && (
          <button
            onClick={() => {
              back();
              setAutoplay(false);
            }}
            aria-label="Retroceder un elemento"
            className={styles.chevrons}
            style={{ left: 0 }}
          >
            <BiChevronLeft aria-hidden="true" color="white" fontSize={50} />
          </button>
        )}

        <div className={sliderClass} ref={sliderRef} onScroll={onScroll}>
          <div className={styles.sliderContainer}>
            {banners?.map((b, i) => (
              <div key={i} className={styles.bannerWrapper} ref={wrapperRef}>
                <div className={styles.img}>
                  <div style={{ width: "100%", height: "auto" }}>
                    {renderSliders(b, i)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {withChevrons && banners?.length > 1 && (
          <button
            onClick={() => {
              next();
              setAutoplay(false);
            }}
            aria-label="Avanzar un elemento"
            style={{ right: 0 }}
            className={styles.chevrons}
          >
            <BiChevronRight aria-hidden="true" color="white" fontSize={50} />
          </button>
        )}
        {withDots && banners?.length > 1 && (
          <ThumbnailIndicator
            indexShowing={index}
            size={banners.length}
            onClick={(i) => {
              if (!withChevrons) {
                setAutoplay(false);
                setTimeout(() => {
                  setAutoplay(true);
                }, interval * 3);
              }
              goToImage(i);
            }}
          />
        )}
      </div>
    )
  );
};

export default BannerSlider;
