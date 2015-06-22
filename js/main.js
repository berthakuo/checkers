function reset () {
	$("[data-row='1']").append("<div class='piece piece--red'></div>");
	$("[data-row='2']").append("<div class='piece piece--red'></div>");
	$("[data-row='7']").append("<div class='piece piece--black'></div>");
	$("[data-row='8']").append("<div class='piece piece--black'></div>");
}

$(".piece").click(selectPiece);
$(".square").click(selectSquare);

function Piece(piece, x, y) {
	this.piece = piece;
	this.x = x;
	this.y = y;
}

function selectPiece(event){
	var piece = $(event.target);
	var square = $(piece.parent(".square"));
	var x = parseInt(square.attr("data-row"));
	var y = parseInt(square.attr("data-column"));

	return new Piece(piece, x, y);
}





