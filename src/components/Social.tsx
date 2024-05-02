import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

export default function Social() {
  return (
    <div className="flex gap-6 items-center my-6">
      <div className="flex">
        <a href="#">
          <IoLogoLinkedin size={28} />
        </a>
      </div>

      <div className="flex">
        <a href="#">
          <IoLogoGithub size={28} />
        </a>
      </div>

      <div className="flex">
        <a href="#">
          <IoIosMail size={34} />
        </a>
      </div>
    </div>
  );
}
