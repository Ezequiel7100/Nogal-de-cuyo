import FlotaPage from "@/pages/FlotaPage";
import dataMocked from "@/utils/dataMocked";
import readFiles from "@/utils/readFiles";

const Flota = async () => {
  const banners = [];

  for (let i = 0; i < dataMocked.units.length; i++) {
    const [interiores, exteriores] = await Promise.all([
      readFiles(`public/assets/interiores${dataMocked.units[i].url}`),
      readFiles(`public/assets/exteriores${dataMocked.units[i].url}`),
    ]);
    if (exteriores.length > 0) {
      banners.unshift(
        ...exteriores.slice(0, 5).map((b) => ({
          url: "#",
          desktop_image: {
            url: `/assets/exteriores${dataMocked.units[i].url}/${b}`,
          },
          mobile_image: {
            url: `/assets/exteriores${dataMocked.units[i].url}/${b}`,
          },
        }))
      );
    }
    if (interiores.length > 0) {
      banners.unshift(
        ...interiores.slice(0, 5).map((b) => ({
          url: "#",
          desktop_image: {
            url: `/assets/interiores${dataMocked.units[i].url}/${b}`,
          },
          mobile_image: {
            url: `/assets/interiores${dataMocked.units[i].url}/${b}`,
          },
        }))
      );
    }
  }
  banners.unshift({
    url: "#",
    desktop_image: { url: "/assets/flota.jpg" },
    mobile_image: { url: "/assets/flota.jpg" },
  });
  return <FlotaPage banners={banners} />;
};

export default Flota;
