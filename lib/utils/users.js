const { client } = require('./client');

// BE services

module.exports = () => {

  function getUser() {
    return client.auth.user();
  }

  function getSession() {
    return client.auth.session();
  }

  async function signUpUser(email, password) {
    const { user, error } = await client.auth.signUp({ email, password });
    if (error) throw error;
    return user;
  }

  async function signInUser(email, password) {
    const { user, error } = await client.auth.signIn({ email, password });
    if (error) throw error;
    return user;
  }

  async function signOutUser() {
    return client.auth.signOut();
  }
  return { getUser, getSession, signInUser, signUpUser, signOutUser };
};
