"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function getRandomNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
}

const Page = () => {
  const [kiko, setKiko] = useState("");
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [randomNumber, setRandomNumber] = useState(getRandomNumber());

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text === "") return;
    setIsLoading(true);

    const API_KEY = "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";
    const model = "text-davinci-003";

    const URL = "https://api.openai.com/v1/engines/" + model + "/completions";

    const question = `あなたは変人です。${text}を使って変な行動を提案して。例：${text}と一緒に、お風呂に入る。以下のformatで答えて ${text}を使った変な行動は〜`;
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        prompt: question,
        max_tokens: 200,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const json = await res.json();

    const answer = json.choices[0].text;

    setKiko(answer);
    setIsLoading(false);
    setRandomNumber(getRandomNumber());
  };

  return (
    <div className="flex flex-col items-center space-y-5 justify-center bg-zinc-900 h-[90vh]">
      <form onSubmit={handleSubmit} className="mt-10">
        <input
          className="text-black p-1 text-lg w-60 w-40"
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={`mx-3 p-1.5 rounded-md bg-blue-500`} type="submit">
          send
        </button>
      </form>
      <p>{isLoading ? "ローディング中" : null}</p>
      {randomNumber === 1 && kiko !== "" ? (
        <>
          <div className="border-dotted border-2 p-3 mx-3">{kiko}</div>
          <Image src="/matubara.svg" alt="kiiko" width={300} height={200} />
        </>
      ) : (
        <>
          <div className="border-dotted border-2 p-3 mx-3">{kiko}</div>
          <Image src="/kiko2.svg" alt="kiiko" width={300} height={200} />
        </>
      )}
      <Link href="/" className="border-4 bg-indigo-600 p-3">
        back
      </Link>
    </div>
  );
};

export default Page;
