import { createElement } from "react";
import styles from "./index.module.scss";

const Title = ({ title, label, titleSize, component = "h3", style = {} }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.label}>
          {label}
          <span className={styles.border} />
        </span>
      </div>

      {createElement(
        component,
        {
          className: styles.title,
          style: {
            fontSize: titleSize ? `${titleSize}px` : undefined,
            ...style,
          },
        },
        title
      )}
    </div>
  );
};

export default Title;
