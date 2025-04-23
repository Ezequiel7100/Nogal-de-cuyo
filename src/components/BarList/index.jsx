import styles from "./index.module.scss";
import Text from "@/components/Text";
import { RiExternalLinkLine } from "react-icons/ri";

import Link from "next/link";

const BarList = ({ url, items = [] }) => (
  <div className={styles.container}>
    {items.map((item, i) =>
      item.url ? (
        <Link href={item.url} key={i} className={styles.item}>
          {item.icon}
          <Text>{item.name}</Text>
          <RiExternalLinkLine size={20} />
        </Link>
      ) : (
        <div key={i} className={styles.item}>
          {item.icon}
          <div className={styles.content}>
            <Text weight="medium">{item.name}</Text>
          </div>
        </div>
      )
    )}
  </div>
);
export default BarList;
