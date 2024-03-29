
(function () {
  emailjs.init("uiZvbGXfPUacc3ebz");
})();


function sendEmail(event) {
  event.preventDefault();

  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const company = document.getElementById("company").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    company: company,
    message: message,
  };

  emailjs
    .send("service_bowlg9j", "template_85805ah", templateParams)
    .then(function (response) {
      console.log("Email sent successfully:", response);
      alert("Thank you! Your message has been sent.");
      document.getElementById("contact-form").reset();
      
    })
    .catch(function (error) {
      console.error("Email sending failed:", error);
      alert("Oops! Something went wrong. Please try again later.");
    });

  }

function scrollToTopic(topicId) {
  var element = document.getElementById(topicId);
  var headerHeight = document.getElementById('header').offsetHeight; // Adjust 'header' to the actual ID of your header element
  var scrollPosition = element.offsetTop - headerHeight;
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault(); 
  
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuRight = document.querySelector('.menu-right');

    hamburgerMenu.addEventListener('click', function() {
      menuRight.classList.toggle('active');
    });