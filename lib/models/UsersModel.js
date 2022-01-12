import { signUpUser, signInUser } from '../utils/users';

module.exports = () => {
  // signUp user - post
  // signIn user - post
  // getUser - get
  const signUpAUser = async ({ email, password }) => {
    return signUpUser({ email, password });
  };
  const signInAUser = async ({ email, password }) => {
    return signInUser({ email, password });
  };
  //   return an object that contains all of the responses of internal functions
  return { signUpAUser, signInAUser };
};
