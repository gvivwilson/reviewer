const remote = require("electron").remote;
const { db } = remote.require("./main.js");
// const bcrypt = require("bcrypt");

const { subjects, users } = require("./models");

window.subjects = subjects;
window.users = users;

// window.subjects = {
//   get: id => {
//     return new Promise((resolve, reject) => {
//       if (!id) {
//         db.all("SELECT rowid AS id, info FROM lorem", [], function(err, rows) {
//           if (err) {
//             reject(err);
//           } else {
//             const results = {};
//             rows.map(({ id, info }) => {
//               results[id] = { id, info };
//             });
//             resolve(results);
//           }
//         });
//       } else {
//         db.get(
//           "SELECT rowid AS id, info FROM lorem WHERE id=?",
//           [id],
//           (err, row) => {
//             if (err) {
//               reject(err);
//             } else if (!row) {
//               reject(Error("No records found"));
//             } else {
//               resolve({ id: row.id, info: row.info });
//             }
//           }
//         );
//       }
//     });
//   }
// };

console.log("Preloaded successfully");
