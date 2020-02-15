const remote = require("electron").remote;
const { db } = remote.require("../../main");

const subjects = {
  get: id => {
    return new Promise((resolve, reject) => {
      if (!id) {
        db.all("SELECT subjectId as id, * FROM subjects", [], (err, rows) => {
          if (err) {
            reject(err);
          } else {
            const results = {};
            rows.map(({ id, title, userId }) => {
              results[id] = { id, title, userId };
            });
            resolve(results);
          }
        });
      } else {
        db.get(
          "SELECT subjectId as id, * FROM subjects WHERE id=?",
          [id],
          (err, row) => {
            if (err) {
              reject(err);
            } else if (!row) {
              reject("No record found");
            } else {
              resolve({ id: row.id, title: row.title, userId: row.userId });
            }
          }
        );
      }
    });
  },
  patch: (id, newValues) => {
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
  },
  delete: id => {}
};

module.exports = subjectsModel;
