const remote = require("electron").remote;
const { db } = remote.require("./main.js");

window.subjects = {
  get: id => {
    return new Promise((resolve, reject) => {
      if (!id) {
        db.all("SELECT rowid AS id, info FROM lorem", [], function(err, rows) {
          if (err) {
            reject(err);
          } else {
            const results = {};
            rows.map(({ id, info }) => {
              results[id] = { id, info };
            });
            resolve(results);
          }
        });
      } else {
        db.get(
          "SELECT rowid AS id, info FROM lorem WHERE id=?",
          [id],
          (err, row) => {
            if (err) {
              reject(err);
            } else if (!row) {
              reject(Error("No records found"));
            } else {
              resolve({ id: row.id, info: row.info });
            }
          }
        );
      }
    });
  }
};

console.log("Preloaded successfully");
// const fs = require("fs");
// const path = require("path");

// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("database.db");

// const subjects = require("./models/subjectsModel");

// window.subjects = {
//   get: function(id) {
//     return new Promise((resolve, reject) => {
//       fs.readFile(
//         path.join(__dirname, "data", "subjects.json"),
//         "utf8",
//         (err, data) => {
//           if (err) {
//             reject(err);
//           } else {
//             if (!id) {
//               resolve(JSON.parse(data));
//             } else {
//               const subjects = JSON.parse(data);
//               subjects.map(subject => {
//                 if (id === subject.id) {
//                   resolve(subject);
//                 }
//               });
//             }
//           }
//         }
//       );
//     });
//   },
//   patch: function(id, newValue) {
//     return new Promise((resolve, reject) => {
//       fs.writeFile(
//         path.join(__dirname, "data", "subjects.json"),
//         JSON.stringify(newValue),
//         (err) => {
//           if (err) {
//             reject(err)
//           } else {
//             resolve({status: 200, message: "Edit successful"})
//           }
//         }
//       );
//     });
//   }
// };

// const db = require("better-sqlite3")("database.db");

// const callDB = () => {
//   return {
//     get: id => {
//       return new Promise((resolve, reject) => {
//         // if (!id) {
//         // const results = [];
//         // db.each(
//         //   "SELECT rowid as id, title, user FROM subjects",
//         //   (err, row) => {
//         //     if (err) {
//         //       reject(err);
//         //     } else {
//         //       results.push({ id: row.id, title: row.title, user: row.user });
//         //     }
//         //   }
//         // );
//         // resolve(results);
//         resolve(db.all("SELECT rowid as id, title, user FROM subjects"));
//         // db.close();
//         // } else {
//         //   db.get(
//         //     "SELECT rowid as id, title, user FROM subjects WHERE id=2",
//         //     (err, row) => {
//         //       if (err) {
//         //         reject(err);
//         //       } else {
//         //         resolve(
//         //           row
//         //             ? { id: row.id, title: row.title, user: row.user }
//         //             : { status: 404, message: "No results found" }
//         //         );
//         //       }
//         //     }
//         //   );
//         //   // db.close();
//         // }

//         console.log("still works!");
//       });
//     }
//   };
// };

// window.subjects = callDB();

// console.log("Preloaded successfully");
