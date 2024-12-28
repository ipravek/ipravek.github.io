import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Pk" },
    {
      name: "description",
      content: "A Software developer's portfolio - ipravek.github.io",
    },
  ];
};
export function loader() {
  console.log({ message: "Hello world" });
  return { message: "Hello world" };
}

export default function Index() {
  return <div className="flex">Hello world</div>;
}
