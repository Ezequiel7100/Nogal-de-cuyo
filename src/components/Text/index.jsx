import cn from "classnames";
import styles from "./index.module.scss";

const Text = ({
  color,
  children,
  weight,
  uppercase,
  capitalize,
  size,
  underline,
}) => {
  const fontWeight = {
    lighter: "200",
    medium: "400",
    bold: "700",
  };
  const fontClasses = cn({
    [styles.font]: true,
    [styles.underline]: underline,
  });
  return (
    <p
      className={fontClasses}
      style={{
        color,
        fontWeight: fontWeight[weight] || "300",
        textTransform:
          (uppercase && "uppercase") ||
          (capitalize && "capitalize") ||
          "initial",
        fontSize: size || "14px",
      }}
    >
      {children}
    </p>
  );
};

export default Text;
