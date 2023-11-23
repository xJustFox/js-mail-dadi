const emails = ["armandorizzi@gmail.com", "mariorossi@gmail.com", "francoesposito@gmail.com"];
let user_email = prompt("Inserisci la tua email:");

for (let i=0; i<emails.length; i++) {
    console.log(emails[i]);

    if (user_email == emails[i]) {
        console.log("Benvenuto nel Sito");
    }
}