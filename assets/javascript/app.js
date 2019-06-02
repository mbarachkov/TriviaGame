




function onSubmit(){
    var score = 0;
    var numOfQuestions = 5;
    var answers = ["b", "c", "a", "c", "b"];   

    q1 = document.forms["quiz"]["q1"].value;
    q2 = document.forms["quiz"]["q2"].value;
    q3 = document.forms["quiz"]["q3"].value;
    q4 = document.forms["quiz"]["q4"].value;
    q5 = document.forms["quiz"]["q5"].value;
    
    
    for(var i = 1; i <= numOfQuestions; i++){
        if(eval("q" + i) == ""){
            alert("you got question one wrong." + i);
        }
    }
    for(var i = 1; i <= numOfQuestions; i++){
        if(eval("q" + i) == answers[i - 1]){
            score++;
        }
    }
    
    $(".results").html("<h2>You Scored " + score + " points out of " + numOfQuestions + "</h2>");
    
    return false;
}