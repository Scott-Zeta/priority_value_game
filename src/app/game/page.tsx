'use client';

import { valueList, Value } from '@/lib/valueList';
import { useEffect, useState } from 'react';

export default function GamePage() {
  const [shuffledValues, setShuffledValues] = useState<Value[]>([]);
  const shuffleArray = (array: Value[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    setShuffledValues(shuffleArray(valueList));
  }, []);
  useEffect(() => {
    console.log(shuffledValues);
  }, [shuffledValues]);

  return <div>Game</div>;
}
