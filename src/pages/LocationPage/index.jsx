import Title from "@/components/Title";
import styles from "./index.module.scss";
const LocationPage = () => {
  return (
    <>
      <Title title="Ubicación" style={{ textTransform: "uppercase" }} />
      <iframe
        width="100%"
        height="700px"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d512.8340079819643!2d-68.82115439472865!3d-32.85293812530972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08ae71cd15af%3A0x44a36d3895e0bb84!2sNogal%20De%20Cuyo!5e0!3m2!1ses!2sar!4v1651102372445!5m2!1ses!2sar"
      />
    </>
  );
};
export default LocationPage;
