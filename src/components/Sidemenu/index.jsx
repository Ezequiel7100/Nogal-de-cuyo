/* eslint-disable jsx-a11y/control-has-associated-label */
import { IoCloseOutline } from "react-icons/io5";
import cn from "classnames";
import dataMocked from "@/utils/dataMocked";
import styles from "./index.module.scss";
import NavItem from "./NavItem";

const Sidemenu = ({ onClose, open }) => {
  const backdropClasses = cn({
    [styles.backdrop]: true,
    [styles.open]: open,
  });
  const sideMenuClasses = cn({
    [styles.container]: true,
    [styles.open]: open,
  });
  return (
    <div id={open ? "sidemenu" : undefined}>
      <button onClick={onClose} className={backdropClasses} />
      <div className={sideMenuClasses}>
        <ul className={styles.navItems}>
          {dataMocked.navbar.map((navItem) => (
            <NavItem key={navItem.url} navItem={navItem} onClose={onClose}>
              {navItem.name}
            </NavItem>
          ))}
        </ul>
        <button className={styles.closeIcon} onClick={onClose}>
          <IoCloseOutline style={{ color: "white", fontSize: "30px" }} />
        </button>
      </div>
    </div>
  );
};

export default Sidemenu;
