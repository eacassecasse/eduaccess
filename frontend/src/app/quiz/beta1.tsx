// pages/quiz/[id].js
"use client"
import { useState } from 'react';

export default function QuizPage() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-6">Quiz</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div>
          <p className="text-xl font-medium mb-4">Question Area</p>
          {/* Show questions */}
        </div>
        <div className="mt-8">
          <p className="text-lg font-medium mb-2">Progress: {progress}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-4">Correct answers: 3</p>
          <p>Incorrect answers: 1</p>
        </div>
      </div>
    </div>
  );
}
