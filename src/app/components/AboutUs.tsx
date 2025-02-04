import Image from "next/image";


export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white ">
      <h1 className="text-4xl md:text-5xl text-black text-center mb-12">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Who we Are? Card */}
        <div className="bg-black text-white rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            {/* SVG Placeholder for Layers Icon */}
            <Image
              src="assets/Vector.svg"
              alt="Layers Icon"
              className="text-white/80 absolute top-6 right-6 w-6 h-6"
              width={6}
              height={6}
              
            />

            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Who we are?</h2>
              <p className="text-gray-300 text-sm">
                A student-driven club under the Network and Comm...
              </p>
              <button className="text-white border-white border-2 px-4 py-2 rounded-2xl hover:bg-white/10 mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Our Vision and Mission Card */}
        <div className="bg-[#CBF48F] rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            {/* SVG Placeholder for Network Icon */}
            <img
              src="assets/icon1.png"
              alt="Network Icon"
              className="text-black/80 absolute top-6 right-6 w-6 h-6 "
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">
                Our Vision and Mission?
              </h2>
              <p className="text-gray-700 text-sm">
                To inspire tech advancements through..
              </p>
              <button className="text-black border-black border-2 px-2 py-2 bottom-4 rounded-2xl absolute right-6 hover:bg-black/10 mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us? Card */}
        <div className="bg-[#FFE17B] rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            {/* SVG Placeholder for Bookmark Icon */}
            <img
              src="assets/icon2.png"
              alt="Bookmark Icon"
              className="text-black/80 absolute top-6 right-6 w-6 h-6"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">Why Choose Us?</h2>
              <p className="text-gray-700 text-sm">
                We foster a dynamic environm.....
              </p>
              <button className="text-black border-black border-2 px-2 py-2 bottom-4 rounded-2xl absolute right-6 hover:bg-black/10 mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {/* What we do? Card */}
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
            <div className="relative p-6 h-full flex flex-col justify-end">
              {/* SVG Placeholder for X Icon */}
              <img
                src="assets/icon3.svg"
                alt="X Icon"
                className="text-black/80 absolute top-6 right-6 w-6 h-6"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-black">What we do?</h2>
                <p className="text-gray-700 text-sm">
                  We provide a platform for students.....
                </p>
                <button className="text-black border-black border-2 px-4 py-2 rounded-2xl hover:bg-black/10 mt-4">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Team Photo Card */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <div className="p-0 aspect-square relative">
              <Image
                src="/assets/TeamPic.png"
                alt="Team photo"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

