import React from 'react'
import { useEffect, useState } from 'react';
import { Box, Checkbox, Select, Text } from '@chakra-ui/react';

const questions = [
    {
        "id": 1,
        "question": "What is 375 + 250?",
        "options": [620, 625, 436, 735],
        "answer": 625
    },
    {
        "id": 2,
        "question": "Multiply 15 by 8.",
        "options": [80, 120, 108, 92],
        "answer": 120
    },
    {
        "id": 3,
        "question": "Subtract 540 from 750.",
        "options": [180, 210, 300, 320],
        "answer": 210
    },
    {
        "id": 4,
        "question": "Divide 250 by 5.",
        "options": [50, 45, 40, 55],
        "answer": 50
    },
    {
        "id": 5,
        "question": "What is 30% of 150?",
        "options": [40, 35, 50, 45],
        "answer": 45
    },
    {
        "id": 6,
        "question": "Convert 15 minutes into seconds.",
        "options": [900, 750, 600, 1000],
        "answer": 900
    },
    {
        "id": 7,
        "question": "If you are flying at 200 mph, how far will you travel in 2.5 hours?",
        "options": [500, 600, 400, 450],
        "answer": 500
    },
    {
        "id": 8,
        "question": "What is the square root of 256?",
        "options": [12, 16, 18, 20],
        "answer": 16
    },
    {
        "id": 9,
        "question": "If a plane is flying at 600 mph, how many minutes will it take to travel 200 miles?",
        "options": [12, 15, 18, 20],
        "answer": 20
    },
    {
        "id": 10,
        "question": "What is 75% of 200?",
        "options": [100, 150, 125, 175],
        "answer": 150
    },
    {
        "id": 11,
        "question": "If fuel costs $4.25 per gallon and you buy 50 gallons, how much will it cost?",
        "options": ["$200.00", "$212.50", "$225.00", "$187.50"],
        "answer": "$212.50"
    },
    {
        "id": 12,
        "question": "Multiply 36 by 25.",
        "options": [850, 950, 900, 1080],
        "answer": 900
    },
    {
        "id": 13,
        "question": "What is 8 cubed?",
        "options": [512, 729, 216, 64],
        "answer": 512
    },
    {
        "id": 14,
        "question": "If your flight distance is 300 miles and you are flying at 75 mph, how long will it take you?",
        "options": [2, 3, 4, 5],
        "answer": 4
    },
    {
        "id": 15,
        "question": "What is the sum of the angles in a triangle?",
        "options": ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        "answer": "180 degrees"
    },
    {
        "id": 16,
        "question": "Convert 300 nautical miles to statute miles. (1 nautical mile = 1.15 statute miles)",
        "options": [310, 345, 280, 400],
        "answer": 345
    },
    {
        "id": 17,
        "question": "If your aircraft burns 45 gallons of fuel per hour, how much will it burn in 2.25 hours?",
        "options": [95, 101.25, 108, 112.5],
        "answer": 101.25
    },
    {
        "id": 18,
        "question": "Subtract 360 from 720.",
        "options": [300, 360, 400, 420],
        "answer": 360
    },
    {
        "id": 19,
        "question": "What is the sum of the numbers from 1 to 10?",
        "options": [45, 55, 65, 75],
        "answer": 55
    },
    {
        "id": 20,
        "question": "Divide 800 by 40.",
        "options": [15, 18, 20, 22],
        "answer": 20
    },
    {
        "id": 21,
        "question": "What is 50% of 600?",
        "options": [200, 250, 275, 300],
        "answer": 300
    },
    {
        "id": 22,
        "question": "Multiply 22 by 4.",
        "options": [84, 88, 92, 96],
        "answer": 88
    },
    {
        "id": 23,
        "question": "Convert 4 hours into minutes.",
        "options": [140, 180, 200, 220],
        "answer": 240
    },
    {
        "id": 24,
        "question": "Subtract 325 from 500.",
        "options": [125, 150, 175, 200],
        "answer": 175
    },
    {
        "id": 25,
        "question": "If your cruising speed is 500 mph and your destination is 2500 miles away, how many hours will it take to reach your destination?",
        "options": [4, 5, 6, 7],
        "answer": 5
    },
    {
        "id": 26,
        "question": "What is the square root of 144?",
        "options": [10, 12, 14, 16],
        "answer": 12
    },
    {
        "id": 27,
        "question": "If you are flying at 150 knots, how far will you travel in 3 hours? (1 knot = 1.15 mph)",
        "options": [345, 400, 460, 517.5],
        "answer": 517.5
    },
    {
        "id": 28,
        "question": "What is 35% of 400?",
        "options": [100, 120, 140, 160],
        "answer": 140
    },
    {
        "id": 29,
        "question": "Multiply 27 by 3.",
        "options": [72, 78, 81, 87],
        "answer": 81
    },
    {
        "id": 30,
        "question": "Divide 270 by 9.",
        "options": [25, 28, 30, 33],
        "answer": 30
    },
    {
        "id": 31,
        "question": "Convert 90 minutes into hours.",
        "options": [1, 1.25, 1.5, 1.75],
        "answer": 1.5
    },
    {
        "id": 32,
        "question": "What is the sum of the first 20 natural numbers?",
        "options": [180, 200, 210, 220],
        "answer": 210
    },
    {
        "id": 33,
        "question": "If a plane travels at 550 mph, how many miles will it cover in 15 minutes?",
        "options": [125, 137.5, 150, 162.5],
        "answer": 137.5
    },
    {
        "id": 34,
        "question": "Convert 5 hours into seconds.",
        "options": [15000, 16200, 18000, 19400],
        "answer": 18000
    },
    {
        "id": 35,
        "question": "Multiply 70 by 8.",
        "options": [480, 520, 560, 600],
        "answer": 560
    },
    {
        "id": 36,
        "question": "If a plane can fly 850 miles with 50 gallons of fuel, how many miles can it fly with 75 gallons of fuel?",
        "options": [1100, 1150, 1200, 1275],
        "answer": 1275
    },
    {
        "id": 37,
        "question": "Subtract 420 from 900.",
        "options": [380, 420, 460, 480],
        "answer": 480
    },
    {
        "id": 38,
        "question": "What is 25% of 200?",
        "options": [40, 50, 60, 70],
        "answer": 50
    },
    {
        "id": 39,
        "question": "Multiply 12 by 9.",
        "options": [92, 98, 104, 108],
        "answer": 108
    },
    {
        "id": 40,
        "question": "Divide 600 by 5.",
        "options": [100, 110, 120, 130],
        "answer": 120
    },
    {
        "id": 41,
        "question": "Convert 2.5 hours into minutes.",
        "options": [120, 135, 150, 165],
        "answer": 150
    },
    {
        "id": 42,
        "question": "What is the square root of 121?",
        "options": [9, 10, 11, 12],
        "answer": 11
    },
    {
        "id": 43,
        "question": "If a plane is traveling at 450 mph, how many miles will it cover in 30 minutes?",
        "options": [112.5, 180, 202.5, 225],
        "answer": 225
    },
    {
        "id": 44,
        "question": "What is 45% of 500?",
        "options": [175, 200, 225, 250],
        "answer": 225
    },
    {
        "id": 45,
        "question": "Multiply 16 by 7.",
        "options": [96, 104, 112, 120],
        "answer": 112
    },
    {
        "id": 46,
        "question": "Divide 540 by 6.",
        "options": [80, 90, 100, 110],
        "answer": 90
    },
    {
        "id": 47,
        "question": "Convert 3.5 hours into seconds.",
        "options": [10800, 12600, 14400, 16200],
        "answer": 12600
    },
    {
        "id": 48,
        "question": "Subtract 250 from 400.",
        "options": [100, 125, 150, 175],
        "answer": 150
    },
    {
        "id": 49,
        "question": "What is the sum of the numbers from 1 to 100?",
        "options": [4950, 5000, 5050, 5100],
        "answer": 5050
    },
    {
        "id": 50,
        "question": "If a car is traveling at 60 mph, how far will it travel in 2.5 hours?",
        "options": [120, 140, 150, 160],
        "answer": 150
    }
]


const QuestionScreen = ({ onScoreChange }) => {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    let [qc, setQc] = useState(1);

    useEffect(() => {
        // Update the current question every 20 seconds
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * questions.length);
            setCurrentQuestion(questions[randomIndex]);
            setSelectedOptions([]);
            setQc((curr) => curr + 1);
        }, 20000);

        return () => clearInterval(interval);
    }, []);

    const handleOptionSelect = (event, option) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
        }

        if (isChecked && option === currentQuestion.answer) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    console.log(score)

    useEffect(() => {
        let sc = Math.floor((score / qc) * 100);
        onScoreChange(sc, "questionScore");
    }, [score])

    return (
        <Box p={4} textAlign="center">
            <Text fontSize="xl" fontWeight="bold" mb={4} color={"white"} bg={"red"} borderRadius={"5px"}>
                MathMatical
            </Text>
            {currentQuestion && (
                <>
                    <Text fontSize="xl" mb={4} color={"white"} bg={"blue"} p={"5px"} textAlign={"left"} borderRadius={"5px"} >
                        Q:{qc} {currentQuestion.question}
                    </Text>
                    <Box maxWidth="md" mx="auto" color={"white"} display={"flex"} flexDirection={"column"} bg={"green"} pl={"20px"} borderRadius={"5px"}>
                        {currentQuestion.options.map((option) => (
                            <Checkbox
                                key={option}
                                value={option}
                                isChecked={selectedOptions.includes(option)}
                                onChange={(event) => handleOptionSelect(event, option)}
                            >
                                {option}
                            </Checkbox>
                        ))}
                    </Box>
                </>
            )}
        </Box>
    );
}

export default QuestionScreen