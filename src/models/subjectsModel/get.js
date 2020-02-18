const remote = require("electron").remote;
const { db } = remote.require("./main");

module.exports = id => {
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
          // resolve(rows);
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
};
