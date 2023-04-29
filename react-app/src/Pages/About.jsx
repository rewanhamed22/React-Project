export default function About() {
  return (
    <div className="bg-white">
      <section>
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

            <div className="relative flex items-center rounded-2xl ">
              <div className="p-8 rounded-2xl sm:p-16 lg:p-24">
                {/* <h1 className="normal-case text-4xl text-white">
                  Breathe
                  <img
                    className="btn btn-ghost normal-case text-2xl mr-8"
                    src="src/assets/logo-no-background.png"
                    alt="logo"
                  />
                </h1> */}
                <h2 className="text-2xl font-bold sm:text-3xl text-[#705D9D]">
                  About Us
                </h2>
                <p className="mt-4 text-xl text-[#487EB0]">
                  Welcome to our Mental Health Blog!👋 Our mission is to share
                  advice and information on mental health, self-care, and
                  overall well-being. We believe that taking care of our mental
                  health is just as important as taking care of our physical
                  health, and that everyone deserves to live a happy, healthy
                  life. We hope that our blog can provide you with the support
                  and guidance you need to prioritize your mental health and
                  well-being. Thank you for joining us on this journey towards a
                  healthier, happier life
                  <span className="text-red-500">❤</span>🥰 .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
