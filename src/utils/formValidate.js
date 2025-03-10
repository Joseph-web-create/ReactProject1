export const validateUserName = (username) => {
  const validRegex = /^[a-zA-Z0-9_]+$/i;
  if (!username) {
    return "Please enter a username";
  } else if (username.length < 3 || username.length > 20) {
    return "Username must be between 3 and 20 character long.";
  } else if (!validRegex.test(username)) {
    return "Username can only contain letters, number and underscore";
  }
};

export const validatePassword = (password) => {
  const validRegex = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  if (!password) {
    return "Please enter a password";
  } 
  else if (!validRegex.test(password)) {
    return `Password must contain at least one lowerCase, uppercase amd must be at leats 5 character long`;
  }
};
