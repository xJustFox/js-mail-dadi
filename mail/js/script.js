const emails = ["armandorizzi@gmail.com", "mariorossi@gmail.com", "francoesposito@gmail.com"];
let user_email = prompt("Inserisci la tua email:");
let check = false;

for (let i=0; i<emails.length; i++) {
    console.log(emails[i]);

    if (user_email == emails[i]) {
        check = true;
    }
}

if (check == true) {
    console.log("Email presente");
} else {
    console.log("Email non presente");
}