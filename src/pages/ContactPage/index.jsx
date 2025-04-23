"use client";

import Text from "@/components/Text";
import styles from "./index.module.scss";
import PageBanner from "@/components/PageBanner";

import { sendEmail } from "@/api";

import useDeviceType from "@/hooks/useDeviceType";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const ContactPage = () => {
  const { isTablet } = useDeviceType();

  const handleSubmit = (data) => {
    sendEmail({
      mail: data.mail,
      subject: data.subject,
      text: `Nombre: ${data.name}.\nNúmero de teléfono: ${data.phone}\nServicio: ${data.service}\n${data.message}`,
    });
  };
  return (
    <div>
      <PageBanner
        src="/assets/exteriores/bus-doble-piso/18.jpg"
        alt="Contáctanos"
      />

      <div className={styles.info}>
        <div className={styles.text}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Text weight="medium" color="var(--primary-color)" size="25px">
              Contáctenos
            </Text>
            <Text weight="medium" size={"20px"} underline>
              Si desea realizar una consulta puede hacerlo sin compromiso a
              cualquiera de nuestros teléfonos o vía email:
            </Text>
            <Text weight="medium" size={"20px"}>
              Lisandro Moyano 1357 - Las Heras - Mendoza - Argentina
            </Text>
            <Text weight="medium" size={"20px"} underline>
              Email:{" "}
              <a
                style={{ color: "var(--primary-color)" }}
                href="mailto:info@nogaldecuyo.com.ar"
              >
                info@nogaldecuyo.com.ar
              </a>
            </Text>
            <Text weight="bold" size={"20px"}>
              Tel. +54 (261) 4302111 Tel. +54 (261) 4309888
            </Text>
            <Text weight="bold" size={"20px"} underline>
              Cel. +54 9 2615 635599 - Cel. +54 9 2615635579
            </Text>

            <Text weight="medium" size={"20px"}>
              Seguinos en:
            </Text>
            <Text weight="medium" size={"20px"}>
              <FaInstagramSquare /> Instagram:{" "}
              <a
                style={{ color: "var(--primary-color)" }}
                href="https://www.instagram.com/nogaldecuyo_ok/"
                target="_blank"
              >
                nogaldecuyo_ok
              </a>
            </Text>
            <Text weight="medium" size={"20px"} underline>
              <BsFacebook /> Facebook:{" "}
              <a
                style={{ color: "var(--primary-color)" }}
                href="https://www.facebook.com/people/Nogal-De-Cuyo/100063601575387/"
                target="_blank"
              >
                nogaldecuyo
              </a>
            </Text>
            <Text weight="medium" size={"20px"}>
              Descargar nuestro flyer hacendo{" "}
              <a
                style={{ color: "var(--primary-color)" }}
                href="/assets/Folleto_2022.pdf"
                target="_blank"
              >
                click aquí
              </a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
