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
  const workouts = {
    basketball: {
      endurance: {
        beginner: ["Jog 10 mins", "Suicides x3", "Core circuit (2 rounds)", "Layup drills"],
        intermediate: ["15 min warm-up", "Shuttle runs", "Full-court sprints", "3 round HIIT"],
        advanced: ["Explosive jumps", "200m sprints x5", "Cone agility drills", "Core burnout"]
      },
      strength: {
        beginner: ["Wall sits", "Push-ups", "Bodyweight squats", "Plank 30s x3"],
        intermediate: ["Deadlifts", "Medicine ball slams", "Pull-ups", "Russian twists"],
        advanced: ["Barbell squats", "Weighted push-ups", "Overhead press", "Core & grip training"]
      },
      speed: {
        beginner: ["Sprints x4", "Fast footwork drills", "Jump rope", "Short layup runs"],
        intermediate: ["Resistance band sprints", "Agility ladder", "30m sprint x6", "Bounding jumps"],
        advanced: ["Sprint intervals", "Plyometrics", "Quick cone drills", "Explosive pushups"]
      }
    },
    soccer: {
      endurance: {
        beginner: ["Light jog 15 min", "Passing drills", "Shuttle runs", "Core 2 rounds"],
        intermediate: ["30 min run", "4x400m intervals", "Wall passes", "Agility work"],
        advanced: ["5k tempo run", "Sprint intervals", "Triangle drills", "Plyometric circuit"]
      },
      strength: {
        beginner: ["Bodyweight lunges", "Push-ups", "Calf raises", "Sit-ups"],
        intermediate: ["Dumbbell squats", "Core circuit", "Glute bridges", "Planks"],
        advanced: ["Power cleans", "Barbell squats", "Deadlifts", "Weighted planks"]
      },
      speed: {
        beginner: ["Cone drills", "Short sprints", "Jump rope", "Footwork"],
        intermediate: ["Sprint ladders", "Explosive starts", "Bounding drills", "Hurdles"],
        advanced: ["40m sprints", "Sled pushes", "High knee jumps", "Resisted runs"]
      }
    },
    football: {
      endurance: {
        beginner: ["Light jog 10 mins", "Jump rope 3 mins", "Tire flips", "Burpees x10"],
        intermediate: ["Interval running", "Ladder drills", "Agility cones", "Stair sprints"],
        advanced: ["Hill sprints", "5x400m runs", "Plyo push-ups", "4-round HIIT"]
      },
      strength: {
        beginner: ["Bodyweight squats", "Push-ups", "Medicine ball slams", "Wall sits"],
        intermediate: ["Deadlifts", "Power cleans", "Push press", "Plank rows"],
        advanced: ["Heavy squats", "Bench press", "Snatch", "Explosive rows"]
      },
      speed: {
        beginner: ["10m sprints", "Jump squats", "Footwork ladder", "Side shuffles"],
        intermediate: ["Resistance runs", "Sprint drills", "Sled pulls", "Bounding"],
        advanced: ["Track sprints", "Overspeed training", "Reaction drills", "Hurdle hops"]
      }
    }
  };

  const plan = workouts[sport]?.[goal]?.[level];

  if (!plan) return "⚠️ No workout found. Please try different options.";

  return plan.map((step, i) => `${i + 1}. ${step}`).join("\n");
}
