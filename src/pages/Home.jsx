import React from "react";
import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import icon0 from "../assets/images/icon01.png";
import icon1 from "../assets/images/icon02.png";
import icon2 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import featureImg from "../assets/images/feature-img.png";
import avtarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import { IoIosArrowRoundForward } from "react-icons/io";
import DoctorList from "../components/Doctors/DoctorList";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-handingColor font-[800] md:text-[60px] md:leading-[70px]   ">
                  We help patients live a healthy , longer life.
                </h1>
                <p className="text__para ">
                  How fucking hard to control when u are sloging your ass daily
                  instead of that no one is replying sometimes its feels still i
                  am not prepared or my resume is nbot upto mark but its not
                  that case BC !! something else is missing and what the fck is
                  that ??
                </p>
                <button className="btn"> Request an Appointment</button>
              </div>
              {/* Hero Counter  */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor   ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Year of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor   ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor   ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Hero Content  */}
            <div className="flex gap-[30px] justify-end ">
              <div>
                <img className="w-full" src={heroImg1} alt="" />
              </div>
              <div className="mt-[30px] ">
                <img className="w-full mb-[30px] " src={heroImg2} alt="" />
                <img className="w-full mb-[30px] " src={heroImg3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID Section */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World class care for everyone . Our health System offers unmatched
              , expert health care.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30x] lg:mt-[55px] ">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                {" "}
                <img src={icon0} alt=""></img>
              </div>
              <div className="mt-[30px]  ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  {" "}
                  Find a Doctor{" "}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care . From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                {" "}
                <img src={icon1} alt=""></img>
              </div>
              <div className="mt-[30px]  ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  {" "}
                  Find a Location{" "}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care . From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                {" "}
                <img src={icon2} alt=""></img>
              </div>
              <div className="mt-[30px]  ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  {" "}
                  Book Appointment{" "}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care . From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <About />

      {/* Services Section */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className=" heading text-center  ">Our Medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone . our health System offers
              unmatched, expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Features section */}
      <section>
        <div className="container">
          <div className="flex  items-center justify-between flex-col lg:flex-row ">
            <div className=" xl:w-[670px] ">
              <h2 className="heading">
                Get virtual treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1.Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2.Search for physician here, contact their office.
                </li>
                <li className="text__para">
                  3.View our physicians who are accepting new patients , use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
              <img src={featureImg} alt="" className="w-3/4" />
              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3  
            lg:pt-4 lg:pb-[26px] rounded-[10px] "
              >
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-[6px] lg:gap-3  ">
                    <p className=" text-[10px] leading -[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] ">
                      Tue,24
                    </p>
                    <p className=" text-[10px] leading -[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400] ">
                      10:00
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-between
                  bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] "
                  >
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div
                  className=" w-[65px ] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 
                lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12x] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4
                 "
                >
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]  ">
                  <img src={avtarIcon} alt="" />
                  <h4 className=" text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor  ">
                    Shiv Mathur{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Our great doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className=" heading text-center  ">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone . our health System offers
              unmatched, expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>


      
          
      
    </>
  );
};

export default Home;
