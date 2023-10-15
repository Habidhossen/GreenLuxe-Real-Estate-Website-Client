import MainLayout from "@/layouts/MainLayout";
import { useGetOnePropertyQuery } from "@/redux/features/properties/propertyApi";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "../loading";

const PropertyDetailPage = () => {
  // get property Id
  const router = useRouter();
  const { propertyId } = router.query;

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

  console.log(images);

  // Assuming listingDate is in ISO 8601 format
  const date = new Date(listingDate);

  // Format the date as "Month Day, Year, HH:MM AM/PM"
  const formattedListingDate = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <section className="py-28">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-20 mb-8">
        <div>
          <span className="text-sm bg-secondary text-white rounded-md px-2 py-1">
            {status}
          </span>
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
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
    </section>
  );
};

export default PropertyDetailPage;

// Main layout
PropertyDetailPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
