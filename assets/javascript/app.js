$(document).ready(function () {
    start_timer();
    function start_timer() {
        var seconds_left = 120;
        document.getElementById('timer').innerHTML = seconds_left;
        var interval = setInterval(function () {
            document.getElementById('timer').innerHTML = --seconds_left;
            if (seconds_left == 0) {
                onSubmit();
                clearInterval(interval);
            }
        }, 1000);
    }
})

function onSubmit() {
    var score = 0;
    var numOfQuestions = 5;
    var answers = ["b", "c", "a", "c", "b"];

    q1 = document.forms["quiz"]["q1"].value;
    q2 = document.forms["quiz"]["q2"].value;
    q3 = document.forms["quiz"]["q3"].value;
    q4 = document.forms["quiz"]["q4"].value;
    q5 = document.forms["quiz"]["q5"].value;


    for (var i = 1; i <= numOfQuestions; i++) {
        if (eval("q" + i) == "") {
            alert("you got question " + i + " wrong");
        }
    }
    for (var i = 1; i <= numOfQuestions; i++) {
        if (eval("q" + i) == answers[i - 1]) {
            score++;
        }
    }

    $(".results").html("<h2>You Scored " + score + " points out of " + numOfQuestions + "</h2>");
    $("#timer").hide();

    return false;
}

