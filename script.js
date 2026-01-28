// BUG 10: Query runs before DOM is ready
const btn = document.getElementById("startBtn");

// BUG 11: btn is null → but error hidden inside condition
if (btn !== undefined) {

    // BUG 12: Event never attaches due to wrong condition
    btn.addEventListener("click", function () {

        // BUG 13: Infinite loop (browser freeze)
        let i = 0;
        while (i >= 0) {
            i++;
        }

        alert("Welcome!");
    });
}

// BUG 14: Form selector wrong class
const form = document.querySelector(".contactForm");

form.addEventListener("submit", function (e) {

    // BUG 15: preventDefault misspelled
    e.preventdefualt();

    // BUG 16: Querying non-existing input
    const name = document.querySelector("#name").value;

    console.log("Submitted:", name);
});
