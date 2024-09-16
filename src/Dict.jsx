import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Dict() {
  const [word1, setWord1] = useState('trail');
  const handleWord = (e) => {
    setWord1((w) => e.target.value);
  };

  const { word } = useParams();

  const [gptWord, setGptWord] = useState('');

  useEffect(() => {
    if (word)
      setGptWord(
        `Show the definition in English and Chinese, examples (verb, noun, adjective or others) in English and Chinese, synonyms in English, antonyms, pronunciation in English, etymology and other references in English of this word, lastly create an image that relate to this word: ${word}`
      );
  }, [word]);

  return (
    <div className="bg-white-300 flex flex-col max-w-sm">
      <div className="">
        <p className="p-2 text-center text-gray-700">Word: {word}</p>
        {/* <input
          type="text"
          value={word1}
          onChange={handleWord}
          className="m-2 p-2 border"
        /> */}
      </div>
      <a
        className="mx-2 my-1 p-2 bg-blue-500 text-white text-center rounded-lg"
        href={`https://www.google.com/search?q=define+${word}`}
        target="_blank"
      >
        Google
      </a>
      <a
        className="mx-2 my-1 p-2 bg-blue-500 text-white text-center rounded-lg"
        href={`https://www.collinsdictionary.com/dictionary/english/${word}`}
        target="_blank"
      >
        Collins
      </a>
      <a
        className="mx-2 my-1 p-2 bg-blue-500 text-white text-center rounded-lg"
        href={`https://howjsay.com/how-to-pronounce-${word}`}
        target="_blank"
      >
        howjsay
      </a>
      <a
        className="mx-2 my-1 p-2 bg-blue-500 text-white text-center rounded-lg"
        href={`https://youglish.com/pronounce/${word}/english/uk`}
        target="_blank"
      >
        YouGlish (UK)
      </a>
      <a
        className="mx-2 my-1 p-2 bg-blue-500 text-white text-center rounded-lg"
        href={`https://chat.openai.com/?q=${gptWord}`}
        target="_blank"
      >
        ChatGPT
      </a>
    </div>
  );
}

export default Dict;

// This template is followed this guide https://tailwindcss.com/docs/guides/vite to install tailwindcss into statckblitz react project
