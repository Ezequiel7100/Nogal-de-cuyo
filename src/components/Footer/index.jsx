import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import Text from "@/components/Text";
import stlyes from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={stlyes.container}>
      <Text>Lisandro Moyano 1357 - Las Heras - Mendoza</Text>
      <Text> Cel. +54 9 2615 635599 - Cel. +54 9 26156355799</Text>{" "}
      <Text>Tel. (0261) 4302111 / 4309888</Text>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <a
          target="_blank"
          href="https://www.facebook.com/people/Nogal-De-Cuyo/100063601575387/"
        >
          <BsFacebook size={20} color="white" />
        </a>
        <a target="_blank" href="https://www.instagram.com/nogaldecuyo_ok/">
          <FaInstagramSquare size={20} color="white" />
        </a>
      </div>
      <Text>
        ©{new Date().getFullYear()} Nogal de Cuyo | Todos los derechos
        reservados
      </Text>
    </footer>
  );
};
export default Footer;
