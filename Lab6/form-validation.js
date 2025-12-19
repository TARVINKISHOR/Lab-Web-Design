function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    if (fname === "") {
        alert("First name must be filled out");
        return false;
    }
}