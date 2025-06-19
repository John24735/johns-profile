import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <div className="border border-gray-300 rounded-md p-4 bg-[#000000]/50 py-3">
        <h3 className="border border-gray-300 rounded-md p-4 flex gap-1 font-medium text-xl font-titleFont text-[#112240]">
          Web Developer
          <span className="text-textGreen tracking-wide">@Glydetek-Technologies</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-[#112240]">
          Dec 2023 - present
        </p>

      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Gatsby,
          React, Craft, WordPress, Prismic, and Netlify
        </li>
        <li className="text-base flex gap-2 text-[#112240]">
          <span className="text-[#000000]/50 mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers, and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
