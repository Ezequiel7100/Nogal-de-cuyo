"use client";

// import BannerSlider from "@/components/BannerSlider";
import styles from "./index.module.scss";
import Text from "@/components/Text";
import dataMocked from "@/utils/dataMocked";
import WhereMeet from "@/components/WhereMeet";
import Title from "@/components/Title";
import Unit from "@/components/Unit";
import BarList from "@/components/BarList";
import Video from "@/components/Video";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ marginTop: "40px" }}>
        <Video id={"994861007"} />
      </div>

      <WhereMeet />
      <div
        id="unidades"
        style={{
          marginInline: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Title label={"Unidades"} title={"Nuestra flota"} />
        <div style={{ marginBottom: "10px" }}>
          <Text size={"18px"} weight="medium">
            Contamos con diversas unidades que permiten a nuestros clientes
            elegir un servicio a medida de acuerdo con las distancias,
            comodidades y cantidad de asientos necesarios. Ud. puede contratar
            nuestros servicios realiazando una reserva previa, contará con
            nuestro asesoramiento para una buena elección del vehiculo ayudando
            de esta forma a la optimización de sus recursos.
          </Text>
        </div>
        <Text size={"18px"} weight="medium">
          El experimentado personal y modernas unidades se complementan para
          cubrir las altas exigencias brindando un completo servicio
          personalizado, donde el cliente trata directamente con los dueños de
          la empresa sin intermediarios. El servicio de transporte para grupos
          pequeños, medianos o grandes, puede contratarse para: traslados
          ejecutivos, excursiones locales, traslados en privado y grupos,
          traslados para eventos.
        </Text>

        <div className={styles.unitsContainer}>
          <div className={styles.units}>
            {dataMocked.units.map((unit) => (
              <Unit
                key={unit.name}
                url={unit.url}
                name={unit.name}
                unitNumber={4}
              ></Unit>
            ))}
          </div>
        </div>
      </div>
      <Services />

      <div id="servicios" className={styles.othersServices}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <Text size={"18px"} weight="medium">
            Nogal de Cuyo presta el servicio de contratación particular de
            ómnibus, minibus y vans, atendemos agencias de viajes, eventos para
            empresas, viajes de estudios, viajes dentro y fuera de la Provincia
            de Mendoza, Viajes nacionales e internacionales. Nuestra experiencia
            y profesionalismo avalan que el servicio contratado sea una
            agradable experiencia en cada uno de los viajes.
          </Text>
          <Text size={"18px"} weight="medium">
            Nuestro servicio de transporte para particulares, grupos pequeños,
            medianos o grandes, puede contratarse para:
          </Text>
        </div>
        <BarList
          items={dataMocked.services.map((service) => ({
            name: service.name,
            icon: service.icon,
          }))}
        />
      </div>
    </div>
  );
}
