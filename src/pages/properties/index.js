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
    <section className="h-screen pt-20 px-20">
      <div className="grid grid-cols-4">
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
