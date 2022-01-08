var sig = document.getElementById('sig');
var totalScore = document.getElementById('totalScore');
var qaSet = document.querySelectorAll('.qa_set');
var qaAns = document.querySelectorAll('.qa_set .qa_ans input');
var count = 0;
var scoreCount = 0;

sig.addEventListener('click', function(){
    proximo()
})

qaAns.forEach(function(qaAnsOne){
    qaAnsOne.addEventListener('click', function(){
        setTimeout(function(){
            proximo();
        }, 500)

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount += 1;
            totalScore.innerHTML = scoreCount;

        }else{
            scoreCount += 0;
            totalScore.innerHTML = scoreCount;
        }
    })
});

function proximo(){
    count += 1;
    for(var i = 0; i <qaSet.length; i++){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count == 5){
        sig.style.display = 'none';
    }
}