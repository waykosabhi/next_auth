"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const { data, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <button onClick={(e) => signOut()}>LOGOUT</button>
        <h1>{data.user?.name}</h1>
        <h1>{data.user?.email}</h1>
        <img
          src={data.user?.image as string}
          alt={data.user?.name as string}
        ></img>
      </>
    );
  }
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={(e) => signIn("google")}>LOGIN with Google</button>
    </>
  );
};

export default page;
