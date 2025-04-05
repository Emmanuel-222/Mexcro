import { Outlet } from "react-router-dom";

import JoinWaitListIimg from "../assets/JoinWaitList.png";
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
      <div className="bg-[#39B3DA] flex-1 min-h-screen flex flex-col pt-14 gap-10 px-6 sm:px-10 md:px-20 w-full overflow-y-auto">
        <img
          src={Logo}
          alt="Mexcro-Logo"
          className="w-32 sm:w-40 md:w-80 mx-auto md:mx-0"
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

// This is one of the chanllenges I had in this project.
