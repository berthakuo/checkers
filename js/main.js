//test
// $("#square15").append("<div class='piece red'></div>");

reset();

// ************************************************************************
// VARIABLES
// ************************************************************************
var selectedPiece = {};
var selectedSquare = {};
var opponentPiece;

// ************************************************************************
// EVENT HANDLERS
// ************************************************************************
$(".piece").click(selectPiece);
$(".square").click(selectSquare);
$(document).keypress(function(e) {
    if(e.which == 13) {
        checkMove();
    }
});

// ************************************************************************
// FUNCTIONS
// ************************************************************************

function reset() {
	//remove all leftover pieces from the board
	$(".piece").remove();

	//setup red pieces
	$("[data-row='1']:nth-child(even)").append("<div class='piece red'></div>");
	$("[data-row='2']:nth-child(odd)").append("<div class='piece red'></div>");
	$("[data-row='3']:nth-child(even)").append("<div class='piece red'></div>");

	//setup black pieces
	$("[data-row='6']:nth-child(odd)").append("<div class='piece black'></div>");
	$("[data-row='7']:nth-child(even)").append("<div class='piece black'></div>");
	$("[data-row='8']:nth-child(odd)").append("<div class='piece black'></div>");
}

function Selection(holder, x, y, color) {
	this.holder = holder;
	this.x = x;
	this.y = y;
	this.color = color;
}

function selectPiece(event){
	var piece = $(event.target);
	var square = $(piece.parent(".square"));
	var y = parseInt(square.attr("data-row"));
	var x = parseInt(square.attr("data-column"));
	var color = piece.hasClass("red")? 'red': 'black';
	selectedPiece = new Selection(piece, x, y, color);
}

function selectSquare(event){
	var square = $(event.target);
	var y = parseInt(square.attr("data-row"));
	var x = parseInt(square.attr("data-column"));
	selectedSquare = new Selection (square, x, y)
}

function moveChecker(){
	//add checker to selected square
	//QUESTION - not sure why I dont need a remove function too
	selectedSquare.holder.append(selectedPiece.holder);
}

function removeOpponent(op){
	if ($(op).children().length != 0) {
		$(op).children().remove();
		moveChecker();
	}
	else {
		console.log("wrong move buddy!");
	}
}

function convertToID(x,y) {
	var number = (y-1)*8 + x;
	return "#square" + number;
}

function checkMove(){
	if (selectedPiece.color == 'red')
		if (selectedPiece.x + 1 == selectedSquare.x && selectedPiece.y + 1 == selectedSquare.y) {
			moveChecker();
		}
		else if (selectedPiece.x - 1 == selectedSquare.x && selectedPiece.y + 1 == selectedSquare.y) {
			moveChecker();
		}
		else if (selectedPiece.x + 2 == selectedSquare.x && selectedPiece.y + 2 == selectedSquare.y) {
			opponentX = selectedPiece.x + 1;
			opponentY = selectedPiece.y + 1;
			removeOpponent(convertToID(opponentX,opponentY));
		}
		else if (selectedPiece.x - 2 == selectedSquare.x && selectedPiece.y + 2 == selectedSquare.y) {
			opponentX = selectedPiece.x - 1;
			opponentY = selectedPiece.y + 1;
			removeOpponent(convertToID(opponentX,opponentY));
		}
		else {
			console.log("wrong move buddy!");
		}
	else {
		if (selectedPiece.x + 1 == selectedSquare.x && selectedPiece.y - 1 == selectedSquare.y) {
			moveChecker();
		}
		else if (selectedPiece.x - 1 == selectedSquare.x && selectedPiece.y - 1 == selectedSquare.y) {
			moveChecker();
		}
		else if (selectedPiece.x + 2 == selectedSquare.x && selectedPiece.y - 2 == selectedSquare.y) {
			opponentX = selectedPiece.x + 1;
			opponentY = selectedPiece.y - 1;
			removeOpponent(convertToID(opponentX,opponentY));
		}
		else if (selectedPiece.x - 2 == selectedSquare.x && selectedPiece.y - 2 == selectedSquare.y) {
			opponentX = selectedPiece.x - 1;
			opponentY = selectedPiece.y - 1;
			removeOpponent(convertToID(opponentX,opponentY));
		}
		else {
			console.log("wrong move buddy!")
		}
	}
}




