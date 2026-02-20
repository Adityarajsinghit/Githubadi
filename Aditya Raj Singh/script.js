document.getElementById("name").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z ]/g, '');
});

function submitForm() {

    var name = document.getElementById("name").value;
    var empid = document.getElementById("empid").value;
    var date = document.getElementById("date").value;
    var reason = document.getElementById("reason").value;

    if (name == "" || empid == "" || date == "" || reason == "") {
        document.getElementById("message").innerHTML = "Please fill all fields";
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").innerHTML = "Form submitted successfully";
        document.getElementById("message").style.color = "green";
    }
}