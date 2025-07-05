import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoWhatsapp,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/marc.andrianjanahary.2025/", 
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/harymarc08", 
  },
  {
    icon: <BiLogoWhatsapp />,
    path: "https://wa.me/261348706293",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/andrianjanahary-marc-847788283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/marcandrianjanahary?igsh=cWhpOXJwd3p6dzkz&utm_source=qr",
  },
  
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
