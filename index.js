let totalStudents = 0;

function calculateGrade(percentage){

    if(percentage >= 80){
        return "A+";
    }
    else if(percentage >= 70){
        return "A";
    }
    else if(percentage >= 60){
        return "B";
    }
    else if(percentage >= 50){
        return "C";
    }
    else{
        return "Fail";
    }
}

function addStudent(){

    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if(name === "" || marks === ""){
        alert("Please fill all fields");
        return;
    }

    let percentage = marks + "%";
    let grade = calculateGrade(marks);

    let table = document.getElementById("resultTable");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${marks}</td>
        <td>${percentage}</td>
        <td>${grade}</td>
        <td>
            <button class="delete-btn"
            onclick="deleteStudent(this)">
            Delete
            </button>
        </td>
    `;

    totalStudents++;
    document.getElementById("count").innerText = totalStudents;

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function deleteStudent(btn){

    btn.parentElement.parentElement.remove();

    totalStudents--;

    document.getElementById("count").innerText = totalStudents;
}
    
 
    


