import { useState } from "react";

function Form({ addCard }) {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (prompt === "" || answer === "") {
      return;
    }
    addCard(prompt, answer);
    setPrompt("");
    setAnswer("");
  };

  return (
    <form className="bg-slate-700  rounded-2xl shadow-md flex flex-col items-center gap-4 w-[90%] mx-auto my-4">
      <h1 className="text-center text-slate-200 text-2xl mt-4 font-extrabold tracking-wider">Flashcard Builder</h1>

      <div className=" w-[90%] ">
        <label htmlFor="prompt" hidden>
          Prompt
        </label>
        <input
          className="bg-slate-200 w-full mx-auto rounded p-2 outline-0"
          type="text"
          value={prompt}
          placeholder="Prompt"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div className=" w-[90%]">
        <label htmlFor="answer" hidden>
          Answer
        </label>
        <input
          className="bg-slate-200 w-full mx-auto rounded p-2 outline-0"
          type="text"
          value={answer}
          placeholder="Answer"
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button
        onClick={handleSumbit}
        className="cursor-pointer text-slate-200 bg-slate-800 hover:bg-slate-900/80 px-9 py-2 rounded font-semibold text-lg mb-4">
        Add
      </button>
    </form>
  );
}

export default Form;
