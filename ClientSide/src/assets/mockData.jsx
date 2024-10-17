import { FaShippingFast } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { MdOutlineDiscount, MdOutlineSupportAgent } from "react-icons/md";

export const Categories = [
  "Fashion",
  "Home & kitchen",
  "Beauty",
  "Sports",
  "Automotive",
  "Electronics",
];
export const infoItmes = [
  {
    icon: <FaShippingFast className="text-red-500 text-3xl" />,
    title: "Free Shipping",
    description: "Get your orders deliver with no extra cost",
  },
  {
    icon: <MdOutlineSupportAgent className="text-red-500 text-3xl" />,
    title: "Support 24/7",
    description: "Our Services available 24/7 ",
  },
  {
    icon: <FaMoneyCheckDollar className="text-red-500 text-3xl" />,
    title: "100% Money Back",
    description: "Full Founded if you not satisfied",
  },
  {
    icon: <GrSecure className="text-red-500 text-3xl" />,
    title: "Payment Secure",
    description: "Your payment information secure with us",
  },
  {
    icon: <MdOutlineDiscount className="text-red-500 text-3xl" />,
    title: "Discount",
    description: "Currently 50% discount avaiable",
  },
];
//data for categoriesection
import menimg from "../assets/images/men.jpg";
import womenimg from "../assets/images/women.jpg";
import kidimg from "../assets/images/kid.jpg";
import other from "../assets/images/other.jpg";
import shopshoes from "../assets/images/shopshoes.jpg";
import shopwatch from "../assets/images/shopwatch.jpg";
import pen from "../assets/images/pen.jpg";
import shampo from "../assets/images/shampo.jpg";
import toy from "../assets/images/toy.jpg";
import headphone from "../assets/images/headphone.jpg";
import glasses from "../assets/images/glasses.jpg";
import shilte from "../assets/images/shilte.jpg";
import ring from "../assets/images/ring.jpg";
import soap from "../assets/images/soap.jpg";

export const DataCatogrieSection = [
  {
    title: "Men",
    imgurl: menimg,
  },
  {
    title: "women",
    imgurl: womenimg,
  },
  {
    title: "kids",
    imgurl: kidimg,
  },
  {
    title: "Other",
    imgurl: other,
  },
];
//Data for Product Section
export const ProductSection = [
  {
    id: 1,
    title: "watch",
    price: 123,
    proimg: shopwatch,
  },
  {
    id: 2,
    title: "shoes",
    price: 567,
    proimg: shopshoes,
  },
  {
    id: 3,
    title: "pen",
    price: 200.5,
    proimg: pen,
  },
  {
    id: 4,
    title: "glasess",
    price: 650.5,
    proimg: glasses,
  },
  {
    id: 5,
    title: "shampo",
    price: 400.0,
    proimg: shampo,
  },
  {
    id: 6,
    title: "headphone",
    price: 999.0,
    proimg: headphone,
  },
  {
    id: 7,
    title: "shilte",
    price: 1100.0,
    proimg: shilte,
  },
  {
    id: 8,
    title: "toy",
    price: 2000.0,
    proimg: toy,
  },
  {
    id: 9,
    title: "ring",
    price: 4999.0,
    proimg: ring,
  },
  {
    id: 10,
    title: "soap",
    price: 900,
    proimg: soap,
  },
];
