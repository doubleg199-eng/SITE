// DOM Elements
// LOGIN
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const loginBtn = document.getElementById("login-btn");
const userDisplayName = document.getElementById("user-display-name");

// START SCREEN
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const motivationMessage = document.getElementById("motivation-message");

// QUIZ SCREEN
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const progressBar = document.getElementById("progress");
const timerSpan = document.getElementById("timer");
const giveUpBtn = document.getElementById("give-up-btn");
const pauseBtn = document.getElementById("pause-btn");
const pauseOverlay = document.getElementById("pause-overlay");
const resumeBtn = document.getElementById("resume-btn");
const sparkleOverlay = document.getElementById("sparkle-overlay");

// RESULT SCREEN
const resultScreen = document.getElementById("result-screen");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const viewHistoryBtn = document.getElementById("view-history-btn");
const resultUserName = document.getElementById("result-user-name");

// HISTORY SCREEN
const historyScreen = document.getElementById("history-screen");
const historyContainer = document.getElementById("history-container");
const historyUserName = document.getElementById("history-user-name");
const backToMenuBtn = document.getElementById("back-to-menu-btn");

// USER TRACKING
let currentUser = null;
let userSessions = JSON.parse(localStorage.getItem("userSessions")) || {};
let currentSessionAttempts = [];

const quizQuestions = [
  {
    question: "Records of the past are called?",
    answers: [
      { text: "Past", correct: false },
      { text: "Stories", correct: false },
      { text: "Hostory", correct: true },
      { text: "Historian", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "A person who studies the past is called?",
    answers: [
      { text: "a Prophet", correct: false },
      { text: "a Writer", correct: false },
      { text: "a Dreamer", correct: false },
      { text: "a Historian", correct: true },
    ],
  },
  {
    question: "9 x 8 = ?",
    answers: [
      { text: "78", correct: false },
      { text: "74", correct: false },
      { text: "72", correct: true },
      { text: "76", correct: false },
    ],
  },
  {
    question: "Which of the following is an input device?",
    answers: [
      { text: "Printer", correct: false },
      { text: "Projector", correct: false },
      { text: "Light pen", correct: true },
      { text: "Speaker", correct: false },
    ],
  },
  {
    question: "ICT stands for?",
    answers: [
      { text: "Intergrated Computer Technology", correct: false },
      { text: "Information Computer Technology", correct: false },
      { text: "Information and Communication Technology", correct: true },
      { text: "Information Communication and Technology", correct: false },
    ],
  },
  {
    question: "Linguistics is the study of?",
    answers: [
      { text: "Computing", correct: false },
      { text: "Languages", correct: true },
      { text: "Science", correct: false },
      { text: "History", correct: false },
    ],
  },
  {
    question: "Kwame Nkrumah was the first president of which country?",
    answers: [
      { text: "Nigeria", correct: false },
      { text: "Togo", correct: false },
      { text: "Accra", correct: false },
      { text: "Ghana", correct: true },
    ],
  },
  {
    question: "Choose the correct sentence?",
    answers: [
      { text: "He not should go", correct : false },
      { text: "Should he not go", correct: false },
      { text: "He should not go", correct: true },
      { text: "Go should he not", correct: false },
    ],
  },
  {
    question: "what is the past tense of sweep?",
    answers: [
      { text: "Swipe", correct: false },
      { text: "Sweept", correct: false },
      { text: "Swept", correct: true },
      { text: "Swing", correct: false },
    ],
  },
  {
    question: "The largest object in our solar system is?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Stories", correct: false },
      { text: "Sun", correct: true },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "who is the leader of the Islamic religion?",
    answers: [
      { text: "Prophet Moses", correct: false },
      { text: "Prophet Mohammmed", correct: true },
      { text: "Abraham", correct: false },
      { text: "Jesus Christ", correct: false },
    ],
  },
  {
    question: "What is the capital of Ghana?",
    answers: [
      { text: "Cape Coast", correct: false },
      { text: "Kumasi", correct: false },
      { text: "Agona Swedru", correct: false },
      { text: "Accra", correct: true },
    ],
  },
  {
    question: "6 x 7 = ?",
    answers: [
      { text: "44", correct: false },
      { text: "24", correct: false },
      { text: "42", correct: true },
      { text: "46", correct: false },
    ],
  },
  {
    question: "Which of the following is used to display output? ",
    answers: [
      { text: "Printer", correct: false },
      { text: "Mouse", correct: false },
      { text: "Projector", correct: true },
      { text: "Speaker", correct: false },
    ],
  },
  {
    question: "Odwira is a festival celebrated by which people?",
    answers: [
      { text: "Dagomba", correct: false },
      { text: "Anlo", correct: false },
      { text: "Akuapem", correct: true },
      { text: "Asante", correct: false },
    ],
  },
  {
    question: "Aboakyer is a festival celebrated by which people?",
    answers: [
      { text: "Oguaa", correct: false },
      { text: "Winneba", correct: true },
      { text: "Edina", correct: false },
      { text: "Gonja", correct: false },
    ],
  },
  {
    question: "Eid-ul-Adha is known as the festival of?",
    answers: [
      { text: "Gift exchange", correct: false },
      { text: "Party", correct: false },
      { text: "Happiness", correct: false },
      { text: "Sacrifice", correct: true },
    ],
  },
  {
    question: "7 x 7 = ?",
    answers: [
      { text: "46", correct : false },
      { text: "37", correct: false },
      { text: "49", correct: true },
      { text: "77", correct: false },
    ],
  },
  {
    question: "Earth is the third planet from the sun, true or false?",
    answers: [
      { text: "false", correct: false },
      { text: "true", correct: true },

    ],
  },
  {
    question: "Good friday was the day Jesus Christ was...?",
    answers: [
      { text: "Raised from death", correct: false },
      { text: "Going to heaven", correct: false },
      { text: "Crucified", correct: true },
      { text: "Arrested", correct: false },
    ],
  },
  {
    question: "What is 8 x 7?",
    answers: [
      { text: "68", correct: false },
      { text: "56", correct: true },
      { text: "64", correct: false },
      { text: "74", correct: false },
    ],
  },
  {
    question: "The act of examining someone or something in order to judge their qualities, success, or needs is called?",
    answers: [
      { text: "Encourage", correct: false },
      { text: "Recognition", correct: false },
      { text: "Appreciation", correct: false },
      { text: "Appraisal", correct: true },
    ],
  },
  {
    question: "Subtract 9 from 81?",
    answers: [
      { text: "90", correct: false },
      { text: "73", correct: false },
      { text: "72", correct: true },
      { text: "71", correct: false },
    ],
  },
  {
    question: "The natural environment is made up of",
    answers: [
      { text: "Thing human created", correct: false },
      { text: "People and houses", correct: false },
      { text: "Things of nature", correct: true },
      { text: "The forest", correct: false },
    ],
  },
  {
    question: "Cutting down trees without planting new ones is called?",
    answers: [
      { text: "Tree cutting", correct: false },
      { text: "Pollution", correct: false },
      { text: "Deforestation", correct: true },
      { text: "Afforestation", correct: false },
    ],
  },
  {
    question: "The environment is only made up of trees and animals, true or false?",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
     
    ],
  },
  {
    question: "Which of these is not made by man?",
    answers: [
      { text: "Bridges", correct: false },
      { text: "Cars", correct: false },
      { text: "house", correct: false },
      { text: "Mountain", correct: true },
    ],
  },
  {
    question: "The combination of evaporation and transpiration is called?",
    answers: [
      { text: "Transpiration", correct : false },
      { text: "Evaporation", correct: false },
      { text: "Evapotranspiration", correct: true },
      { text: "Condensation", correct: false },
    ],
  },
  {
    question: "Should we cut down trees to make furniture?",
    answers: [
      { text: "Yes to decorate our rooms and offices", correct: false },
      { text: "No we don't need furniture", correct: false },
      { text: "Yes, but we must replant them", correct: true },
      { text: "Yes to make more space", correct: false },
    ],
  },
  {
    question: "We rest and sleep at/in......",
    answers: [
      { text: "the afternoon", correct: false },
      { text: "the morning", correct: false },
      { text: "Night", correct: true },
      { text: "day", correct: false },
    ],
  },
  {
    question: "When we dig deep into the ground, we find?",
    answers: [
      { text: "Food", correct: false },
      { text: "Water", correct: true },
      { text: "Fire", correct: false },
      { text: "Well", correct: false },
    ],
  },
  {
    question: "What gives energy to earth?",
    answers: [
      { text: "Plants", correct: false },
      { text: "Planets", correct: false },
      { text: "Moon", correct: false },
      { text: "Sun", correct: true },
    ],
  },
  {
    question: "The moon is a source of light, true or false?",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
 
    ],
  },
  {
    question: "Movement that occur over and over again is called?",
    answers: [
      { text: "Printer", correct: false },
      { text: "Merry go round", correct: false },
      { text: "Cyclic movement", correct: true },
      { text: "Round", correct: false },
    ],
  },
  {
    question: "In the ealier day, people used the stars to find their way, true or false?",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      
    ],
  },
  {
    question: "Which part of a plant is responsible for holding the plant in the soil?",
    answers: [
      { text: "Stem", correct: false },
      { text: "Root", correct: true },
      { text: "Leaves", correct: false },
      { text: "Fruit", correct: false },
    ],
  },
  {
    question: "All the following has thick stems except?",
    answers: [
      { text: "Palm", correct: false },
      { text: "Orange", correct: false },
      { text: "Mango", correct: false },
      { text: "Sugarcane", correct: true },
    ],
  },
  {
    question: "Plant with thin roots are called?",
    answers: [
      { text: "Deep root", correct : false },
      { text: "Tap root", correct: false },
      { text: "Fibrous root", correct: true },
      { text: "Small root", correct: false },
    ],
  },
  {
    question: "Uranus is the largest planet in our solar system, true or false?",
    answers: [
      { text: "True", correct: false },
      { text: "Fale", correct: true },

    ],
  },
  {
    question: "What is not part of the digestion system?",
    answers: [
      { text: "Stomach", correct: false },
      { text: "Large intestine", correct: false },
      { text: "Kidney", correct: true },
      { text: "Eusophagus", correct: false },
    ],
  },
  {
    question: "Which part of the plant is in the soil?",
    answers: [
      { text: "Leaf", correct: false },
      { text: "Root", correct: true },
      { text: "Stem", correct: false },
      { text: "Flower", correct: false },
    ],
  },
  {
    question: "Alum is a chemical used to.....",
    answers: [
      { text: "Make food", correct: false },
      { text: "Treat malaria", correct: false },
      { text: "Protect the environment", correct: false },
      { text: "Purify water", correct: true },
    ],
  },
  {
    question: "we use the following to purify water except?",
    answers: [
      { text: "Adding chlorine", correct: false },
      { text: "Adding iodine", correct: false },
      { text: "Cooling the water", correct: true },
      { text: "Boiling the water", correct: false },
    ],
  },
  {
    question: "The following are characteristics of good drinking water except?",
    answers: [
      { text: "Water without particles", correct: false },
      { text: "Colourless", correct: false },
      { text: "Tasty water", correct: true },
      { text: "Odourless water", correct: false },
    ],
  },
  {
    question: "The Akosombo dam is located in which region of Ghana? ",
    answers: [
      { text: "Bono-east", correct: false },
      { text: "Northern", correct: false },
      { text: "Volta", correct: true },
      { text: "Central", correct: false },
    ],
  },
  {
    question: "Streams are also known as rivers, true or false?",
    answers: [
      { text: "True", correct: false }, 
      { text: "Fale", correct: true },
      
    ],
  },
  {
    question: "Example of a river in ghana is?",
    answers: [
      { text: "Boti", correct: false },
      { text: "Sea", correct: false },
      { text: "Well", correct: false },
      { text: "Densu", correct: true },
    ],
  },
  {
    question: "When water evaporates from the leaves of plants, it is called?",
    answers: [
      { text: "Purification", correct : false },
      { text: "Digestion", correct: false },
      { text: "Transpiration", correct: true },
      { text: "Evaporation", correct: false },
    ],
  },
  {
    question: "Which of the following does not move around the sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Moon", correct: true },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "The moon always shows at night, true or false?",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
     
    ],
  },
  {
    question: "All the following can be found in the night sky except?",
    answers: [
      { text: "Fireflies", correct: false },
      { text: "Rainbow", correct: true },
      { text: "Clouds", correct: false },
      { text: "Bats", correct: false },
    ],
  },
  {
    question: "When you mix water and oil it is called?",
    answers: [
      { text: "liquid", correct: false },
      { text: "Clean water", correct: false },
      { text: "Miscible", correct: false },
      { text: "Immiscible", correct: true },
    ],
  },
  {
    question: "When you click on shut down. What happens to the computer?",
    answers: [
      { text: "Plays a music", correct: false },
      { text: "It restart again", correct: false },
      { text: "it goes off", correct: true },
      { text: "It does nothing", correct: false },
    ],
  },
  {
    question: "The colourful background of a computer screen is called?",
    answers: [
      { text: "Icons", correct: false },
      { text: "Desktop", correct: false },
      { text: "Wallpaper", correct: true },
      { text: "Windows", correct: false },
    ],
  },
  {
    question: "After you press the power button, the computer goes through a process called?",
    answers: [
      { text: "starting", correct: false },
      { text: "Waiting", correct: false },
      { text: "Booting", correct: true },
      { text: "Loading", correct: false },
    ],
  },
  {
    question: "ASDFGHJKL; is an example of?",
    answers: [
      { text: "Top row keys", correct: false },
      { text: "Home row keys", correct: true },
      { text: "Bottom row keys", correct: false },
      { text: "Number row keys", correct: false },
    ],
  },
  {
    question: "The RAM stands for?",
    answers: [
      { text: "Read Alone Memory", correct: false },
      { text: "Random Across Memory", correct: false },
      { text: "Read Access Memory", correct: false },
      { text: "Random Access Memory", correct: true },
    ],
  },
  {
    question: "The ROM stands for?",
    answers: [
      { text: "Random-only Memory", correct : false },
      { text: "Rest-only memory", correct: false },
      { text: "Read-only memory", correct: true },
      { text: "Read-my memory", correct: false },
    ],
  },
  {
    question: "we used the microphone to listen to music, true or false?",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },

    ],
  },
  {
    question: "Which of the following is not a computer peripheral?",
    answers: [
      { text: "Scanner", correct: false },
      { text: "Webcam", correct: false },
      { text: "Calculator", correct: true },
      { text: "Projector", correct: false },
    ],
  },
  {
    question: "CRT stands for?",
    answers: [
      { text: "Catridge Ray Tube", correct: false },
      { text: "Cathode Ray Tube", correct: true },
      { text: "Compter Ray Monitor", correct: false },
      { text: "Cathode Ray Television", correct: false },
    ],
  },
  {
    question: "Which number is not a factor of 12?",
    answers: [
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "2", correct: false },
      { text: "5", correct: true },
    ],
  },
  {
    question: "what is HCF of 12 and 18?",
    answers: [
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "The square of an odd number is always?",
    answers: [
      { text: "the same", correct: false },
      { text: "even", correct: false },
      { text: "odd", correct: true },
      { text: "high", correct: false },
    ],
  },
  {
    question: "which of the numbers is not an even number?",
    answers: [
      { text: "42", correct: false },
      { text: "50", correct: false },
      { text: "73", correct: true },
      { text: "64", correct: false },
    ],
  },
  {
    question: "7 to the power of 2 is equal to 14, true or false?",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
     
    ],
  },
  {
    question: "The sitting president of Ghana's home is called?",
    answers: [
      { text: "The Golden home", correct: false },
      { text: "The castle", correct: false },
      { text: "Parliament", correct: false },
      { text: "The presidential Palace", correct: true },
    ],
  },
  {
    question: "In which year was Kwame Nkrumah's government overthrown?",
    answers: [
      { text: "1969", correct : false },
      { text: "1978", correct: false },
      { text: "1966", correct: true },
      { text: "1956", correct: false },
    ],
  },
  {
    question: "The fantes had ...... powerfull leaders.",
    answers: [
      { text: "six", correct: false },
      { text: "two", correct: false },
      { text: "three", correct: true },
      { text: "four", correct: false },
    ],
  },
  {
    question: "5 x 9 = ?",
    answers: [
      { text: "50", correct: false },
      { text: "40", correct: false },
      { text: "45", correct: true },
      { text: "54", correct: false },
    ],
  },
  {
    question: "The following are popular places the fantes settled except?",
    answers: [
      { text: "Mankessim", correct: false },
      { text: "Techiman", correct: true },
      { text: "Ajumako", correct: false },
      { text: "Gomoa", correct: false },
    ],
  },
  {
    question: "Digestion starts in the .........",
    answers: [
      { text: "Liver", correct: false },
      { text: "Stomach", correct: false },
      { text: "large intestine", correct: false },
      { text: "mouth", correct: true },
    ],
  },
  {
    question: "Chewed food which is called bolus is swallowed and passes through the ..........",
    answers: [
      { text: "small intestine", correct: false },
      { text: "oesophagus", correct: true },
      { text: "large intestine", correct: false },
      { text: "anus", correct: false },
 
    ],
  },
  {
    question: "The solid waste from the digestion process is called?",
    answers: [
      { text: "nutrients", correct: false },
      { text: "Rectum", correct: false },
      { text: "faeces", correct: true },
      { text: "Anus", correct: false },
    ],
  },
  {
    question: "The finger-like projections in the small intestine that help in the absorption of nutrients are called?",
    answers: [
      { text: "ileum", correct: false },
      { text: "pancreas", correct: false },
      { text: "villus", correct: true },
      { text: "jejulum", correct: false },
      
    ],
  },
  {
    question: "All the following are planets in our solar system except?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Sun", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "The brightest and hottest planet in our solar system is?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: true },
    ],
  },
  {
    question: "Which of these planets has 27 moons?",
    answers: [
      { text: "Neptune", correct : false },
      { text: "Pluto", correct: false },
      { text: "Uranus", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "what is the largest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Uranus", correct : false },
      { text: "Saturn", correct: false },

    ],
  },
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let shuffledQuestions = [];
let timeRemaining = 20;
let timerInterval = null;
let isQuizPaused = false;

// SHUFFLE FUNCTION - Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// EVENT LISTENERS
loginForm.addEventListener("submit", handleLogin);
startButton.addEventListener("click", startQuiz);
giveUpBtn.addEventListener("click", giveUpQuiz);
pauseBtn.addEventListener("click", pauseQuiz);
resumeBtn.addEventListener("click", resumeQuiz);
restartButton.addEventListener("click", restartQuiz);
viewHistoryBtn.addEventListener("click", showHistory);
backToMenuBtn.addEventListener("click", backToStartScreen);

// LOGIN FUNCTIONS
function handleLogin(e) {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  
  if (!username) {
    alert("Please enter your name");
    return;
  }
  
  // Store current user
  currentUser = {
    username: username,
    loginTime: new Date().toLocaleString()
  };
  
  // Initialize user session if not exists
  if (!userSessions[username]) {
    userSessions[username] = {
      username: username,
      attempts: [],
      totalSessions: 0
    };
  }
  
  // Update display
  userDisplayName.textContent = username;
  resultUserName.textContent = username;
  historyUserName.textContent = username;
  
  // Reset form
  loginForm.reset();
  
  // Switch screens
  loginScreen.classList.remove("active");
  startScreen.classList.add("active");
  
  console.log(`User ${username} logged in at ${currentUser.loginTime}`);
}

function handleLogout() {
  // Clear timer if running
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  loginScreen.classList.add("active");
  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  historyScreen.classList.remove("active");
  
  currentUser = null;
  currentSessionAttempts = [];
  
  console.log("User logged out");
}

function backToStartScreen() {
  loginScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  historyScreen.classList.remove("active");
  startScreen.classList.add("active");
}

function giveUpQuiz() {
  if (confirm("Are you sure you want to give up the quiz?")) {
    // Clear timer
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    
    // Hide pause overlay
    pauseOverlay.style.display = "none";
    
    // Optionally track this as a failed attempt
    trackUserAttempt(score, shuffledQuestions.length);
    
    // Hide all screens and show start screen
    loginScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    historyScreen.classList.remove("active");
    startScreen.classList.add("active");
    
    console.log(`User ${currentUser.username} gave up the quiz with score ${score}`);
  }
}

function pauseQuiz() {
  isQuizPaused = true;
  
  // Pause the timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  // Disable all answer buttons
  answersDisabled = true;
  
  // Show pause overlay
  pauseOverlay.style.display = "flex";
  
  console.log("Quiz paused");
}

function resumeQuiz() {
  isQuizPaused = false;
  
  // Hide pause overlay
  pauseOverlay.style.display = "none";
  
  // Resume the timer
  answersDisabled = false;
  startTimer();
  
  console.log("Quiz resumed");
}

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  isQuizPaused = false;
  
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  // Hide pause overlay
  pauseOverlay.style.display = "none";

  // Shuffle questions and answers
  shuffledQuestions = shuffleArray(quizQuestions).map(question => ({
    ...question,
    answers: shuffleArray(question.answers)
  }));

  // Hide all screens except quiz screen
  loginScreen.classList.remove("active");
  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  historyScreen.classList.remove("active");
  
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;
  isQuizPaused = false;
  timeRemaining = 35;
  
  // Hide pause overlay
  pauseOverlay.style.display = "none";
  
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / shuffledQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
  
  // Start timer for this question
  startTimer();
}

function startTimer() {
  timerSpan.textContent = timeRemaining;
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerSpan.textContent = timeRemaining;
    
    // Add warning style when less than 5 seconds
    if (timeRemaining <= 5) {
      timerSpan.parentElement.classList.add("warning");
    } else {
      timerSpan.parentElement.classList.remove("warning");
    }
    
    // Time's up - move to next question
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      moveToNextQuestion();
    }
  }, 1000);
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;
  
  // Clear timer when answer is selected
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
    // show sparkle effect for correct answer
    showSparkle();
  }

  setTimeout(() => {
    moveToNextQuestion();
  }, 1000);
}

function moveToNextQuestion() {
  currentQuestionIndex++;

  // check if there are more questions or if the quiz is over
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    // Clear timer on quiz end
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    showResults();
  }
}

function showSparkle() {
  if (!sparkleOverlay) return;
  // Ensure overlay visible
  sparkleOverlay.classList.add('show');
  sparkleOverlay.setAttribute('aria-hidden', 'false');
  // Remove show after animation completes
  setTimeout(() => {
    sparkleOverlay.classList.remove('show');
    sparkleOverlay.setAttribute('aria-hidden', 'true');
  }, 900);
}

function showResults() {
  // Hide pause overlay
  pauseOverlay.style.display = "none";
  
  loginScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  historyScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / shuffledQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! Very soon you'll be a pro!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
  
  // TRACK USER ATTEMPT
  trackUserAttempt(score, shuffledQuestions.length);
}

function trackUserAttempt(finalScore, totalQuestions) {
  if (!currentUser) return;
  
  const attempt = {
    date: new Date().toLocaleString(),
    score: finalScore,
    totalQuestions: totalQuestions,
    percentage: ((finalScore / totalQuestions) * 100).toFixed(1),
    duration: "Quiz completed"
  };
  
  currentSessionAttempts.push(attempt);
  
  // Update user session
  userSessions[currentUser.username].attempts.push(attempt);
  userSessions[currentUser.username].totalSessions++;
  
  // Save to localStorage
  localStorage.setItem("userSessions", JSON.stringify(userSessions));
  
  console.log(`Attempt tracked for ${currentUser.username}:`, attempt);
  console.log("All attempts:", userSessions[currentUser.username].attempts);
}

function showHistory() {
  if (!currentUser) return;
  
  const userAttempts = userSessions[currentUser.username]?.attempts || [];
  
  historyContainer.innerHTML = "";
  
  // Calculate stats
  const totalAttempts = userAttempts.length;
  const totalScore = userAttempts.reduce((sum, attempt) => sum + attempt.score, 0);
  const totalQuestions = userAttempts.reduce((sum, attempt) => sum + attempt.totalQuestions, 0);
  const averagePercentage = totalAttempts > 0 
    ? (userAttempts.reduce((sum, attempt) => sum + parseFloat(attempt.percentage), 0) / totalAttempts).toFixed(1)
    : 0;
  
  const bestScore = totalAttempts > 0 
    ? Math.max(...userAttempts.map(a => a.score))
    : 0;
  
  // Display stats
  const statsDiv = document.createElement("div");
  statsDiv.className = "history-stats";
  statsDiv.innerHTML = `
    <div class="history-stats-title">Your Statistics</div>
    <div class="stats-row">
      <div class="stat-box">Total Attempts: ${totalAttempts}</div>
      <div class="stat-box">Best Score: ${bestScore}/${userAttempts[0]?.totalQuestions || 0}</div>
      <div class="stat-box">Average: ${averagePercentage}%</div>
      <div class="stat-box">Total Points: ${totalScore}</div>
    </div>
  `;
  historyContainer.appendChild(statsDiv);
  
  // Display individual attempts
  if (totalAttempts === 0) {
    const noAttemptsDiv = document.createElement("div");
    noAttemptsDiv.style.color = "#666";
    noAttemptsDiv.style.padding = "20px";
    noAttemptsDiv.textContent = "No quiz attempts yet. Start a quiz to begin tracking!";
    historyContainer.appendChild(noAttemptsDiv);
  } else {
    const attemptsTitleDiv = document.createElement("div");
    attemptsTitleDiv.style.marginTop = "20px";
    attemptsTitleDiv.style.color = "#431c78";
    attemptsTitleDiv.style.fontWeight = "600";
    attemptsTitleDiv.style.marginBottom = "10px";
    attemptsTitleDiv.textContent = "Attempt Details";
    historyContainer.appendChild(attemptsTitleDiv);
    
    userAttempts.forEach((attempt, index) => {
      const div = document.createElement("div");
      div.className = "history-item";
      div.innerHTML = `
        <div class="history-item-header">
          <span>Attempt #${index + 1}</span>
          <span class="history-item-date">${attempt.date}</span>
        </div>
        <div class="history-item-details">
          <strong>Score:</strong> ${attempt.score}/${attempt.totalQuestions} (${attempt.percentage}%)
        </div>
      `;
      historyContainer.appendChild(div);
    });
  }
  
  loginScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  startScreen.classList.remove("active");
  historyScreen.classList.add("active");
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}

