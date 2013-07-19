TSim.draw = function(id)
{
	var root_ = this;

	this.zoom = 20;
	this.canvas = document.getElementById(id);
	this.canvas.width = 500;
	this.canvas.height = 500;
	this.context = this.canvas.getContext("2d");

	addEventListener("mousewheel", function(e) {
		if (e.wheelDelta < 0)
			root_.zoom--;
		else if (e.wheelDelta > 0)
			root_.zoom++;
	});

	this.draw = function(LinkSystem) {
		var size;

		size = LinkSystem.length;
		for (i = 0; i < size; i++) {
			/*
			**ATTENTION LES NODES PEUVENT SE DESSINER DEUX FOIS
			*/
			root_.context.fillStyle = "rgb(0,0,0)"
			root_.context.fillRect(LinkSystem[i].to.x*root_.zoom, LinkSystem[i].to.y*root_.zoom, 1*root_.zoom, 1*root_.zoom);
			root_.context.fillText(LinkSystem[i].to.name, LinkSystem[i].to.x*root_.zoom, LinkSystem[i].to.y*root_.zoom)
			root_.context.beginPath()
			root_.context.moveTo(LinkSystem[i].to.x*root_.zoom, LinkSystem[i].to.y*root_.zoom)
			root_.context.lineTo(LinkSystem[i].from.x*root_.zoom, LinkSystem[i].from.y*root_.zoom)
			root_.context.stroke();
			root_.context.fillRect(LinkSystem[i].from.x*root_.zoom, LinkSystem[i].from.y*root_.zoom, 1*root_.zoom, 1*root_.zoom);
		}
	};

	this.drawTrain = function(TrainSystem) {
		var size;

		size = TrainSystem.length;
		for (i = 0; i < size; i++) {
			/*
			**ATTENTION LES NODES PEUVENT SE DESSINER DEUX FOIS
			*/
			var dist = TrainSystem[i].currentLink.dist();
			var cos = (-TrainSystem[i].currentLink.from.x + TrainSystem[i].currentLink.to.x) / dist;
			var sin = (-TrainSystem[i].currentLink.from.y + TrainSystem[i].currentLink.to.y) / dist;
			var x = TrainSystem[i].currentLink.from.x * root_.zoom + (cos * (TrainSystem[i].percent * dist * root_.zoom))
			var y = TrainSystem[i].currentLink.from.y * root_.zoom + (sin * (TrainSystem[i].percent * dist * root_.zoom))
			root_.context.fillStyle = "rgb(255,0,0)"
			root_.context.fillRect(x, y, 0.5*root_.zoom, 0.5*root_.zoom);
			TrainSystem[i].update();
		}
	}
	return (this);
}