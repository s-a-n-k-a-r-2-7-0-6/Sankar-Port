const form =document.querySelector('form'); 
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;




    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yadlapallisankar4551621@gmail.com",
        Password : "FF3B21F8365C7C779483E9B7B5F43203489D",
        To : 'yadlapallisankar4551621@gmail.com',
        From : "yadlapallisankar4551621@gmail.com",
        Subject : subject.value,
        Body :bodyMessage
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();

});