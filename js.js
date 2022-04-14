function handleCredentialResponse(response) { // function = resposta do google
    const data = jwt_decode(response.credential) // decodifica a resposta do usuário e guarda no console 
    console.log(data)


    fullName.textContent = data.name 
    sub.textContent = data.sub 
    given_name.textContent = data.given_name 
    family_name.textContent = data.family_name 
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src" , data.picture) 
   }
   window.onload = function () { // gerador do botão 
     google.accounts.id.initialize({
       client_id: "182995868365-p7plltful34cseuik5k3cp8pmreo6cqv.apps.googleusercontent.com",
       callback: handleCredentialResponse
     });
     google.accounts.id.renderButton(
       document.getElementById("buttonDiv"), { 
           theme: "filled_black", 
           size: "large" , 
           type:"standard",
     shape:"pill", // costumizados 
     text:"$ {button.text}",
     logo_alignment:"left",
     width:"260px"
}  // customization attributes
     );
     google.accounts.id.prompt(); // also display the One Tap dialog
   }