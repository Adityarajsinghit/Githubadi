function generateEmail() {
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var output = document.getElementById("output");

    if (name === "") {
        alert("Please enter candidate name");
        return;
    }

    var message = "";

    if (type === "interview") {
        message = "Dear " + name + ",\n\nWe are pleased to invite you for an interview. Please confirm your availability.\n\nBest regards,\nHR Team";
    } else if (type === "rejection") {
        message = "Dear " + name + ",\n\nThank you for your application. We regret to inform you that you were not selected for this position.\n\nBest wishes,\nHR Team";
    } else {
        message = "Dear " + name + ",\n\nCongratulations! We are happy to offer you the position. Please review the offer details.\n\nRegards,\nHR Team";
    }

    output.value = message;
}