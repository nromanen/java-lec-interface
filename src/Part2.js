import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Part2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    title: "Синтаксис інтерфейсів",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Синтаксис інтерфейсів</h2>
          <p className="text-xl text-gray-600">Як створювати та використовувати інтерфейси</p>
        </div>
      </div>
    )
  },
  {
    title: "Оголошення інтерфейсу",
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-700 mb-3">📝 Базовий синтаксис</h3>
          <p className="text-gray-700 mb-4">Інтерфейс оголошується за допомогою ключового слова <code className="bg-purple-200 px-2 py-1 rounded">interface</code></p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <div className="font-mono text-sm">
            <div className="text-gray-500">{'// Простий інтерфейс'}</div>
            <div><span className="text-blue-600">public interface</span> <span className="text-purple-600">Drawable</span> {'{'}</div>
            <div className="ml-4 text-gray-700">void draw();</div>
            <div>{'}'}</div>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h4 className="font-bold text-blue-700 mb-3">Правила оголошення:</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Може бути <code className="bg-blue-200 px-2 py-1 rounded text-sm">public</code> або package-private</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Імена зазвичай є прикметниками (Readable, Comparable) або іменниками (List, Map)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Файл повинен мати таке ж ім'я як інтерфейс</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <div className="font-mono text-sm">
            <div className="text-gray-500">{'// Інтерфейс з кількома методами'}</div>
            <div><span className="text-blue-600">public interface</span> <span className="text-purple-600">Vehicle</span> {'{'}</div>
            <div className="ml-4 text-gray-700">void start();</div>
            <div className="ml-4 text-gray-700">void stop();</div>
            <div className="ml-4 text-gray-700">int getSpeed();</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    )
  },
  {
  title: "Поля в інтерфейсах",
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Всі поля в інтерфейсах є константами!</h3>
        <p className="text-lg">Автоматично <code className="bg-white bg-opacity-20 px-2 py-1 rounded">public static final</code></p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
        <div className="font-mono text-sm">
          <div><span className="text-blue-600">interface</span> <span className="text-purple-600">MathConstants</span> {'{'}</div>
          <div className="ml-4 text-gray-700">double PI = 3.14159; <span className="text-gray-500">{'// автоматично public static final'}</span></div>
          <div className="ml-4 text-gray-700">int MAX_VALUE = 100;</div>
          <div>{'}'}</div>
        </div>
      </div>

      <div className="bg-blue-50 p-5 rounded-lg">
        <h4 className="font-bold text-blue-700 mb-3">Характеристики полів:</h4>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span><code className="bg-blue-200 px-2 py-1 rounded text-sm">public</code> — доступні звідусіль</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span><code className="bg-blue-200 px-2 py-1 rounded text-sm">static</code> — належать інтерфейсу, а не об'єкту</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span><code className="bg-blue-200 px-2 py-1 rounded text-sm">final</code> — не можна змінювати після ініціалізації</span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="font-semibold text-green-700 mb-2">✅ Правильно:</p>
          <div className="font-mono text-xs bg-white p-2 rounded">
            <div>int x = MathConstants.PI;</div>
            <div className="mt-1">System.out.println(</div>
            <div className="ml-2">MathConstants.MAX_VALUE);</div>
          </div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <p className="font-semibold text-red-700 mb-2">❌ Помилка:</p>
          <div className="font-mono text-xs bg-white p-2 rounded">
            <div className="text-red-600">MathConstants.PI = 3.14;</div>
            <div className="text-gray-500 text-xs mt-1">{'// Помилка компіляції!'}</div>
            <div className="text-gray-500 text-xs">{'// Не можна змінювати final'}</div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
        <h4 className="font-bold text-yellow-700 mb-2">💡 Best Practice:</h4>
        <p className="text-gray-700">Використовуйте інтерфейси для визначення констант тільки якщо вони логічно пов'язані з інтерфейсом. Для загальних констант краще використовувати окремий клас або enum.</p>
      </div>
    </div>
  )
},
  {
    title: "Абстрактні методи",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Методи в інтерфейсах за замовчуванням абстрактні</h3>
          <p className="text-lg">Вони не мають тіла (реалізації)</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
            <p className="font-semibold text-green-700 mb-3">✅ Правильно:</p>
            <div className="font-mono text-sm bg-green-50 p-3 rounded">
              <div><span className="text-blue-600">interface</span> Calculator {'{'}</div>
              <div className="ml-4 text-gray-700">int add(int a, int b);</div>
              <div className="ml-4 text-gray-700">int subtract(int a, int b);</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-red-500">
            <p className="font-semibold text-red-700 mb-3">❌ Неправильно:</p>
            <div className="font-mono text-sm bg-red-50 p-3 rounded">
              <div><span className="text-blue-600">interface</span> Calculator {'{'}</div>
              <div className="ml-4 text-gray-700">int add(int a, int b) {'{'}</div>
              <div className="ml-8 text-red-600">return a + b; // Помилка компіляції!</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-300">
          <h4 className="font-bold text-yellow-700 mb-2">📌 Важливо:</h4>
          <ul className="text-gray-700 space-y-2">
            <li>• Методи автоматично є <code className="bg-yellow-200 px-2 py-1 rounded text-sm">public abstract</code></li>
            <li>• Не потрібно явно писати <code className="bg-yellow-200 px-2 py-1 rounded text-sm">public abstract</code></li>
            <li>• Всі методи без тіла є абстрактними</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Реалізація інтерфейсу (implements)",
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-700 mb-3">🔧 Ключове слово implements</h3>
          <p className="text-gray-700 text-lg">Клас використовує <code className="bg-purple-200 px-2 py-1 rounded">implements</code> для реалізації інтерфейсу</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <div className="font-mono text-sm space-y-4">
            <div>
              <div className="text-gray-500">{'// Оголошення інтерфейсу'}</div>
              <div><span className="text-blue-600">interface</span> <span className="text-purple-600">Flyable</span> {'{'}</div>
              <div className="ml-4 text-gray-700">void fly();</div>
              <div className="ml-4 text-gray-700">int getAltitude();</div>
              <div>{'}'}</div>
            </div>
            
            <div className="border-t pt-4">
              <div className="text-gray-500">{'// Реалізація інтерфейсу'}</div>
              <div><span className="text-blue-600">class</span> <span className="text-purple-600">Bird</span> <span className="text-blue-600">implements</span> Flyable {'{'}</div>
              <div className="ml-4 text-gray-700">@Override</div>
              <div className="ml-4"><span className="text-blue-600">public void</span> fly() {'{'}</div>
              <div className="ml-8 text-gray-600">System.out.println("Птах летить");</div>
              <div className="ml-4">{'}'}</div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-700">@Override</div>
              <div className="ml-4"><span className="text-blue-600">public int</span> getAltitude() {'{'}</div>
              <div className="ml-8 text-gray-600">return 1000;</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
          <h4 className="font-bold text-red-700 mb-2">⚠️ Обов'язково:</h4>
          <p className="text-gray-700">Клас ПОВИНЕН реалізувати ВСІ методи інтерфейсу, інакше буде помилка компіляції!</p>
        </div>
      </div>
    )
  },
  {
    title: "Клас може реалізувати кілька інтерфейсів",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">🎯 Множинна реалізація</h3>
          <p className="text-lg">На відміну від класів, можна реалізувати необмежену кількість інтерфейсів!</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <div className="font-mono text-sm">
            <div><span className="text-blue-600">interface</span> <span className="text-purple-600">Swimmable</span> {'{'}</div>
            <div className="ml-4 text-gray-700">void swim();</div>
            <div>{'}'}</div>
            <div className="mt-2"><span className="text-blue-600">interface</span> <span className="text-purple-600">Flyable</span> {'{'}</div>
            <div className="ml-4 text-gray-700">void fly();</div>
            <div>{'}'}</div>
            <div className="mt-4 text-gray-500">{'// Качка може і плавати, і літати!'}</div>
            <div><span className="text-blue-600">class</span> <span className="text-purple-600">Duck</span> <span className="text-blue-600">implements</span> Swimmable, Flyable {'{'}</div>
            <div className="ml-4 text-gray-700">@Override</div>
            <div className="ml-4"><span className="text-blue-600">public void</span> swim() {'{'}</div>
            <div className="ml-8 text-gray-600">System.out.println("Качка плаває");</div>
            <div className="ml-4">{'}'}</div>
            <div className="ml-4 text-gray-700">@Override</div>
            <div className="ml-4"><span className="text-blue-600">public void</span> fly() {'{'}</div>
            <div className="ml-8 text-gray-600">System.out.println("Качка літає");</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-bold text-green-700 mb-2">✅ Інтерфейси</h4>
            <p className="text-gray-700 text-sm">Можна реалізувати багато</p>
            <code className="text-xs bg-white p-2 block mt-2 rounded">implements A, B, C</code>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-700 mb-2">⚠️ Класи</h4>
            <p className="text-gray-700 text-sm">Можна успадкувати тільки один</p>
            <code className="text-xs bg-white p-2 block mt-2 rounded">extends OnlyOne</code>
          </div>
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[700px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
            )}
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded mt-3"></div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={20} />
              Назад
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  title={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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

export default Part2;