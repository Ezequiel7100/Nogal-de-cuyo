/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-nested-ternary */
import { GoDotFill } from "react-icons/go";
import cn from "classnames";
import styles from "./thumbnailIndicator.module.scss";

const ThumbnailIndicator = ({ size = 1, onClick, indexShowing }) => {
  const dotsClasses = cn({
    [styles.dots]: true,
  });
  return (
    <div className={dotsClasses}>
      {Array(size)
        .fill()
        ?.map((_a, i) => (
          <button
            key={`img_${i}`}
            onClick={() => {
              onClick(i);
            }}
            className={styles.dot}
            aria-label="Cambiar de imagen"
          >
            <GoDotFill
              size={20}
              color={
                indexShowing === i ? "var(--primary-color)" : "var(--black)"
              }
            />
          </button>
        ))}
    </div>
  );
};

export default ThumbnailIndicator;
