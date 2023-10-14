import Link from "next/link";

const FeaturedProperties = () => {
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
    </section>
  );
};

export default FeaturedProperties;
