const {
  signUpUser,
  signInUser,
  // getUser,
  // getSession,
  // signOutUser,
} = require('../utils/users');
console.log(signInUser);
module.exports = () => {
  // signUp user - post
  // signIn user - post
  // getUser - get
  const signUpAUser = async ({ email, password }) => {
    const user = await signUpUser(email, password);
    return user;
  };

  const signInAUser = async ({ email, password }) => {
    const user = await signInUser(email, password);
    return user;
  };

  // const getAUser = () => {
  //   return getUser();
  // };

  // const signOutAUser = async () => {
  //   return await signOutUser();
  // };

  // const getASession = () => {
  //   return getSession();
  // };
  //   return an object that contains all of the responses of internal functions
  return { signUpAUser, signInAUser };

  // signInAUser, getAUser, signOutAUser, getASession
};
