import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Icons = [
  {
    tag: FaLinkedin,
    link: "https://www.linkedin.com/in/ibhaudur-rahman-0b3a71205/",
  },
  {
    tag: FaWhatsapp,
    link: "https://wa.me/qr/7WB6N6VWZEZFD1", // Corrected WhatsApp link
  },
  {
    tag: FaInstagram,
    link: "https://www.instagram.com/_ibhaudur__/", // Corrected Instagram link
  },
  {
    tag: CiFacebook,
    link: "https://www.facebook.com/ibhaudurrahman1999", // Corrected Facebook link
  },
];

export const Experience = () => {
  const currentDate = new Date();
  const pastDate = new Date("01-02-2022");
  const differenceInMilliseconds = currentDate - pastDate;
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  let differenceInYears = differenceInDays / 365;
  if (differenceInDays < 30) {
    differenceInYears = 0.1;
  } else {
    differenceInYears = Number(differenceInYears.toFixed(1));
  }
  return differenceInYears;
};