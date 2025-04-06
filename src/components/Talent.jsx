import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Talent component renders a form where users can join a waiting list to connect with top recruiters.
 * It utilizes react-hook-form for form handling and motion for animations.
 * Users can enter their name, email, and select a field of study from a predefined list.
 * On successful submission, the form data is sent to an external API and a success message is displayed.
 */

/*******  75da4949-b3eb-4770-a59e-7376f7e764a1  *******/
const Talent = () => {
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
      "https://api.sheetbest.com/sheets/d5557934-e203-4d86-856b-7ff77b451277",
      data
    );
    console.log(response.data);
    // console.log("Submitted data:", data);
    setShowForm(false);
    reset();
  };

  const fieldsOfStudy = [
    "Computer Science",
    "Software Engineering",
    "Data Science",
    "Cybersecurity",
    "Artificial Intelligence",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Business Administration",
    "Information Technology",
    "Game Development",
    "Robotics Engineering",
    "Bioinformatics",
    "Human-Computer Interaction",
    "Cloud Computing",
    "Network Security",
    "Blockchain Technology",
    "Mathematics",
    "Physics",
    "Statistics",
    "Finance",
    "Economics",
    "Accounting",
    "Marketing",
    "Psychology",
    "Philosophy",
    "Graphic Design",
    "UI/UX Design",
    "Multimedia Technology",
    "Data Analytics",
    "Civil Engineering",
    "Aerospace Engineering",
    "Biomedical Engineering",
    "Environmental Science",
    "Agricultural Science",
    "Linguistics",
    "Journalism",
    "Law",
    "Political Science",
    "Education",
    "Sociology",
  ];

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
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              className="border-2 border-[#354E6F] rounded-3xl px-4 py-2 outline-none placeholder:text-white w-full"
              type="text"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
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

          <label className="flex flex-col items-start justify-center">
            <select
              className="border-2 border-[#354E6F] rounded-3xl px-4 py-2 outline-none  placeholder:text-white w-full"
              {...register("field", {
                required: "Please select a field of study",
              })}
              id="field"
            >
              <option className="bg-[#354E6F]" value="">Select field of study</option>
              {fieldsOfStudy.map((field, index) => (
                <option className="bg-[#354E6F]"  key={index} value={field}>
                  {field}
                </option>
              ))}
            </select>
            {errors.field && (
              <p className="text-red-500 text-sm mt-1">
                {errors.field.message}
              </p>
            )}
          </label>

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

export default Talent;
