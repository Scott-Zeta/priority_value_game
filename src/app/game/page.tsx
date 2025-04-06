'use client';

import ValueCard from '@/components/game/ValueCard';
import { valueList, Value, ColourVariant } from '@/lib/valueData';
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
              <ValueCard
                key={value.key}
                name={value.name}
                description={value.description}
                colorVariant={value.colour as ColourVariant}
                icon={value.icon}
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
              />
            );
          })}
        </>
      ) : (
        <>
          <p>Your Final 5 Most Important Value</p>
          {shuffledValues.map((value: Value) => {
            return (
              <ValueCard
                key={value.key}
                name={value.name}
                description={value.description}
                colorVariant={value.colour as ColourVariant}
                icon={value.icon}
              />
            );
          })}
        </>
      )}
    </>
  );
}
