function generateTable(){
    // Get the number from the input field
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    // Validate input
    if (isNaN(rows) || rows<1 || isNaN(columns) || columns < 1) {
        alert("Please enter valid positive integers for rows and columns.");
        return;
    }

    // Create a table element
    let tableHTML = "<table>";
    for (let i = 1; i <= rows; i++) {
        tableHTML += "<tr>";
        for (let j = 1; j <= columns; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    
    // Display the table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}