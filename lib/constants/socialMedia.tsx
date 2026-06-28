import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export type SocialMediaProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    name: "gmail",
    href: "mailto:nls.digitaltech@gmail.com",
    icon: <SiGmail size={24} />,
  },
  {
    name: "github",
    href: "https://github.com/moltesse12",
    icon: <GithubIcon size={24} />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/folly-nelson-emmanuel/",
    icon: <LinkedinIcon size={24} />,
  },
];
