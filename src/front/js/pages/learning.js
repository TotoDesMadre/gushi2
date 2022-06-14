import React, { useContext } from "react";
import { userContext } from "./global_context";
import { Redirect } from "react-router-dom";

//  ** We will need to make a button on the home page that allows us to access learning ** //
//  ** and also set up a location hook to remember when we want to access learning ** //
export const Learning = () => {
  const { auth, setAuth } = useContext(userContext);

  if (!auth) {
    return <Redirect to={"/Login"} />;
  }
  return (
    <div>
      <h1>Page for learning</h1>
    </div>
  );
};
