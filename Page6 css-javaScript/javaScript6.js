var form = document.getElementById("volunteerForm");
var thanksMessage = document.getElementById("thanksMessage");

form.addEventListener("submit", function(e) {

  alert("Thank you for registering! We’ll be in touch soon. 😊");

  form.style.display = "none";
  thanksMessage.style.display = "block";
});
