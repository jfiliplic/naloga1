const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', event => {
  event.preventDefault();

  const message = document.getElementById("message").value; 
  let gender = document.querySelector( 'input[name="Anrede"]:checked');
  if(gender == null) {
    gender = "No gender input.";} 
  else {
        gender = gender.value;
  }
  const name = document.getElementById("name").value; 
  const email = document.getElementById("email").value; 
  console.log(message+'\n'+gender+'\n'+name+'\n'+email);
});