const { client } = require('./client');

// BE services

exports.getUser = () => client.auth.user();

exports.getSession = async () => {
  const session = await client.auth.session();
  return session;
};

exports.signUpUser = async (email) => {
  const { user, error } = await client.auth.signUp({ email });
  if (error) throw error;
  return user;
};

exports.signInUser = async (email) => {
  const { user, error } = await client.auth.signIn({ email });
  if (error) throw error;
  return user;
};

// async function signOutUser() {
//   return client.auth.signOut();
// }
// return { getUser, getSession, signInUser, signUpUser, signOutUser };
