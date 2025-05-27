document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startQuiz");
    if (startBtn) {
        startBtn.addEventListener("click", function () {
            alert("O quiz vai começar!");
        });
    }
});
