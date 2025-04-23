import { FaBusSimple } from "react-icons/fa6";
import styles from "./index.module.scss";
import useDeviceType from "@/hooks/useDeviceType";

const WhereMeet = () => {
  const { isTablet } = useDeviceType();
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaBusSimple color="white" size={70} className={styles.location} />
            <h3 style={{ textAlign: "center" }}>¿Quiénes somos?</h3>
          </div>

          <img
            className={styles.tabletImg}
            src="/assets/25aos.jpg"
            alt="25 años"
          />
          <p style={{ marginInline: "20px", textAlign: "justify" }}>
            Nogal de Cuyo S.A. es una empresa familiar mendocina, formada en el
            año 1997. Una amplia trayectoria en transporte de pasajeros, la
            convierte en una de las empresas mas profesional y confiable del
            mercado para contratación particular de ómnibus, nuestro
            experimentado personal y modernas unidades se complementan para
            cubrir las altas exigencias brindando un completo servicio
            personalizado.
          </p>
          <p style={{ marginInline: "20px", textAlign: "justify" }}>
            Pioneros en ofrecer el servicio de transporte por medio de la
            contratación en forma independiente, logramos crecer como empresa
            ampliando nuestro parque automotor e instalaciones. Poseemos
            talleres de mecánica propios para el mentenimiento de cada unidad,
            como así también taller de pintura, gomería y conjuntamente con
            oficinas de atención el público.
          </p>
        </div>
        <img
          className={styles.desktopImage}
          src="/assets/25aos.jpg"
          alt="25 años"
          width={220}
          height={220}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </div>
      <img
        className={styles.image}
        src="/assets/exteriores/bus-piso-elevado/4.jpg"
        alt="Quienes somos"
      />
      <div className={styles.backdrop} />
    </div>
  );
};
export default WhereMeet;
