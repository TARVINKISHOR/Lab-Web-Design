function validateNumericInput() {
    let age = document.forms["numericForm"]["age"].value;

    //Check if the input is empty
    if (age === " ") {
        alert("Age field cannot be empty.");
        return false;
    }

    //Check if the input is a number
    if (isNaN(age)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    //Check if the number is within a specific range
    if (age < 1 || age > 120) {
        alert("Please enter an age between 1 and 120.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully.");
    return true;
}