"use client";

/* eslint-disable jsx-a11y/control-has-associated-label */

import useScroll from "@/hooks/useScroll";
import { useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import dynamic from "next/dynamic";
import Header from "./Header";

const Navbar = ({ isMobile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (scrolled) => {
    if (
      typeof document !== "undefined" &&
      !document.getElementById("sidemenu")
    ) {
      setIsScrolled(scrolled);
    }
  };
  useScroll(handleScroll, 90);
  const navbarScrollClass = cn({
    [styles.show]: isScrolled,
    [styles.notShow]: !isScrolled,
    [styles.navbarScroll]: true,
  });
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>España 551 - Mendoza, Argentina (CP 5500)</span>
      </div>
      <Header isMobile={isMobile} />
      <div className={navbarScrollClass}>
        <Header isMobile={isMobile} />
      </div>
    </div>
  );
};
export default Navbar;
