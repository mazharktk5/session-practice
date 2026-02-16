const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    // Reset errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!email.value.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    if (message.value.trim().length < 10) {
        document.getElementById("messageError").textContent =
            "Message must be at least 10 characters";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");

        form.reset();
    }
});
