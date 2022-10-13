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
