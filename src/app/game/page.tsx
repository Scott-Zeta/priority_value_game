'use client';

import Link from 'next/link';
import ValueCard from '@/components/game/ValueCard';
import { Button } from '@/components/ui/button';
import { valueList, Value, ColourVariant } from '@/lib/valueData';
import { useEffect, useState } from 'react';

export default function GamePage() {
  const [shuffledValues, setShuffledValues] = useState<Value[]>([]);
  const [randomThreeValues, setRandomThreeValues] = useState<Value[]>([]);
  const [shownKeys, setShownKeys] = useState<Set<number>>(new Set());

  const totalRounds = valueList.length - 5;
  const currentRound = totalRounds - shuffledValues.length + 5;

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {shuffledValues.length > 5 ? (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Which value is least important to you?
            </h1>
            <p className="text-gray-600">
              Choose the value that is
              <span className="font-semibold"> LEAST relevant</span> to your
              priorities for the next 6-12 months.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 p-6 min-h-[60vh] sm:min-h-[50vh]">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm text-gray-500">Round:</span>
              <span className="text-sm font-medium text-gray-900">
                {currentRound} of {totalRounds}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
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
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Top 5 Priorities
            </h1>
            <p className="text-gray-600">
              These are the values that matter most to you for the next 6-12
              months.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 p-6 min-h-[60vh] sm:min-h-[50vh]">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
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
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="bg-blue-500 text-white w-full sm:w-auto"
              size="lg"
              asChild
            >
              <Link href="/">Start Over</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
