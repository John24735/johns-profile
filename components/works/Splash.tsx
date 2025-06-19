import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <div className="border border-gray-300 rounded-md p-4 bg-[#000000]/50 py-3">
        <h3 className="border border-gray-300 rounded-md p-4 flex gap-1 font-medium text-xl font-titleFont text-[#112240]">
          MERN Stack Developer
          <span className="text-textGreen tracking-wide">@Splash</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-[#112240]">
          Jan 2021 - Dec 2021
        </p>

      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Engineered dynamic web applications using MongoDB, Express.js, React.js, and Node.js, enhancing user engagement and backend efficiency.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Developed secure RESTful APIs and implemented authentication and authorization using JWT and OAuth protocols.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Deployed applications to cloud platforms like Heroku and Vercel, and managed version control via Git and GitHub workflows.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
