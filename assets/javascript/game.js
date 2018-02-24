
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
    };
    
    reset(); 
     
    //win loss tracker--------------------------------------
    function winLossTracker(pokemon){
        if(playerScore > computerScore){
            losses++;
            console.log("You lose")
            console.log("losses " + losses); 
            addToHTML();
            reset(); 
        }
        else if(playerScore === computerScore){
            wins++;
            console.log("You Win")
            console.log("wins " +wins)
            $('.pokemon').addClass('none');
            $('#'+pokemon).removeClass('none');
            addToHTML();
            reset(); 
        }
        else{
            console.log("Keep Playing"); 
        }
        addToHTML();
        
    };


    //Event listeners for clicking on gem 

    var element = document.getElementById("gemone");
    element.onclick = (function() {
        var pokemon = 'jolteon';
        playerScore = gemOne + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker(pokemon);
        
    });

    var element = document.getElementById("gemtwo");
    element.onclick = (function() {
        var pokemon = 'flareon';
        playerScore = gemTwo + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker(pokemon);
    });

    var element = document.getElementById("gemthree");
    element.onclick = (function() {
        var pokemon = 'vaporeon';
        playerScore = gemThree + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker(pokemon);
    });

    var element = document.getElementById("gemfour");
    element.onclick = (function() {
        var pokemon = 'umbreon';
        playerScore = gemFour + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker(pokemon);
    });

    var element = document.getElementById("gemfive");
    element.onclick = (function() {
        var pokemon = 'espeon';
        playerScore = gemFive + playerScore;
        console.log("Current Score: " + playerScore);
        winLossTracker(pokemon);
    });

    function addToHTML(){
        console.log('losses add to html:', losses)
    document.getElementById("wins").innerHTML = "Wins "+wins;
    document.getElementById("losses").innerHTML = "Losses "+losses;
    document.getElementById("playerscore").innerHTML = "Score "+playerScore;
    document.getElementById("computerscore").innerHTML = "Target Score "+computerScore;
    }

