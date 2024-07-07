import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Separator } from "./ui/separator";

export default function Hero() {
  return (
    <div className="flex max-w-screen-lg mx-auto">
      <div className="flex flex-col px-10 py-5">
        <div className="flex flex-col">
          <div className="flex text-4xl font-semibold">Praveenkumar</div>
          <div className="text-sm text-gray-500 py-2">Software Engineer 💻</div>
        </div>

        <div className="flex mt-7">
          With three years of experience, I bring expertise in [mention
          programming languages/technologies], delivering high-quality projects
          across diverse domains. Collaborative and solution-oriented, I thrive
          in dynamic environments, continuously learning to drive innovation and
          success.
        </div>

        <div className="flex mt-7 gap-6">
          <div className="flex">
            <Link href={"mailto:iprav3k@gmail.com"} target="_blank">
              <SiGmail size={28} />
            </Link>
          </div>
          <Separator orientation="vertical" />
          <div className="flex">
            <Link href={"https://linkedin.com/in/ipravek"} target="_blank">
              <FaLinkedin size={26} />
            </Link>
          </div>
          <Separator orientation="vertical" />
          <div className="flex">
            <Link href={"https://github.com/ipravek"} target="_blank">
              <FaGithub size={26} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
