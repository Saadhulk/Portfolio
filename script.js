// Simple contact form block to prevent default submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
