import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const CodeVerseExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <div className="border border-gray-300 rounded-md p-4 bg-[#000000]/50 py-3">
        <h3 className="border border-gray-300 rounded-md p-4 flex gap-1 font-medium text-xl font-titleFont text-[#112240]">
          Frontend-Developer
          <span className="text-textGreen tracking-wide">@CodeVerse Systems</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-[#112240]">
          Jun 2022 - Aug 2024
        </p>

      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Built and optimized responsive web interfaces using React.js and Tailwind CSS, improving page load times by 35%.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Integrated REST APIs and implemented client-side routing to enable seamless user experiences across multiple modules.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Collaborated with cross-functional teams to deliver scalable frontend solutions aligned with business goals.
        </li>
      </ul>
    </motion.div>
  );
};

export default CodeVerseExperience;
