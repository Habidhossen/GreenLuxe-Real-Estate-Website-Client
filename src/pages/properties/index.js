import PropertyCard from "@/components/ui/PropertyCard";
import MainLayout from "@/layouts/MainLayout";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";
import Link from "next/link";
import Loading from "../loading";

const AllPropertiesPage = () => {
  const {
    data: propertyData,
    error,
    isLoading,
  } = useGetPropertiesQuery(undefined);

  // is loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="pt-[74px]">
      {/* search property */}
      <div className="relative overflow-hidden py-14 bg-secondary px-4 text-center">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl text-white font-bold">
              Your Perfect Home Awaits
            </h3>
            <p className="text-white leading-relaxed">
              Searching for a place to call home? Look no further. Our website
              is your portal to an extensive array of real estate options, from
              starter homes to luxury estates. Start exploring and discover the
              potential of your dream property.
            </p>
          </div>
          <div className="mt-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
            >
              <input
                type="text"
                placeholder="Search for properties..."
                className="text-gray-500 w-full p-2 outline-none"
              />
              <button className="p-2 px-3 rounded-lg font-medium text-white bg-primary hover:bg-primary active:bg-primary duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full"></div>
      </div>

      {/* all properties */}
      <div className="mx-4 md:mx-12 lg:mx-20 mt-10">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4">
          <ol className="list-reset flex text-grey">
            <li className="mr-2">
              <Link
                href="/"
                className="text-heading font-semibold hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="mr-2">
              <span>&gt;</span>
            </li>
            <li className="text-transparent bg-gradient-to-r from-[#ff7d1e] to-primary bg-clip-text font-semibold">
              Properties
            </li>
          </ol>
        </nav>
        <hr />

        {/* filter and sort */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-3 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filter: </span>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select type
              </option>
              <option></option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Sort: </span>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select type
              </option>
              <option></option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-4 md:mx-12 lg:mx-20">
        {propertyData?.data?.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>

      {/* pagination */}
      <div className="flex items-center justify-center my-10">
        <Link
          href=""
          className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </Link>

        <Link
          href=""
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline   hover:bg-primary  hover:text-white "
        >
          1
        </Link>

        <Link
          href=""
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline   hover:bg-primary  hover:text-white "
        >
          2
        </Link>

        <Link
          href=""
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline   hover:bg-primary  hover:text-white "
        >
          3
        </Link>

        <Link
          href=""
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md   hover:bg-primary  hover:text-white "
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default AllPropertiesPage;

// Main layout
AllPropertiesPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
