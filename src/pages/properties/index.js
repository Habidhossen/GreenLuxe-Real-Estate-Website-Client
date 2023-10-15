import PropertyCard from "@/components/ui/PropertyCard";
import MainLayout from "@/layouts/MainLayout";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";
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
    <section className="px-4 md:px-12 lg:px-20 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {propertyData?.data?.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default AllPropertiesPage;

// Main layout
AllPropertiesPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
