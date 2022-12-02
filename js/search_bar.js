input = document.querySelector(".finder__input");
finder = document.querySelector(".finder");
form = document.querySelector("form");

input.addEventListener("focus", () => {
    finder.classList.add("active");
});

input.addEventListener("blur", () => {
    if (input.value.length === 0) {
        finder.classList.remove("active");
    }
});

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    finder.classList.add("processing");
    finder.classList.remove("active");
    input.disabled = true;
    setTimeout(() => {
        finder.classList.remove("processing");
        input.disabled = false;
        if (input.value.length > 0) {
            finder.classList.add("active");
        }
    }, 1000);
    let movie_entered = document.getElementById("search_input").value;
    movie_entered = movie_entered.replace(" ", "%20");
    scrappp(movie_entered);
});


