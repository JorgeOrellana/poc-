import { useState } from "react";

const LoginContainer = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleOnChange = (event: any) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = () => {
    console.log(loginData);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleOnChange}
        />
        <button onSubmit={handleOnSubmit}>Login</button>
      </form>
    </>
  );
};

export default LoginContainer;
