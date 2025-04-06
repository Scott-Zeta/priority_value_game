'use client';

import { valueList, Value } from '@/lib/valueData';
import { useEffect, useState } from 'react';

export default function GamePage() {
  const [shuffledValues, setShuffledValues] = useState<Value[]>([]);
  const [randomThreeValues, setRandomThreeValues] = useState<Value[]>([]);
  const [shownKeys, setShownKeys] = useState<Set<number>>(new Set());

  const shuffleArray = (array: Value[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const getRandomThreeValues = (pool: Value[], shown: Set<number>) => {
    // Filter out values that have already been shown
    const unseenValues = pool.filter((value) => !shown.has(value.key));
    const source = unseenValues.length >= 3 ? unseenValues : pool;

    const indices = new Set<number>();
    while (indices.size < 3 && indices.size < source.length) {
      indices.add(Math.floor(Math.random() * source.length));
    }
    return [...indices].map((index) => source[index]);
  };

  const removeValueFromList = (value: Value, pool: Value[]) => {
    return pool.filter((v) => v !== value);
  };

  useEffect(() => {
    setShuffledValues(shuffleArray(valueList));
    const initialThreeValues = getRandomThreeValues(valueList, new Set());
    const initialShownKeys = new Set<number>();
    initialThreeValues.forEach((v) => initialShownKeys.add(v.key));
    setShownKeys(initialShownKeys);
    setRandomThreeValues(initialThreeValues);
  }, []);

  // This is just for debugging purposes
  useEffect(() => {
    console.log(shuffledValues);
    console.log(randomThreeValues);
  }, [shuffledValues, randomThreeValues]);

  return (
    <>
      {shuffledValues.length > 5 ? (
        <>
          <p>Pick a value you think is LEAST Important</p>
          {randomThreeValues.map((value: Value) => {
            return (
              <div
                key={value.key}
                onClick={() => {
                  const updatedValues = removeValueFromList(
                    value,
                    shuffledValues
                  );
                  const nextThreeValues = getRandomThreeValues(
                    updatedValues,
                    shownKeys
                  );
                  const newShownKeys = new Set(shownKeys);
                  nextThreeValues.forEach((v) => newShownKeys.add(v.key));

                  setShuffledValues(updatedValues);
                  setRandomThreeValues(nextThreeValues);
                  setShownKeys(newShownKeys);
                }}
                className="border-2 border-gray-300 rounded-lg p-4 m-2 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                <h1>{value.name}</h1>
                <p>{value.description}</p>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <p>Your Final 5 Most Important Value</p>
          {shuffledValues.map((value: Value) => {
            return (
              <div
                key={value.key}
                className="border-2 border-gray-300 rounded-lg p-4 m-2 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                <h1>{value.name}</h1>
                <p>{value.description}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
