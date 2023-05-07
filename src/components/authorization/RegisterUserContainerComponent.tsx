import { useState } from "react";

const RegisterUser = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleOnChange = (event: any) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = () => {
    console.log(useState);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleOnChange}
      />
      <button onClick={handleOnSubmit}>Submit</button>
    </form>
  );
};

export default RegisterUser;
