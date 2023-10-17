import Loading from "@/pages/loading";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  //   const currentUser = getAuth().currentUser;
  const { user, isLoading } = useSelector((state) => state);

  if (isLoading) {
    <Loading />;
  }

  useEffect(() => {
    if (!isLoading && !user?.user?.email) {
      router.push("/login");
    }
  }, [user?.user?.email, isLoading, router]);

  return children;
};

export default PrivateRoute;
