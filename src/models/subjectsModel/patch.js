const remote = require("electron").remote;
const { db } = remote.require("./main");

module.exports = (id, newValues) => {
  return new Promise((resolve, reject) => {
    if (typeof newValues !== "object") {
      return reject(`Form values must be an object`);
    }

    if (
      Object.keys(newValues).length !== 1 ||
      !newValues.hasOwnProperty("title")
    ) {
      return reject(`Form values must only contain title property`);
    }

    const stmt = db.prepare("UPDATE subjects SET title=? WHERE subjectId=?");
    stmt.run(newValues.title, id, err => {
      if (err) return reject(err);
    });
    stmt.finalize(err => {
      if (err) {
        reject(err);
      } else {
        resolve("");
      }
    });
  });
};
