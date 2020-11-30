import React from "react";

const SignUp = () => {
  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <input placeholder="e-mail" type="email" />
        <input placeholder="password" type="password" />
        <input placeholder="screen name" type="text" />
        <button>Create Profile</button>
      </form>
    </>
  );
};

export default SignUp;
