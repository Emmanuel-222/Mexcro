import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const Recruiter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showForm, setShowForm] = useState(true);
  const onSubmit = async (data) => {
    console.log("Submitted!");
    console.log(data);
    const response = await axios.post(
      "https://api.sheetbest.com/sheets/d2450c5a-7fc0-4616-a5bf-912122f27442",
      data
    );
    console.log(response.data);
    // console.log("Submitted data:", data);
    setShowForm(false);
    reset();
  };

  const ball = {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    font: "normal 400 16px/24px Manrope",
    color: "#ffffff",
  };

  return (
    <AnimatePresence mode="wait">
      {showForm ? (
        <motion.form
          key="form"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          style={ball}
          exit={{ opacity: 0, y: 20 }}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="w-full max-w-lg flex flex-col gap-4 px-4 sm:px-6"
        >
          <p className="text-sm sm:text-base md:text-xl mb-2">
            Join our waiting list and be the first to know when top recruiters
            are ready to connect with you.
          </p>

          <div>
            <input
              className="border-2 border-[#354E6F] rounded-3xl px-4 py-2 outline-none placeholder:text-white w-full"
              type="text"
              placeholder="Enter name of Organisation"
              {...register("name", { required: "Organisation name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              className="border-2 border-[#354E6F] rounded-3xl px-4 py-2 outline-none placeholder:text-white w-full"
              type="text"
              placeholder="Enter oraganisation email"
              {...register("email", {
                required: "Organisation email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <motion.button
              className="border-2 border-[#2B3B4F] bg-[#2B3B4F] text-white rounded-3xl px-10 py-2 font-bold hover:cursor-pointer w-full sm:w-40"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              Join
            </motion.button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-green-100 shadow-lg rounded-lg"
        >
          <h2 className="text-lg font-bold">Welcome!</h2>
          <p className="mt-2">You have successfully joined.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Recruiter;