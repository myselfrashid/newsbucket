import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGitHub,
} from "../Firebase/firebase";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  const logGithubUser = async () => {
    const { user } = await signInWithGitHub();
    const userDocRef = await createUserDocFromAuth(user);
  }

  return (
    <div className="flex flex-row px-20 mx-auto">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
