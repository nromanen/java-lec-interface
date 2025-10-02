import React, { useState } from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';

function App() {
  const [currentPart, setCurrentPart] = useState(1);

  return (
    <div>
      {/* <div className="bg-gray-800 p-4 flex justify-center gap-4 flex-wrap"> */}
        <div className="bg-gray-800 p-4 flex justify-center gap-4 overflow-x-auto">
        <button
          onClick={() => setCurrentPart(1)}
          className={`px-6 py-2 text-white rounded transition-all ${
            currentPart === 1
              ? 'bg-green-600 hover:bg-green-700 shadow-lg scale-105 font-bold'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Частина 1: Вступ
        </button>
        <button
          onClick={() => setCurrentPart(2)}
          className={`px-6 py-2 text-white rounded transition-all ${
            currentPart === 2
              ? 'bg-green-600 hover:bg-green-700 shadow-lg scale-105 font-bold'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Частина 2: Синтаксис інтерфейсів
        </button>
        <button
          onClick={() => setCurrentPart(3)}
          className={`px-6 py-2 text-white rounded transition-all ${
            currentPart === 3
              ? 'bg-green-600 hover:bg-green-700 shadow-lg scale-105 font-bold'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Частина 3: Методи в інтерфейсах
        </button>
        <button
          onClick={() => setCurrentPart(4)}
          className={`px-6 py-2 text-white rounded transition-all ${
            currentPart === 4
              ? 'bg-green-600 hover:bg-green-700 shadow-lg scale-105 font-bold'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Частина 4: Інтерфейси vs Абстрактні класи
        </button>
        <button
          onClick={() => setCurrentPart(5)}
          className={`px-6 py-2 text-white rounded transition-all ${
            currentPart === 5
              ? 'bg-green-600 hover:bg-green-700 shadow-lg scale-105 font-bold'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Частина 5: Приклади з реального життя
        </button>
        <button
          onClick={() => setCurrentPart(6)}
          className={`px-6 py-2 text-white rounded transition-all ${
            currentPart === 6
              ? 'bg-green-600 hover:bg-green-700 shadow-lg scale-105 font-bold'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Частина 6: Поліморфізм через інтерфейси
        </button>
      </div>

      {currentPart === 1 && <Part1 />}
      {currentPart === 2 && <Part2 />}
      {currentPart === 3 && <Part3 />}
      {currentPart === 4 && <Part4 />}
      {currentPart === 5 && <Part5 />}
      {currentPart === 6 && <Part6 />}
    </div>
  );
}

export default App;