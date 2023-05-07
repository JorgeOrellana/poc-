import { useState } from "react";

const ResetPasswordContainerComponent = () => {
  const [passWordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const handleOnChange = (event: any) => {
    setPasswordData({
      ...passWordData,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = () => {
    console.log(passWordData);
  };

  const verifyPassword = (event: any) => {
    console.log(event);
  };

  return (
    <form>
      <input
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="newPassword"
        placeholder="New Password"
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="confirmNewPassword"
        placeholder="Confirm New Password"
        onChange={verifyPassword}
      />
      <button onClick={handleOnSubmit}></button>
    </form>
  );
};

export default ResetPasswordContainerComponent;
