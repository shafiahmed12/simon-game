var gamePattern = [];
var buttonColours = ["red", "green", "blue", "yellow"];
var userClickedPattern = [];
var level=0;
var start= true;

$(document).keypress(function(){
  if(start==true){
    $("h1").text("level "+level);
    nextSequence();
    start=false;
  }

});



$(".btn").click(function () {
  var userChoosenColour = $(this).attr("id");
  userClickedPattern.push(userChoosenColour);
  playSound(userChoosenColour);
  animate(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});



function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
      $("h1").text("Game Over, Press any key to restart");
    setTimeout(function(){
      $("body").removeClass("game-over");

    },200);

  }
  startOver();
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("level "+level);
  var randomNumber= Math.floor(Math.random() * 4);
  var randomChoosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColours);
  $("#" + randomChoosenColours).fadeOut(200).fadeIn(200);
  playSound(randomChoosenColours);
}



function animate(animation) {
  $("#"+anmation).addClass("pressed");
  setTimeout(function() {
    $("#"+anmation).removeClass("pressed");

  },100);
}


// playSound function
function playSound(event) {
  var audio = new Audio("sounds/" + event + ".mp3");
  audio.play();
}



function startOver(){
  level =0;
  gamePattern = [];
  started= true;
}
