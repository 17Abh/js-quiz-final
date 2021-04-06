const innerDiv1 = document.querySelector('.quesCon');


let questionCount = 0;


const quizDB = [
    {
        question: `${questionCount + 1} What is full form of ASCII?`,
        a: "Authentic Standard Code for Information Interchange",
        b: "Australian Standard Code for Information Interchange",
        c: "American Standard Code for Information Interchange",
        d: "None",
        ans: "ans3",
        type: "radioBox"
    },

    {
        question: `2. What is the full form of URL?`,
        a: "Universal Resource Locator",
        b: "Unified Resource Locator",
        c: "Uniform Resource Locator",
        d: "Unified Request Locator",
        ans: "ans3",
        type: "radioBox"
    },


    {
        question: "3. What is the full form of PDF?",
        a: "Printable Document Format",
        b: "Portable Document Format",
        c: "Paperless Document Format",
        d: "Portable Digital Format",
        ans: "ans2",
        type: "radioBox"
    },

    {
        question: "4. What is full form of DB?",
        a: "DATABASE",
        b: "DISKBASE",
        c: "DATA BANDWIDTH",
        d: "DISK BANDWIDTH",
        ans: "ans1",
        type: "radioBox"
    },

    {
        question: "5. What is full form of CMOS?",
        a: "Crystal Metal Oxide Semiconductor",
        b: "Complementary Mineral Oxide Semiconductor",
        c: "Cover Metal Oxide Semiconductor",
        d: "Complementary Metal Oxide Semiconductor",
        ans: "ans4",
        type: "radioBox"
    },

    {
        question: "6. What is full form of ASIC?",
        a: "Auxillary Specific Integrated Circuit",
        b: "Auto Specific Integrated Circuit",
        c: "Application Super Integrated Circuit",
        d: "Application Specific Integrated Circuit",
        ans: "ans4",
        type: "radioBox"
    },

    {
        question: "7. What is full form of CDRW?",
        a: "Content Disk Re-writer",
        b: "Compact Disk Re-writer",
        c: "Copy Disk Re-writer",
        d: "None",
        ans: "ans2",
        type: "radioBox"
    },

    {
        question: "8. What is full form of JPEG?",
        a: "JOINT PICTURE EXPERTS GROUP",
        b: "JOINT PHOTOGRAPHIC EXPERTS GROUP",
        c: "JOINT PROCESSOR EXPERTS GROUP",
        d: "None",
        ans: "ans2",
        type: "radioBox"
    },

    {
        question: "9. What is full form of AMD?",
        a: "Advanced Micro Devices",
        b: "Advice Micro Devices",
        c: "Application Micro Devices",
        d: "None",
        ans: "ans1",
        type: "radioBox"
    },

    {
        question: "10. What is full form of JPEG?",
        a: "Joint Panel Experts Group",
        b: "Jolly Photographic Experts Group",
        c: "Joint Photographic Emergency Group",
        d: "Joint Photographic Experts Group",
        ans: "ans4",
        type: "radioBox"
    },

    {
        question: "11. What is full form of ASCII?",
        a: "Authentic Standard Code for Information Interchange",
        b: "Australian Standard Code for Information Interchange",
        c: "American Standard Code for Information Interchange",
        d: "None",
        ans:["ans1", "ans3"],
        type: "checkbox"
    },

    {
        question: "12. What is the full form of URL?",
        a: "Universal Resource Locator",
        b: "Unified Resource Locator",
        c: "Uniform Resource Locator",
        d: "Unified Request Locator",
        ans:["ans2", "ans3"],
        type: "checkbox"
    },

    {
        question: "13. What is full form of ASCII?",
        a: "American Standard Code for Information Interchange",
        type: "oneline"
    },
    
    {
        question: "14. What is full form of ASCII?",
        a: "American Standard Code for Information Interchange",
        type: "oneline"
    },

    

]

const ansList = [];


let question = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const prev = document.querySelector('#prev');

let answers = document.querySelectorAll('.answer');

//for enable submit button 
answers.forEach(answer => answer.addEventListener('change', () => {
    submit.style.background = "blue";
} ));
  




const showScore = document.querySelector('#showScore');


let score = 0;

let questionList = quizDB[questionCount];

const loadQuestion = () => {

    let questionList = quizDB[questionCount];

    

    

    
    if(questionList.type == "checkbox"){
        innerDiv1.innerHTML = `
        <h2 class = "question">Question comes here</h2>
        <ul>
            <li>
                <input type="checkbox" name="answer" id="ans1" class="answer">
                <label for="ans1" id="option1">answer option</label>
            </li>
    
            <li>
                <input type="checkbox" name="answer" id="ans2" class="answer">
                <label for="ans2" id="option2">answer option</label>
            </li>
    
            <li>
                <input type="checkbox" name="answer" id="ans3" class="answer">
                <label for="ans3" id="option3">answer option</label>
            </li>
    
            <li>
                <input type="checkbox" name="answer" id="ans4" class="answer">
                <label for="ans4" id="option4">answer option</label>
            </li>
        </ul>
       
        `

        let question = document.querySelector('.question');
        let option1 = document.querySelector('#option1');
        let option2 = document.querySelector('#option2');
        let option3 = document.querySelector('#option3');
        let option4 = document.querySelector('#option4');

        let answers = document.querySelectorAll('.answer');

        //for enable submit button 
        answers.forEach(answer => answer.addEventListener('change', () => {
            submit.style.background = "blue";
        } ));
            
            question.innerHTML =  questionList.question;

            option1.innerHTML = questionList.a;
            option2.innerHTML = questionList.b;
            option3.innerHTML = questionList.c;
            option4.innerHTML = questionList.d;
            
    
        }
    
    
        if(questionList.type == "oneline"){
            innerDiv1.innerHTML = `
            <h2 class = "question">Question comes here</h2>
    
            <input type="text" placeholder="type answer here" id="ans33"  / > 
            
            
            `

            let question = document.querySelector('.question');
            let answers = document.querySelector('#ans33');

            question.innerHTML =  questionList.question;

             
    
          
    
        }


        if(questionList.type == "radioBox"){
            innerDiv1.innerHTML = `
            <h2 class = "question">Question comes here</h2>
            <ul>
                <li>
                    <input type="radio" name="answer" id="ans1" class="answer">
                    <label for="ans1" id="option1">answer option</label>
                </li>
        
                <li>
                    <input type="radio" name="answer" id="ans2" class="answer">
                    <label for="ans2" id="option2">answer option</label>
                </li>
        
                <li>
                    <input type="radio" name="answer" id="ans3" class="answer">
                    <label for="ans3" id="option3">answer option</label>
                </li>
        
                <li>
                    <input type="radio" name="answer" id="ans4" class="answer">
                    <label for="ans4" id="option4">answer option</label>
                </li>
            </ul>
           
            `
    
            let question = document.querySelector('.question');
            let option1 = document.querySelector('#option1');
            let option2 = document.querySelector('#option2');
            let option3 = document.querySelector('#option3');
            let option4 = document.querySelector('#option4');
    
            let answers = document.querySelectorAll('.answer');
    
            //for enable submit button 
            answers.forEach(answer => answer.addEventListener('change', () => {
                submit.style.background = "blue";
            } ));
                
                question.innerHTML =  questionList.question;
    
                option1.innerHTML = questionList.a;
                option2.innerHTML = questionList.b;
                option3.innerHTML = questionList.c;
                option4.innerHTML = questionList.d;
                
        
            }
    
    

}

loadQuestion();


const getCheckAsnwer = () => {
    let questionList = quizDB[questionCount];


    if(questionList.type == "checkbox"){
    let answer = [];
    let answers = document.querySelectorAll('.answer');
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            
            answer.push(`${curAnsElem.id}`) ;
            
        }
    });

    return answer;
    };

    if(questionList.type == "radioBox"){
        let answer;
        let answers = document.querySelectorAll('.answer');
        answers.forEach((curAnsElem) =>{
            if(curAnsElem.checked){
                answer = curAnsElem.id;
                
            }
        });
    
        return answer;
        };

        if(questionList.type == "oneline"){
            let answer;
            let answers = document.querySelector('#ans33');
            answer= answers.value;
        
            return answer;
            };
};



const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click',() =>{
    let questionList = quizDB[questionCount];
    

    submit.style.background = "blue";


    if(questionList.type == "checkbox"){
        prev.classList.add('fadeIn');
        let answers = document.querySelectorAll('.answer');
       const checkedAnswer = getCheckAsnwer();
       console.log(checkedAnswer);
   
       ansList[questionCount] = checkedAnswer;
       console.log(ansList);

       if(JSON.stringify(checkedAnswer) == JSON.stringify(quizDB[questionCount].ans)){
        score++;
   };
   
       submit.style.background = "blue";

       questionCount++;
       loadQuestion();
      


    //   let markedAns = ansList[questionCount];
    //console.log(markedAns);
    
    //answers.forEach((answer) =>{
    //    if(answer.id == markedAns[0]  ){
    //        answer.checked = true;
    //        submit.style.background = "blue";
    
    
    //        return;
    //    }
    
    //    if(answer.id == markedAns[1]  ){
    //        answer.checked = true;
            
    
    
    //        return;
    //    }
    //});

      
    
    return;
    //chexbox ending
    }

    if(questionList.type == "oneline"){
        prev.classList.add('fadeIn');
        getCheckAsnwer();
        let answers = document.querySelector('#ans33');
        ansList[questionCount] = answers.value;
        console.log(ansList);


    if(ansList[questionCount] == quizDB[questionCount].a){
        score++;
    }

    

    submit.style.background = "blue";

    questionCount++;
    loadQuestion();
    
    deselectAll();
    if(ansList[questionCount] == true){
    
    answers.value = ansList[questionCount] ;
    }
        
        
        
        return;    
    //one line end
    }

    if(questionList.type == "radioBox"){
        prev.classList.add('fadeIn');
        let answers = document.querySelectorAll('.answer');
        ansList[questionCount] = answers.value;
    

        
    
        

    const checkedAnswer = getCheckAsnwer();
    console.log(checkedAnswer);

    ansList[questionCount] = checkedAnswer;
    console.log(ansList);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    submit.style.background = "blue";

    questionCount++;
    loadQuestion();
    
    deselectAll();
    answers.forEach((answer) =>{
        if(answer.id == ansList[questionCount] ){
            answer.checked = true;
            submit.style.background = "blue";


            return;
        }
    });
        
        return;    
    //radio end
    }
    



    

//    deselectAll();








    

    
    prev.classList.add('fadeIn');

    

    submit.style.background = "#74b9ff";


    
});

    





submit.addEventListener('click',() =>{
    if(questionCount == quizDB.length){
        

        showScore.innerHTML = `
            <h3> You scored ${score} out of ${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});


prev.addEventListener('click',() => {
    submit.style.background = "blue";
    questionCount--;
    
    loadQuestion();
    deselectAll();
    let questionList = quizDB[questionCount];


    if(questionList.type == "radioBox"){
    let answers = document.querySelectorAll('.answer');
    answers.forEach((answer) =>{
        if(answer.id == ansList[questionCount] ){
            answer.checked = true;
            return;
        }
    });


    if(ansList[questionCount] === quizDB[questionCount].ans){
        score--;
    }
    }



    if(questionList.type == "checkbox"){

    let answers = document.querySelectorAll('.answer');
    let markedAns = ansList[questionCount];
    //console.log(markedAns);
    answers.forEach((answer) =>{
        if(answer.id == markedAns[0]  ){
            answer.checked = true;
            submit.style.background = "blue";
    
    
            return;
        }
    
        if(answer.id == markedAns[1]  ){
            answer.checked = true;
            
    
    
            return;
        }
    });


    if(ansList[questionCount] === quizDB[questionCount].ans){
        score--;
    }
    }



    if(questionList.type == "oneline"){

        let answers = document.querySelector('#ans33');

        answers.value = ansList[questionCount];


    if(answers.value == quizDB[questionCount].a){
        score--;
    }
    }
    
});

submit.addEventListener('click',() => {
    if(questionList.type == "radioBox"){
        let answers = document.querySelectorAll('.answer');
        answers.forEach((answer) =>{
        if(answer.id == ansList[questionCount] ){
            answer.checked = true;

            return;
        }
    });
    }

    if(questionList.type == "oneline"){
        let answers = document.querySelector('#ans33');
        if(ansList[questionCount] == true){
        answers.value = ansList[questionCount];
        }
    }

    if(questionList.type == "checkbox"){
        let answers = document.querySelectorAll('.answer');
        let markedAns = ansList[questionCount];
        //console.log(markedAns);
        answers.forEach((answer) =>{
        if(answer.id == markedAns[0]  ){
            answer.checked = true;
            submit.style.background = "blue";
            
            if(answer.id == markedAns[1]  ){
                answer.checked = true;
    
                
            }
            
        }
    
       
    });
    }
});