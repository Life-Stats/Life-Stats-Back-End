const {
  // signUpUser,
  signInUser,
  getUser,
  getSession,
  // signOutUser,
} = require('../utils/users');
console.log('sign in info', signInUser);
module.exports = () => {
  // signUp user - post
  // signIn user - post
  // getUser - get
  // const signUpAUser = async ({ email }) => {
  //   const user = await signUpUser(email);
  //   return user;
  // };

  const signInAUser = async () => {
    const user = await signInUser();
    return user;
  };

  const getAUser = async () => {
    const user = await getUser();
    return user;
  };

  // const signOutAUser = async () => {
  //   return await signOutUser();
  // };

  const getASession = () => {
    const session = getSession();
    console.log('session', session);
    return session;
  };
  //   return an object that contains all of the responses of internal functions
  return { signInAUser, getAUser, getASession };

  // signInAUser, getAUser, signOutAUser, getASession
};
