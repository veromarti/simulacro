// export const products = [
// id: 1,
//       creator: "verom",
//       name: "Vero",
//       title: "My first idea",
//       description:
//         "An app where people can share small ideas they don't want to forget.",
//       category: "Process",
//       createdAt: getDate(),
// ]

import { renderMenu } from "./../js/home.js";

const data = fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    renderMenu((data))
    // document.body.innerHTML =`${JSON.stringify(data)}`

  });

// console.log(data)

// function render(data){
//     console.log(data)
// }

// const products = [];
// const user = localStorage.getItem("loggedUser");
// const currentUser = JSON.parse(user);
// const currentRole = currentUser.role;

// const feed = document.getElementById("feed");