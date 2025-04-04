import { Outlet } from "react-router-dom";

import JoinWaitListIimg from "../assets/JoinWaitList.png"
import Logo from "../assets/mexcro logo full-black.png";

const Layout = () => {
  return (
    <div
      className="border-2 border-[#080322]  flex
  justify-between items-center bg-[#080322] w-full h-screen "
    >
      <div className="h-full hidden xl:flex justify-center items-center">
        <img src={JoinWaitListIimg} alt="Photo" />
      </div>
      <div className="bg-[#39B3DA] flex-1 h-screen flex flex-col justify-start items-start pt-14 gap-10 px-20">
        <img src={Logo} alt="Mexcro-Logo" />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;


// This is one of the chanllenges I had in this project.