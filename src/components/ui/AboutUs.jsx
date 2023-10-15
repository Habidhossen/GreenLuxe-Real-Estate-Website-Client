import Image from "next/image";

const AboutUs = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Personalized Service",
      desc: "We don't believe in a one-size-fits-all approach. We take the time to understand your unique requirements and preferences to deliver a tailored real estate solution.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      title: "Expertise",
      desc: "Our experienced agents are well-versed in the local market trends, neighborhoods, and property values. We're here to provide you with valuable insights to make informed decisions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Seamless Transactions",
      desc: "We make the buying and selling process as smooth as possible. From negotiations to paperwork, we've got you covered.",
    },
  ];

  return (
    <section className="px-4 md:px-12 lg:px-20 py-12">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
          <div className="max-w-xl space-y-3">
            <h3 className="text-primary font-semibold text-sm">About Us</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              With Us Help You Find Your Dream Home{" "}
            </p>
            <p className="text-body text-sm">
              Welcome to the world of real estate possibilities. Our website is
              your one-stop resource for property listings, expert advice, and
              community insights. Whether you&apos;sre buying, selling, or
              investing, we&apos;ve got you covered every step of the way.
            </p>
          </div>
          <div className="mt-8 max-w-lg lg:max-w-none">
            <ul className="space-y-8">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base text-heading font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <Image
            src="https://i.ibb.co/jzXd4Pj/home-page-1.webp"
            alt=""
            width="500"
            height="500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
