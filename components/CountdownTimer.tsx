"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center font-mono text-2xl font-black text-red-600 bg-red-50 py-3 px-6 rounded-xl border border-red-100">
      <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
      <span className="animate-pulse">:</span>
      <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
    </div>
  );
};

export default CountdownTimer;
