const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../database.db");

// const subjects = () => {
//   return {
//     get: id => {
//       return new Promise((resolve, reject) => {
//         if (!id) {
//           const results = [];
//           db.each(
//             "SELECT rowid as id, title, user FROM subjects",
//             (err, row) => {
//               if (err) {
//                 reject(err);
//               } else {
//                 results.push({ id: row.id, title: row.title, user: row.user });
//               }
//             }
//           );
//           resolve(results);
//         } else {
//           db.get(
//             "SELECT rowid as id, title, user FROM subjects WHERE id= ?",
//             [id],
//             (err, row) => {
//               if (err) {
//                 reject(err);
//               } else {
//                 resolve(
//                   row
//                     ? { id: row.id, title: row.title, user: row.user }
//                     : { status: 404, message: "No results found" }
//                 );
//               }
//             }
//           );
//         }
//         db.close();
//         console.log("still works!");
//       });
//     }
//   };
// };

// module.exports = subjects();

// db.each("SELECT rowid as id, title, user FROM subjects", (err, row) => {
//   if (err) {
//     throw Error;
//   } else {
//     console.log(`${row.id} ${row.title}`);
//   }
// });

db.get(
  "SELECT rowid as id, title, user FROM subjects WHERE id= ?",
  [3],
  (err, row) => {
    if (err) {
      throw Error;
    } else {
      console.log(
        row
          ? { id: row.id, title: row.title, user: row.user }
          : { status: 404, message: "No results found" }
      );
    }
  }
);

db.close();
