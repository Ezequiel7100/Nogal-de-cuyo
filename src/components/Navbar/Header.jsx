import { RxHamburgerMenu } from "react-icons/rx";
import dataMocked from "@/utils/dataMocked";
import Sidemenu from "@/components/Sidemenu";
import NavItem from "@/components/Navbar/NavItem";
import styles from "./index.module.scss";
import useDeviceType from "@/hooks/useDeviceType";
import { useState } from "react";

const Header = ({ isMobile }) => {
  const { isTablet } = useDeviceType(isMobile);
  const [open, setOpen] = useState(false);
  const handleSideMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className={styles.nav}>
      <ul>
        {isTablet && (
          <li className={styles.navLink}>
            <button
              style={{ display: "flex", alignItems: "center" }}
              onClick={handleSideMenu}
            >
              <RxHamburgerMenu
                style={{ fontSize: "30px", color: "var(--primary-color)" }}
              />
            </button>
          </li>
        )}
        <NavItem
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          isNavLogo
          to="/"
        >
          <img
            src="/assets/nogalDeCuyo.png"
            width={200}
            height={70}
            alt="favicon"
            style={{
              objectFit: "cover",
              width: "397px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </NavItem>
      </ul>
      {isTablet ? (
        <Sidemenu open={open} onClose={handleSideMenu} />
      ) : (
        <ul style={{ marginRight: "15px" }}>
          {dataMocked.navbar.map((navItem) => (
            <NavItem
              options={navItem.options}
              to={navItem.url}
              key={navItem.url}
            >
              {navItem.name}
            </NavItem>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Header;
