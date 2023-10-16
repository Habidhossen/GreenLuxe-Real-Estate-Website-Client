import PropertyCard from "@/components/ui/PropertyCard";
import MainLayout from "@/layouts/MainLayout";
import {
  useGetOnePropertyQuery,
  useGetPropertiesQuery,
} from "@/redux/features/properties/propertyApi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../loading";

const PropertyDetailPage = () => {
  // get property Id
  const router = useRouter();
  const { propertyId } = router.query;

  // Create the form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // fetching all data
  const { data: propertyData, error } = useGetPropertiesQuery(undefined);

  // fetching Single Data
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

  //on submit
  const onSubmit = (data) => {
    toast.success("Schedule booking successfully");
    reset();
  };

  return (
    <section className="py-28">
      {/* property heading */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 md:px-12 lg:px-20 mb-8">
        <div>
          <span className="badge text-xs font-semibold bg-emerald-100 text-emerald-900">
            {status.toUpperCase()}
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

          <div className="my-3">
            {data?.data?.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-amber-100 px-2 py-1 rounded-full mr-1"
              >
                {tag}
              </span>
            ))}
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

          {/* reviews */}

          <div className="p-6 shadow-lg rounded-lg mb-8">
            <div>
              <h2 className="text-md font-semibold mb-4 mt-6">
                Reviews ({reviews.length})
              </h2>
              {data?.data?.reviews?.length === 0 ? (
                <p>No reviews available</p>
              ) : (
                <div>
                  {/* review card */}
                  {data?.data?.reviews?.map((review, index, reviewsArray) => (
                    <div key={review._id}>
                      <div className="flex items-center gap-x-3">
                        <Image
                          width={100}
                          height={100}
                          alt="review cover"
                          src="https://i.ibb.co/Y3cQrGL/dummy-profile-image.jpg"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <span className="text-xs font-semibold">
                            {review?.user?.name}
                          </span>
                          <div className="flex items-center gap-3 mt-1 text-xs">
                            {/* render star based on ratings */}
                            <span className="flex items-center">
                              {Array.from({ length: 5 }, (_, index) => (
                                <svg
                                  key={index}
                                  fill={
                                    index < review?.rating
                                      ? "currentColor"
                                      : "none"
                                  }
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  className="w-4 h-4 text-[#ff7d1e]"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                              ))}
                            </span>
                            {review?.rating} out of 5
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="mt-2 text-xs">{review?.comment}</p>
                      </div>
                      {/* Conditionally render the horizontal line */}
                      {index !== reviewsArray.length - 1 && (
                        <hr className="border-b-1 border-gray-200 my-3" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* schedule form */}
        <div>
          <div class="w-full px-8 py-6 mx-auto overflow-hidden bg-white shadow-lg rounded-xl  lg:max-w-xl">
            <h1 class="text-lg font-bold text-heading text-center mb-2">
              Schedule a Tour
            </h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} class="mt-4">
              <div class="flex-1">
                <label class="block mb-2 text-sm text-gray-600 ">
                  Full Name
                </label>
                <input
                  type="text"
                  class="block w-full px-5 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="label-text-alt text-red-500 mt-2">
                    Full name is required
                  </span>
                )}
              </div>

              <div class="flex-1 mt-3">
                <label class="block mb-2 text-sm text-gray-600 ">
                  Email address
                </label>
                <input
                  type="email"
                  class="block w-full px-5 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="label-text-alt text-red-500 mt-2">
                    Email is required
                  </span>
                )}
              </div>
              <div class="flex-1 mt-3">
                <label class="block mb-2 text-sm text-gray-600 ">
                  Phone number
                </label>
                <input
                  type="text"
                  class="block w-full px-5 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="label-text-alt text-red-500 mt-2">
                    Phone is required
                  </span>
                )}
              </div>
              <div class="flex-1 mt-3">
                <label class="block mb-2 text-sm text-gray-600 ">Date</label>
                <input
                  type="date"
                  class="block w-full px-5 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="label-text-alt text-red-500 mt-2">
                    Date is required
                  </span>
                )}
              </div>
              <div class="flex-1 mt-3">
                <label class="block mb-2 text-sm text-gray-600 ">Time</label>
                <input
                  type="time"
                  class="block w-full px-5 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  {...register("time", { required: true })}
                />
                {errors.time && (
                  <span className="label-text-alt text-red-500 mt-2">
                    Date is required
                  </span>
                )}
              </div>
              <div class="w-full mt-3">
                <label class="block mb-2 text-sm text-gray-600 ">Message</label>
                <textarea
                  rows="2"
                  class="block w-full h-24 px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md    focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  placeholder="Message"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="label-text-alt text-red-500 mt-2">
                    Message is required
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    reset();
                  }}
                  class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-primary capitalize transition-colors duration-300 transform bg-yellow-50 rounded-md hover:bg-yellow-100 focus:outline-none"
                >
                  Clear
                </button>

                <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary focus:outline-none">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
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
