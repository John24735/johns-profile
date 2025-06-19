import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";

const tabs = [
  { key: "ReactBD", label: "@Glydetek-Technologies", component: <ReactBD /> },
  { key: "Google", label: "@CodeVerse Systems", component: <Google /> },
  { key: "Apple", label: "@TechNova Solutions", component: <Apple /> },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("ReactBD");

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16 p-4">
        <ul className="md:w-32 flex flex-col ">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`border-l-2 cursor-pointer duration-300 px-8 py-3 text-sm font-medium 
              ${activeTab === tab.key
                  ? "border-l-textGreen text-[#112240] bg-[#b9d2e7] font-extrabold rounded-l-md mr-[-15px]"
                  : "border-l-hoverColor text-textGreen hover:bg-[#b9d2e7]/50 rounded-md mr-[-15px]"
                }`}
            >
              {tab.label}
            </li>

          ))}
        </ul>
        <div className="w-full border border-gray-300 rounded-md rounded-tl-none rounded-br-md p-4 ml-[-50px] bg-[#b9d2e7] py-3">
          {tabs.find((tab) => tab.key === activeTab)?.component}
        </div>
      </div>
    </section>
  );
};

export default Experience;
