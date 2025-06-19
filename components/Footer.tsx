import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube, SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/John24735",
      icon: <TbBrandGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.youtube.com",
      icon: <SlSocialYoutube />,
      label: "YouTube",
    },
    {
      href: "https://www.linkedin.com/in/novacore-technologies/",
      icon: <SlSocialLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61564930870033",
      icon: <SlSocialFacebook />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com",
      icon: <SlSocialInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <span className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Footer;
