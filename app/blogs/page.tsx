import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogs } from "@/utils/getBlogPost";
import Link from "next/link";

export default function Blogs() {
  const blogs = getBlogs();

  console.log({ blogs });

  return (
    <div className="flex max-w-screen-lg mx-auto">
      <div className="flex px-10 mt-10 w-full">
        {blogs?.map((e: any) => {
          return (
            <div className="flex w-full py-5" key={e.id}>
              <Link href={`blogs/${e.id}`} className="w-full">
                <Card className="cursor-pointer hover:scale-105 duration-100 rounded-sm">
                  <CardHeader className="p-5">
                    <CardTitle>{e.title}</CardTitle>
                    <CardDescription>{e.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
