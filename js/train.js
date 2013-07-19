TSim.Train = function(name, station) 
{
	var root_ = this
	var tmp = []

	this.name = name
	this.ret = false
	this.currentLink = 0
	this.percent = 0
	this.state = 1

	/*
	** 0 - Arret
	** 1 - Lent (1 px/s)
	** 2 - Rapide (2 px/s)
	*/

	this.update = function() {
		if (root_.state == 0)
			return;
		if (root_.currentLink.to.reserve == root_.name || !root_.currentLink.to.reserve)
			root_.percent += 0.01 * root_.state;
		if (root_.percent >= 1)
		{
			root_.currentLink.to.reserve = false
			root_.reachCheckPoint(root_.currentLink.to)
		}else if(root_.percent >= 0.80)
		{
			root_.currentLink.to.reserve = root_.name;
		}
	}

	this.setStartStation = function(station) {
		console.log("start", station);
		root_.currentLink = station.link[0];
		root_.state = 2;
		root_.currentLink.train[root_.name] = root_;
	}

	this.reachCheckPoint = function(checkPoint) {
		console.log(checkPoint);
		if (checkPoint.link.length < 1)
		{
			root_.state = 0;
			root_.percent = 1;
			return;
		}
		delete root_.currentLink.train[this.name]
		root_.currentLink = checkPoint.link[Math.floor((Math.random()*checkPoint.link.length - 1)+1)];
		root_.currentLink.train[this.name] = this;
		root_.state = 1;
		root_.percent = 0;
	}

	this.setStartStation(station)
	return (this)
}