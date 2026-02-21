var cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var select = document.createElement("select");

    var opt1 = new Option("Full Day", "full");
    var opt2 = new Option("1st Half", "half1");
    var opt3 = new Option("2nd Half", "half2");

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);

    select.disabled = true;

    checkbox.addEventListener("change", function() {
        select.disabled = !checkbox.checked;
    });

    cell.appendChild(checkbox);
    cell.appendChild(select);
});


document.querySelector(".save").addEventListener("click", function() {
    var selectedData = [];

    document.querySelectorAll(".row").forEach(function(row) {
        var day = row.querySelector(".day").innerText;
        var cells = row.querySelectorAll(".cell");

        cells.forEach(function(cell, index) {
            var checkbox = cell.querySelector("input");
            var select = cell.querySelector("select");

            if (checkbox.checked) {
                selectedData.push({
                    day: day,
                    week: index + 1,
                    type: select.value
                });
            }
        });
    });

    console.log("Saved Data:", selectedData);
    alert("Data Saved Successfully!");
});


document.querySelector(".cancel").addEventListener("click", function() {

    document.querySelectorAll(".cell").forEach(function(cell) {
        var checkbox = cell.querySelector("input");
        var select = cell.querySelector("select");

        checkbox.checked = false;
        select.disabled = true;
        select.selectedIndex = 0;
    });

    alert("Form Reset Successfully!");
});