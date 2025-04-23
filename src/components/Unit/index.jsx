import Text from "@/components/Text";
import styles from "./index.module.scss";
import Link from "next/link";

const Unit = ({ name, children, url }) => (
  <div className={styles.unit}>
    <div>
      <Text size="17px" weight="bold" uppercase>
        {name}
      </Text>
      {children}
    </div>
    <div className={styles.img}>
      <img src="/assets/border.png" className={styles.border} />
      <img src={`/assets/exteriores/${url}/1.webp`} alt={name} />
    </div>
    <div>
      <Link className={styles.btn} href={url}>
        Ver más
      </Link>
    </div>
  </div>
);
export default Unit;
