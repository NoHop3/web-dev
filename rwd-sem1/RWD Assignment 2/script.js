var posX = $(window).height()-$("#box").height();
var posY = $(window).width()-$("#box").width();
function bottomMovement() {
    var newX = $(window).width();
    var newY = $(window).height();
    $("#box").animate({top: newX}).animate({left: newY}).delay(1000);
}
function topMovement() {

    $("#box").animate({top: posX}).animate({left: posY});
}

function constantMovement() {
    bottomMovement().delay(1000).topMovement().delay(1000);
}