

function emailSend(){
    let fullName = document.getElementById('form_name').value;
let email = document.getElementById('form_email').value;
let subject = document.getElementById('form_subject').value;
let email_body = document.getElementById('form_message').value;
let messageBody = "Name" + " "+ fullName +
"<br/> Email: " + " "+ email+
"<br/> body:"+ " "+email_body;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pablo_designs@gmail.com",
        Password : "DA85C3C324A30BEAC8169FB8B60520AE2CDC",
        To : 'pablonigussie@gmail.com',
        From : "pablonigussie1@gmail.com",
        Subject: subject,
        Body : messageBody
    }).then(
      message => alert(message)
    );
}