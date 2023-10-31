import React from "react";
import logo from "../../assets/images/logo.png";

import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks1 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment ",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks2 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] mb-5 ">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7  ">
              Copyright @{year} developed by shiv shankar all right reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  className="w-9 h-9 border border-solid border-[#181A1E]
              rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                  to={link.path}
                  key={index}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor  ">
              Quick Links
            </h2>
            <ul>
              {
              quickLinks.map(
                ((item, index) => 
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                
               
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor  ">
              I want to :
            </h2>
            <ul>
              {
              quickLinks1.map(
                ((item, index) => 
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                
               
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor  ">
              Support
            </h2>
            <ul>
              {
              quickLinks2.map(
                ((item, index) => 
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                
               
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
