function showOptions() {
    /* Get the select element */
    const select = document.getElementById("myDropdown");

    /* Toggle the visibility of the options */
    if (select.style.display === "none") {
        select.style.display = "block";
    } else {
        select.style.display = "none";
    }
}