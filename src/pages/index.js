import FeaturedProperties from "@/components/ui/FeaturedProperties";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          GreenLuxe - A Real Estate Website | Where Nature Meets Real Estate |
          Luxury Apartments Online
        </title>
        <meta name="description" content="This is Real estate Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-20">
        <FeaturedProperties />
      </main>
    </>
  );
}

// For Layout
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
