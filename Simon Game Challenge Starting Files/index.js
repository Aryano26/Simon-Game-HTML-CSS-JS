var color = ["green","red", "yellow", "blue"];
var arr=[];
var userClick=[];
var start = false;
var level = 0;


$(document).on("keypress", function(){
    if(!start){
    $("#level-title").text("level"+" "+ level);
    sequence();
    start = true;
}
});

$(".btn").on("click", function(){
    var clicked = $(this).attr("id");
    $("#"+clicked).fadeOut(100).fadeIn(100);
    userClick.push(clicked);
    var audio = new Audio("sounds/"+clicked+".mp3");
    audio.play();
    check(userClick.length -1)
});



function check(index){
    if(arr[index]===userClick[index]){
        if(arr.length===userClick.length){
            setTimeout(function(){
                sequence()
            },1000);
        } 
    }
    else{
        $("body").addClass("game-over");
        $("h1").text("Game-Over");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
            $("body").removeClass("game-over");
            $("h1").text("Press A Key to Start")
        },2000);
        startover();
    }
}

    function sequence(){
    userClick = [];
    level++;
    $("#level-title").text("level"+" "+ level);
    var randomNumber =Math.floor(Math.random()*4);
    var randomColor = color[randomNumber];
    arr.push(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomColor+".mp3");
    audio.play();
    }

function startover(){
    arr=[];
    level = 0;
    start = false;
}
