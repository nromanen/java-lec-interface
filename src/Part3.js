import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Part3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Методи в інтерфейсах",
      subtitle: "Різні типи методів у Java-інтерфейсах",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Методи в інтерфейсах</h2>
            <p className="text-xl text-gray-600">4 типи методів, які можуть бути в інтерфейсі</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-2">1️⃣ Абстрактні методи</h3>
              <p className="text-gray-700 text-sm">За замовчуванням, без реалізації</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-2">2️⃣ Default методи</h3>
              <p className="text-gray-700 text-sm">Java 8+, з реалізацією за замовчуванням</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 mb-2">3️⃣ Static методи</h3>
              <p className="text-gray-700 text-sm">Java 8+, належать інтерфейсу</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">4️⃣ Private методи</h3>
              <p className="text-gray-700 text-sm">Java 9+, допоміжні методи</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Абстрактні методи (за замовчуванням)",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">📋 Класичні методи інтерфейсу</h3>
            <p className="text-gray-700 text-lg">Це методи без реалізації, які класи ПОВИННІ реалізувати</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> <span className="text-purple-600">Printable</span> {'{'}</div>
              <div className="ml-4 text-gray-700">void print(); <span className="text-gray-500">{'// абстрактний метод'}</span></div>
              <div className="ml-4 text-gray-700">String getContent(); <span className="text-gray-500">{'// абстрактний метод'}</span></div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-700 mb-2">✅ Характеристики:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Не мають тіла {'{ }'}</li>
                <li>• Автоматично public abstract</li>
                <li>• Обов'язкові для реалізації</li>
                <li>• Існують з Java 1.0</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-700 mb-2">📌 Приклад використання:</h4>
              <div className="font-mono text-xs bg-white p-2 rounded mt-2">
                <div><span className="text-blue-600">class</span> Document</div>
                <div className="ml-2"><span className="text-blue-600">implements</span> Printable {'{'}</div>
                <div className="ml-4 text-gray-600">@Override</div>
                <div className="ml-4"><span className="text-blue-600">public void</span> print() {'{'}</div>
                <div className="ml-6 text-gray-500">{'// реалізація'}</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-2">{'}'}</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <p className="text-gray-700">
              <span className="font-bold text-yellow-700">⚠️ Важливо:</span> Якщо клас не реалізує всі абстрактні методи, він сам повинен бути абстрактним!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Default методи (Java 8+)",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Default методи з реалізацією</h3>
            <p className="text-lg">Методи з реалізацією за замовчуванням, які можна, але не обов'язково перевизначати</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> <span className="text-purple-600">Vehicle</span> {'{'}</div>
              <div className="ml-4 text-gray-700">void start(); <span className="text-gray-500">{'// абстрактний'}</span></div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-500">{'// Default метод з реалізацією'}</div>
              <div className="ml-4"><span className="text-green-600">default</span> <span className="text-blue-600">void</span> horn() {'{'}</div>
              <div className="ml-8 text-gray-600">System.out.println("Біп-біп!");</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">✅ Переваги default методів:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">1.</span>
                <span>Дозволяють додавати нові методи в інтерфейс без порушення існуючих реалізацій</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">2.</span>
                <span>Надають базову реалізацію, яку можна використовувати або перевизначити</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">3.</span>
                <span>Зберігають зворотну сумісність при еволюції API</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <p className="font-semibold text-blue-700 mb-2">Використання за замовчуванням:</p>
              <div className="font-mono text-xs bg-blue-50 p-2 rounded">
                <div><span className="text-blue-600">class</span> Car <span className="text-blue-600">implements</span> Vehicle {'{'}</div>
                <div className="ml-2"><span className="text-blue-600">public void</span> start() {'{ }'}</div>
                <div className="ml-2 text-gray-500">{'// horn() вже є!'}</div>
                <div>{'}'}</div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
              <p className="font-semibold text-green-700 mb-2">Перевизначення:</p>
              <div className="font-mono text-xs bg-green-50 p-2 rounded">
                <div><span className="text-blue-600">class</span> Truck <span className="text-blue-600">implements</span> Vehicle {'{'}</div>
                <div className="ml-2"><span className="text-blue-600">public void</span> start() {'{ }'}</div>
                <div className="ml-2">@Override</div>
                <div className="ml-2"><span className="text-blue-600">public void</span> horn() {'{'}</div>
                <div className="ml-4 text-gray-600">{'// своя реалізація'}</div>
                <div className="ml-2">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Static методи (Java 8+)",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Static методи в інтерфейсі</h3>
            <p className="text-lg">Утилітні методи, які належать інтерфейсу, а не класам-реалізаціям</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> <span className="text-purple-600">TimeUtils</span> {'{'}</div>
              <div className="ml-4 text-gray-500">{'// Static метод'}</div>
              <div className="ml-4"><span className="text-purple-600">static</span> <span className="text-blue-600">long</span> getCurrentTime() {'{'}</div>
              <div className="ml-8"><span className="text-blue-600">return</span> System.currentTimeMillis();</div>
              <div className="ml-4">{'}'}</div>
              <div className="ml-4"></div>
              <div className="ml-4"><span className="text-purple-600">static</span> <span className="text-blue-600">void</span> printTime() {'{'}</div>
              <div className="ml-8 text-gray-600">System.out.println("Час: " + getCurrentTime());</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-purple-700 mb-3">Особливості static методів:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Викликаються через ім'я інтерфейсу: <code className="bg-purple-200 px-2 py-1 rounded text-sm">TimeUtils.getCurrentTime()</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>НЕ успадковуються класами-реалізаціями — отже, і перевизначити їх неможливо (<code className="bg-purple-200 px-2 py-1 rounded text-sm">@Override</code> дасть помилку)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Ідеально для utility/helper методів</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-bold text-amber-700 mb-2">🏛️ static у класі</h4>
              <p className="text-gray-700 text-sm mb-2">Успадковується — доступний через ім'я нащадка</p>
              <div className="font-mono text-xs bg-white p-2 rounded">
                <div>class Child extends Parent {'{ }'}</div>
                <div className="text-green-600">Child.hello(); ✅</div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-bold text-purple-700 mb-2">🔌 static в інтерфейсі</h4>
              <p className="text-gray-700 text-sm mb-2">НЕ успадковується — тільки через ім'я інтерфейсу</p>
              <div className="font-mono text-xs bg-white p-2 rounded">
                <div>class New implements TimeUtils {'{ }'}</div>
                <div className="text-red-600">New.printTime(); ❌</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
            <p className="text-gray-700 text-sm">
              <span className="font-bold text-amber-700">⚠️ І навіть у класах static не перевизначається:</span> метод нащадка з тією ж сигнатурою <span className="font-bold">приховує</span> (hiding) батьківський. Який саме викличеться — вирішується на етапі компіляції за типом посилання, а не за реальним об'єктом:
            </p>
            <div className="font-mono text-xs bg-white p-2 rounded mt-2">
              <div>Parent p = <span className="text-blue-600">new</span> Child();</div>
              <div>p.hello(); <span className="text-gray-500">{'// "Parent", а не "Child" (!)'}</span></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="font-semibold text-gray-700 mb-2">💡 Приклад використання:</p>
            <div className="font-mono text-sm bg-gray-50 p-3 rounded">
              <div className="text-gray-500">{'// Виклик через інтерфейс'}</div>
              <div><span className="text-blue-600">long</span> time = TimeUtils.getCurrentTime();</div>
              <div>TimeUtils.printTime();</div>
              <div className="mt-2 text-red-600">{'// ❌ НЕ можна через об\'єкт класу'}</div>
              <div className="text-gray-400">{'// myObject.getCurrentTime(); // Помилка!'}</div>
              <div className="mt-2 text-gray-500">{'// Власний метод класу — ніяк не пов\'язаний з TimeUtils'}</div>
              <div className="text-gray-400">{'// class New implements TimeUtils { static void printTime() {...} }'}</div>
              <div className="text-gray-400">{'// New.printTime() та TimeUtils.printTime() — два різні методи'}</div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-700 mb-2">📌 Коли використовувати?</h4>
            <p className="text-gray-700">Для helper-методів, які логічно пов'язані з інтерфейсом, але не потребують стану об'єкта</p>
          </div>
        </div>
      )
    },
    {
      title: "Private методи (Java 9+)",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Private методи</h3>
            <p className="text-lg">Допоміжні методи для default та static методів</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> <span className="text-purple-600">Logger</span> {'{'}</div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-500">{'// Default метод використовує private'}</div>
              <div className="ml-4"><span className="text-green-600">default</span> <span className="text-blue-600">void</span> logInfo(String msg) {'{'}</div>
              <div className="ml-8">log("INFO", msg);</div>
              <div className="ml-4">{'}'}</div>
              <div className="ml-4"></div>
              <div className="ml-4"><span className="text-green-600">default</span> <span className="text-blue-600">void</span> logError(String msg) {'{'}</div>
              <div className="ml-8">log("ERROR", msg);</div>
              <div className="ml-4">{'}'}</div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-500">{'// Private метод - тільки всередині інтерфейсу'}</div>
              <div className="ml-4"><span className="text-orange-600">private</span> <span className="text-blue-600">void</span> log(String level, String msg) {'{'}</div>
              <div className="ml-8 text-gray-600">System.out.println("[" + level + "] " + msg);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-orange-700 mb-2">Private методи:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Доступні тільки всередині інтерфейсу</li>
                <li>• Можуть бути звичайними або static</li>
                <li>• Допомагають уникнути дублювання коду</li>
                <li>• З'явилися в Java 9</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-700 mb-2">Private static методи:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Для використання в static методах</li>
                <li>• Також можуть бути викликані з default методів</li>
                <li>• Інкапсулюють допоміжну логіку</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
            <h4 className="font-bold text-green-700 mb-2">✅ Переваги:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Дозволяють не дублювати код між default методами</li>
              <li>• Інкапсулюють внутрішню логіку інтерфейсу</li>
              <li>• Роблять код чистішим і більш підтримуваним</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Порівняння типів методів",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Зведена таблиця типів методів</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Тип методу</th>
                  <th className="p-4 text-left">Версія Java</th>
                  <th className="p-4 text-left">Має реалізацію?</th>
                  <th className="p-4 text-left">Можна перевизначити?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-blue-50">
                  <td className="p-4 font-semibold text-blue-700">Abstract</td>
                  <td className="p-4">Java 1.0+</td>
                  <td className="p-4">❌ Ні</td>
                  <td className="p-4">✅ Так (обов'язково)</td>
                </tr>
                <tr className="border-b hover:bg-green-50">
                  <td className="p-4 font-semibold text-green-700">Default</td>
                  <td className="p-4">Java 8+</td>
                  <td className="p-4">✅ Так</td>
                  <td className="p-4">✅ Так (опціонально)</td>
                </tr>
                <tr className="border-b hover:bg-purple-50">
                  <td className="p-4 font-semibold text-purple-700">Static</td>
                  <td className="p-4">Java 8+</td>
                  <td className="p-4">✅ Так</td>
                  <td className="p-4">❌ Ні</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-4 font-semibold text-orange-700">Private</td>
                  <td className="p-4">Java 9+</td>
                  <td className="p-4">✅ Так</td>
                  <td className="p-4">❌ Ні</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-bold text-blue-700 mb-2">📌 Abstract методи:</h4>
              <p className="text-gray-700 text-sm">Основа інтерфейсу, визначають контракт</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-bold text-green-700 mb-2">📌 Default методи:</h4>
              <p className="text-gray-700 text-sm">Еволюція API без порушення сумісності</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-bold text-purple-700 mb-2">📌 Static методи:</h4>
              <p className="text-gray-700 text-sm">Utility функції, пов'язані з інтерфейсом</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-bold text-orange-700 mb-2">📌 Private методи:</h4>
              <p className="text-gray-700 text-sm">Інкапсуляція внутрішньої логіки</p>
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

export default Part3;
