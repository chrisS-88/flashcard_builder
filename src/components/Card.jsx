import { useState } from "react";

export default function Card({ question, answer, timeStamp }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-[90%] mx-auto mb-6">
      {/* 3D context */}
      <div className="relative w-full h-40 cursor-pointer perspective-[1000px]" onClick={() => setIsFlipped((f) => !f)}>
        {/* Rotating wrapper */}
        <div
          className={`relative w-full h-full transition-transform duration-800 transform-3d ${
            isFlipped ? "transform-[rotateY(180deg)]" : ""
          }`}>
          {/* Front face */}
          <div className="absolute inset-0 rounded-2xl bg-slate-200 backface-hidden flex flex-col">
            <div className="flex justify-between text-sm uppercase font-extrabold p-3 rounded-t-2xl bg-slate-300">
              <p>Tap to flip</p>
              <p>{timeStamp}</p>
            </div>
            <div className="p-3 text-center flex-1 flex items-center justify-center">
              <p>{question}</p>
            </div>
          </div>

          {/* Back face */}
          <div className="absolute inset-0 rounded-2xl bg-slate-200 backface-hidden transform-[rotateY(180deg)] flex flex-col">
            <div className="flex justify-between text-sm uppercase font-extrabold p-3 rounded-t-2xl bg-slate-300">
              <p>Answer</p>
              <p>{timeStamp}</p>
            </div>
            <div className="p-3 text-center flex-1 flex items-center justify-center">
              <p>{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
