
//Variables
var gemNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var wins = 0; 
var losses = 0; 
var gemOne = [];
var gemTwo = [];
var gemThree = [];
var gemFour = [];
var playerScore =0;
var computerScore = 0;

// Initially Sets Wins/Loses FIXXXXXXX
   // document.getElementById("win-counter").innerHTML = wins;
    //document.getElementById("loss-counter").innerHTML = losses;

//Object Functions
    // Chooses a number between 1 and 12
        function randomizeGemNumber(array) {
        var array = Math.floor(Math.random()*12)+1
        console.log(array);  
        }
    // Adds one to wins or losses
        function incrementByOne(addsOneToScore)
        {
            addsOnetoScore++;
        }
    //on click event for Gems
        function clickOnGem() {
            document.onkeyup = function(userSelection) {
                var userSelection = event.key;
                console.log(userSelection);


            }
        }
    //function to start Game

        function startCrystalCollecter() {
            randomizeGemNumber(gemOne);
            randomizeGemNumber(gemTwo);
            randomizeGemNumber(gemThree);
            randomizeGemNumber(gemFour);
        }
    //Event listeners for clicking on gem 
        function clickingOnGem(gem){}
        /*
            document.getElementById("gem").addEventListener("click","addToScore");
                function addToScore(){
                    playerScore = playerScore +gem;
                    console.log(playerScore);
                } 
        */
        clickonGem(a); 




/* FIx start game
clickOnGem(
    startCrystalCollecter()

)

*/
