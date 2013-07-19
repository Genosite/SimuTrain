TSim.system = {
	listLink : [],
	listTrain: []
};

	var a = new TSim.Node("Gare a", 1, 2)
	var b = new TSim.Node("Gare b", 5, 7)

	var c = new TSim.Node("Gare c", 6, 14)
	var d = new TSim.Node("Gare d", 12, 10)
	var e = new TSim.Node("Gare e", 15, 12)
	var f = new TSim.Node("Gare f", 17, 21)
	var g = new TSim.Node("Gare g", 13, 20)
	var h = new TSim.Node("Gare h", 23, 21)
	var j = new TSim.Node("Gare x", 7, 1);
	var z = new TSim.Node("Gare z", 10, 1);

app = function()
{
	var root_ = this

	this.drawManager = TSim.draw("screen")

	TSim.system.listLink.push(
		new TSim.Link(a, b),
		new TSim.Link(b, a),
		new TSim.Link(b, c),
		new TSim.Link(c, b),
		new TSim.Link(c, g),
		new TSim.Link(g, f),
		new TSim.Link(f, h),
		new TSim.Link(h, e),
		new TSim.Link(e, h),
		new TSim.Link(e, d),
		new TSim.Link(d, e),
		new TSim.Link(d, b),
		new TSim.Link(j, d),
		new TSim.Link(z, e),
		new TSim.Link(a, j),
		new TSim.Link(j, z)
		)
	TSim.system.listTrain.push(new TSim.Train("lol", a), new TSim.Train("jack", j), new TSim.Train("billy", z))
	console.log(TSim);

	this.update = function()
	{
		this.drawManager.canvas.width = 500;
		this.drawManager.draw(TSim.system.listLink)
		this.drawManager.drawTrain(TSim.system.listTrain)
		setTimeout(function() {
			root_.update()
		}, 1000 / 30);
	}
	this.update();
}();