// enquiry.js - validates the enquiry form and shows an estimated cost response

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiryForm");
  const result = document.getElementById("enquiryResult");
  const dropoff = document.getElementById("dropoff");

  // Don't allow dates in the past
  dropoff.min = new Date().toISOString().split("T")[0];

  // EXAMPLE prices (Rand) - replace with your own
  const pricing = {
    phone:   { from: 250, to: 1500, days: "1-2" },
    laptop:  { from: 350, to: 2500, days: "2-5" },
    tablet:  { from: 300, to: 1800, days: "2-3" },
    desktop: { from: 200, to: 2000, days: "1-4" }
  };

  // Show or clear an error message under a field
  function setError(id, message) {
    document.getElementById(id + "-error").textContent = message;
    document.getElementById(id).classList.toggle("invalid", message !== "");
  }

  function validate() {
    let ok = true;

    // Name: at least 2 characters
    const name = form.fullname.value.trim();
    if (name.length < 2) { setError("fullname", "Please enter your full name (min 2 characters)."); ok = false; }
    else setError("fullname", "");

    // Phone: SA number, 0XXXXXXXXX or +27XXXXXXXXX
    const phone = form.phone.value.replace(/[\s-]/g, "");
    if (!/^(\+27|0)[0-9]{9}$/.test(phone)) { setError("phone", "Enter a valid SA number, e.g. 0614985416."); ok = false; }
    else setError("phone", "");

    // Email: basic format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim())) { setError("email", "Enter a valid email address."); ok = false; }
    else setError("email", "");

    // Device: must be chosen
    if (form["device-type"].value === "") { setError("device-type", "Please select a device type."); ok = false; }
    else setError("device-type", "");

    // Date: required, not in the past, not a Sunday (shop closed)
    const dateValue = dropoff.value;
    if (dateValue === "") { setError("dropoff", "Please choose a drop-off date."); ok = false; }
    else {
      const d = new Date(dateValue + "T00:00:00");
      const today = new Date(); today.setHours(0, 0, 0, 0);
      if (d < today) { setError("dropoff", "Date cannot be in the past."); ok = false; }
      else if (d.getDay() === 0) { setError("dropoff", "We are closed on Sundays."); ok = false; }
      else setError("dropoff", "");
    }

    // Issue: 10 to 500 characters
    const issue = form.issue.value.trim();
    if (issue.length < 10 || issue.length > 500) { setError("issue", "Describe the issue in 10-500 characters."); ok = false; }
    else setError("issue", "");

    return ok;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();               // stop the page reloading
    result.hidden = true;
    if (!validate()) return;          // show errors and stop

    // Build the response from the chosen device and speed
    const p = pricing[form["device-type"].value];
    const express = form.urgency.value === "express";
    const extra = express ? 150 : 0;

    result.innerHTML = "";
    const h = document.createElement("h2");
    h.textContent = "Thanks, " + form.fullname.value.trim() + "!";
    const p1 = document.createElement("p");
    p1.textContent = "Estimated cost: R" + (p.from + extra) + " - R" + (p.to + extra) +
                     " (final price confirmed after diagnosis).";
    const p2 = document.createElement("p");
    p2.textContent = "Estimated turnaround: " + (express ? "same day - 1" : p.days) + " working day(s).";
    const p3 = document.createElement("p");
    p3.textContent = "Bring your device in on " + dropoff.value + ". We will contact you on " +
                     form.phone.value.trim() + ".";
    result.append(h, p1, p2, p3);

    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth" });
    form.reset();
  });
});
