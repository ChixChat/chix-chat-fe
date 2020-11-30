import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <p>Welcome</p>
      <button>Sign In</button>
      <Link>
        <button>Sign Up</button>
      </Link>
    </>
  );
};

export default Welcome;
