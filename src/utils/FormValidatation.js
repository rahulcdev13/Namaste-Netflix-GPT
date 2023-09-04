export const checkValidData = (email, password) => {
  const isEmailValidate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // const isNameValidate =/^[A-Za-z\s]{1,}[\]{0,1}[A-Za-z\s]{0,}$/.test(name);

  if (!isEmailValidate) return "Email id not valid";
  if (!isPasswordValidate) return "Password is not valid";
  // if (!isNameValidate) return "Password is not valid";

  return null;
};
