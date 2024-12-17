// Écouter le clic sur le bouton "Soumettre"
document.getElementById('submit-btn').addEventListener('click', function () {
    // Réponses correctes
    const correctAnswers = {
        q1: "Mercure",
        q2: "8",
        q3: "Voie Lactée",
        q4: "Jupiter",
        q5: "Terre",
        q6: "Mars",
        q7: "La Lune",
        q8: "8 minutes",
        q9: "Saturne",
        q10: "Soleil"
    };

    // Récupérer les réponses de l'utilisateur
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value,
        q6: document.querySelector('input[name="q6"]:checked')?.value,
        q7: document.querySelector('input[name="q7"]:checked')?.value,
        q8: document.querySelector('input[name="q8"]:checked')?.value,
        q9: document.querySelector('input[name="q9"]:checked')?.value,
        q10: document.querySelector('input[name="q10"]:checked')?.value
    };

    let score = 0; // Initialiser le score
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultDetails = "<h3>Résultats :</h3><ul>";

    // Calculer le score et générer les détails des résultats
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
            resultDetails += `<li>Question ${question.slice(1)} : Correct !</li>`;
        } else {
            resultDetails += `<li>Question ${question.slice(1)} : Faux. La bonne réponse est "${correctAnswers[question]}".</li>`;
        }
    }

    resultDetails += `</ul><p>Votre score est : <strong>${score} / ${totalQuestions}</strong></p>`;

    // Afficher les résultats
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = "block";
    resultDiv.innerHTML = resultDetails;
});
