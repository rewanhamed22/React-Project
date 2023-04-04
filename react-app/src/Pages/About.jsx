export default function About() {
    return (
      <>
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    src="https://images.unsplash.com/photo-1571425046056-cfc17c664e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZSUyMHlvdXJzZWxmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
  
              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>
  
                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl text-gray-700">About Us</h2>
                  <p className="mt-4 text-gray-700">A place to talk freely , love yourself, share Advices and know more about how to take care of your self </p>
  
                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                    beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Aliquid, molestiae!
                    Quidem est esse numquam odio deleniti, beatae, magni dolores
                    provident quaerat totam eos, aperiam architecto eius quis
                    quibusdam fugiat dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }