import { useState } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import Link from "next/link";

const NavItem = ({ children, to, isNavLogo, options, style }) => {
  const [showOptions, setShowOptions] = useState(false);
  const onHover = () => {
    setShowOptions(!showOptions);
  };

  const optionsClass = cn({
    [styles.options]: true,
    [styles.open]: showOptions,
  });
  return (
    <li
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      className={isNavLogo ? styles.navLogo : styles.navLink}
    >
      {options && (
        <ul className={optionsClass}>
          {options.map((option) => (
            <Link key={option} href={`/${option.toLowerCase()}`}>
              <li>{option.split("-").join(" ")}</li>
            </Link>
          ))}
        </ul>
      )}
      <Link style={style} href={options ? "/flota" : to}>
        {children}
      </Link>
    </li>
  );
};
export default NavItem;
