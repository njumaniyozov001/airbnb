import { useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import { TbHomePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

function ayh() {
  const [cnt, setCnt] = useState(7);
  const [price, setPrice] = useState(308);
  const getValue = (v) => {
    setCnt(v);
    setPrice(44 * v);
  };
  return (
    <div>
      <header className="h-[70px] bg-gray-50 flex items-center justify-around gap-[400px]">
        <Link to={"/"}>
          <FaAirbnb className="text-red-500 w-10 h-10" />
        </Link>
        <div className="flex items-center gap-5">
          <p className="font-semibold">Ready to airbnb it ?</p>
          <button className="px-5 py-2 bg-gradient-to-r bg-orange-500 from-fuchsia-600 flex items-center gap-2 text-[20px] text-white outline-none rounded-xl">
            <TbHomePlus className="text-white w-5 h-5" />
            <p>Airbnb Setup</p>
          </button>
        </div>
      </header>
      <div className="flex ">
        <div className="w-[50%] h-[100vh] font-semibold  flex flex-col justify-center items-center">
          <div>
            <h1 className="text-center  text-[50px]  text-red-500">
              Airbnb it. <br />
              <p className="text-black">You could earn</p>
            </h1>
            <p className="text-center  text-[50px] ">${price}</p>
          </div>
          <div className="text-center">
            <div className="flex gap-1 justify-center py-2">
              <p
                // onClick={openDay}
                className="underline font-semibold hover:cursor-pointer"
              >
                {cnt} nights{" "}
              </p>
              <p className=" opacity-90">at an estimated $44 a night</p>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              defaultValue={7}
              onChange={(e) => getValue(e.target.value)}
              className="bla h-1  w-[400px]"
            />
          </div>
        </div>
        <div className="w-[50%] h-[100vh] flex items-center justify-center">
          <div className="w-full">
            <iframe
              className="rounded-2xl"
              width="520"
              height="500"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Uzbekistan%20Khorezm%20Shovot+(bla%20bla)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ayh;
