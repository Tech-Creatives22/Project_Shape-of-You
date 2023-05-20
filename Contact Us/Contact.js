document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Preventing the default form submission behavior

    sendMail(); // Calling the sendMail function

});


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    //storing the service id and template id from emailjs in the following variables 
    const serviceID = "service_64v54zc";
    const templateID = "template_b4r1b4f";

    emailjs
        .send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                //adding an alert message to notify the sender about the successful submission of the email
                alert("Your message was sent successfully");
            })
        .catch((err) => console.log(err));
}
