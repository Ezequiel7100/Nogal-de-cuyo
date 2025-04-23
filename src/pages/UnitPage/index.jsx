"use client";

import Title from "@/components/Title";
import styles from "./index.module.scss";
import Text from "@/components/Text";
import dataMocked from "@/utils/dataMocked";
import BannerSlider from "@/components/BannerSlider";

const UnitPage = ({
  interiores = [],
  exteriores = [],
  unit = dataMocked.units[0],
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title
          component="h1"
          titleSize={48}
          label={"Unidad"}
          title={unit.name.toUpperCase()}
        />
      </div>
      {exteriores.length > 0 && (
        <>
          <div className={styles.banner}>
            <h3>Exteriores</h3>
          </div>
          <div style={{ width: "100%" }}>
            <BannerSlider withChevrons automatic banners={exteriores} />
          </div>
        </>
      )}
      {interiores.length > 0 && (
        <>
          <div className={styles.banner}>
            <h3>Interiores</h3>
          </div>
          <div style={{ width: "100%" }}>
            <BannerSlider withChevrons automatic banners={interiores} />
          </div>
        </>
      )}
      <p>{unit.description}</p>
      <Text size={"36px"} weight="bold">
        Equipamento
      </Text>
      <ul className={styles.items}>
        {unit.equipaments.map((equipament) => (
          <li className={styles.item} key={equipament}>
            {equipament}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          window.open(
            `https://wa.me/${dataMocked.whatsapp}?text=Hola, me interesa una cotización de la unidad ${unit.name}.`
          )
        }
        className={styles.btn}
      >
        Solicitar una cotización
      </button>
    </div>
  );
};

export default UnitPage;
