import Link from "next/link";

const PropertyCard = ({ property }) => {
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
  } = property;

  return (
    <div>
      <h1>{title}</h1>
      <h1>{propertyType}</h1>

      <Link href={`properties/${_id}`}>Click</Link>
    </div>
  );
};

export default PropertyCard;
