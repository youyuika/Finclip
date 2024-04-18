let Fish = function (num, y, speed, size, scalar, angle_speed) {
    this.num = num
    this.img = num
    this.y = y
    this.speed = speed
    this.size = size
    this.scalar = scalar
    this.angle_speed = angle_speed
}

document.addEventListener('DOMContentLoaded', function () {
    let fishes = []
    try {
        fishes = JSON.parse(localStorage.getItem('Fishes'), (key, value) => {
            if (key === '') {
                return value.map(fishData => new Fish(
                    fishData.img,
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
        fishes = []
    }

    const container = document.querySelector('.container');

    for (let i = 1; i <= fishes.length; i++) {
        if (i <= 9) {
            const box = document.createElement('div');
            box.classList.add('box');

            const image = document.createElement('img');
            image.src = "../assets/00" + i + ".png";
            box.appendChild(image);

            const textElement = document.createElement('p');
            textElement.textContent = "00" + i;
            box.appendChild(textElement);

            container.appendChild(box);
        } else if (i >= 10 && i <= 15) {
            const box = document.createElement('div');
            box.classList.add('box');

            const image = document.createElement('img');
            image.src = "../assets/0" + i + ".png";
            box.appendChild(image);

            const textElement = document.createElement('p');
            textElement.textContent = "0" + i;
            box.appendChild(textElement);

            container.appendChild(box);
        }
    }
});

function back() {
    window.location.href = '../fish_tank/index.html'
}