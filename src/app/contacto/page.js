import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("@/pages/ContactPage"), {
  ssr: false,
});
export default function Contact() {
  return <ContactPage />;
}
