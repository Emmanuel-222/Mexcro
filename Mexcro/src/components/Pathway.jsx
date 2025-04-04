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
      >
        <p className="text-2xl">Find Talent. Get Hired.</p>
        <div className="flex justify-center items-center gap-10">
          <motion.button
            className="border-2 border-[#2B3B4F] bg-[#2B3B4F] rounded-3xl px-20 py-[0.65rem] font-bold hover:cursor-pointer"
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => navigate("/recruiter")}
          >
            Recruiter
          </motion.button>
          <motion.button
            className="border-2 border-[#2B3B4F] bg-[#2B3B4F] rounded-3xl px-20 py-[0.65rem] font-bold hover:cursor-pointer"
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
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
