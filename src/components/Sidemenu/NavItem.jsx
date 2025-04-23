import { FiChevronDown } from "react-icons/fi";
import cn from "classnames";
import styles from "./index.module.scss";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ContainerNavItem = ({ children, navItem, onClick }) => {
  if (navItem.options) {
    return <button onClick={onClick}>{children}</button>;
  }
  return (
    <Link href={navItem.url} onClick={onClick}>
      {children}
    </Link>
  );
};

const NavItem = ({ children, navItem, onClose }) => {
  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    if (!navItem.options) onClose();
    else {
      setShowOptions(!showOptions);
    }
  };
  const optionsClass = cn({
    [styles.options]: true,
    [styles.open]: showOptions,
  });

  return (
    <li>
      <ContainerNavItem navItem={navItem} onClick={handleClick}>
        <div>
          {children}
          {navItem.options && (
            <FiChevronDown
              size={25}
              color="var(--black)"
              style={{
                transition: "transform .2s linear",
                transform: `rotate(${showOptions ? "180" : "0"}deg)`,
              }}
            />
          )}
        </div>
        {navItem.options && (
          <ul className={optionsClass}>
            {navItem.options.map((option) => (
              <Link
                key={option}
                href={`/${option.toLowerCase()}`}
                onClick={onClose}
                className={
                  pathname.toLowerCase() ===
                  `/${option.toLowerCase()}`.toLowerCase()
                    ? styles.active
                    : undefined
                }
              >
                <li key={option}>{option.split("-").join(" ")}</li>
              </Link>
            ))}
          </ul>
        )}
      </ContainerNavItem>
    </li>
  );
};

export default NavItem;
