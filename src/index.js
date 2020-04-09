import React from "react";

import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/user/register">Need an account?</a>
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
