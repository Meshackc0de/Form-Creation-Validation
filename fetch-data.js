
async function fetchUserData (){
  const  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = '';

    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
      
    });
    dataContainer.appendChild(userList);  
     } 
     catch(error) {
   dataContainer.innerHTML = 'Failed to load user data.';
   }
  }
     
  document.addEventListener('DOMContentLoaded', fetchUserData);
    
  

// // This is the correct JavaScript code
// async function fetchUserData() {
//   const apiUrl = 'https://jsonplaceholder.typicode.com/users';
//   const dataContainer = document.getElementById('api-data');

//   try {
//     const response = await fetch(apiUrl); // ✅ Actually fetch from the API
//     const users = await response.json();  // ✅ Convert to JSON

//     dataContainer.innerHTML = ''; // ✅ Clear the loading message

//     const userList = document.createElement('ul'); // ✅ Create UL

//     users.forEach(user => {
//       const listItem = document.createElement('li'); // ✅ Create LI
//       listItem.textContent = user.name; // ✅ Set the text
//       userList.appendChild(listItem); // ✅ Add LI to UL
//     });

//     dataContainer.appendChild(userList); // ✅ Add UL to the page
//   } catch (error) {
//     dataContainer.innerHTML = 'Failed to load user data.'; // ✅ Handle error
//   }
// }

// // ✅ Run it when page is ready
// document.addEventListener('DOMContentLoaded', fetchUserData);
