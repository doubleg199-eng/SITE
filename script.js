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

// AUDIO
const backgroundMusic = document.getElementById("background-music");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const congratSound = document.getElementById("congrat-sound");

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
      { text: "History", correct: true },
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
  {
    question: "The Presidential Palace is located in .......",
    answers: [
      { text: "Volta", correct: false },
      { text: "Cape Coast", correct: false },
      { text: "Accra", correct: true },
      { text: "Kumasi", correct: false },
    ],
  },
  {
    question: "Ghana gained independence on the ......",
    answers: [
      { text: "6th March 1937", correct: false },
      { text: "6th May 1957", correct: true },
      { text: "6th March 1957", correct: false },
      { text: "6th March 1966", correct: false },
    ],
  },
  {
    question: "Who established the famous public zoo at the Flagstaff House?",
    answers: [
      { text: "The American Military Commander", correct: false },
      { text: "Ghanaians", correct: false },
      { text: "Jerry John Rawlings", correct: false },
      { text: "Dr. Kwame Nkrumah", correct: true },
    ],
  },
  {
    question: "12 by 5 gives you?",
    answers: [
      { text: "72", correct: false },
      { text: "84", correct: false },
      { text: "60", correct: true },
      { text: "120", correct: false },
    ],
  },
  {
    question: "what is the sum 5642 + 3549",
    answers: [
      { text: "9091", correct: false },
      { text: "9181", correct: false },
      { text: "9191", correct: true },
      { text: "9190", correct: false },
    ],
  },
  {
    question: "In which year was the Flagstaff house taken over by the National Development Planning Commission?",
    answers: [
      { text: "1966", correct: false },
      { text: "1948", correct: false },
      { text: "1922", correct: true },
      { text: "1957", correct: false },
    ],
  },
  {
    question: "Who built the Golden Jubilee House in 2008?",
    answers: [
      { text: "Dr. Kwame Nkrumah", correct: false },
      { text: "President J.A.Kuffour", correct: true },
      { text: "Predident Dramani Mahamma", correct: false },
      { text: "President Nana Akufo Addo", correct: false },
    ],
  },
  {
    question: "Who became the next president after President Akufo Addo?",
    answers: [
      { text: "Atta Mills", correct: false },
      { text: "J.A.Kuffor", correct: false },
      { text: "Dr. Bawumia", correct: false },
      { text: "Dramani Mahamma", correct: true },
    ],
  },
  {
    question: "How many people were killed in the helicopter crash in the year 2025?",
    answers: [
      { text: "4", correct : false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "6", correct: false },
    ],
  },
  {
    question: "The headquarters of the Ghana Armed force is called?",
    answers: [
      { text: "Military Camp", correct: false },
      { text: "Kotoka", correct: false },
      { text: "Burma Camp", correct: true },
      { text: "Flagstaff House", correct: false },
    ],
  },
  {
    question: "Who lead the the Ghana coup in June 4, 1979? ",
    answers: [
      { text: "Dramani Mahama", correct: false },
      { text: "Atta Mills", correct: false },
      { text: "Jerry John Rawlings", correct: true },
      { text: "J. A. Kuffour", correct: false },
    ],
  },
  {
    question: "The Larabanga Mosque is in the .......... Region.",
    answers: [
      { text: "Western", correct: false },
      { text: "Northern", correct: true },
      { text: "Central", correct: false },
      { text: "Asante", correct: false },
    ],
  },
  {
    question: "All the foloowing can me found on the desktop except?",
    answers: [
      { text: "Wallpaper", correct: false },
      { text: "Taskbar", correct: false },
      { text: "Icons", correct: false },
      { text: "Start menu", correct: true },
    ],
  },
  {
    question: "When you click on the Start-button you see the ...........",
    answers: [
      { text: "Wallpaper", correct: false },
      { text: "Taskbar", correct: false },
      { text: "Start menu", correct: true },
      { text: "Icons", correct: false },
    ],
  },
  {
    question: "The Gbewaa Palace was nemed after?",
    answers: [
      { text: "Ya Na", correct: false },
      { text: "A lion", correct: false },
      { text: "Tohazie", correct: true },
      { text: "Gbewa", correct: false },
    ],
  },
  {
    question: "In which year was the James Town Light House built?",
    answers: [
      { text: "1960", correct: false },
      { text: "1885", correct: false },
      { text: "1871", correct: true },
      { text: "1930", correct: false },
    ],
  },
  {
    question: "........... had a dream to build the Larabanga mosque.",
    answers: [
      { text: "Mohammed", correct: false },
      { text: "Ayuba", correct: true },
      { text: "Ibrahim", correct: false },
      { text: "Jesus Christ", correct: false },
    ],
  },
  {
    question: "The old Navrongo Catholic Cathedral is located in ............region",
    answers: [
      { text: "Eastern", correct: false },
      { text: "Upper west", correct: false },
      { text: "North east", correct: false },
      { text: "Upper east ", correct: true },
    ],
  },
  {
    question: "9 x 3 =",
    answers: [
      { text: "39", correct : false },
      { text: "37", correct: false },
      { text: "27", correct: true },
      { text: "29", correct: false },
    ],
  },
  {
    question: "The Okomfo Anokye's Sword was once removed.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },

    ],
  },
  {
    question: "Tohazie is also known as ",
    answers: [
      { text: "Gbewaa", correct: false },
      { text: "The Strong King", correct: false },
      { text: "The Red Hunter", correct: true },
      { text: "The black panther", correct: false },
    ],
  },
  {
    question: "The oldest Mosque in Ghana was built in the year.....",
    answers: [
      { text: "1461", correct: false },
      { text: "1421", correct: true },
      { text: "1831", correct: false },
      { text: "1966", correct: false },
    ],
  },
  {
    question: "The Gwollu and Nalerigu defence Walls were built mainly against",
    answers: [
      { text: "Strangers from coming", correct: false },
      { text: "War", correct: false },
      { text: "The British", correct: false },
      { text: "SLave raiders", correct: true },
    ],
  },
  {
    question: "Which of these os not a historical location in Ghana",
    answers: [
      { text: "Gbewaa Palace", correct: false },
      { text: "James Town Light House", correct: false },
      { text: "Eifel Tower", correct: true },
      { text: "Nzulezu Stilt Settlement", correct: false },
    ],
  },
  {
    question: "The new year day falls exactly one week after ",
    answers: [
      { text: "The trial of Jesus", correct: false },
      { text: "The death Jesus", correct: false },
      { text: "The birth of Jesus", correct: true },
      { text: "The resurrection of Jesus", correct: false },
    ],
  },
  {
    question: "In the christmas season, christians sing......",
    answers: [
      { text: "worship", correct: false },
      { text: "hymes", correct: false },
      { text: "carols", correct: true },
      { text: "gospel", correct: false },
    ],
  },
  {
    question: "Muslims celebrate christmas to honour Prophet Mohammed.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
     
    ],
  },
  {
    question: "The death and resurrection of Jesus Christ happened in the period of?",
    answers: [
      { text: "Good friday", correct: false },
      { text: "Pentecost day", correct: false },
      { text: "Christmas", correct: false },
      { text: "Easter", correct: true },
    ],
  },
  {
    question: "Hogbetsotso is celebrated by the",
    answers: [
      { text: "Asantes", correct : false },
      { text: "Effutus", correct: false },
      { text: "Anlos", correct: true },
      { text: "Dagombas", correct: false },
    ],
  },
  {
    question: "which people celebrates Homowo?",
    answers: [
      { text: "Fantes", correct: false },
      { text: "Ewes", correct: false },
      { text: "Gas", correct: true },
      { text: "Asantes", correct: false },
    ],
  },
  {
    question: "The Akyem people celebrates.......",
    answers: [
      { text: "Adae", correct: false },
      { text: "Odwira", correct: false },
      { text: "Ohum", correct: true },
      { text: "Bakatue", correct: false },
    ],
  },
  {
    question: "Odwira simply means .............",
    answers: [
      { text: "Animal", correct: false },
      { text: "Purification", correct: true },
      { text: "Meditation", correct: false },
      { text: "Sanitation", correct: false },
    ],
  },
  {
    question: "The rectangular area that the operating system uses to open program, documents and files is called?",
    answers: [
      { text: "Start button", correct: false },
      { text: "Program", correct: false },
      { text: "Desktop", correct: false },
      { text: "Window", correct: true },
    ],
  },
  {
    question: "We can save or store our files in a folder.",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
 
    ],
  },
  {
    question: "Where can we find the Time and date on the desktop",
    answers: [
      { text: "On the wallpaper", correct: false },
      { text: "Left side of the Taskbar", correct: false },
      { text: "Right side of the Taskbar", correct: true },
      { text: "In the middle of the Taskbar", correct: false },
    ],
  },
  {
    question: "A file is an object on the computer that stores data,information, settings and commands.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      
    ],
  },
  {
    question: "James ........... very fast on the high way",
    answers: [
      { text: "drive", correct: false },
      { text: "drives", correct: true },
      { text: "drivers", correct: false },
      { text: "driving", correct: false },
    ],
  },
  {
    question: "Where can we find our deleted files?",
    answers: [
      { text: "Icon", correct: false },
      { text: "Start menu", correct: false },
      { text: "Folder", correct: false },
      { text: "Recycle bin", correct: true },
    ],
  },
  {
    question: "4 unit to the right of -8",
    answers: [
      { text: "8", correct : false },
      { text: "4", correct: false },
      { text: "-4", correct: true },
      { text: "-5", correct: false },
    ],
  },
  {
    question: "4 x 8 = 32",
    answers: [
      { text: "True", correct: true },
      { text: "Fale", correct: false },

    ],
  },
  {
    question: ".............. is made up of all the living and non-living things in an area",
    answers: [
      { text: "Family", correct: false },
      { text: "community", correct: false },
      { text: "Ecosystem", correct: true },
      { text: "Forest", correct: false },
    ],
  },
  {
    question: "All the following are examples of Ecosystem except?",
    answers: [
      { text: "Forest", correct: false },
      { text: "Air", correct: true },
      { text: "Pond", correct: false },
      { text: "Savannah", correct: false },
    ],
  },
  {
    question: "How many days does the moon revolve around the sun",
    answers: [
      { text: "7", correct: false },
      { text: "31", correct: false },
      { text: "30", correct: false },
      { text: "28", correct: true },
    ],
  },
  {
    question: "The part of the earth that faces the sun is in the.......time",
    answers: [
      { text: "hot", correct: false },
      { text: "dark", correct: false },
      { text: "day", correct: true },
      { text: "night", correct: false },
    ],
  },
  {
    question: "Which two planets do not have moon",
    answers: [
      { text: "Venus and Uranus", correct: false },
      { text: "Jupiter and Mercury", correct: false },
      { text: "Mecury and Venus", correct: true },
      { text: "Venus and Mars", correct: false },
    ],
  },
  {
    question: "Which planet is the smallest in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "Saturn is the largest planet and has a red spot on it surface",
    answers: [
      { text: "True", correct: true  }, 
      { text: "Fale", correct: false },
      
    ],
  },
  {
    question: "Which of these is dwarf planet",
    answers: [
      { text: "Uranus", correct: false },
      { text: "Moon", correct: false },
      { text: "Mars", correct: false },
      { text: "Pluto", correct: true },
    ],
  },
  {
    question: "Which planet is the closest to the sun",
    answers: [
      { text: "Jupiter", correct : false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "A ............ revolves aound a planet.",
    answers: [
      { text: "moon", correct: false },
      { text: "planet", correct: false },
      { text: "satellite", correct: true },
      { text: "star", correct: false },
    ],
  },
  {
    question: "Venus is a planet covered with red dust.",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
     
    ],
  },
  {
    question: "Which planet is the coldest planet and cannot support life?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Neptune", correct: true },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "The ......... holds undigested food.",
    answers: [
      { text: "Oesophagus", correct: false },
      { text: "Stomach", correct: false },
      { text: "Small intestine", correct: false },
      { text: "Large intestine", correct: true },
    ],
  },
  {
    question: "The .......... absorbs most of the nutrient and minerals from digested food into the body.",
    answers: [
      { text: "large intestine", correct: false },
      { text: "liver", correct: false },
      { text: "small intestine", correct: true },
      { text: "stomach", correct: false },
    ],
  },
  {
    question: "There are ...... planets in our solar system",
    answers: [
      { text: "seven", correct: false },
      { text: "nine", correct: false },
      { text: "eight", correct: true },
      { text: "six", correct: false },
    ],
  },
  {
    question: "ZXCVBNM,.? are examples of the ........... keys",
    answers: [
      { text: "Number row", correct: false },
      { text: "Home row", correct: false },
      { text: "Bottom row", correct: true },
      { text: "Top row", correct: false },
    ],
  },
  {
    question: "QWERTYUIOP is an example of?",
    answers: [
      { text: "Bottom row keys", correct: false },
      { text: "Top row keys", correct: true },
      { text: "Home row keys", correct: false },
      { text: "Number row keys", correct: false },
    ],
  },
  {
    question: "The Personal Computer has ......... basic parts",
    answers: [
      { text: "five", correct: false },
      { text: "two", correct: false },
      { text: "three", correct: false },
      { text: "four", correct: true },
    ],
  },
  {
    question: "......... are part of the body that performs special task.",
    answers: [
      { text: "Skeleton", correct : false },
      { text: "Blood", correct: false },
      { text: "Organs", correct: true },
      { text: "Eyes", correct: false },
    ],
  },
  {
    question: "Our computer wallpaper canonot be changed, true or false?",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },

    ],
  },
  {
    question: "Which of the following is not a use of a computer mouse?",
    answers: [
      { text: "Highlighting", correct: false },
      { text: "Clicking", correct: false },
      { text: "Typing", correct: true },
      { text: "Play games", correct: false },
    ],
  },
  {
    question: "One can use ........ to clean character from left to right?",
    answers: [
      { text: "Space bar key", correct: false },
      { text: "Delete key", correct: true },
      { text: "Back space key", correct: false },
      { text: "Capslock key", correct: false },
    ],
  },
  {
    question: "Whick key is used to type in capital letters?",
    answers: [
      { text: "Back space key", correct: false },
      { text: "Enter key", correct: false },
      { text: "Space bar key", correct: false },
      { text: "Capslock key", correct: true },
    ],
  },
  {
    question: "when typing we use the ............ kry to go to the next line.",
    answers: [
      { text: "Capslock", correct: false },
      { text: "Back space", correct: false },
      { text: "Enter", correct: true },
      { text: "Space bar", correct: false },
    ],
  },
  {
    question: "To make spaces between words we use the .......... key on the keyboard.",
    answers: [
      { text: "Delete", correct: false },
      { text: "Enter", correct: false },
      { text: "Space bar", correct: true },
      { text: "Shift", correct: false },
    ],
  },
  {
    question: "We can also used the Shift key to type capital letters.",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
  },
  {
    question: "8 to the power of 2 is equal to 64, true or false?",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
     
    ],
  },
  {
    question: "9 to the power of 2 is",
    answers: [
      { text: "40", correct: false },
      { text: "18", correct: false },
      { text: "91", correct: false },
      { text: "81", correct: true },
    ],
  },
  {
    question: "Efia shared 45 toffees for her 9 friends. How many did each get?",
    answers: [
      { text: "7", correct : false },
      { text: "8", correct: false },
      { text: "5", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "7 unit to the left of 4 is....",
    answers: [
      { text: "-4", correct: false },
      { text: "-2", correct: false },
      { text: "-3", correct: true },
      { text: "-7", correct: false },
    ],
  },
  {
    question: "7 x 9 = ?",
    answers: [
      { text: "65", correct: false },
      { text: "54", correct: false },
      { text: "63", correct: true },
      { text: "72", correct: false },
    ],
  },
  {
    question: "which of these is a mammal",
    answers: [
      { text: "Eagle", correct: false },
      { text: "Elephant", correct: true },
      { text: "Snake", correct: false },
      { text: "Mosquito", correct: false },
    ],
  },
  {
    question: "Verebrates are animals ..........",
    answers: [
      { text: "that live in water", correct: false },
      { text: "that can fly", correct: false },
      { text: "with hair on their body", correct: false },
      { text: "with backbones", correct: true },
    ],
  },
  {
    question: "Invertebrates animals do not have back bones.",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
 
    ],
  },
  {
    question: "Which of these animals is a carnivores?",
    answers: [
      { text: "Lizard", correct: false },
      { text: "Snail", correct: false },
      { text: "Lion", correct: true },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "The fastest bird on earth is ",
    answers: [
      { text: "Ostrich", correct: false },
      { text: "Eagle", correct: false },
      { text: "Peregrine Falcon", correct: true },
      { text: "hawk", correct: false },
      
    ],
  },
  {
    question: "Which of these plants is a climbing plant?",
    answers: [
      { text: "Mango", correct: false },
      { text: "Grapes", correct: true },
      { text: "Apple", correct: false },
      { text: "Dandelion", correct: false },
    ],
  },
  {
    question: "A salamander is an example of ........",
    answers: [
      { text: "Bird", correct: false },
      { text: "Insect", correct: false },
      { text: "Mammal", correct: false },
      { text: "Amphibians", correct: true },
    ],
  },
  {
    question: "Which group of animals can live both on land and in water?",
    answers: [
      { text: "Fish", correct : false },
      { text: "Reptiles", correct: false },
      { text: "Amphibians", correct: true },
      { text: "Mammals", correct: false },
    ],
  },
  {
    question: "Some birds have four limbs. True or False",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      

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
    // Stop background music
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    
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
  
  // Pause the background music
  backgroundMusic.pause();
  
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
  
  // Resume the background music
  backgroundMusic.play().catch(error => console.log("Audio playback failed:", error));
  
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
  
  // Play background music
  backgroundMusic.play().catch(error => console.log("Audio playback failed:", error));
  
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
    // Play correct answer sound
    playSound(correctSound);
    // show sparkle effect for correct answer
    showSparkle();
  } else {
    // Play wrong answer sound
    playSound(wrongSound);
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

function playSound(audioElement) {
  // Reset the audio to the beginning
  audioElement.currentTime = 0;
  // Play the sound
  audioElement.play().catch(error => console.log("Sound playback failed:", error));
}

function createConfetti() {
  // Create confetti particles for celebration
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
  const container = document.body;
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    
    container.appendChild(confetti);
    
    // Animate confetti falling
    const duration = 2000 + Math.random() * 1000;
    const startX = parseFloat(confetti.style.left);
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        confetti.style.top = (progress * window.innerHeight) + 'px';
        confetti.style.left = (startX + Math.sin(progress * Math.PI * 4) * 100) + 'px';
        confetti.style.opacity = 1 - progress;
        requestAnimationFrame(animate);
      } else {
        confetti.remove();
      }
    };
    
    requestAnimationFrame(animate);
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
  // Stop background music
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  
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
    resultMessage.classList.add("perfect-score");
    playSound(congratSound);
    createConfetti();
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! Very soon you'll be a pro!";
    playSound(congratSound);
    createConfetti();
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

