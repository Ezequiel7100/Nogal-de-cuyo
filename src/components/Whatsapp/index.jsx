"use client";
/* eslint-disable jsx-a11y/control-has-associated-label */
import { RiWhatsappFill } from "react-icons/ri";
import styles from "./index.module.scss";
import dataMocked from "@/utils/dataMocked";

const Whatsapp = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${dataMocked.whatsapp}?text=Hola!`);
  };
  return (
    <button onClick={handleClick} className={styles.container}>
      <RiWhatsappFill color="#4ecd5d" fontSize="50px" />
    </button>
  );
};
export default Whatsapp;
