export const Constants = {
    questions: [
      {
        id: 0,
        question: "What is the longest Surah in the Quran?",
        type: "choices",
        choices: [
          "Surah Al-Baqarah",
          "Surah Al-Fatiha",
          "Surah Al-Kahf",
          "Surah Al-Ikhlas",
        ],
        correctAnswer: "Surah Al-Baqarah",
      },
      {
        id: 1,
        question: "How many verses are there in Surah Al-Fatiha?",
        type: "choices",
        choices: ["3", "5", "7", "9"],
        correctAnswer: "7",
      },
      {
        id: 2,
        question: "Which Surah is known as the 'Heart of the Quran'?",
        type: "choices",
        choices: [
          "Surah Yasin",
          "Surah Al-Fatiha",
          "Surah Al-Kahf",
          "Surah Al-Ikhlas",
        ],
        correctAnswer: "Surah Yasin",
      },
      {
        id: 3,
        question: "What is the name of the angel who brought revelation to Prophet Muhammad (PBUH)?",
        type: "choices",
        choices: ["Angel Jibril (Gabriel)", "Angel Mikail (Michael)", "Angel Israfil", "Angel Azrael"],
        correctAnswer: "Angel Jibril (Gabriel)",
      },
      {
        id: 4,
        question: "How many Surahs are there in the Quran?",
        type: "choices",
        choices: ["100", "114", "120", "130"],
        correctAnswer: "114",
      },
      {
        id: 5,
        question: "What is the name of the first revelation in the Quran?",
        type: "choices",
        choices: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah al-'Alaq", "Surah Al-Ikhlas"],
        correctAnswer: "Surah al-'Alaq",
      },
      {
        id: 6,
        question: "How many Paara or Juz (parts) are there in the Quran?",
        type: "choices",
        choices: ["10", "20", "30", "40"],
        correctAnswer: "30",
      },
      {
        id: 7,
        question: "How many times is the word 'Allah' mentioned in the Quran?",
        type: "choices",
        choices: ["2698", "3090", "5200", "7056"],
        correctAnswer: "2698",
      },
      {
        id: 8,
        question: "Which is the smallest Surah in the Quran?",
        type: "choices",
        choices: ["Surah-al-Fatihah", "Surah-al-Kausar", "Surah-al-Baqarah", "Surah-al-Taubah"],
        correctAnswer: "Surah-al-Kausar",
      },
      {
        id: 9,
        question: "Which Surah is known as the 'Surah of Light'?",
        type: "choices",
        choices: ["Surah An-Nur", "Surah Al-Kahf", "Surah Al-Baqarah", "Surah Al-Ikhlas"],
        correctAnswer: "Surah An-Nur",
      }
    ]
}


export const resultInitialState={
  score:0,
  correctAnswers:0,
  wrongAnswers:0
}