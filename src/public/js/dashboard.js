// JavaScript for Inline Editing
// script.
// const editButtons = document.querySelectorAll('[id^=edit-]');
// editButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const fieldId = button.id.split('-')[1];
//     const value = prompt(`Enter new ${fieldId}:`);
//     if (value !== null && value.trim() !== "") {
//       document.getElementById(fieldId).innerText = `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)}: ${value}`;
//       // You might want to make an API call here to update the server with the new value
//     }
//   });
// });