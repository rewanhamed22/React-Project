export default function About() {
  return (
    <div className="bg-white">
      <section >
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16 rounded-full">
              <div className="relative h-64 sm:h-80 lg:h-full ">
                <img
                  src="src/assets/About us page.gif"
                  className="absolute  inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center  align-baseline  rounded-2xl bg-black/5">
              <div className="p-8 rounded-2xl sm:p-16 lg:p-24">
                <h1 className="normal-case text-4xl text-white">
                  Breathe
                  <img
                    className="btn btn-ghost normal-case text-2xl mr-8"
                    src="src/assets/logo-no-background.png"
                    alt="logo"
                  />
                </h1>
                <h2 className="text-2xl font-bold sm:text-3xl text-[#705D9D]">
                  About Us
                </h2>
                <p className="mt-4 text-xl text-[#487EB0]">
                  A place to talk freely , love yourself, share Advices and know
                  more about how to take care of your self{" "}
                </p>
                <p className="mt-4 text-[#487EB0]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta. .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
