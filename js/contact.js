// contact.js - validates the contact form and compiles it into an email

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const result = document.getElementById("contactResult");
  const message = document.getElementById("c-message");
  const count = document.getElementById("c-count");

  // CHANGE THIS to the business email
  const BUSINESS_EMAIL = "lsphesihle57@gmail.com";

  // Live character counter
  message.addEventListener("input", function () {
    count.textContent = message.value.length + " / 500";
  });

  function setError(id, msg) {
    document.getElementById(id + "-error").textContent = msg;
    document.getElementById(id).classList.toggle("invalid", msg !== "");
  }

  function validate() {
    let ok = true;

    if (form["c-fullname"].value.trim().length < 2) { setError("c-fullname", "Please enter your full name."); ok = false; }
    else setError("c-fullname", "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form["c-email"].value.trim())) { setError("c-email", "Enter a valid email address."); ok = false; }
    else setError("c-email", "");

    const phone = form["c-phone"].value.replace(/[\s-]/g, "");
    if (!/^(\+27|0)[0-9]{9}$/.test(phone)) { setError("c-phone", "Enter a valid SA number, e.g. 0614985416."); ok = false; }
    else setError("c-phone", "");

    if (form["c-subject"].value === "") { setError("c-subject", "Please select a message type."); ok = false; }
    else setError("c-subject", "");

    const len = message.value.trim().length;
    if (len < 10 || len > 500) { setError("c-message", "Message must be 10-500 characters."); ok = false; }
    else setError("c-message", "");

    return ok;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    result.hidden = true;
    if (!validate()) return;

    // Compile the form data into an email
    const subject = form["c-subject"].value + " from " + form["c-fullname"].value.trim();
    const body =
      "Name: " + form["c-fullname"].value.trim() + "\n" +
      "Email: " + form["c-email"].value.trim() + "\n" +
      "Phone: " + form["c-phone"].value.trim() + "\n\n" +
      "Message:\n" + message.value.trim();

    // Opens the visitor's email app with everything filled in
    window.location.href = "mailto:" + BUSINESS_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    result.textContent = "Thanks! Your email app should open. Press Send there to finish.";
    result.hidden = false;
    form.reset();
    count.textContent = "0 / 500";
  });
});
