//MAKE THE MAGIC HAPPEN


// Stefan Georgiev //
$("#butterfly").animate({top: "+=2"}, function(){constantMovemenet("#butterfly")});

var newX;
var newY;
var waterdropPos = $(".waterdrop").offset();


$(window).ready(function () {
    $(".waterdrop").hide();
});

function constantMovemenet(moveId) {

    var speed;
    var posX = $(window).height()-$("#butterfly").height();
    var posY = $(window).width()-$("#butterfly").width();
    newX = Math.floor(Math.random() * posX);
    newY = Math.floor(Math.random() * posY);

    if(newX >= 50 || newY<=50) speed = 2500;
    else speed = 3500;
    $(moveId).animate({top: newX}, speed).animate({left: newY}, speed, "linear", function () {
        constantMovemenet(moveId);
    });
};

$("#butterfly").on("click", function () {

    var posX = $(window).height()-$("#butterfly").height();
    var posY = $(window).width()-$("#butterfly").width();
    newX = Math.floor(Math.random() * posX);
    newY = Math.floor(Math.random() * posY);
    
    $(this).stop(true);
    $(this).animate({top: newX, left: newY}, "fast");
    $(this).animate({top: "+=0"}, function(){constantMovemenet(this)});

});

$(window).on("mousemove", function (event) {
    var coordinateX = event.pageX;
    var coordinateY = event.pageY;
    $("#net").css({
        "left": coordinateX,
        "top": coordinateY
    });
});



function moveAppleToBasket(appleId) {
    // + 50 because I wanted them apples in the middle of this basket //
    var basketX = $("#basketfront").offset().left+50;
    var basketY = $("#basketfront").offset().top;
    $(appleId).animate({top: basketY, left: basketX}, "slow", "linear");
};

$(".apple").on("click", function(){
    moveAppleToBasket(this);
});

function dropWater() {

    $(".waterdrop").show();
    $("#waterdrop1").animate({top: "+=225"}, 1500, "linear", function () {
        $("#waterdrop1").hide();
        $("#waterdrop1").animate({top: "-=225"}, 0, "fast");
    });
    $("#waterdrop2").animate({top: "+=225"}, 1250, "linear", function () {
        $("#waterdrop2").hide();
        $("#waterdrop2").animate({top: "-=225"}, 0, "fast");
    });
    $("#waterdrop3").animate({top: "+=225"}, 1000, "linear", function () {
        $("#waterdrop3").hide();
        $("#waterdrop3").animate({top: "-=225"}, 0, "fast");
    });
};

$("#wateringcan").on("click", function () {
    $(this).css({
        "transform": "rotate(-15deg)"
    });
    dropWater();
    $(this).mouseleave(function () {
        $(this).css({
        "transform": "rotate(0deg)"
    })
    })
});

