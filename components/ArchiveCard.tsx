import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <a
      href="#"
      rel="noopener noreferrer"
      className="block w-full h-80 rounded-lg bg-[#112240] p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 group"
    >
      {/* Top icons */}
      <div className="flex justify-between items-center">
        <FaRegFolder className="text-4xl text-textGreen" />
        <RxOpenInNewWindow className="text-2xl text-textDark group-hover:text-textGreen transition-colors duration-300" />
      </div>

      {/* Title & description */}
      <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide text-white group-hover:text-textGreen transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-textLight mt-3 leading-relaxed">{des}</p>
      </div>

      {/* Tech list */}
      <ul className="text-xs mdl:text-sm text-textDark flex flex-wrap gap-x-4 gap-y-1 mt-4">
        {listItem.map((item, i) => (
          <li key={i} className="whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </a>
  );
};

export default ArchiveCard;
