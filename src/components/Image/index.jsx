/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import cn from "classnames";
import NextImage from "next/image";
import styles from "./image.module.scss";
import Skeleton from "../Skeleton";

const Image = (props) => {
  const {
    src,
    width,
    height,
    br,
    alt,
    imageStyles,
    squared,
    cover,
    contain,
    fill,
    reverse,
    widthSkeleton,
    heightSkeleton,
    skeletonDark,
    absoluteSkeleton,
    className,
    onClick,
    priority,
  } = props;

  const imageClass = cn({
    [styles.brHard]: br === "hard",
    [styles.brMedium]: br === "medium",
    [styles.brSoft]: br === "soft",
    [styles.reverse]: reverse,
    [styles.cover]: cover,
    [styles.contain]: contain,
    [className]: Object.keys(className || {}).length > 0 || className,
  });

  const renderImage = () => {
    if (src) {
      return (
        <NextImage
          alt={alt}
          src={src}
          fill={fill}
          priority={priority}
          className={imageClass}
          height={height}
          width={width}
          style={{
            ...(fill
              ? {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }
              : {}),
            ...imageStyles,
          }}
          onClick={onClick && onClick}
        />
      );
    }
    return (
      <Skeleton
        absoluteSkeleton={absoluteSkeleton}
        dark={skeletonDark}
        width={widthSkeleton || `${width}px`}
        height={(!squared ? heightSkeleton : widthSkeleton) || `${height}px`}
      />
    );
  };

  return <>{renderImage()}</>;
};

export default Image;
