import { AnimatePresence, motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const Pathway = () => {
  const navigate = useNavigate();
  const ball = {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    font: "normal 400 16px/24px Manrope",
    color: "#ffffff",
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="form"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={ball}
        exit={{ opacity: 0, y: 20 }}
        className="px-6 sm:px-8 flex flex-col md:flex-row justify-center items-center md:items-start gap-10 text-center md:text-left w-full"
      >
        <p className="text-base sm:text-lg md:text-2xl max-w-sm sm:max-w-md md:max-w-lg">
          Join our waiting list and be the first to know when top recruiters are
          ready to connect with you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <motion.button
            className="border-2 border-[#2B3B4F] bg-[#2B3B4F] text-white rounded-3xl px-8 py-3 font-bold hover:cursor-pointer w-full sm:w-40"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/recruiter")}
          >
            Recruiter
          </motion.button>

          <motion.button
            className="border-2 border-[#2B3B4F] bg-[#2B3B4F] text-white rounded-3xl px-8 py-3 font-bold hover:cursor-pointer w-full sm:w-40"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/talent")}
          >
            Talent
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Pathway;
