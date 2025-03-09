import React from 'react'
import TestCard from '../Cards/TestCard'
import Footer from '../Utility/Footer'
import Navbar from '../Utility/Navbar'

export default function NDA() {
    return (
        <div className=' bg-darkbg min-h-screen'>
            <Navbar />
            <div className=' py-5 flex flex-col gap-7  '>

                <TestCard
                    ExamPhoto="https://example.com/sample-exam.jpg"
                    ExamSet="NDA 2024 GAT SET-1"
                    ExamRule1="The GAT has 150 questions, with 50 questions on English and 100 questions on General Knowledge "
                    ExamRule2="Each correct answer is worth 4 marks, and each incorrect answer deducts 1.33 marks "
                    ExamRule3="The GAT is worth 600 points in the NDA exam "
                />

                <TestCard
                    ExamPhoto="https://example.com/sample-exam.jpg"
                    ExamSet="NDA 2024 GAT SET-1"
                    ExamRule1="The GAT has 150 questions, with 50 questions on English and 100 questions on General Knowledge "
                    ExamRule2="Each correct answer is worth 4 marks, and each incorrect answer deducts 1.33 marks "
                    ExamRule3="The GAT is worth 600 points in the NDA exam "
                />

                <TestCard
                    ExamPhoto="https://example.com/sample-exam.jpg"
                    ExamSet="NDA 2024 GAT SET-1"
                    ExamRule1="The GAT has 150 questions, with 50 questions on English and 100 questions on General Knowledge "
                    ExamRule2="Each correct answer is worth 4 marks, and each incorrect answer deducts 1.33 marks "
                    ExamRule3="The GAT is worth 600 points in the NDA exam "
                />

                <TestCard
                    ExamPhoto="https://example.com/sample-exam.jpg"
                    ExamSet="NDA 2024 GAT SET-1"
                    ExamRule1="The GAT has 150 questions, with 50 questions on English and 100 questions on General Knowledge "
                    ExamRule2="Each correct answer is worth 4 marks, and each incorrect answer deducts 1.33 marks "
                    ExamRule3="The GAT is worth 600 points in the NDA exam "
                />

                <TestCard
                    ExamPhoto="https://example.com/sample-exam.jpg"
                    ExamSet="NDA 2024 GAT SET-1"
                    ExamRule1="The GAT has 150 questions, with 50 questions on English and 100 questions on General Knowledge "
                    ExamRule2="Each correct answer is worth 4 marks, and each incorrect answer deducts 1.33 marks "
                    ExamRule3="The GAT is worth 600 points in the NDA exam "
                />

            </div>
            <Footer />
        </div>

    )
}
