import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h2>Welcome</h2>
      <Link>
        <button>Sign In</button>
      </Link>
      <Link to="/sign-up">
        <button>Sign Up</button>
      </Link>
    </>
  );
};

export default Welcome;
