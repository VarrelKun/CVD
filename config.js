import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "CVD",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=981356614978252820&permissions=8&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation is the process of eliminating or lessening extremes.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automation",
      description:
        "Automation describes a wide range of technologies that reduce  human intervention in processes.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Welcomer",
      description:
        "Welcomer is the person who greet the new person in an unique and great way",
      logo: <CgMusic className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 114, //-  - Your
  memberCount: 1330, //--   - Bot
  executedCommand: 2000, //--  - Stats
  availableCommand: 200, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/VarrelKun",
  twitterLink: "https://twitter.com",
  mediumLink: "https://medium.com/",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.com",
  youtubeLink: "https://www.youtube.com/channel/nxvall",
};

export default config;
