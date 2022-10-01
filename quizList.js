const quizess = reactive([
    {
        id: 1,
        title: 'About bangladesh',
        username: '',
        questions: [
            {
                id: 1,
                title: 'What is the capital of bangladesh?',
                correct_ans: ['A'],
                choosen_ans: [],
                options: {
                    A: 'Dhaka',
                    B: 'Rajshahi',
                    C: 'Barishal',
                    D: 'Bogura'
                }
            },
            {
                id: 2,
                title: 'Which of the following is true?',
                correct_ans: ['A'],
                choosen_ans: [],
                options:
                {
                    A: 'Bangladesh is the 92nd largest country by area and 8th largest by population',
                    B: 'Bangladesh is the 48th largest country by area and 75th largest by population',
                    C: 'Bangladesh is the 114th largest country by area and 92nd largest by population',
                    D: 'Bangladesh is the 63rd largest country by area and 48th largest by population'
                }

            },
            {
                id: 3,
                title: `Bangladesh's GDP (Gross Domestic Product) is the ______ fastest growing in world.`,
                correct_ans: ['A'],
                choosen_ans: [],
                options:
                {
                    A: 'First',
                    B: 'Fifth',
                    C: 'Third',
                    D: 'Seventh'
                }
            },
            {
                id: 4,
                title: `What is the main source of energy in Bangladesh?`,
                correct_ans: ['A'],
                choosen_ans: [],
                options:
                {
                    A: 'Geothermal',
                    B: 'Wind',
                    C: 'Oil',
                    D: 'Nuclear',
                    E: 'Hydropower',
                    F: 'Natural Gas'
                },
            },
            {
                id: 5,
                title: `Somapura Mahavihara is one of Bangladesh's most famous archealogical sites. What is it?`,
                correct_ans: ['A'],
                choosen_ans: [],
                options: {
                    A: 'A never-completed fortress',
                    B: 'The remains of an ancient city',
                    C: 'A Buddhist monastery',
                    D: 'A hillside covered in massive stone pillars',
                },
            },
        ]
    }
])

export default quizess