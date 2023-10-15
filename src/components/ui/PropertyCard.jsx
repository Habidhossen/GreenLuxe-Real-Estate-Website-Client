import Image from "next/image";
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
    <div className="shadow-md rounded-lg">
      <Image src={images[0]} alt="" width="500" height="500" />
      <div className="px-3 py-4 space-y-2">
        <Link href={`/properties/${_id}`}>
          <h1 className="text-heading text-md font-bold hover:text-primary duration-300 ease-in-out">
            {title}
          </h1>
        </Link>
        <p className="text-xs text-body">{`${location?.address}, ${location?.city}, ${location?.state}, ${location?.zipCode}`}</p>
        <h1 className="text-primary text-lg font-semibold">${price}</h1>
        <div className="flex">
          <h6 className="text-xs">Bed: {bedrooms}</h6>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"></span>
          <h6 className="text-xs">Bath: {bathrooms}</h6>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"></span>
          <h6 className="text-xs">{squareFootage} sqft</h6>
        </div>
        <hr />
        <div className="flex items-center justify-between pt-2">
          <div className="badge text-xs bg-emerald-100 text-emerald-900">
            {status.toUpperCase()}
          </div>
          <div>
            <button class="group inline-flex items-center justify-center bg-transparent hover:text-red-500 transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="#FFA920"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="fill-current text-transparent group-hover:text-primary transition-colors duration-300 ease-in-out"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
