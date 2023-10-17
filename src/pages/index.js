import AboutUs from "@/components/ui/AboutUs";
import Banner from "@/components/ui/Banner";
import FeaturedProperties from "@/components/ui/FeaturedProperties";
import InquiryForm from "@/components/ui/InquiryForm";
import MeetAgents from "@/components/ui/MeetAgents";
import PropertiesByCities from "@/components/ui/PropertiesByCities";
import Testimonials from "@/components/ui/Testimonials";
import ScrollToTopButton from "@/components/utils/ScrollToTopButton";
import { auth } from "@/config/firebase.init";
import MainLayout from "@/layouts/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/features/auth/userSlice";

export default function HomePage() {
  /* Handle Firebase State */
  // dispatch
  const dispatch = useDispatch();
  // selector
  const { user } = useSelector((state) => state.user);

  // handle Firebase Auth State
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
      <main>
        <Banner />
        <FeaturedProperties />
        <PropertiesByCities />
        <Testimonials />
        <AboutUs />
        <MeetAgents />
        <InquiryForm />
      </main>
      <ScrollToTopButton />
    </>
  );
}

// Main layout
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
