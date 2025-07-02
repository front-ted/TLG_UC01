
document.addEventListener("DOMContentLoaded", () => {
    const exercises = document.querySelectorAll(".exercise");
    const progressBar = document.getElementById("progress-bar");
    const counter = document.getElementById("counter");
    const completionMessage = document.getElementById("completion-message");
    const completeBtn = document.getElementById("complete-btn");
    const navButtons = document.querySelector(".nav-buttons");
    let currentExerciseIndex = 0;

    showExercise(currentExerciseIndex);

    exercises.forEach((exercise) => {
        const buttons = exercise.querySelectorAll("button.alt-c, button.alt-e");
        const positiveFeedback = exercise.querySelector(".f-positivo");
        const negativeFeedback = exercise.querySelector(".f-negativo");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const isCorrect = button.classList.contains("alt-c");
                const feedbackText = button.dataset.feedback;

                // Remove seleção anterior
                buttons.forEach(btn => btn.classList.remove("selected"));

                // Marca botão clicado
                button.classList.add("selected");

                // Exibe feedback atualizado
                if (isCorrect) {
                    positiveFeedback.querySelector(".feedback-text").textContent = feedbackText;
                    positiveFeedback.style.display = "block";
                    negativeFeedback.style.display = "none";
                } else {
                    negativeFeedback.querySelector(".feedback-text").textContent = feedbackText;
                    negativeFeedback.style.display = "block";
                    positiveFeedback.style.display = "none";
                }

                // Marca como respondido
                exercise.dataset.answered = "true";
                updateProgress();
                updateButtons();
            });
        });
    });

    function showExercise(index) {
        exercises.forEach((ex, i) => {
            ex.classList.toggle("active", i === index);
        });
        updateCounter();
        updateButtons();
    }

    function updateProgress() {
        const answered = Array.from(exercises).filter(ex => ex.dataset.answered === "true").length;
        const percent = (answered / exercises.length) * 100;
        progressBar.style.width = `${percent}%`;
    }

    function updateCounter() {
        counter.textContent = `Pergunta ${currentExerciseIndex + 1} de ${exercises.length}`;
    }

    function updateButtons() {
        const allAnswered = Array.from(exercises).every(ex => ex.dataset.answered === "true");
        completeBtn.style.display = allAnswered ? "inline-block" : "none";
    }

    window.nextExercise = function () {
        const current = exercises[currentExerciseIndex];
        if (current.dataset.answered !== "true") {
            // Mostrar o modal personalizado
            const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
            alertModal.show();
            return;
        }

        if (currentExerciseIndex < exercises.length - 1) {
            currentExerciseIndex++;
            showExercise(currentExerciseIndex);
        }
    };

    window.prevExercise = function () {
        if (currentExerciseIndex > 0) {
            currentExerciseIndex--;
            showExercise(currentExerciseIndex);
        }
    };

    window.showCompletion = function () {
        document.getElementById("exercises-container").style.display = "none";
        completionMessage.style.display = "block";
        navButtons.style.display = "none";
    };

    window.restartExercise = function () {
        exercises.forEach((ex) => {
            ex.dataset.answered = "false";
            ex.querySelector(".f-positivo").style.display = "none";
            ex.querySelector(".f-negativo").style.display = "none";

            const buttons = ex.querySelectorAll("button.alt-c, button.alt-e");
            buttons.forEach(btn => {
                btn.classList.remove("selected");
            });
        });

        currentExerciseIndex = 0;
        progressBar.style.width = "0%";
        completionMessage.style.display = "none";
        document.getElementById("exercises-container").style.display = "block";
        navButtons.style.display = "block";
        showExercise(currentExerciseIndex);
    };
});
