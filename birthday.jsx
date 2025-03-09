import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "tailwindcss/tailwind.css";

export default function BirthdayApp() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-600 text-white flex flex-col items-center justify-center p-4 text-center">
      {showConfetti && <Confetti width={width} height={height} />} 
      
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday, [Name]! 🎂
      </motion.h1>

      <motion.button
        className="bg-yellow-400 text-purple-800 px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-110 transition"
        onClick={() => {
          setShowConfetti(true);
          setShowMessage(true);
        }}
        whileHover={{ scale: 1.1 }}
      >
        Click for a Surprise 🎁
      </motion.button>

      {showMessage && (
        <motion.p
          className="mt-6 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Wishing you a fantastic year filled with love, joy, and success! 💖
        </motion.p>
      )}
    </div>
  );
}
