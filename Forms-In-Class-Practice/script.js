let setMessage = (message, color) => {
    document.getElementById("message").style.color = color;
    document.getElementById("message").innerHTML = message;
}

let highlightField = (field) => {
    field.style.color = "black";
    field.style.backgroundColor = "#FFB6C1";
}

let resetField = (field) => {
    field.style.color = "black";
    field.style.backgroundColor = "white";
}

let isFilledOut = (text) => text.length > 0;

let isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

let isValidAge = (age) => (age >= 18 && age <= 100);

let validateForm = (form) => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    let invalidFields = [];

    resetField(name);
    resetField(email);
    resetField(age);

    // Check Name Field
    if (!isFilledOut(name.value)) {
        highlightField(name);
        invalidFields.push("name");
    }

    // Check Email Field
    if (!isValidEmail(email.value)) {
        highlightField(email);
        invalidFields.push("email");
    }

    // Check Age Field
    if (!isValidAge(age.value)) {
        highlightField(age);
        invalidFields.push("age");
    }
    console.log(invalidFields);

    // Set message based on invalid fields
    if (invalidFields.length > 0) {
        let message = "Please enter a valid ";
        for (let i = 0; i < invalidFields.length; i++) {
            if (i + 2 == invalidFields.length){
                message += invalidFields[i] + ", and ";
            }
            else {
                message += invalidFields[i] + ", ";
            }
        }
        message = message.substring(0, message.length - 2) + ".";
        setMessage(message, "#FFB6C1");
    }
    else {
        setMessage("Form submitted successfully!", "lightgreen");
        form.reset();
    }
}