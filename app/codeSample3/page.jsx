"use client";

import React, { useState } from 'react';

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleClick = async () => {
    try {
      const passcode = "ehen2rfow";
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click to Fetch Secret Code
      </button>
      {secretCode && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Secret Code:</h2>
          <p>{secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;

