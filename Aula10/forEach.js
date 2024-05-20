let email = [
    'email1@gmail.com',
    'email2@gmail.com',
    'email3@gmail.com',
    'email4@gmail.com',
]

// for (let i = 0; i <= email.length;i++) {
//     console.log(`Email enviado para: ${email[i]}`);
// }

// Valor do array
// index do array
// array completo
email.forEach((email)=>{
    console.log(`E-mail enviado para: ${email}`);
})
console.log("--- --- --- --- ---");
email.forEach((email, index, array)=>{
    console.log(`E-mail enviado para: ${email}`);
    console.log(`Você é o numero: ${index} da lista.`);
    console.log(`Elementos da lista: ${array}`);
})
