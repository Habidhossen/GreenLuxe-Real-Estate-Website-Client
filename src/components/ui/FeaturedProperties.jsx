import Link from "next/link";

const FeaturedProperties = () => {
  return (
    <section className="h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading text-4xl font-bold">
            Features Properties
          </h1>
          <p className="text-base text-primary ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            recusandae!
          </p>
        </div>
        <div>
          <Link href="/">See all properties</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
