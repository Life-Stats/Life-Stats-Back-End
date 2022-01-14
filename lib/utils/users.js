const { client } = require('./client');

// BE services

exports.getUser = () => client.auth.user();

exports.getSession = async () => {
  const session = await client.auth.session();
  return session;
};

// exports.signUpUser = async (email) => {
//   const { user, error } = await client.auth.signUp({ email });
//   if (error) throw error;
//   return user;
// };

exports.signInUser = async () => {
  // eslint-disable-next-line no-unused-vars
  const { user, session, error } = await client.auth.signIn({ 
    provider: 'google'
  },
  {
    redirectTo: 'http://localhost:7891/main'
  });
  if (error) throw error;
  return user;
};

// async function signOutUser() {
//   return client.auth.signOut();
// }
// return { getUser, getSession, signInUser, signUpUser, signOutUser };
