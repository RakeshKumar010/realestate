import HeaderImg from "../../assets/img/headerimg.jpg";

const Header = () => {
  return (
    <div className="flex px-8 mt-24 justify-end">
      <div className="absolute md:block hidden   top-36 left-0"> 
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 5px 0px 15px 0px'}} className="p-10 rounded-r-3xl  space-y-10 bg-white  ">
          <p className="text-6xl font-semibold text-secondColor "><span className="text-logoColor"> Let's find <br /></span> yours Dream...</p>
          <p className="font-semibold w-80"> Building Award Winning Properties   Across India and the All World</p>
        </div>
        <div className="font-bold flex items-center gap-5 p-10">
          <p className="text-white p-1 px-6 rounded-full bg-logoColor">Buy</p>
          <p>Sell</p>
          <p>Rent</p>
        </div>
       <p style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}} className='bg-logoColor text-white h-24 w-24 flex  justify-center items-center ml-20 mt-5 border-gray-400 border-2 animate-bounce    rounded-full font-bold text-xl '>Start</p>
       

      </div>
      <div
        className="md:w-[78vw] md:h-[85vh] w-full rounded-[40px]  "
        style={{
          background: `url(${HeaderImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></div>
    </div>
  );
};

export default Header;
