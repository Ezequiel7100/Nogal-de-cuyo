import Text from "@/components/Text";
import styles from "./index.module.scss";
import Title from "@/components/Title";

const AboutUsPage = () => {
  return (
    <div>
      <div className={styles.banner} />
      <div className={styles.container}>
        <Title label={"Empresa"} title={"Empresa"} />
        <Text size={"18px"} weight="medium">
          Nogal de Cuyo es una empresa familiar mendocina, formada en el año
          1997. Una amplia trayectoria en transporte de pasajeros, la convierte
          en una de las empresas mendocinas más profesional y confiable del
          mercado para contratación particular de ómnibus, nuestro experimentado
          personal y modernas unidades se complementan para cubrir las altas
          exigencias, brindando un completo servicio personalizado
        </Text>
        <Text size={"18px"} weight="medium">
          Pioneros en ofrecer el servicio de transporte por medio de la
          contratación en forma independiente, logramos crecer como empresa
          ampliando nuestro parque automotor e instalaciones. Poseemos talleres
          de mecánica propios para el mantenimiento de cada unidad, como así
          también taller de pintura, gomería y conjuntamente con oficinas de
          atención el público.
        </Text>
      </div>
      <div className={styles.container}>
        <Title label={"Empresa"} title={"Historia"} />
        <Text size={"18px"} weight="medium">
          Nogal de Cuyo fue constituida en el año 1997, es una empresa familiar
          que por dos generaciones se ha dedicado al transporte de pasajeros
          para el turismo. Con sus mas de 25 años de servicios ha sabido
          afianzarse en el transporte en la Provincia de Mendoza, trasladando a
          personas en grupos o viajes privados a los diferentes destinos
          turísticos. Cuenta con unidades nuevas de distintas capacidades con el
          equipamiento necesario para satisfacer a la demanda de los clientes.
        </Text>
        <Text size={"18px"} weight="medium">
          La dirección y administración son llevadas a cabo con la seriedad y
          responsabilidad que la actividad merece por la propia familia, lo cual
          implica un gran compromiso de servicio. Hoy Nogal de Cuyo es una
          empresa en busca de la excelencia, persiguiendo la superación
          constante en cada pequeño proceso, en cada detalle de calidad.
          Queremos que nos sigan eligiendo, por eso trabajamos más. Por esto,
          agradecemos a nuestros clientes que todos estos años han confiado en
          nuestros servicios permitiendo poder llegar a ser lo que somos.
        </Text>
      </div>
      <div className={styles.container}>
        <Title label={"Empresa"} title={"Misión"} />
        <Text size={"18px"} weight="medium">
          En NOGAL DE CUYO nuestra MISION es brindar una amplia variedad de
          servicios de transporte para satisfacer las necesidades de los
          clientes en sus viajes con una alta calidad y servicio especializado,
          mediante el profesionalismo y experiencia del personal, modernas
          unidades, trabajando en equipo, cuidando el ambiente, dando los
          mejores servicios de transporte turísticos locales, nacionales e
          internacionales
        </Text>
      </div>
      <div className={styles.container}>
        <Title label={"Empresa"} title={"Visión"} />
        <Text size={"18px"} weight="medium">
          La VISION es ser una empresa de transporte de pasajeros para el
          turismo y sectores de la sociedad que demanden nuestros servicios, en
          continuo crecimiento, que se distinga por proporcionar una calidad de
          servicio excelente a sus clientes, en permanente cambio para adecuarse
          a las necesidades del mercado, liderando el mismo
        </Text>
      </div>
      <div className={styles.container}>
        <Title label={"Empresa"} title={"Valores"} />
        <Text size={"18px"} weight="medium">
          Trabajo en equipo
        </Text>
        <Text size={"18px"} weight="medium">
          Honestidad
        </Text>
        <Text size={"18px"} weight="medium">
          Seguridad
        </Text>
        <Text size={"18px"} weight="medium">
          Puntualidad
        </Text>
        <Text size={"18px"} weight="medium">
          Compromiso
        </Text>
        <Text size={"18px"} weight="medium">
          Distinción
        </Text>
        <Text size={"18px"} weight="medium">
          Excelencia
        </Text>
        <Text size={"18px"} weight="medium">
          Gratitud
        </Text>
        <Text size={"18px"} weight="medium">
          Tranquilidad
        </Text>
      </div>
    </div>
  );
};

export default AboutUsPage;
