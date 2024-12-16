const questions = {
    1: [
        { question: "What color do you get by mixing red and white?", options: ["Pink", "Purple", "Orange", "Brown"], answer: 0 },
        { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: 1 },
        { question: "What is the capital of the United States?", options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"], answer: 1 },
        { question: "Which animal is known as the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Giraffe"], answer: 0 },
        { question: "What do bees produce?", options: ["Honey", "Wax", "Silk", "Milk"], answer: 0 },
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 }
    ],
    2: [
        { question: "What is the largest planet in our solar system?", options: ["Mars", "Earth", "Jupiter", "Saturn"], answer: 2 },
        { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
        { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
        { question: "What do you call a baby cat?", options: ["Kitten", "Puppy", "Cub", "Foal"], answer: 0 },
        { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Ruby"], answer: 2 },
        { question: "What is the freezing point of water?", options: ["0°C", "32°F", "100°C", "212°F"], answer: 0 }
    ],
    3: [
        { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Pepper", "Onion"], answer: 1 },
        { question: "How many bones are in the human body?", options: ["206", "208", "210", "212"], answer: 0 },
        { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: 2 },
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 1 },
        { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2 },
        { question: "What is H2O commonly known as?", options: ["Oxygen", "Water", "Hydrogen", "Carbon Dioxide"], answer: 1 }
    ],
    4: [
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"], answer: 2 },
        { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: 2 },
        { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
        { question: "What is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: 1 },
        { question: "Which element has the chemical symbol 'O'?", options: ["Osmium", "Oxygen", "Oganesson", "Olivine"], answer: 1 },
        { question: "What is the main language spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], answer: 2 }
    ],
    5: [
        { question: "What is the capital of Italy?", options: ["Rome", "Venice", "Milan", "Florence"], answer: 0 },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], answer: 2 },
        { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "MgCl2", "CaCO3"], answer: 0 },
        { question: "Which famous scientist developed the theory of relativity?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"], answer: 2 },
        { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: 1 },
        { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Ruby"], answer: 2 }
    ],
    6: [
        { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], answer: 0 },
        { question: "What is the main ingredient in bread?", options: ["Flour", "Sugar", "Yeast", "Salt"], answer: 0 },
        { question: "Which planet is known as the Morning Star?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 0 },
        { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "Nauru", "Malta"], answer: 1 },
        { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Brisbane"], answer: 1 },
        { question: "What is the largest continent?", options: ["Africa", "Asia", "North America", "Europe"], answer: 1 }
    ]
};

let currentQuestionIndex = 0;
let currentGrade = 1;
let score = 0;

document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('next-button').addEventListener('click', nextQuestion);

function startQuiz() {
    currentGrade = document.getElementById('grade').value;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('grade-selection').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentGrade][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-button').style.display = 'none'; // Hide next button
}

function selectOption(index) {
    const questionData = questions[currentGrade][currentQuestionIndex];
    if (index === questionData.answer) {
        score++;
    }
    
    if (currentQuestionIndex < questions[currentGrade].length - 1) {
        document.getElementById('next-button').style.display = 'block'; // Show next button
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result').innerText = `You scored ${score} out of ${questions[currentGrade].length}`;
    document.getElementById('result').style.display = 'block';
}