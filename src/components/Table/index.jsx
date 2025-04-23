import styles from "./index.module.scss";

const Table = ({ items }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {items.map((property, i) => (
          <tr key={i}>
            <th>{property.firstColumn}</th>
            <td>{property.secondColumn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
