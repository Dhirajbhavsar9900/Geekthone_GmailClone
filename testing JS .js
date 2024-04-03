function sendMessage(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "",
        To : '',
        From : "",
        Subject : "",
        Body : ""
    }).then(
      message => alert(message)
    );
}