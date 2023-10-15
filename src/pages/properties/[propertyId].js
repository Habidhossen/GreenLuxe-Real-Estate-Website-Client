import PropertyCard from "@/components/ui/PropertyCard";
import MainLayout from "@/layouts/MainLayout";
import {
  useGetOnePropertyQuery,
  useGetPropertiesQuery,
} from "@/redux/features/properties/propertyApi";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "../loading";

const PropertyDetailPage = () => {
  // get property Id
  const router = useRouter();
  const { propertyId } = router.query;

  const { data: propertyData, error } = useGetPropertiesQuery(undefined);

  // fetching data by RTK Query
  const { data, isLoading, isError } = useGetOnePropertyQuery(propertyId);

  // is loading
  if (isLoading) {
    return <Loading />;
  }

  // destructure from propertyDat
  const {
    _id,
    title,
    description,
    propertyType,
    status,
    price,
    location,
    bedrooms,
    bathrooms,
    garages,
    squareFootage,
    amenities,
    images,
    listingDate,
    agent,
    views,
    statusHistory,
    rating,
    reviews,
    tags,
  } = data?.data;

  // Assuming listingDate is in ISO 8601 format
  const date = new Date(listingDate);

  // Format the date as "Month Day, Year, HH:MM AM/PM"
  const formattedListingDate = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <section className="py-28">
      {/* property heading */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 md:px-12 lg:px-20 mb-8">
        <div>
          <span className="text-sm bg-secondary text-white rounded-md px-2 py-1">
            {status}
          </span>
          <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-1">
            {title}
          </h1>
          <div className="flex">
            <h2 className="text-sm ">{`${location?.address}, ${location?.city}, ${location?.state}, ${location?.zipCode}`}</h2>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"></span>
            <h2 className="text-sm">{formattedListingDate}</h2>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"></span>
            <h2 className="text-sm">{views} views</h2>
          </div>
        </div>
        <div className="lg:text-end">
          <h1 className="text-3xl font-bold text-primary">${price}</h1>
          <h2 className="text-base">{squareFootage} sq ft</h2>
        </div>
      </div>

      {/* photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="w-full">
          <div className="rounded overflow-hidden shadow-md">
            <Image
              src={images[0]}
              alt=""
              className="w-full"
              width="1000"
              height="1000"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((photo, index) => (
            <div key={index} className="rounded overflow-hidden shadow-md">
              <Image
                src={photo}
                alt=""
                className="w-full"
                width="1000"
                height="1000"
              />
            </div>
          ))}
        </div>
      </div>

      {/* property details */}
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-4 md:px-12 lg:px-20 mt-12">
        <div className="col-span-2">
          {/* overview */}
          <div className="p-6 shadow-lg rounded-lg mb-8">
            <h1 className="text-lg font-bold text-heading mb-2">Overview</h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div>
                <h1 className="text-xs font-semibold mb-1">ID No</h1>
                <p className="text-sm ">{_id}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Type</h1>
                <p className="text-sm ">{propertyType}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Bedroom</h1>
                <p className="text-sm ">{bedrooms}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Bath</h1>
                <p className="text-sm ">{bathrooms}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Garage</h1>
                <p className="text-sm ">{garages}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Sqft</h1>
                <p className="text-sm ">{squareFootage}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Purpose</h1>
                <p className="text-sm ">{status}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Year</h1>
                <p className="text-sm ">{formattedListingDate}</p>
              </div>
            </div>
          </div>

          {/* property description */}
          <div className="p-6 shadow-lg rounded-lg mb-8">
            <h1 className="text-lg font-bold text-heading mb-2">
              Property Description
            </h1>
            <hr />
            <p className="text-sm text-body mt-4">{description}</p>
          </div>

          {/* address */}
          <div className="p-6 shadow-lg rounded-lg mb-8">
            <h1 className="text-lg font-bold text-heading mb-2">Address</h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div>
                <h1 className="text-xs font-semibold mb-1">Address</h1>
                <p className="text-sm ">{location.address}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">City</h1>
                <p className="text-sm ">{location.city}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">State</h1>
                <p className="text-sm ">{location.state}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Zip Code</h1>
                <p className="text-sm ">{location.zipCode}</p>
              </div>
            </div>
          </div>

          {/* Features & Amenities */}
          <div className="p-6 shadow-lg rounded-lg mb-8">
            <h1 className="text-lg font-bold text-heading mb-2">
              Features & Amenities
            </h1>
            <hr />
            <p className="text-sm text-body mt-4">
              {amenities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </p>
          </div>

          {/* Agent Details */}
          <div className="p-6 shadow-lg rounded-lg mb-8">
            <h1 className="text-lg font-bold text-heading mb-2">
              Agents Details
            </h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div>
                <h1 className="text-xs font-semibold mb-1">Name</h1>
                <p className="text-sm ">{agent.name}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Email</h1>
                <p className="text-sm ">{agent.email}</p>
              </div>
              <div>
                <h1 className="text-xs font-semibold mb-1">Phone</h1>
                <p className="text-sm ">{agent.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* schedule form */}
        <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-lg rounded-xl  lg:max-w-xl">
          <h1 class="text-xl font-bold text-primary text-center">
            Schedule a Tour
          </h1>
          <form class="mt-6">
            <div class="flex-1">
              <label class="block mb-2 text-sm text-gray-600 ">Your Name</label>
              <input
                type="text"
                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div class="flex-1 mt-6">
              <label class="block mb-2 text-sm text-gray-600 ">
                Email address
              </label>
              <input
                type="email"
                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div class="flex-1 mt-6">
              <label class="block mb-2 text-sm text-gray-600 ">
                Phone Number
              </label>
              <input
                type="text"
                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div class="flex-1 mt-6">
              <label class="block mb-2 text-sm text-gray-600 ">
                Date and Time
              </label>
              <input
                type="datetime-local"
                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div class="w-full mt-6">
              <label class="block mb-2 text-sm text-gray-600 ">Message</label>
              <textarea
                class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50"
            >
              Submit Tour Request
            </button>
          </form>
        </div>
      </div>

      {/* Related Properties */}
      {/* cards here */}
      <div className="px-4 md:px-12 lg:px-20">
        <h1 className="text-2xl font-bold text-heading mb-6 mt-12">
          Related properties
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {propertyData?.data?.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailPage;

// Main layout
PropertyDetailPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
