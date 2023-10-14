import FeaturedProperties from "@/components/ui/FeaturedProperties";
import { auth } from "@/config/firebase.init";
import MainLayout from "@/layouts/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/features/auth/userSlice";

export default function HomePage() {
  // dispatch
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  console.log(user);

  // handle Auth State
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

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

// Main layout
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
