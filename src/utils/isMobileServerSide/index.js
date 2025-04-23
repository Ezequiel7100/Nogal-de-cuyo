import { headers } from "next/headers";

const isMobileServerSide = () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  return /Mobi|Android/i.test(userAgent);
};
export default isMobileServerSide;
