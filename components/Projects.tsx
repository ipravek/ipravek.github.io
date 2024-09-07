export default function Projects() {
  return (
    <>
      <div className="flex max-w-screen-lg mx-auto mt-5">
        <div className="flex flex-col sm:px-10">
          <div className="flex text-xl font-semibold divider divider-start">
            Projects
          </div>

          <div className="flex flex-col gap-7 pt-4">
            <div className="flex flex-col">
              <div className="flex text-lg">Mapping Tool</div>
              <div className="flex gap-3 text-sm">
                <div className="flex">Nest.js</div>
                <span>|</span>
                <div className="flex">React.js</div>
                <span>|</span>
                <div className="flex">RestAPI</div>
                <span>|</span>
                <div className="flex">OpenStreetMap</div>
                <span>|</span>
                <div className="flex">AWS</div>
              </div>

              <div className="grid pt-4 ">
                <div className="flex">
                  <span className="px-2">&#8226;</span> Helloworld
                </div>

                <div className="flex">
                  <span className="px-2">&#8226;</span> Helloworld
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex text-lg ">
                Music Concert Stream - Realtime
              </div>
              <div className="flex gap-3 text-sm">
                <div className="flex">Node.js</div> <span>|</span>
                <div className="flex">React.js</div> <span>|</span>
                <div className="flex">RestAPI</div> <span>|</span>
                <div className="flex">Stripe</div>
              </div>

              <div className="flex pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi commodi minus quae illo repellendus id suscipit natus
                ullam rerum doloribus?
              </div>
            </div>

            {/* <div className="flex flex-col">
              <div className="flex text-lg">E-Commerce</div>
              <div className="flex gap-3 text-sm">
                <div className="flex text-red-500">Ruby on Rails</div>
                <span>|</span>
                <div className="flex">React.js</div>
                <span>|</span>
                <div className="flex">RestAPI</div>
                <span>|</span>
                <div className="flex">PayTm</div>
                <span>|</span>
                <div className="flex">AWS</div>
              </div>

              <div className="flex pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi commodi minus quae illo repellendus id suscipit natus
                ullam rerum doloribus?
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
