import Image from "next/image";

const Banner = () => {
  return (
    <section className="px-4 md:px-12 lg:px-20 mt-16 mb-10 bg-yellow-50">
      <div class="py-16 mx-auto text-center">
        <div class="mx-auto">
          <h1 class="font-roboto text-4xl font-bold text-heading lg:text-6xl">
            We will find a <span className="text-secondary">perfect</span> home{" "}
            <br /> for you.
          </h1>
          <p class="mt-6 mb-8 text-gray-500">
            Welcome to GreenLuxe - A Real Estate Website, Your Gateway to Real
            Estate Excellence
          </p>
        </div>

        <form class="flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Search for properties..."
            class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0 rounded-md"
          />

          <button
            type="button"
            class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform primary rounded-md bg-primary hover:bg-primary focus:outline-none focus:bg-primary"
          >
            Search
          </button>
        </form>

        <div class="flex justify-center mt-10">
          <Image
            class="object-cover w-full h-1/2 rounded-xl lg:w-4/5"
            src="https://i.ibb.co/StLFT1Z/banner.jpg"
            alt=""
            width="1000"
            height="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
