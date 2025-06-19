import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const MERNDeveloper = () => {
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
          <span className="text-textGreen tracking-wide">@TechNova Solutions</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-[#112240]">
          Mar 2022 -  present
        </p>

      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Designed and developed scalable web applications using MongoDB, Express, React, and Node.js for client-side and internal dashboards.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Integrated RESTful APIs and third-party services to enhance platform capabilities and automate data workflows across microservices.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Collaborated with UI/UX teams to implement responsive interfaces with Tailwind CSS, achieving 99% mobile responsiveness score.
        </li>
      </ul>
    </motion.div>
  );
};

export default MERNDeveloper;
