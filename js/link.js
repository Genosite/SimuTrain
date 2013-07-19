TSim.Link = function(from, to) {
	var root = this

	this.to = to
	this.from = from
	this.dist_ = 0
	this.stop = false
	this.train = []

	from.link.push(this)

	this.dist = function() {
		return (this.dist_ || Math.sqrt(Math.pow(this.to.x - this.from.x, 2) + Math.pow(this.to.y - this.from.y, 2)))
	}
	console.log("New Link between '"+ to.name +"' and '"+ from.name +"'")
	console.log("===>Distance :"+ this.dist())
};