/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { toast } from "react-toastify";

const sendEmail = async ({
  file,
  mail = "marcelogottardini00@gmail.com",
  subject,
  text,
}) => {
  const toastConfig = {
    position: "top-right",
    autoClose: 3500,
    closeOnClick: true,
    draggable: true,
  };

  try {
    const formData = new FormData();
    formData.append("mail", mail);
    formData.append("subject", subject);
    formData.append("text", text);
    formData.append("mailReceiver", import.meta.env.VITE_MAIL_RECEIVER);
    formData.append("attachment", file);
    const req = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/mail/sendEmail`,
      formData
    );
    toast.success(req.data, toastConfig);

    return { success: true };
  } catch (error) {
    toast.error(error.message, toastConfig);

    return { success: false };
  }
};
export { sendEmail };
