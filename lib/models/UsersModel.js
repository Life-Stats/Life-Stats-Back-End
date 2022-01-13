import {
  signUpUser,
  signInUser,
  getUser,
  getSession,
  signOutUser,
} from '../utils/users';

module.exports = () => {
  // signUp user - post
  // signIn user - post
  // getUser - get
  const signUpAUser = async ({ email, password }) => {
    return await signUpUser({ email, password });
  };
  const signInAUser = async ({ email, password }) => {
    return await signInUser({ email, password });
  };

  const getAUser = () => {
    return getUser();
  };

  const signOutAUser = async () => {
    return await signOutUser();
  };

  const getASession = () => {
    return getSession();
  };
  //   return an object that contains all of the responses of internal functions
  return { signUpAUser, signInAUser, getAUser, signOutAUser, getASession };
};
