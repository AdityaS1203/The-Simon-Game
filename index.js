var btnColorPresent=["red", "blue", "green", "yellow"];
var btnToBePressed=[];
var btnPressed=[];
var count=0;
var flag=0;
$(".btn1").click(function(){
  flag++;
});
$(".btn1").click(generator);

function generator(){
  if(flag!=1){
    flag=1;
    location.reload();
  }
  if(flag==1){
      count++;
      document.querySelector("h1").innerHTML="LEVEL "+ (count);
      var randomNum=Math.floor((Math.random()*4));
      var colorGenerated=btnColorPresent[randomNum];
      btnToBePressed.push(colorGenerated);
      animateButton(colorGenerated);
      playSound(colorGenerated);
    }
}

$(".btn").click(onClick);
function onClick(){
  var clicked=this.innerHTML;
  btnPressed.push(clicked);
  animateButton(clicked);
  playSound(clicked);
  check();
}

function check(){
    if(btnToBePressed[btnPressed.length-1]!=btnPressed[btnPressed.length-1]){
      animateButton("body");
      var audio=new Audio("sounds/wrong.mp3");
      audio.play();
      btnToBePressed=[];
      btnPressed=[];
      document.querySelector(".body").innerHTML="Your score is "+(count)+". Refresh the page to play again.";
      document.querySelector(".body").classList.add("end");
    }
    if(btnPressed.length==count){
      setTimeout(delay,1000);
      function delay(){
        generator();
      }
      btnPressed=[];
    }
}

function animateButton(keyToAnimate){
    document.querySelector("."+keyToAnimate).classList.add("pressed");
    setTimeout(delay,100);
    function delay(){
      document.querySelector("."+keyToAnimate).classList.remove("pressed");
    }
}
function playSound(textOfButton){
  switch(textOfButton){
    case "green":
    var audio=new Audio("sounds/green.mp3");
    audio.play();
    break;
    case "red":
    var audio=new Audio("sounds/red.mp3");
    audio.play();
    break;
    case "yellow":
    var audio=new Audio("sounds/yellow.mp3");
    audio.play();
    break;
    case "blue":
    var audio=new Audio("sounds/blue.mp3");
    audio.play();
    break;
    default:
  }
}
