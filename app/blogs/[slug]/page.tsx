import { getBlog } from "@/utils/getBlogPost";
import Link from "next/link";
import Markdown from "react-markdown";
import readingTime from "reading-time";
import { IconDots } from "@tabler/icons-react";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  let blog: any = getBlog({ slug: params.slug });
  let readTime = readingTime(blog?.content || "");

  return (
    <div className="flex flex-col max-w-screen-lg mx-auto px-10">
      <div className="flex flex-col w-full mt-10">
        <div className="flex text-sm text-gray-500">
          <span>{blog?.date}</span>
          <span className="px-0.5">
            <IconDots />
          </span>
          <span>{readTime.text}</span>
        </div>

        <Markdown className={"prose w-full"}>{blog?.content}</Markdown>
      </div>

      <div className="flex mt-10">
        <Link
          href={"/blogs"}
          className="border p-2 rounded-sm hover:bg-gray-50"
        >
          Go Back to blogs
        </Link>
      </div>
    </div>
  );
}
