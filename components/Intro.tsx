"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="flex max-w-screen-md mx-auto mt-24">
      <div className="flex flex-col px-10 py-5">
        <div className="flex flex-col">
          <div className="flex text-4xl font-semibold">Praveenkumar</div>
          <div className="text-sm text-gray-500 py-2">Software Engineer 💻</div>
        </div>

        <div className="flex mt-7">
          With three years of experience, I bring expertise in Node.js, ,
          delivering high-quality projects across diverse domains. Collaborative
          and solution-oriented, I thrive in dynamic environments, continuously
          learning to drive innovation and success.
        </div>

        <div className="flex mt-7 gap-6">
          <motion.div whileHover={{ scale: 1.1 }} className="flex">
            <Link href={"mailto:iprav3k@gmail.com"} target="_blank">
              <IconMail />
            </Link>
          </motion.div>
          <div className="flex items-center justify-center">
            <Separator orientation="vertical" className="h-4" />
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex">
            <Link href={"https://linkedin.com/in/ipravek"} target="_blank">
              <IconBrandLinkedin size={26} />
            </Link>
          </motion.div>
          <div className="flex items-center justify-center">
            <Separator orientation="vertical" className="h-4" />
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex">
            <Link href={"https://github.com/ipravek"} target="_blank">
              <IconBrandGithub size={26} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
