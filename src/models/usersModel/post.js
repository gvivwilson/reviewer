const remote = require("electron").remote;
const { db } = remote.require("./main");
const bcrypt = require("bcrypt");

module.exports = formValues => {
  return new Promise((resolve, reject) => {
    if (typeof formValues !== "object") {
      return reject("Form values must be an object");
    }

    // Reject if object has excess props other than username and password,
    // or if it is missing username and password prop
    if (
      Object.keys(formValues).length !== 2 ||
      !formValues.hasOwnProperty("username") ||
      !formValues.hasOwnProperty("password")
    ) {
      return reject(
        "Form values must only have username and password properties"
      );
    }

    //Query database if user exists
    db.get(
      "SELECT userId as id, * FROM users WHERE username=?",
      [formValues.username],
      (err, row) => {
        if (err) {
          reject(err);
        } else if (!row) {
          //Reject if no username found
          reject("Invalid username and password");
        } else {
          const { password } = formValues;
          bcrypt.compare(password, row.password).then(function(res) {
            if (res) {
              // Resolve if password is match,
              resolve(row);
            } else {
              // otherwise, reject
              reject("Invalid username and password");
            }
          });
        }
      }
    );
  });
};
