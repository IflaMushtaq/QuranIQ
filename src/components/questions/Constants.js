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
        choices: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah An-Nas", "Surah Al-Ikhlas"],
        correctAnswer: "Surah Al-Alaq",
      },
      {
        id: 6,
        question: "Who was the first female martyr in Islam?",
        type: "choices",
        choices: ["Sumayyah bint Khayyat", "Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Khadijah bint Khuwaylid"],
        correctAnswer: "Sumayyah bint Khayyat",
      },
      {
        id: 7,
        question: "How many times is the word 'Allah' mentioned in the Quran?",
        type: "choices",
        choices: ["2698", "3000", "5000", "7000"],
        correctAnswer: "2698",
      },
      {
        id: 8,
        question: "Who was the first Caliph after the death of Prophet Muhammad (PBUH)?",
        type: "choices",
        choices: ["Abu Bakr", "Umar ibn Al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        correctAnswer: "Abu Bakr",
      },
      {
        id: 9,
        question: "Which Surah is known as the 'Surah of Light'?",
        type: "choices",
        choices: ["Surah An-Nur", "Surah Al-Kahf", "Surah Al-Baqarah", "Surah Al-Ikhlas"],
        correctAnswer: "Surah An-Nur",
      },
      {
        id: 10,
        question: "What is the name of the well mentioned in the story of Prophet Yusuf (Joseph)?",
        type: "choices",
        choices: ["Zamzam", "Hajar", "Arafat", "Jacob's Well"],
        correctAnswer: "Jacob's Well",
      },
      {
        id: 11,
        question: "Which Surah is known as the 'Surah of Forgiveness'?",
        type: "choices",
        choices: ["Surah Al-Ghafir", "Surah Al-Fatiha", "Surah Al-Kahf", "Surah Al-Ikhlas"],
        correctAnswer: "Surah Al-Ghafir",
      },
      {
        id: 12,
        question: "What is the name of the city mentioned in the story of Prophet Musa (Moses)?",
        type: "choices",
        choices: ["Madinah", "Makkah", "Cairo", "Tunis"],
        correctAnswer: "Cairo",
      },
      {
        id: 13,
        question: "Who was the mother of Prophet Isa (Jesus)?",
        type: "choices",
        choices: ["Maryam (Mary)", "Aasiyah", "Khadijah", "Hannah"],
        correctAnswer: "Maryam (Mary)",
      }
    ]
}


export const resultInitialState={
  score:0,
  correctAnswers:0,
  wrongAnswers:0
}