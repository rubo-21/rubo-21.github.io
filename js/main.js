var svg = Snap("#svg");
var current = 0;
var words = [
	"Don't touch me!",
	"Hey!",
	"Are you crazy?!",
	"Rrrrrr..."
];

var Circle = svg.circle(84, 76, 72);

Circle.attr({
	fill: "none",
	strokeWidth: 5
});

/*
Circle.hover(function (event) {
	this.attr({stroke: "#6FDA44"}, 200, mina.easeout);
});*/

$('#svg').mouseover(function(event) {
	//Circle.animate({stroke: "#f00"}, 50);
	Circle.attr({stroke: "#6FDA44"});
});

$('#svg').mouseout(function(event) {
	//Circle.animate({stroke: "none"}, 50);
	Circle.attr({stroke: "none"});
});

$('#svg').click(function(event) {
	if(current < words.length && words[current]){
		$('#messageBox').text(words[current]).fadeIn('fast').effect("bounce", "slow");
		current++;
	}
	else {
		$('.personBlock').effect("explode", "slow");
		$('.hire').effect("explode", "slow");
		$('#nothing').fadeIn('slow');
		$('body').css('background', '#0FC');
	}
});
