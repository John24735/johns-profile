import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <div className="border border-gray-300 rounded-md p-4 bg-[#000000]/50 py-3">
        <h3 className="border border-gray-300 rounded-md p-4 flex gap-1 font-medium text-xl font-titleFont text-[#112240]">
          Web Designer
          <span className="text-textGreen tracking-wide">@Simplitech</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-[#112240]">
          Jan 2020 - Dec 2020
        </p>

      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Collaborated with cross-functional teams to redesign the Amazon product detail pages, enhancing user experience and reducing bounce rate by 18%.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Implemented responsive UI components using React and Tailwind CSS, optimizing performance and accessibility across devices.
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Conducted A/B testing and usability research to inform UI decisions, resulting in improved user engagement and conversion rates.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
