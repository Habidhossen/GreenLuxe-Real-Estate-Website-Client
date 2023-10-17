import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(
        `https://greenluxe-real-estate-server.onrender.com/api/v1/admin/${email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        });
    }
  }, [user]);

  return [admin];
};

export default useAdmin;
