const form = document.querySelector ("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);

const jsObjectPlease = Object.fromEntries(formData);
console.log(jsObjectPlease);
});

//debugging - there are two ways to do it

//Using debugger; in code :
//   for (let i = 0; i < 100; i++) {
//  if (i === 50) {
//  debugger; // pauses only when i is 50
// }
// console.log(i);
//}
// - it is simpler - writting directly in the code
// -Always works if DevTools is open.
//- Good for when you know for certain where you want to pause.
//- You have to modify the actual code for debugging.
//- You might forget to delete it before shipping your code (random pauses will be seen by users in their browsers)
//- to change the condition , for example (i ===75 instead of i===50) - editing and reloading code is necessary.


//Using conditional breakpoints in DevTools:

//-Open Sources tab in Chrome DevTools.

//-Click the line number inside the loop.

//-Right-click breakpoint → Edit breakpoint…

//-Enter a condition like i === 50.

// Good because you don't touch your code.
   //- it is very flexible - you can change conditions- for ex. (i > 20 && i< 30) without editing your file.
   // Keeps your source code clean.


//APIS PRACTICE

console.log('testing testing!')

const image = document.getElementById('image')

// asynchronous - 'do this code when you can'

async function fetchData(){
  //we make it async because we don't know how long the request will take to finish
  //fetch means - make a request to this URL
  //aait is the part that says 'come back to this later'
  //this first part only starts the request - to get something called 'headers'
const response = await fetch ('https://myanimelist.net/anime/269/Bleach')
}
