import Contact from "@/app/contacto/page";
import Home from "@/app/page";
import AboutUs from "@/app/empresa/page";
import { FaBusSimple, FaRegCircleDot } from "react-icons/fa6";
import { FaShuttleVan } from "react-icons/fa";
import { LuSchool2 } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineStadium } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
import { IoFlagSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoAirplaneOutline } from "react-icons/io5";

const dataMocked = {
  whatsapp: "5492615635599",
  navbar: [
    {
      name: "Inicio",
      url: "/",
      routerComponent: <Home />,
    },
    {
      name: "Empresa",
      url: "/empresa",
      routerComponent: <AboutUs />,
    },
    {
      name: "Servicios",
      url: "/#servicios",
      routerComponent: <AboutUs />,
    },
    {
      name: "flota",
      url: "/#unidades",
      routerComponent: <AboutUs />,
      options: ["Bus-Doble-Piso", "Bus-Piso-Elevado", "Mini-Buses", "Combis"],
    },
    {
      name: "Ubicación",
      url: "/ubicacion",
      routerComponent: <AboutUs />,
    },

    {
      name: "Contacto",
      url: "/contacto",
      routerComponent: <Contact />,
    },
  ],
  services: [
    {
      icon: <FaBusSimple size={"38px"} />,
      name: "Excursiones locales",
    },
    {
      icon: <FaShuttleVan size={"38px"} />,
      name: "Servicios coorporativos",
    },
    {
      icon: <LuSchool2 size={"38px"} />,
      name: "Eventos privados",
    },
    {
      icon: <MdOutlineStadium size={"38px"} />,
      name: "Traslados de Clubes de Futbol, Rugby, Jockey, Escuelas de Danza, etc",
    },
    {
      icon: <GiGraduateCap size={"38px"} />,
      name: "Viajes Educativos, turismo estudiantil",
    },
    {
      icon: <IoFlagSharp size={"38px"} />,
      name: "Viajes nacionales",
    },
    {
      icon: <TiWorld size={"38px"} />,
      name: "Viajes internacionales",
    },
  ],
  other_services: [
    {
      id: 0,
      icon: <IoLocationOutline size={"38px"} color="white" />,
      name: "Turismo receptivo local",
      description:
        "Un número importante de agencias locales y del país nos eligen como proveedores de este servicio que cada día crece con el turismo nacional e internacional que visita nuestra provincia, ya sea para excursiones, eventos para empresas, bodas, etc.  Un gran conocimiento de la Provincia, la logística, la variedad de unidades de distintas capacidades y personal experimentado nos permite ofrecer un excelente servicio a aquellos que nos eligen.",
    },
    {
      id: 2,
      icon: <FaMapLocationDot size={"38px"} color="white" />,
      name: "Servicio nacional",
      description:
        "Contamos con diversas unidades que permiten a nuestros clientes elegir un servicio a medida de acuerdo con las distancias, comodidades y cantidad de asientos necesarios. Ud. puede contratar nuestros servicios realizando una reserva previa, contará con nuestro asesoramiento para una buena elección del vehiculo ayudando de esta forma a la optimización de sus recursos. ",
    },
    {
      id: 3,
      icon: <IoAirplaneOutline size={"38px"} color="white" />,
      name: "Servicio internacional",
      description:
        "Nogal de Cuyo cuenta con unidades autorizadas para realizar viajes internacionales, todas nuestras unidades poseen el mantenimiento adecuado y toda la documentación según la normativa vigente. Nuestro personal posee la experiencia necesaria para viajes internacionales, manteniendo una fluida comunicación con la empresa, para monitorear cada trayecto del itinerario.",
    },
  ],
  units: [
    {
      lastPhotoIndex: { interiores: 38, exteriores: 20 },
      name: "Omnibus Doble Piso",
      url: "/bus-doble-piso",
      equipaments: [
        "48 butacas semi cama",
        "12 butacas cama",
        "termeras agua fría/caliente",
        "baño",
        "aire acondicionado",
        "calefacción",
        "luz individual",
        "sistema de audio y video",
        "Conservadora para bebidas",
        "USB para cargar celulares",
      ],
      description: "Ideal para viajes largos o medianas distancia.",
    },
    {
      lastPhotoIndex: { exteriores: 14 },
      name: "Omnibus Piso Elevado",
      url: "/bus-piso-elevado",
      equipaments: [
        "44 butacas reclinables",
        "termeras agua fría/caliente",
        "baño",
        "aire acondicionado",
        "calefacción",
        "luz individual",
        "sistema de audio y video",
      ],
      description: "Ideal para viajes cortos o medianas distancia.",
    },
    {
      lastPhotoIndex: { interiores: 6, exteriores: 9 },

      name: "Mini Bus",
      url: "/mini-buses",
      equipaments: [
        "24 butacas ligeramente reclinables",
        "aire acondicionado",
        "calefacción",
        "sistema de audio ",
      ],
      description: "Ideal para viajes cortos.",
    },
    {
      lastPhotoIndex: { exteriores: 12 },

      name: "vans",
      url: "/combis",
      equipaments: [
        "19 butacas ligeramente reclinables",
        "USB para cargar celulares",
        "sistema de audio",
        "última tecnología",
      ],
      description: "Ideal para viajes cortos.",
    },
  ],
};

export default dataMocked;
