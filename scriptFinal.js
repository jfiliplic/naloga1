// radiobutton = document.getElementById("no-gender");
// radiobutton.checked = true;

const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', event => {
  event.preventDefault();

  const message = document.getElementById("message").value; 
  const gender = document.querySelector( 'input[name="Anrede"]:checked').value;
  const name = document.getElementById("name").value; 
  const email = document.getElementById("email").value; 
  console.log(message+'\n'+gender+'\n'+name+'\n'+email);
});