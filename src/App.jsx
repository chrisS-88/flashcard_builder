import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CardsList from "./components/CardsList";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  // GET CURRENT DATE FOR DATE STAMPING CARDS
  const getDate = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    return `${date}-${month}-${year}`;
  };

  const addCard = (question, answer) => {
    const newCard = {
      id: Date.now(),
      timeStamp: getDate(),
      question: question,
      answer: answer,
      isFlipped: false,
    };

    setFlashcards((prevData) => [newCard, ...prevData]);
  };

  return (
    <>
      <Form addCard={addCard} />
      <div className="w-full h-[.5px] bg-slate-200 mb-6"></div>
      <CardsList flashcards={flashcards} />
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-slate-200 cursor-pointer w-min fixed bottom-6 right-8 z-10 bg-slate-700 rounded-full hover:bg-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-11">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
    </>
  );
}

export default App;
