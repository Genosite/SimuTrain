TSim.Node = function(name, x, y) {
	var root_ = this;

	this.x = x;
	this.y = y;
	this.name = name;
	this.points = 0;
	this.link = [];
	this.reserve = null;

	console.log("Node : "+ this.name +" created at {"+ x +", "+ y +"}");

	this.changeSwitch = function(points)
	{
		if (points < root_.link.length)
		root_.points = points;
	}
}