import { Link } from "react-scroll";

const Testimonials = () => {
  return (
    <section class="px-4 md:px-12 lg:px-20 py-16" name="testimonials">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center  capitalize lg:text-3xl ">
          What our <span class="text-primary ">clients</span> say
        </h1>

        <div class="flex justify-center mx-auto my-4">
          <span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
          <span class="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 bg-primary rounded-full"></span>
        </div>

        <p class="max-w-2xl mx-auto text-center text-body">
          Here&apos;s what one of our satisfied clients has to say about their
          journey with us
        </p>

        <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <div class="p-6 bg-gray-100 rounded-lg  md:p-8">
            <p class="leading-loose text-body">
              &quot;I couldn&apos;t have asked for a better experience with
              GreenLuxe. Their team is exceptional in every way. They helped me
              find the perfect home that exceeded my expectations. The whole
              process was stress-free and enjoyable. I highly recommend their
              services to anyone looking to buy or sell property.&quot;
            </p>

            <div class="flex items-center mt-6">
              <div class="">
                <h1 class="font-semibold text-primary">Robbert</h1>
                <span class="text-sm text-body">CTO, Robert Consultency</span>
              </div>
            </div>
          </div>

          <div class="p-6 bg-gray-100 rounded-lg  md:p-8">
            <p class="leading-loose text-body">
              &quot;My experience with GreenLuxe was simply outstanding. Their
              agents are not only experts in the field but also caring and
              supportive. They went above and beyond to help me find my dream
              home. The level of professionalism and personal attention was
              remarkable. I&apos;m incredibly grateful for their
              assistance.&quot;
            </p>

            <div class="flex items-center mt-6">
              <div class="">
                <h1 class="font-semibold text-primary">Mia Brown</h1>
                <span class="text-sm text-body">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* footer button */}
        <div className="flex justify-end mt-6">
          <Link
            href=""
            className="flex items-center gap-1 text-sm font-semibold hover:text-primary duration-300 ease-in-out"
          >
            Views all reviews{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 12H25" />
              <path d="M18 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
