import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! I&apos;m <strong className="text-textGreen">John Aworo Jnr</strong>, a passionate software engineer with a keen interest
            in building intuitive and scalable digital products. My journey into web development began
            while customizing Tumblr themes — a curious dive that turned into a lifelong pursuit.
          </p>
          <p>
            Over the years, I&apos;ve had the opportunity to contribute to various teams, including
            a creative agency, a fast-paced start-up, a corporate tech environment, and
            a student-led design studio. Each role sharpened my ability to build solutions that
            balance user experience with technical precision.
          </p>
          <p>
            Today, I focus on crafting seamless user interfaces, integrating robust back-end systems,
            and shipping full-stack applications that deliver results. I&apos;m driven by the challenge of
            transforming complex requirements into clean, maintainable code.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {[
              "JavaScript (ES6+)",
              "Next.js",
              "React",
              "Node.js",
              "TypeScript",
              "Express.js",
              "Tailwindcss",
              "SQL",
              "PHP",
              "C#",
              "C++",
              "Python",
              "MySQL",
              "Flutter",
            ].map((tech, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="Profile of John Aworo Jnr"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
