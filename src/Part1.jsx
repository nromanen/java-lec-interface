import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Інтерфейси в Java",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Інтерфейси в Java</h2>
            <p className="text-xl text-gray-600">Контракти, абстракція та поліморфізм</p>
          </div>
        </div>
      )
    },
    {
      title: "Що таке інтерфейс?",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">📋 Визначення</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-bold text-purple-600">Інтерфейс</span> — це абстрактний тип даних, 
              який визначає набір методів, які клас повинен реалізувати.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">🤝 Контракт між класами</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Інтерфейс — це своєрідний "договір", який гарантує, що клас матиме певні методи та поведінку.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-6 rounded-lg">
            <p className="text-lg font-semibold text-center">
              💡 Інтерфейс описує <span className="underline">що</span> повинен робити клас, 
              але не визначає <span className="underline">як</span> це робити
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> <span className="text-purple-600">Animal</span> {'{'}</div>
              <div className="ml-4 text-gray-700">void makeSound();</div>
              <div className="ml-4 text-gray-700">void move();</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Призначення інтерфейсів",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">📝</span>
              <ChevronRight className="text-gray-400" />
              <span className="text-3xl">✅</span>
            </div>
            <p className="text-gray-700 font-semibold mb-2">Інтерфейс обіцяє:</p>
            <ul className="text-gray-600 space-y-1 ml-4">
              <li>• Набір методів</li>
              <li>• Їх сигнатури</li>
              <li>• Поведінку системи</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🏗️</span>
              <ChevronRight className="text-gray-400" />
              <span className="text-3xl">✨</span>
            </div>
            <p className="text-gray-700 font-semibold mb-2">Клас гарантує:</p>
            <ul className="text-gray-600 space-y-1 ml-4">
              <li>• Реалізацію всіх методів</li>
              <li>• Дотримання контракту</li>
              <li>• Конкретну логіку</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">class</span> <span className="text-purple-600">Dog</span> <span className="text-blue-600">implements</span> Animal {'{'}</div>
              <div className="ml-4 text-gray-500">@Override</div>
              <div className="ml-4"><span className="text-blue-600">public void</span> makeSound() {'{'}</div>
              <div className="ml-8 text-gray-600">System.out.println("Гав!");</div>
              <div className="ml-4">{'}'}</div>
              <div className="ml-4 text-gray-500">@Override</div>
              <div className="ml-4"><span className="text-blue-600">public void</span> move() {'{'}</div>
              <div className="ml-8 text-gray-600">System.out.println("Біжить");</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Чому потрібні інтерфейси?",
      content: (
        <div className="space-y-5">
          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-bold text-purple-700 mb-2">1️⃣ Абстракція</h4>
            <p className="text-gray-700">Приховуємо деталі реалізації, залишаємо тільки важливі операції</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-700 mb-2">2️⃣ Множинна реалізація</h4>
            <p className="text-gray-700">Клас може реалізувати кілька інтерфейсів (на відміну від успадкування класів)</p>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
            <h4 className="font-bold text-green-700 mb-2">3️⃣ Поліморфізм</h4>
            <p className="text-gray-700">Різні класи можуть по-різному реалізувати один інтерфейс</p>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-bold text-orange-700 mb-2">4️⃣ Слабке зв'язування (Loose Coupling)</h4>
            <p className="text-gray-700">Код залежить від інтерфейсу, а не від конкретної реалізації</p>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
            <h4 className="font-bold text-red-700 mb-2">5️⃣ Тестування</h4>
            <p className="text-gray-700">Легко створювати mock-об'єкти для тестування</p>
          </div>
        </div>
      )
    },
    {
      title: "Практичне значення",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Інтерфейси — основа професійної розробки:</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
              <p className="font-semibold text-gray-800">✓ Дозволяють писати гнучкий та розширюваний код</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <p className="font-semibold text-gray-800">✓ Використовуються у всіх Java-фреймворках (Spring, Hibernate)</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
              <p className="font-semibold text-gray-800">✓ Основа для dependency injection та IoC</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
              <p className="font-semibold text-gray-800">✓ Забезпечують модульність та підтримуваність проектів</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
              <p className="font-semibold text-gray-800">✓ Необхідні для розуміння Design Patterns</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300 mt-6">
            <p className="text-center text-gray-700 font-semibold">
              💡 Без розуміння інтерфейсів неможливо стати Senior Java Developer
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[600px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              Назад
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-purple-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Вперед
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-gray-500">
            Слайд {currentSlide + 1} з {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;