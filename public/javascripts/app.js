const toggleEl = document.querySelectorAll("ul.perf-ul");
const hiddenBtn = document.querySelectorAll(".hidden");

toggleEl.forEach((el) => {
    el.addEventListener("mouseover", function(e) {
        const hiddenBtn = document.querySelectorAll(".hidden");
        hiddenBtn.forEach(function(btn) {
            if (el.contains(btn)) {
            btn.style.display = "inline"
            }
        })
    })
})

toggleEl.forEach((el) => {
    el.addEventListener("mouseout", function() {
        const hiddenBtn = document.querySelectorAll(".hidden");
        hiddenBtn.forEach(function(btn) {
            btn.style.display = "none"
        })
    })
})

const snd = new Audio("../sounds/household_trash_bag_full_down_on_hard_ground_002.mp3")
