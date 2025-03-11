const Questions = [
    {
        q: "Fill in the blank: Vendors Row is a _____.",
        a: [{text: "Dune", isCorrect: false},
            {text: "Beach", isCorrect: false},
            {text: "Mall", isCorrect: true},
            {text: "Type of vehicle", isCorrect: false},
           ]
    },
    {
        q: "Choose An Answer Below: What other activites do they have at the swingset?",
        a: [{text: "basketball", isCorrect: false},
            {text: "volleyball ", isCorrect: true},
            {text: "a swim meet", isCorrect: false},
            {text: " a barbeque", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: You can get emergency supplies from _____.",
        a: [{text: "Carlas Bench", isCorrect: true},
            {text: "Satalitte", isCorrect: false},
            {text: "Oldsmobile", isCorrect: false},
            {text: "Disco Ball", isCorrect: false},
           ]
    },
    {
        q: "Choose An Answer Below: Which Holiday is the Most Popular Time to Visit Glamis?",
        a: [{text: "Halloween", isCorrect: false},
            {text: "Valentines", isCorrect: false},
            {text: "Presidents Weekend", isCorrect: false},
            {text: "New Years", isCorrect: true},
           ]
    },
    {
    q: "Choose An Answer Below: What Year did Polaris Buy Glamis?",
        a: [{text: "1997", isCorrect: false},
            {text: "2005", isCorrect: false},
            {text: "2022", isCorrect: false},
            {text: "2018", isCorrect: true},
           ]
    },
    {
        q: "Choose An Answer Below: What hill do Poeple Like racing on?",
        a: [{text: "Swingset", isCorrect: false},
            {text: "Oldmobile", isCorrect: true},
            {text: "Vendors Row", isCorrect: false},
            {text: "Sunset Hill", isCorrect: false},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
