import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import usersContext from "../contexts/users/context";

function ContextManagement() {
  const { usersState, usersDispatch } = useContext(usersContext);
  const [userLogin, _] = useState(localStorage.getItem("user-login") || null);
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(file);
  };

  useEffect(() => {
    if (!usersState.profile_photo) {
      (() => {
        setPreview(null);
      })();
    }
  }, [usersState]);

  useEffect(() => {
    if (userLogin) {
      const { username, profile_photo } = JSON.parse(userLogin);
      console.log(profile_photo);
      usersDispatch({
        type: "LOGIN",
        payload: {
          username: username,
          profile_photo: profile_photo,
        },
      });
    }
  }, [userLogin, usersDispatch]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleSubmitForm = (data) => {
    if (usersState.username) {
      console.log(data, data.profile_photo[0].name);
      usersDispatch({
        type: "EDIT_PROFILE",
        payload: {
          username: data.username,
          profile_photo: data.profile_photo[0].name,
        },
      });
    } else {
      usersDispatch({
        type: "LOGIN",
        payload: { username: data.username, profile_photo: preview },
      });
    }
  };

  return (
    <main className="flex justify-center items-center min-h-[calc(100vh-205px)]">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col align-middle gap-y-4 w-125"
      >
        <div className="flex gap-4">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            name="username"
            id="username"
            className="border rounded-full p-2 w-full"
          />
        </div>
        {errors.username && (
          <span className="text-red-500 text-sm">Password is Required</span>
        )}
        {usersState.username && (
          <>
            <label htmlFor="profile-picture" className="font-bold">
              Profile Picture
            </label>

            <input
              {...register("profile_photo", { required: true })}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              name="profile_photo"
              id="profile-picture"
            />
            {errors.profile_photo && (
              <span className="text-red-500 text-sm">Photo is required</span>
            )}
          </>
        )}
        {preview && (
          <img
            src={URL.createObjectURL(preview)}
            alt="Preview"
            style={{ width: "300px" }}
          />
        )}
        <button
          type="submit"
          className={`px-6 py-2 rounded-lg text-white ${usersState.username ? "bg-amber-300" : "bg-green-400"}`}
        >
          {usersState.username ? "Update" : "Login"}
        </button>
      </form>
    </main>
  );
}

export default ContextManagement;
