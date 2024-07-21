import { FaAirbnb } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { SiIcons8 } from "react-icons/si";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiCastleTurretFill } from "react-icons/pi";
import { GiMountaintop } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { SiCodesignal } from "react-icons/si";
import { FaGolfBall } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { PiCityDuotone } from "react-icons/pi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiTropicalFish } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineSevereCold } from "react-icons/md";
import { PiIslandDuotone } from "react-icons/pi";
import { GiFarmer } from "react-icons/gi";
import { GiMushroomGills } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import { LuShare } from "react-icons/lu";
import { TbBrandLivewire } from "react-icons/tb";
import { HiOutlineXMark } from "react-icons/hi2";
import { MdOutlineContentCopy } from "react-icons/md";
import { SiImessage } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMore } from "react-icons/cg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import pac from "../public/pac.gif";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Body() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((country) => setCountry(country));
  }, []);
  // console.log(country[0].capital[0]);
  const [stays, setStays] = useState(true);
  const [exp, setExp] = useState(false);
  const changeSt = () => {
    if (stays === true) {
      setStays(true);
      setExp(false);
    } else {
      setStays(!stays);
      setExp(!exp);
    }
  };
  const changeEx = () => {
    if (exp === true) {
      setExp(true);
      setStays(false);
    } else {
      setExp(!exp);
      setStays(!stays);
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://ad37c1dc41b1fb37.mokky.dev/airbnb")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [modal, setModal] = useState(false);
  const shareModal = () => {
    setModal(!modal);
  };
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsMinimized(true);
        setAddress(false)
      } else {
        setIsMinimized(false);
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const region = [
    "Europe",
    "Turkey",
    "Africa",
    "South America",
    "United States",
    "United Arabic Emirates",
  ];
  const [inputValue, setInputValue] = useState("");
  const [address, setAddress] = useState(false);
  const openAddress = (e) => {
    if(address==true){
      e.stopPropagation()
    }
    else{
      setAddress(!address);
    }
    if(isMinimized==true){
      setIsMinimized(false)
      e.stopPropagation()
    }
  };
  const getValue = (name) => {
    setInputValue(name);
    setAddress(!address);
  };

// MaterialUI | ReactJs | CALENDAR


  return (
    <div>
      <div className="sticky top-0 z-20 w-full h-[90px] px-10  bg-white flex items-center  justify-between ">
        <div className="flex items-center justify-center">
          <FaAirbnb className="text-red-500 w-10 h-10" />
          <p className="text-[24px] text-red-500 font-bold">airbnb</p>
        </div>
        {!isMinimized && (
          <div className="flex items-center hover:cursor-pointer">
            <p
              onClick={changeSt}
              className={`px-4 py-3 rounded-3xl font-semibold flex items-center justify-center bg-white ${
                stays ? "" : "hover:shadow-md opacity-50"
              }  `}
            >
              Stays
            </p>
            <p
              onClick={changeEx}
              className={`px-5 py-3  rounded-3xl font-semibold flex items-center justify-center bg-white  ${
                exp ? "" : "opacity-50 hover:shadow-md"
              }`}
            >
              Experiences
            </p>
          </div>
        )}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link to={"/home"}>
              <p className="p-2 rounded-3xl hover:shadow-md hover:bg-gray-50 hover:cursor-pointer font-semibold">
                Airbnb your home
              </p>
            </Link>
            <div className="hover:bg-gray-50 hover:shadow-md p-[10px] rounded-full">
              <FiGlobe className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center justify-center h-12 w-[80px] rounded-3xl border-[1px] bg-white hover:shadow-sm">
            <IoMenu className="w-8 h-6" />
            <FaRegCircleUser className="w-8 h-6" />
          </div>
        </div>
      </div>
      <div
        className={`sticky top-0 ${
          isMinimized ? "" : "bg-white top-[90px]"
        }  z-20 w-full h-[90px] flex items-center justify-center`}
      >
        <div
          className={`sticky  top-5  z-30 transition-all duration-300 ${
            isMinimized ? "h-[50px] w-[30%] " : "h-[70px] w-[65%]"
          } rounded-[50px] bg-white  border-[2px] flex items-center justify-between hover:cursor-pointer gap-2 shadow-md group`}
        >
          <div
            onClick={openAddress}
            className={`h-full ${
              isMinimized
                ? "items-center"
                : "rounded-[50px] px-4 hover:bg-gray-50"
            }   flex-1 flex flex-col  justify-center `}
          >
            <p
              className={` ${
                isMinimized ? "text-sm" : "text-xs"
              } font-semibold`}
            >
              {isMinimized ? "Anywhere" : "Where"}
            </p>
            {!isMinimized && (
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                className="outline-none bg-inherit w-full"
                value={inputValue}
                placeholder="Add destinations"
              />
            )}
          </div>

          <div
            className={`h-[40px] w-[1px] bg-gray-200 ${
              isMinimized ? "" : "group-hover:bg-white"
            }  `}
          ></div>

          {exp && (
            <div
              className={`h-full ${
                isMinimized
                  ? "items-center"
                  : "rounded-[50px] px-4 hover:bg-gray-50"
              }   flex-1 flex flex-col  justify-center `}
            >
              <p
                className={` ${
                  isMinimized ? "text-sm" : "text-xs"
                } font-semibold`}
              >
                {isMinimized ? "Anywhere" : "Date"}
              </p>
              {!isMinimized && (
                <input
                  type="text"
                  className="outline-none bg-inherit w-full"
                  placeholder="Add dates"
                />
              )}
            </div>
          )}
          {stays && (
            <>
              <div
                className={`h-full ${
                  isMinimized
                    ? "items-center"
                    : "rounded-[50px] px-4 hover:bg-gray-50"
                }   flex-1 flex flex-col justify-center  `}
              >
                <p
                  className={` ${
                    isMinimized ? "text-sm" : "text-xs"
                  } font-semibold`}
                >
                  {isMinimized ? "Any week" : "Check in"}
                </p>
                {!isMinimized && (
                  <input
                    type="text"
                    className="outline-none bg-inherit w-full"
                    placeholder="Add dates"
                  />
                )}
              </div>
              {!isMinimized && (
                <div
                  className={`h-[40px] w-[1px] bg-gray-200 ${
                    isMinimized ? "" : "group-hover:bg-white"
                  }  `}
                ></div>
              )}
            </>
          )}

          {stays && (
            <div
              className={`h-full ${
                isMinimized ? "hidden" : ""
              } rounded-[50px]  hover:bg-gray-50 flex-1 flex flex-col justify-center px-4`}
            >
              <p className="text-xs font-semibold">Check out</p>

              <input
                type="text"
                className="outline-none bg-inherit w-full"
                placeholder="Add dates"
              />
            </div>
          )}
          <div
            className={`h-[40px] w-[1px] bg-gray-200 ${
              isMinimized ? "" : "group-hover:bg-white"
            }  `}
          ></div>

          <div
            className={`h-full ${
              isMinimized
                ? "items-center"
                : "rounded-[50px] px-4 hover:bg-gray-50"
            }  flex-1 flex flex-col justify-center `}
          >
            <p
              className={`${
                isMinimized ? "text-sm opacity-50" : "text-xs"
              } font-semibold`}
            >
              {isMinimized ? "Add guests" : "Who"}
            </p>
            {!isMinimized && (
              <input
                type="text"
                className="outline-none bg-inherit w-full"
                placeholder="Add guests"
              />
            )}
          </div>

          <div
            className={`${
              isMinimized ? "p-2" : "p-3"
            } rounded-full bg-red-500 mr-2 text-white`}
          >
            <IoMdSearch className={`${isMinimized ? "w-5 h-5" : "w-6 h-6"}`} />
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="mt-3 shadow-md sticky top-[90px] z-10 bg-white">
        <Swiper
          autoplay={true}
          slidesPerView={10}
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          navigation={true}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <SiIcons8 className="w-10 h-10 " />
              <p>Icons</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <PiCastleTurretFill className="w-10 h-10 " />
              <p>Castles</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <GiMountaintop className="w-10 h-10 " />
              <p>Top of the world</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <SiCodesignal className="w-10 h-10" />
              <p>Design</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <FaGolfBall className="w-10 h-10" />
              <p>Golfing</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <IoMdTrendingUp className="w-10 h-10 " />
              <p>Trending</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <PiCityDuotone className="w-10 h-10" />
              <p>Top cities</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <MdOutlineBedroomParent className="w-10 h-10 " />
              <p>Rooms</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <GiTropicalFish className="w-10 h-10" />
              <p>Tropical</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <MdOutlineReviews className="w-10 h-10 " />
              <p>Luxe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <MdOutlineSevereCold className="w-10 h-10 " />
              <p>Tropic</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <PiIslandDuotone className="w-10 h-10" />
              <p>Islands</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <GiFarmer className="w-10 h-10" />
              <p>Farms</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <GiMushroomGills className="w-10 h-10" />
              <p>Creative space</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col w-[120px] h-[60px] hover:underline decoration-black underline-offset-2">
              <GiCampingTent className="w-10 h-10" />
              <p>Camping</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-5 p-3">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="relative w-[300px] h-[300px] rounded-2xl p-1 flex flex-col items-center "
            >
              <div className="w-[290px] rounded-2xl">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={true}
                  pagination={true}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} className="w-[290px] rounded-2xl" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-[14px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
                minima.
              </p>
              <LuShare
                className="absolute top-3 right-3 w-7 h-7 p-1 z-[9] bg-white text-black rounded-full hover:cursor-pointer"
                onClick={shareModal}
              />
              <TbBrandLivewire className="absolute top-3 left-3 w-7 h-7 p-1 z-[9] bg-white text-black rounded-full hover:cursor-pointer" />
            </div>
          );
        })}
      </div>
      {modal && (
        <div className="fixed z-30 inset-0 w-full h-[100vh] bg-opacity-50 bg-black flex items-center justify-center">
          <div className="w-[600px] h-[500px] bg-white rounded-3xl flex flex-col gap-5 ">
            <div className="w-full h-8 p-3">
              <HiOutlineXMark
                onClick={() => setModal(!modal)}
                className="w-5 h-5 hover:cursor-pointer"
              />
            </div>
            <p className="text-[24px] font-semibold px-3">
              Share this experience
            </p>
            <div className="flex items-center px-3 gap-3">
              <img src={data[0].img} className="w-[80px] rounded-xl" />
              <p>{data[0].name}</p>
            </div>
            <div className=" w-full  font-semibold grid grid-cols-2 gap-y-5 place-items-center ">
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <MdOutlineContentCopy className="w-5 h-5 ml-2" />
                <p>Copy link</p>
              </div>
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <SiImessage className="w-5 h-5 ml-2" />
                <p>Messages</p>
              </div>
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <FaFacebookMessenger className="w-5 h-5 ml-2" />
                <p>Messenger</p>
              </div>
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <FaXTwitter className="w-5 h-5 ml-2" />
                <p>Twitter</p>
              </div>
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <HiOutlineMail className="w-5 h-5 ml-2" />
                <p>Email</p>
              </div>
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <FaWhatsappSquare className="w-5 h-5 ml-2" />
                <p>WhatsApp</p>
              </div>
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <FaFacebookSquare className="w-5 h-5 ml-2" />
                <p>Facebook</p>
              </div>
              <div className="w-[250px] h-[50px] flex items-center gap-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:cursor-pointer">
                <CgMore className="w-5 h-5 ml-2" />
                <p>More options</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <footer className="w-full h-[200px] bg-black mt-5 flex items-center justify-center">
        <img src={pac} alt="" className="w-[600px] h-[180px]" />
      </footer> */}

      {address && (
        <div className="fixed inset-0 z-10 ">
          <div className="absolute z-20 top-[27%] left-[18%] w-[400px] h-[300px] flex flex-col justify-center gap-5 bg-white shadow-md rounded-3xl">
            <h1 className="w-[200px] font-semibold text-center">
              Search by region
            </h1>
            <div className="w-full h-[200px]  grid grid-cols-2 place-items-center">
              {region.map((item) => {
                return (
                  <p
                    key={item}
                    onClick={(e) => {
                      getValue(e.target.textContent);
                    }}
                    className="w-[170px]  rounded-2xl shadow-sm text-center hover:cursor-pointer"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
