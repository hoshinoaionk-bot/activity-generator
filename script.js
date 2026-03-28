/* THE 30 ACTIVITIES MUAHEHEHE */
const activities = [
{
  name: "Design Challenge",
  idea: "Build something with limited materials.",
  benefit: "Improves creativity and problem-solving.",
  steps: ["Split into groups","Give same materials","Build within time","Test designs"]
},
{
  name: "Sketching Sprint",
  idea: "Draw 3 ideas quickly.",
  benefit: "Improves brainstorming.",
  steps: ["Get a problem","Draw 3 ideas","Explain each idea"]
},
{
  name: "Circuit Design",
  idea: "Build a simple circuit.",
  benefit: "Improves technical skills.",
  steps: ["Introduce components","Build circuit","Test it"]
},
{
  name: "ACCESSFM Analysis",
  idea: "Analyze products using ACCESSFM criteria.",
  benefit: "Analytical thinking",
  steps: ["Provide products","Identify ACCESSFM factors","Give feedback"]
},
{
  name: "Design Pitch",
  idea: "Present your product idea to the class.",
  benefit: "Confidence and communication",
  steps: ["Prepare idea","Present","Answer questions","Receive feedback"]
},
{
  name: "Problem Hunt",
  idea: "List problems in the classroom.",
  benefit: "Quick thinking",
  steps: ["Set timer","Write problems","Share ideas"]
},
{
  name: "Prototype Build",
  idea: "Turn idea into prototype.",
  benefit: "Practical skills",
  steps: ["Choose idea","Plan","Build","Test"]
},
{
  name: "Speed Critique",
  idea: "Give fast feedback.",
  benefit: "Critical thinking",
  steps: ["Show product","Write feedback","Discuss"]
},
{
  name: "3D Design Practice",
  idea: "Use design software.",
  benefit: "Technical skills",
  steps: ["Learn tools","Design","Refine","Present"]
},
{
  name: "Design Without Drawing",
  idea: "Describe ideas in words.",
  benefit: "Creative thinking",
  steps: ["Think","Write","Share"]
},
{
  name: "Aladdin Wish",
  idea: "Create a wish to solve problems.",
  benefit: "Creative thinking",
  steps: ["Give problem","Write wish","Discuss"]
},
{
  name: "Survival Design",
  idea: "Solve survival scenarios.",
  benefit: "Real-life thinking",
  steps: ["Give scenario","List tools","Design solution","Present"]
},
{
  name: "Design Evolution",
  idea: "Study product history.",
  benefit: "Understanding innovation",
  steps: ["Pick product","Research","Compare"]
},
{
  name: "Role Swap",
  idea: "Switch roles in discussion.",
  benefit: "Perspective thinking",
  steps: ["Assign roles","Discuss","Rotate"]
},
{
  name: "Website Design",
  idea: "Design website layout.",
  benefit: "Digital skills",
  steps: ["Identify problem","Sketch","Present"]
},
{
  name: "Game Design",
  idea: "Create a simple game.",
  benefit: "Logic and creativity",
  steps: ["Choose idea","Define rules","Build"]
},
{
  name: "AI Prompt Writing",
  idea: "Write better AI prompts.",
  benefit: "Communication skills",
  steps: ["Explain rules","Write prompt","Improve"]
},
{
  name: "Coding Basics",
  idea: "Learn basic coding.",
  benefit: "Technical thinking",
  steps: ["Learn syntax","Practice","Build"]
},
{
  name: "Blender Practice",
  idea: "Create 3D model.",
  benefit: "3D design skills",
  steps: ["Learn tools","Create","Refine"]
},
{
  name: "Inkscape Design",
  idea: "Design graphics.",
  benefit: "Graphic design",
  steps: ["Learn tools","Practice","Design"]
},
{
  name: "Poster Design",
  idea: "Create a poster.",
  benefit: "Creativity",
  steps: ["Choose topic","Design","Present"]
},
{
  name: "AI Feedback",
  idea: "Use AI to evaluate work.",
  benefit: "Decision making",
  steps: ["Submit work","Analyze","Improve"]
},
{
  name: "Photoshop Basics",
  idea: "Edit images.",
  benefit: "Editing skills",
  steps: ["Learn tools","Edit","Create"]
},
{
  name: "Animation Project",
  idea: "Create animation.",
  benefit: "Storytelling",
  steps: ["Plan","Animate","Present"]
},
{
  name: "Tinkercad Practice",
  idea: "Design 3D objects.",
  benefit: "Modeling skills",
  steps: ["Learn","Build","Test"]
},
{
  name: "Circuit Building",
  idea: "Build circuit.",
  benefit: "Electronics knowledge",
  steps: ["Introduce parts","Build","Test"]
},
{
  name: "Microbit Coding",
  idea: "Program microbit.",
  benefit: "Coding skills",
  steps: ["Write code","Connect","Test"]
},
{
  name: "App Design",
  idea: "Design an app.",
  benefit: "Problem-solving",
  steps: ["Identify issue","Sketch","Present"]
},
{
  name: "Locker Design",
  idea: "Decorate lockers.",
  benefit: "Creativity",
  steps: ["Plan","Decorate","Showcase"]
},
{
  name: "15-Minute Reading",
  idea: "Read quietly.",
  benefit: "Focus",
  steps: ["Choose book","Read","Reflect"]
},
{
  name: "Class Debate",
  idea: "Debate topic.",
  benefit: "Critical thinking",
  steps: ["Choose topic","Debate","Reflect"]
}
];

const generateBtn = document.getElementById("generateBtn");
const nextBtn = document.getElementById("nextBtn");
const loader = document.getElementById("loader");
const card = document.getElementById("card");

generateBtn.onclick = generate;
nextBtn.onclick = generate;

function generate() {
  card.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const activity = activities[randomIndex];

    display(activity);

    loader.classList.add("hidden");
    card.classList.remove("hidden");
  }, 1200);
}

function display(activity) {
  document.getElementById("name").innerText = activity.name;
  document.getElementById("idea").innerText = activity.idea;
  document.getElementById("benefit").innerText = activity.benefit;

  const stepsList = document.getElementById("steps");
  stepsList.innerHTML = "";

  activity.steps.forEach(step => {
    const li = document.createElement("li");
    li.innerText = step;
    stepsList.appendChild(li);
  });
}