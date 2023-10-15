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
    <section className="px-4 md:px-12 lg:px-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading text-xl md:text-2xl lg:text-3xl font-bold font-ubuntu">
            Features Properties
          </h1>

          <p className="text-sm text-body mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            recusandae!
          </p>
        </div>
        <div>
          <Link
            href="properties"
            className="text-sm font-semibold hover:text-primary duration-300 ease-in-out"
          >
            See all properties
          </Link>
        </div>
      </div>

      {/* cards here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {propertyData?.data?.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
