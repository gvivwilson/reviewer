const remote = require("electron").remote;
const { db } = remote.require("./main");

module.exports = formValue => {
  return new Promise((resolve, reject) => {
    //if Argument is passed, search for specific user
    if (formValue) {
      if (typeof formValue !== "string") {
        return reject("Form values must be a string");
      }

      //Query database if user exists
      db.get(
        "SELECT userId as id, * FROM users WHERE id=?",
        [formValue],
        (err, row) => {
          if (err) {
            reject(err);
          } else if (!row) {
            //Reject if no username found
            reject("No user found");
          } else {
            resolve(row);
          }
        }
      );
    }

    //if no argument, return all users
    else {
      db.all("SELECT userId as id, * FROM users", (err, rows) => {
        if (err) {
          reject(err);
        } else if (!rows) {
          reject("No records found");
        } else {
          const results = {};
          rows.map(({ id, firstname, lastname }) => {
            results[id] = { id, firstname, lastname };
          });
          resolve(results);
        }
      });
    }
  });
};
