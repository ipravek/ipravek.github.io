import Social from "./Social";

export default function Intro() {
  return (
    <>
      <div className="mt-10 max-w-screen-xl mx-auto">
        <div className="flex text-4xl font-bold leading-loose ">
          Praveenkumar
        </div>
        <span className="text-lg font-semibold text-gray-500">
          Software Engineer
        </span>
        <div className="flex text-lg my-2 max-w-[600px]">
          Experienced software engineer with three years of hands-on experience
          in designing, developing, and maintaining software solutions.
        </div>

        <Social />
      </div>
    </>
  );
}
