const firebase = require("firebase");
const config = require("../firebaseConfig");
firebase.initializeApp(config);

module.exports = {
  login: function (request, response) {
    const user = {
      email: request.body.email,
      password: request.body.password,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
      })
      .then((token) => {
        return response.json({ user, token, userId });
      })
      .catch((error) => {
        console.error(error);
        return response
          .status(403)
          .json({ general: "wrong credentials, please try again" });
      });
  },
};
