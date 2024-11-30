"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

export default function Countdown ({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center rounded-lg">
      <div className="flex font-bold">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-16 bg-white flex items-center justify-center rounded-lg border-2 border-black text-black text-xl">
            {timeLeft.days}
          </div>
          <div className="text-white text-xs mt-2">DAYS</div>
        </div>

        <span className="text-black text-2xl mx-2 mt-4">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-16 bg-white flex items-center justify-center rounded-lg border-2 border-black text-black text-xl">
            {timeLeft.hours}
          </div>
          <div className="text-white text-xs mt-2">HOURS</div>
        </div>

        <span className="text-black text-2xl mx-2 mt-4">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-16 bg-white flex items-center justify-center rounded-lg border-2 border-black text-black text-xl">
            {timeLeft.minutes}
          </div>
          <div className="text-white text-xs mt-2">MINUTES</div>
        </div>

        <span className="text-black text-2xl mx-2 mt-4">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-16 bg-white flex items-center justify-center rounded-lg border-2 border-black text-black text-xl">
            {timeLeft.seconds}
          </div>
          <div className="text-white text-xs mt-2">SECONDS</div>
        </div>
      </div>
    </div>
  );
};