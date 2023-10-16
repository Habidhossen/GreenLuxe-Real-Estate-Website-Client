import { getAuth } from "firebase/auth";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import DashboardPage from ".";

const ProfilePage = () => {
  const currentUser = getAuth().currentUser;

  const { control, handleSubmit, setValue, watch } = useForm();
  const isEditing = watch("isEditing", false); // Watch for the edit mode state

  // Initialize form values
  const defaultValues = {
    username: currentUser?.displayName || "",
    emailAddress: currentUser?.email || "",
    address: "",
    phoneNumber: "",
    dob: "",
    education: "",
    isEditing: false,
  };

  const handleEditClick = () => {
    setValue("isEditing", !isEditing);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DashboardPage>
      <section className="p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
          Accounts
        </h2>
        <hr />

        <div>
          <div className="avatar mt-4">
            <div className="w-24 rounded-full border">
              <Image
                src={
                  currentUser?.photoURL ||
                  "https://i.ibb.co/Y3cQrGL/dummy-profile-image.jpg"
                }
                alt="User Profile"
                width="100"
                height="100"
              />{" "}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Username
                </label>
                <Controller
                  name="username"
                  control={control}
                  defaultValue={defaultValues.username}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                        isEditing ? "" : "pointer-events-none"
                      }`}
                      as={<input type="text" />}
                      disabled={!isEditing}
                    />
                  )}
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Email Address
                </label>
                <Controller
                  name="emailAddress"
                  control={control}
                  defaultValue={defaultValues.emailAddress}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                        isEditing ? "" : "pointer-events-none"
                      }`}
                      as={<input type="text" />}
                      disabled={!isEditing}
                    />
                  )}
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Address
                </label>
                <Controller
                  name="address"
                  control={control}
                  defaultValue={defaultValues.address}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                        isEditing ? "" : "pointer-events-none"
                      }`}
                      as={<input type="text" />}
                      disabled={!isEditing}
                    />
                  )}
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Phone Number
                </label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue={defaultValues.phoneNumber}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                        isEditing ? "" : "pointer-events-none"
                      }`}
                      as={<input type="text" />}
                      disabled={!isEditing}
                    />
                  )}
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  DOB
                </label>
                <Controller
                  name="dob"
                  control={control}
                  defaultValue={defaultValues.dob}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="date"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                        isEditing ? "" : "pointer-events-none"
                      }`}
                      as={<input type="date" />}
                      disabled={!isEditing}
                    />
                  )}
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Education
                </label>
                <Controller
                  name="education"
                  control={control}
                  defaultValue={defaultValues.education}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                        isEditing ? "" : "pointer-events-none"
                      }`}
                      as={<input type="text" />}
                      disabled={!isEditing}
                    />
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={handleEditClick}
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary"
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </DashboardPage>
  );
};

export default ProfilePage;
