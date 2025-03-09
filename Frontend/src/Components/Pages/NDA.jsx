import React from 'react';
import TestCard from '../Cards/TestCard';
import Footer from '../Utility/Footer';
import Navbar from '../Utility/Navbar';

export default function NDA() {
    const exams = [
        {
            ExamPhoto: "https://example.com/sample-exam.jpg",
            ExamSet: "NDA 2024 GAT SET-1",
            ExamRule1: "The GAT has 150 questions, with 50 on English and 100 on General Knowledge.",
            ExamRule2: "Each correct answer is worth 4 marks, and each incorrect answer deducts 1.33 marks.",
            ExamRule3: "The GAT is worth 600 points in the NDA exam."
        },
        {
            ExamPhoto: "https://example.com/sample-exam.jpg",
            ExamSet: "NDA 2024 GAT SET-2",
            ExamRule1: "150 questions total: 50 on English, 100 on General Knowledge.",
            ExamRule2: "4 marks per correct answer, -1.33 for incorrect.",
            ExamRule3: "Total 600 points in this section."
        },
        {
            ExamPhoto: "https://example.com/sample-exam.jpg",
            ExamSet: "NDA 2024 GAT SET-3",
            ExamRule1: "The paper consists of 150 multiple-choice questions.",
            ExamRule2: "Negative marking: 1.33 marks per wrong answer.",
            ExamRule3: "Overall score: 600 points."
        },
    ];

    return (
        <div className="bg-darkbg min-h-screen flex flex-col">
            <Navbar />
            
            <div className="py-5 px-4 gap-7 flex flex-col justify-center">
                {exams.map((exam, index) => (
                    <TestCard key={index} {...exam} />
                ))}
            </div>

            <Footer />
        </div>
    );
}
