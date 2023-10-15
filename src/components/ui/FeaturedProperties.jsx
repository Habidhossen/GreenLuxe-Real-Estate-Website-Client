import Loading from "@/pages/loading";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
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
    <section className="h-screen px-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading text-3xl font-bold font-ubuntu">
            Features Properties
          </h1>

          <p className="text-sm text-primary mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            recusandae!
          </p>
        </div>
        <div>
          <Link href="properties">See all properties</Link>
        </div>
      </div>

      {/* cards here */}
      <div className="grid grid-cols-3">
        {propertyData?.data?.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
