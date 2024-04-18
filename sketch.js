let canvas
let canvas_width = 400
let canvas_height = 720
let fish_num

let system

function setup() {
	canvas = createCanvas(canvas_width, canvas_height)
	canvas.parent("canvas_holder");
	background_img = loadImage("../assets/background.jpg")

	img_001 = loadImage("../assets/001.png")
	img_002 = loadImage("../assets/002.png")
	img_003 = loadImage("../assets/003.png")
	img_004 = loadImage("../assets/004.png")
	img_005 = loadImage("../assets/005.png")
	img_006 = loadImage("../assets/006.png")
	img_007 = loadImage("../assets/007.png")
	img_008 = loadImage("../assets/008.png")
	img_009 = loadImage("../assets/009.png")
	img_010 = loadImage("../assets/010.png")
	img_011 = loadImage("../assets/011.png")
	img_012 = loadImage("../assets/012.png")
	img_013 = loadImage("../assets/013.png")
	img_014 = loadImage("../assets/014.png")
	img_015 = loadImage("../assets/015.png")

	system = new System()
	fish_num = system.fishes.length
}

function draw() {
	background(background_img)
	system.run()
}

// Fish class
let Fish = function (num, y, speed, size, scalar, angle_speed) {
	this.num = num
	this.img = img_001
	this.x = canvas_width
	this.y = y
	this.speed = speed
	this.size = size
	this.scalar = scalar
	this.angle = 0
	this.angle_speed = angle_speed
}

Fish.prototype.run = function () {
	this.update()
	this.display()
}

Fish.prototype.update = function () {
	this.x = this.x - this.speed
	this.angle = this.angle - this.angle_speed
}

Fish.prototype.display = function () {
	if (this.num == 1) {
		this.img = img_001
	} else if (this.num == 2) {
		this.img = img_002
	} else if (this.num == 3) {
		this.img = img_003
	} else if (this.num == 4) {
		this.img = img_004
	} else if (this.num == 5) {
		this.img = img_005
	} else if (this.num == 6) {
		this.img = img_006
	} else if (this.num == 7) {
		this.img = img_007
	} else if (this.num == 8) {
		this.img = img_008
	} else if (this.num == 9) {
		this.img = img_009
	} else if (this.num == 10) {
		this.img = img_010
	} else if (this.num == 11) {
		this.img = img_011
	} else if (this.num == 12) {
		this.img = img_012
	} else if (this.num == 13) {
		this.img = img_013
	} else if (this.num == 14) {
		this.img = img_014
	} else if (this.num == 15) {
		this.img = img_015
	}
	image(
		this.img,
		this.x,
		this.y + this.scalar * sin(radians(this.angle)),
		this.img.width / this.size,
		this.img.height / this.size
	)
}

Fish.prototype.isOutside = function () {
	return this.x < -150 || this.x > canvas_width + 50
}

let System = function () {
	try {
		this.fishes = JSON.parse(localStorage.getItem('Fishes'), (key, value) => {
			if (key === '') {
				return value.map(fishData => new Fish(
					fishData.num,
					fishData.y,
					fishData.speed,
					fishData.size,
					fishData.scalar,
					fishData.angle_speed
				));
			}
			return value;
		});
	} catch (error) {
		this.fishes = []
	}
	if (this.fishes.length == 0) {
		this.fishes = []
	}
}

System.prototype.addFish = function (num) {
	let new_one = Math.floor(Math.random() * 15) + 1;
	let get = 1;

	if (num == 1) {
		this.fishes.push(
			new Fish(
				1,
				random(100, canvas_height - 100),
				random(1, 5),
				random(8, 14),
				random(20, 40),
				random(1, 3)
			)
		)
	} else if (num == 2) {
		this.fishes.push(
			new Fish(
				2,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 3) {
		this.fishes.push(
			new Fish(
				3,
				random(600, canvas_height - 100),
				random(0.5, 1),
				random(6, 8),
				random(40, 60),
				random(1, 2)
			)
		)
	} else if (num == 4) {
		this.fishes.push(
			new Fish(
				4,
				random(100, 400),
				random(0.5, 1),
				random(7, 9),
				random(40, 60),
				random(1, 2)
			)
		)
	} else if (num == 5) {
		this.fishes.push(
			new Fish(
				5,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 6) {
		this.fishes.push(
			new Fish(
				6,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 7) {
		this.fishes.push(
			new Fish(
				7,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 8) {
		this.fishes.push(
			new Fish(
				8,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 9) {
		this.fishes.push(
			new Fish(
				9,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 10) {
		this.fishes.push(
			new Fish(
				10,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 11) {
		this.fishes.push(
			new Fish(
				11,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 12) {
		this.fishes.push(
			new Fish(
				12,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 13) {
		this.fishes.push(
			new Fish(
				13,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 14) {
		this.fishes.push(
			new Fish(
				14,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else if (num == 15) {
		this.fishes.push(
			new Fish(
				15,
				random(100, canvas_height - 100),
				random(1, 3),
				random(8, 10),
				random(20, 40),
				random(0, 3)
			)
		)
	} else {
		system.addFish(new_one)
		get = 0;
	}

	if (get == 1) {
		if (num <= 9) {
			alert("You get a 00" + num)
		} else {
			alert("You get a 0" + num)
		}
	}
}

System.prototype.run = function () {
	for (let i = this.fishes.length - 1; i >= 0; i--) {
		let fish = this.fishes[i]
		fish.run()
		if (fish.isOutside()) {
			fish.x = canvas_width + 50
		}
	}
}

function back() {
	for (let i = 0; i < system.fishes.length; i++) {
		let fish = system.fishes[i]
		fish.img = fish.num
	}
	localStorage.setItem("Fishes", JSON.stringify(system.fishes));
	window.location.href = 'index.html'
}

function code_input() {
	var code = document.getElementById("code_input");
	var inputValue = code.value;
	if (inputValue == "123") {
		if (fish_num <= 15) {
			fish_num += 1
			system.addFish(fish_num);
		} else {
			system.addFish(16);
		}
	} else {
		if (inputValue != "") {
			alert("wrong code.");
		}
	}
	code.value = ""
}

function go_map() {
	for (let i = 0; i < system.fishes.length; i++) {
		let fish = system.fishes[i]
		fish.img = fish.num
	}
	localStorage.setItem("Fishes", JSON.stringify(system.fishes));
	window.location.href = 'map.html'
}
