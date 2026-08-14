import Link from "next/link";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/nebneb97", label: "GitHub" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/nabiladib", label: "LinkedIn" },
  { icon: <FaStackOverflow />, path: "https://stackoverflow.com/users/30909809/nebneb", label: "Stack Overflow" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`flex ${containerStyles}`}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
