const getresult = () => {
    let sub1 = document.getElementById('sub-1').value;
    let sub2 = document.getElementById('sub-2').value;
    let sub3 = document.getElementById('sub-3').value;
    let sub4 = document.getElementById('sub-4').value;
    let sub5 = document.getElementById('sub-5').value;


    if (document.getElementsByTagName('input').value == "") {
        alert("Please Enter Some Value");
    }
    let total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);
    let percentage = (total * 100) / 500;

    if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "A+";
    }
    else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = "A";

    }
    else if (percentage >= 70) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = "B";

    }
    else if (percentage >= 50) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 40) {
        document.getElementById("grade").innerHTML = "C+";

    }
    else if (percentage >= 30) {
        document.getElementById("grade").innerHTML = "C";

    }
    else if (percentage >= 20) {
        document.getElementById("grade").innerHTML = "D+";

    } else {
        document.getElementById("grade").innerHTML = "You Are Failed";
    }
    document.getElementById('percentage').innerHTML = percentage + "%";
    document.getElementById('total').innerHTML = total;
}


