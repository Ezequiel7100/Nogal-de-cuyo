import UnitPage from "@/pages/UnitPage";
import dataMocked from "@/utils/dataMocked";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import readFiles from "@/utils/readFiles";

const Unit = async () => {
  const name = headers().get("x-pathname").split("/")[1];
  const unit = dataMocked.units.find((unit) => unit.url === `/${name}`);
  if (!unit) redirect("/");

  return (
    <UnitPage
      unit={unit}
      interiores={Array(unit.lastPhotoIndex.interiores || 0)
        .fill(0)
        .map((_a, i) => ({
          url: "#",
          desktop_image: { url: `/assets/interiores/${name}/${i}.jpg` },
          mobile_image: { url: `/assets/interiores/${name}/${i}.jpg` },
        }))}
      exteriores={Array(unit.lastPhotoIndex.exteriores || 0)
        .fill(0)
        .map((_a, i) => ({
          url: "#",
          desktop_image: {
            url: `/assets/exteriores/${name}/${i}${i === 1 ? ".webp" : ".jpg"}`,
          },
          mobile_image: {
            url: `/assets/exteriores/${name}/${i}${i === 1 ? ".webp" : ".jpg"}`,
          },
        }))}
    />
  );
};

export async function generateStaticParams() {
  return dataMocked.units.map((unit) => ({
    unit: unit.url.split("/")[1],
  }));
}

export default Unit;
