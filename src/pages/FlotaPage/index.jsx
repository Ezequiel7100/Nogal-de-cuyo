"use client";
import Text from "@/components/Text";
import styles from "./index.module.scss";
import Unit from "@/components/Unit";
import dataMocked from "@/utils/dataMocked";
import BannerSlider from "@/components/BannerSlider";

const FlotaPage = ({ banners }) => {
  return (
    <div className={styles.container}>
      <BannerSlider withChevrons automatic banners={banners} />
      <div className={styles.content}>
        <h1>Nuestra flota</h1>
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

        <div className={styles.units}>
          {dataMocked.units.map((unit) => (
            <Unit key={unit.name} url={unit.url} name={unit.name}></Unit>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlotaPage;
