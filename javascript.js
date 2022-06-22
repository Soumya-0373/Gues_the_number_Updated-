var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
    

var answer = Math.floor(Math.random()*100)+1; // This will guess a number between 1 to 100
var no_of_guesses = 0;//Count the Number of Guesses.
var guessed_numbers = [];//Stores the Numbers those have chosen.

//For Clearing the Space of the Input.
let BtnClear = document.querySelector('#my_btn');
let input = document.querySelectorAll('input');
     
        BtnClear.addEventListener('click',()=>{
        input.forEach(input=>input.value='');
    
    });
    
    //For the Reset Button
    document.querySelector('#reset').addEventListener('click',function(){
        document.querySelector('.Winning').style.display = "none";
        document.querySelector('.container').style.filter = 'none';
        document.getElementById("lowhigh").textContent = "";
        no_of_guesses = 0;
        answer = Math.floor(Math.random()*100)+1;
        guessed_numbers = [];
        msg2.textContent = "";
        msg3.textContent = "";
        document.querySelector('body').style.backgroundColor = '#9af5f5';
        document.getElementById("message").textContent = "";
        document.getElementById("message1").textContent = "";
    });
    
    document.addEventListener('keydown',function(e){
        if(e.key==='Enter'){
            play();
        }
    });

// Main Logic Of the Program. 
  
function play(){
    var user_guesses = document.getElementById("guess").value;

    BtnClear.addEventListener('click',()=>{
        input.forEach(input=>input.value='');
    });

    if(user_guesses<1||user_guesses>100){
        alert("Please Enter a Valid Number!!");
        
    }
    else{
        guessed_numbers.push(user_guesses);
        no_of_guesses++;

        if(no_of_guesses>=10){
            document.querySelector('.Winning').style.display = 'block';
            document.querySelector('.container').style.filter = 'blur(3px)';
            document.getElementById("message1").textContent = " The Number was "+answer;
            document.getElementById("winLoose").textContent = "Alas 😥😥 You Loose the game  ";
            msg3.textContent = "You have Reached the maximum Number of Guesses!!!";
        }
        else{
            if(user_guesses<answer){
                document.getElementById("lowhigh").textContent = "Your Guess is Too low";
                msg2.textContent = "Your Guesses are "+guessed_numbers;
            }
            else if(user_guesses>answer){
                document.getElementById("lowhigh").textContent = "Your Guess is Too high";
                msg2.textContent = "Your Guesses are "+guessed_numbers;
            }
            else if(user_guesses==answer){
                document.getElementById("my_btn").disbled = true;
                document.querySelector('body').style.backgroundColor = '#49f588';
                document.querySelector('.Winning').style.display = 'block';
                document.getElementById("message1").textContent = " The Number was "+answer;
                document.querySelector('.container').style.filter = 'blur(3px)';
                msg3.textContent = "You have Guesssed it in "+no_of_guesses+" attempts";
            }
     }

    }
}