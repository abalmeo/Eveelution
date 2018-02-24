
//Variables
var wins = 0; 
var losses = 0; 
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;
var gemFive =0;
var playerScore =0;
var computerScore = 0;

// Initially Sets Wins/Loses FIXXXXXXX
   // document.getElementById("win-counter").innerHTML = wins;
    //document.getElementById("loss-counter").innerHTML = losses;

//Object Functions
    // Setting up a random nunmber between 1 and 12 and assigning to gem 
    function reset(){
        var computerRandomizer = Math.floor(Math.random()*56)+35
        var one = Math.floor(Math.random()*12)+1
        var two = Math.floor(Math.random()*12)+1
        var three = Math.floor(Math.random()*12)+1
        var four = Math.floor(Math.random()*12)+1
        var five = Math.floor(Math.random()*12)+1

        computerScore = computerRandomizer 
        gemOne = one;
        gemTwo = two; 
        gemThree = three; 
        gemFour = four; 
        gemFive = five; 
        playerScore = 0;

        console.log(computerScore);

/*      console.log(gemOne);
        console.log(gemTwo);
        console.log(gemThree);
        console.log(gemFour);
*/
    
    };
    
    reset(); 
     
    //win loss tracker--------------------------------------
    function winLossTracker(){
        if(playerScore > computerScore){
            losses++;
                console.log("You lose")
                console.log("losses " + losses); 
                reset(); 

        }
        else if(playerScore === computerScore){
            wins++;
                console.log("You Win")
                console.log("wins " +wins)
                reset(); 
        }
        else{
            console.log("Keep Playing"); 
        }
    };


    //Event listeners for clicking on gem 

    var element = document.getElementById("gemone");
    element.onclick = (function() {
        playerScore = gemOne + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker();
        
    });

    var element = document.getElementById("gemtwo");
    element.onclick = (function() {
        playerScore = gemTwo + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker();
    });

    var element = document.getElementById("gemthree");
    element.onclick = (function() {
        playerScore = gemThree + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker();
    });

    var element = document.getElementById("gemfour");
    element.onclick = (function() {
        playerScore = gemFour + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker();
    });

    var element = document.getElementById("gemfive");
    element.onclick = (function() {
        playerScore = gemFive + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker();
    });


