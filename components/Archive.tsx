import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Educare English Learning Academy",
    des: "A professional platform built for remote English learning. Focused on quality UI/UX and solid integrations.",
    listItem: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "https://www.educareenglishlearningacademy.com/",
  },
  {
    title: "Cyber Security Blog with live comments section",
    des: "An interactive blog platform for cybersecurity discussions with live comment features.",
    listItem: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "https://www.noormohmmad.com/",
  },
  {
    title: "ReactBD Web Development Company",
    des: "Corporate site for ReactBD showcasing services, portfolio, and contact sections.",
    listItem: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "https://reactbd.com/",
  },
  {
    title: "Amazon Clone with payment integration",
    des: "E-commerce clone of Amazon with cart, login, and payment functionalities.",
    listItem: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "https://amazonclone.reactbd.com/",
  },
  {
    title: "JSON Data API",
    des: "A lightweight and free JSON API for testing frontend integrations.",
    listItem: ["Nextjs", "Tailwind CSS", "next-router"],
    link: "https://jsondata.reactbd.com/",
  },
  {
    title: "Dynamic Responsive Portfolio",
    des: "Personal branding site with smooth animations and responsive layout.",
    listItem: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "https://portfolioone.reactbd.com/",
  },
  // Show More Items
  {
    title: "OREBI E-Commerce Store",
    des: "Modern storefront with category filtering, product details, and shopping cart.",
    listItem: ["Reactjs", "Tailwind CSS", "getform.io"],
    link: "https://orebishopping.reactbd.com/",
  },
  {
    title: "Noor Shopping Store",
    des: "Redux-powered shopping store optimized for speed and UX.",
    listItem: ["Reactjs", "Tailwind CSS", "redux-toolkit"],
    link: "https://noorshop.netlify.app/",
  },
  {
    title: "Personalized Blog",
    des: "Authenticated blog site with rich text editor and user-specific content.",
    listItem: ["Nextjs", "Tailwind CSS", "next-auth", "firebase"],
    link: "https://my-blog-delta-eight.vercel.app/",
  },
  {
    title: "Shoppers Market",
    des: "Modern UI with responsive product grids and react-slick sliders.",
    listItem: ["Nextjs", "react-slick", "redux-toolkit"],
    link: "https://shoppersyt.vercel.app/",
  },
  {
    title: "Single Page Portfolio",
    des: "Minimalist one-pager for personal branding and job hunting.",
    listItem: ["Reactjs", "Tailwind CSS", "vercel deploy"],
    link: "https://portfoliotwo.reactbd.com/",
  },
  {
    title: "NextJS Dynamic Portfolio",
    des: "Built with Next.js for fast routing and SEO optimization.",
    listItem: ["Reactjs", "Tailwind CSS", "vercel deploy"],
    link: "https://portfoliothree.reactbd.com/",
  },
  {
    title: "Bazaar Shopping App",
    des: "A full-scale shopping app with real-time data and performance tuning.",
    listItem: ["Reactjs", "Tailwind CSS", "vercel deploy"],
    link: "https://bazar.reactbd.com/",
  },
  {
    title: "Blog101",
    des: "Multi-author blog platform integrated with Next Auth for secure access.",
    listItem: ["Nextjs", "Tailwind CSS", "next-auth"],
    link: "https://blog101.reactbd.com/",
  },
  {
    title: "Todo App",
    des: "Task management tool with fast UI and persistent storage.",
    listItem: ["Reactjs", "Tailwind CSS", "vercel deploy"],
    link: "https://youtubetodo.vercel.app/",
  },
];

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const displayProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">view the archive</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {displayProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <ArchiveCard {...project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;
