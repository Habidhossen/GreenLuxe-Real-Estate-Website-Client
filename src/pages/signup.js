import MainLayout from "@/layouts/MainLayout";
import { usePostUserMutation } from "@/redux/features/auth/userApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/features/auth/userSlice";

const SignupPage = () => {
  // useRouter for navigating
  const router = useRouter();
  const [postUser, { isError }] = usePostUserMutation();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // Redux dispatch and selector
  const {
    user,
    isLoading,
    error: firebaseError,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Create the form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Define the onSubmit function
  const onSubmit = (data) => {
    // create account by Firebase and Redux
    dispatch(
      createUser({
        name: data?.name,
        email: data?.email,
        password: data?.password,
      })
    )
      .then(() => {
        // User successfully created, call saveToDB
        const userData = {
          username: data?.name,
          email: data?.email,
          role: "user",
        };
        postUser(userData);
        console.log(userData);
      })
      .catch((error) => {
        // Handle errors if user creation fails
        console.error("User creation failed:", error);
      });

    reset();
  };

  // if user successfully login
  useEffect(() => {
    if (user?.email) {
      router.push("/dashboard");
    }
  }, [user?.email, router]);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <div className="mt-5">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Create your account
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="label-text-alt text-red-500 mt-2">
                Name is required
              </span>
            )}
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="label-text-alt text-red-500 mt-2">
                Email is required
              </span>
            )}
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="label-text-alt text-red-500 mt-2">
                Password is required
              </span>
            )}
            {firebaseError && (
              <span className="label-text-alt text-red-500 mt-2 text-center">
                {firebaseError}
              </span>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={isCheckboxChecked}
                onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
              />{" "}
              I agree to the{" "}
              <span className="text-blue-700 hover:underline">
                Terms and Conditions
              </span>
            </label>
          </div>

          <div className="pt-4">
            {/* <button className="w-full px-4 py-2 text-white font-medium bg-secondary hover:bg-primary active:bg-primary rounded-lg duration-150">
              {isLoading ? "Loading..." : "Sign Up"}
            </button> */}
            <button
              className={`w-full px-4 py-2 text-white font-medium ${
                isCheckboxChecked
                  ? "hover:bg-primary bg-secondary active:bg-primary"
                  : "bg-gray-300"
              } rounded-lg duration-150`}
              disabled={!isCheckboxChecked}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;

SignupPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
