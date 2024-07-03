import { CgAdd } from "react-icons/cg";
import { FaBed, FaCheckCircle, FaHeart } from "react-icons/fa";
import { TbTextResize } from "react-icons/tb";

const Card = ({ value }) => {
  return (
    <div className="shadow-xl   rounded-lg md:w-96 w-full p-5">
      <div
        style={{
          background: `url(${value.img}) center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "0 -50px 20px #21212db8 inset",
        }}
        className=" w-full h-52 p-3 flex flex-col justify-between  rounded-lg"
      >
        <div className="flex justify-end">
          <p className="bg-white text-black p-1 px-2 text-sm rounded-full border-[3px] border-gray-300/80">
            {value.launch}
          </p>
        </div>
        <div className="flex justify-between items-center text-white">
          <p className="">₹{value.price}</p>
          <div className="flex items-center bg-indigo-700/50 p-[2px] rounded-full px-4 gap-1  border-[3px] border-gray-300/80">
            <FaCheckCircle />
            <p>Rera</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" my-3">
          <p className="text-blue-500 font-semibold">{value.title}</p>
          <p>{value.location}</p>
        </div>
        <div className="flex gap-10   justify-between border-t text-gray-400">
          <div className="flex items-center gap-2 ">
            <FaBed className="text-xl" />
            {value.size}
          </div>
          <div className="flex items-center gap-2 ">
            <TbTextResize className="text-lg" /> {value.sqrt}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <CgAdd />
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
