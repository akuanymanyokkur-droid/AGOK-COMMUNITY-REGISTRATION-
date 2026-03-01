const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name === "" || phone === "") {
        alert("Please fill in all required fields.");
        return;
    }

    successMessage.style.display = "block";

    form.reset();
});
