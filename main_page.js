function delete_fishes() {
    let empty = []
    localStorage.setItem("Fishes", empty)
    alert("clear fish tank")
}

function fish_tank() {
    window.location.href = "fish_tank.html";
}

function in_development() {
    window.location.href = "in_development.html";
}

function about_us() {
    window.location.href = "about_us.html";
}
