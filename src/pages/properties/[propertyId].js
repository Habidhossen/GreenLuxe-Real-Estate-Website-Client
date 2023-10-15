import MainLayout from "@/layouts/MainLayout";
import { useGetOnePropertyQuery } from "@/redux/features/properties/propertyApi";
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

  return (
    <section className="h-screen pt-28">
      <div>
        <p>{_id}</p>
        <p>{title}</p>
      </div>
    </section>
  );
};

export default PropertyDetailPage;

// Main layout
PropertyDetailPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
