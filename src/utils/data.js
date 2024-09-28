import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Web development",
    projects: 15,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 10,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Wapexp, Faisalabad",
    tenure: "Aug 2021 - Sep 2022",
    role: "PHP Developer",
    detail:
      "Studied PHP course at WAPEXP Institute, Faisalabad, for about 1 year."
  },
  {
    place: "SMIT, Faisalabad",
    tenure: "Nov 2022 - Dec 2023",
    role: "MERN Stack student",
    detail:
      "Participated in the MERN Stack course at SMIT (Saylani Mass IT Training, Faisalabad), for about 1.2 years."
  },
  {
    place: "Dev House, Faisalabad",
    tenure: "Dec 2023",
    role: "MERN Stack developer",
    detail:
      "Started as a MERN Stack developer at Dev House, Faisalabad. It will be an amazing journey in the era of development."
  },
];


export const comments = [
  {
    name: "John Doe",
    post: "Creative Manager",
    comment:
      "Working with Muhammad Talha was an absolute pleasure. He transformed our vision into a fully functional and visually appealing website. His attention to detail, technical expertise, and ability to deliver on time were truly impressive. I highly recommend him for any web development project!",
    img: "./people2.png",
  },
  {
    name: "Sarah Lee",
    post: "Product Manager",
    comment:
      "Talha built a custom e-commerce platform for us, and the results have been outstanding. The integration with Stripe was seamless, and the admin panel he developed made it so easy for us to manage our products in real-time. His communication and problem-solving skills set him apart from others we've worked with.",
    img: "./people1.png",
  },
  {
    name: "David Martin",
    post: "Freelance Designer",
    comment:
      "I needed a clean, professional portfolio website, and Talha delivered beyond my expectations. He was responsive to my feedback and made sure every aspect of the site aligned with my vision. The final product is exactly what I needed, and the process was smooth from start to finish.",
    img: "./people3.png",
  }
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
