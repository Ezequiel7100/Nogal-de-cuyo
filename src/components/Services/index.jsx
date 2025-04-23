import Text from "@/components/Text";
import Title from "@/components/Title";

import styles from "./index.module.scss";
import { useState } from "react";
import dataMocked from "@/utils/dataMocked";
import useDeviceType from "@/hooks/useDeviceType";

const Services = () => {
  const [serviceSelected, setServiceSelected] = useState(
    dataMocked.other_services[0].id
  );
  const { isTablet } = useDeviceType();

  return (
    <div
      id="servicios"
      style={{
        marginInline: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Title label={"Servicios"} title={"Nuestros servicios"} />
      <Text size={"18px"} weight="medium">
        Nogal de Cuyo presta el servicio de contratación particular de ómnibus,
        minibus y vans, atendemos agencias de viajes, eventos para empresas,
        viajes de estudios, viajes dentro y fuera de la Provincia de Mendoza,
        Viajes nacionales e internacionales. Nuestra experiencia y
        profesionalismo avalan que el servicio contratado sea una agradable
        experiencia en cada uno de los viajes.
      </Text>
      <div className={styles.services}>
        {dataMocked.other_services.map((service) => (
          <button
            key={service.id}
            onClick={() => setServiceSelected(service.id)}
            className={styles.item}
          >
            <div className={styles.icon}>{service.icon}</div>
            <Text
              color="white"
              weight="bold"
              uppercase
              size={isTablet ? "10px" : undefined}
            >
              {service.name}
            </Text>
            {service.id === serviceSelected && (
              <div className={styles.triangle} />
            )}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {dataMocked.other_services.map((service) => (
          <div
            key={service.id}
            style={{
              maxHeight: serviceSelected === service.id ? "1000px" : "0",
              opacity: serviceSelected === service.id ? "1" : "0",
              transition: "opacity 1s ease",
              overflow: "hidden",
            }}
          >
            <Text weight="medium" size={"18px"}>
              {service.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
