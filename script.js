const form = document.getElementById('workout-form');
const resultCard = document.getElementById('result');
const output = document.getElementById('workout-output');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const sport = document.getElementById('sport').value;
  const goal = document.getElementById('goal').value;
  const level = document.getElementById('level').value;

  const workout = generateWorkout(sport, goal, level);
  output.textContent = workout;
  resultCard.classList.remove('d-none');
});

function generateWorkout(sport, goal, level) {
  // Fake AI logic using prompt-like patterns
  const database = {
    basketball: {
      endurance: {
        beginner: [
          "10 min jogging warm-up",
          "3x 200m shuttle runs",
          "Layup drills (5 mins)",
          "Core circuit: 3 rounds"
        ],
        intermediate: [
          "15 min warm-up with ball handling",
          "5x 300m sprints",
          "Suicide drills (5 sets)",
          "Plank hold + jump rope combo"
        ],
        advanced: [
          "20 min full-court drills",
          "10x 200m sprints",
          "Cone dribble and drive (15 min)",
          "Agility ladder + core blast"
        ]
      },
      strength: {
        beginner: [
          "Bodyweight squats (3x15)",
          "Push-ups (3x10)",
          "Medicine ball passes",
          "Wall sits (3x30 sec)"
        ],
        intermediate: [
          "Weighted lunges (3x12)",
          "Pull-ups or resistance bands",
          "Overhead press with dumbbells",
          "Core burnout: 4 rounds"
        ],
        advanced: [
          "Squat + Press (3x10)",
          "Deadlifts (4x8)",
          "Explosive push-ups",
          "Medicine ball slams"
        ]
      }
    },
    // You can add "soccer" and "track" similar to basketball
  };

  const list = database[sport]?.[goal]?.[level];

  if (!list) return "Sorry, no workout found for your selection.";

  return list.map((item, i) => `${i + 1}. ${item}`).join("\n");
}
