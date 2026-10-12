import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Part4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Інтерфейси vs Абстрактні класи",
      subtitle: "Коли що використовувати?",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Інтерфейси vs Абстрактні класи</h2>
            <p className="text-xl text-gray-600">Дві концепції абстракції в Java</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">🔷</div>
                <h3 className="text-3xl font-bold">Інтерфейс</h3>
              </div>
              <ul className="space-y-2 text-lg">
                <li>• Контракт поведінки</li>
                <li>• Множинна реалізація</li>
                <li>• "Що" робить об'єкт</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-3xl font-bold">Абстрактний клас</h3>
              </div>
              <ul className="space-y-2 text-lg">
                <li>• Базовий клас</li>
                <li>• Одиничне успадкування</li>
                <li>• "Хто" є об'єкт</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Порівняльна таблиця",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Основні відмінності</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 text-left w-1/3">Характеристика</th>
                  <th className="p-3 text-left">Інтерфейс</th>
                  <th className="p-3 text-left">Абстрактний клас</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-blue-50">
                  <td className="p-3 font-semibold text-gray-700">Ключове слово</td>
                  <td className="p-3"><code className="bg-blue-100 px-2 py-1 rounded">interface</code></td>
                  <td className="p-3"><code className="bg-orange-100 px-2 py-1 rounded">abstract class</code></td>
                </tr>
                <tr className="border-b hover:bg-green-50">
                  <td className="p-3 font-semibold text-gray-700">Множинність</td>
                  <td className="p-3 text-green-600">✅ Багато інтерфейсів</td>
                  <td className="p-3 text-red-600">❌ Тільки один клас</td>
                </tr>
                <tr className="border-b hover:bg-purple-50">
                  <td className="p-3 font-semibold text-gray-700">Методи</td>
                  <td className="p-3">Abstract, default, static, private</td>
                  <td className="p-3">Будь-які (abstract, concrete)</td>
                </tr>
                <tr className="border-b hover:bg-yellow-50">
                  <td className="p-3 font-semibold text-gray-700">Поля</td>
                  <td className="p-3">Тільки <code className="bg-yellow-100 px-2 py-1 rounded text-xs">public static final</code></td>
                  <td className="p-3">Будь-які (private, protected, public, default)</td>
                </tr>
                <tr className="border-b hover:bg-pink-50">
                  <td className="p-3 font-semibold text-gray-700">Конструктор</td>
                  <td className="p-3 text-red-600">❌ Ні</td>
                  <td className="p-3 text-green-600">✅ Так</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "Коли використовувати інтерфейс?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">✅ Використовуйте інтерфейс коли:</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-2">1️⃣ Потрібна множинна реалізація</h4>
              <p className="text-gray-700 mb-3">Клас може мати кілька "ролей" або "здібностей"</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div><span className="text-blue-600">class</span> Duck <span className="text-blue-600">implements</span> Flyable, Swimmable {'{'}</div>
                <div className="ml-4 text-gray-500">{'// Качка може і літати, і плавати'}</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">2️⃣ Визначаєте контракт поведінки</h4>
              <p className="text-gray-700 mb-3">Описуєте "що повинен робити" об'єкт, а не "хто він є"</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div><span className="text-blue-600">interface</span> Comparable {'{'}</div>
                <div className="ml-4 text-gray-700">int compareTo(Object o);</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-2">3️⃣ Різні класи мають спільну функціональність</h4>
              <p className="text-gray-700 mb-3">Але не пов'язані ієрархією успадкування</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div className="text-gray-500">{'// Car і Bird не пов\'язані, але обидва можуть рухатись'}</div>
                <div><span className="text-blue-600">interface</span> Movable {'{'} void move(); {'}'}</div>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-2">4️⃣ Потрібна слабка зв'язаність (Loose Coupling)</h4>
              <p className="text-gray-700">Залежність від абстракції, а не від конкретної реалізації</p>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h4 className="font-bold text-pink-700 mb-2">5️⃣ API або публічний контракт</h4>
              <p className="text-gray-700">Визначаєте API для зовнішніх користувачів</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Коли використовувати абстрактний клас?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">✅ Використовуйте абстрактний клас коли:</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-2">1️⃣ Є спільний код для підкласів</h4>
              <p className="text-gray-700 mb-3">Хочете поділитися реалізацією між класами</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div><span className="text-blue-600">abstract class</span> Animal {'{'}</div>
                <div className="ml-4 text-gray-700">String name;</div>
                <div className="ml-4"></div>
                <div className="ml-4 text-gray-700">void eat() {'{'}</div>
                <div className="ml-8 text-gray-500">{'// спільна реалізація для всіх тварин'}</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4"><span className="text-purple-600">abstract</span> void makeSound();</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-2">2️⃣ Потрібні поля з різними модифікаторами</h4>
              <p className="text-gray-700 mb-3">private, protected поля зі станом</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div><span className="text-blue-600">abstract class</span> Shape {'{'}</div>
                <div className="ml-4"><span className="text-red-600">private</span> String color;</div>
                <div className="ml-4"><span className="text-orange-600">protected</span> int x, y;</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-700 mb-2">3️⃣ Потрібен конструктор</h4>
              <p className="text-gray-700 mb-3">Для ініціалізації спільних полів</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div><span className="text-blue-600">abstract class</span> Vehicle {'{'}</div>
                <div className="ml-4">String brand;</div>
                <div className="ml-4"></div>
                <div className="ml-4"><span className="text-blue-600">public</span> Vehicle(String brand) {'{'}</div>
                <div className="ml-8">this.brand = brand;</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">4️⃣ Чітка ієрархія "IS-A"</h4>
              <p className="text-gray-700">Класи пов'язані відношенням "є різновидом"</p>
              <p className="text-gray-600 text-sm mt-2">Dog IS-A Animal, Cat IS-A Animal</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-2">5️⃣ Часткова реалізація</h4>
              <p className="text-gray-700">Деякі методи реалізовані, деякі - абстрактні</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Множинна реалізація",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">🎯 Головна перевага інтерфейсів</h3>
            <p className="text-lg">Java не підтримує множинне успадкування класів, але підтримує множинну реалізацію інтерфейсів!</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-400">
              <h4 className="font-bold text-red-700 mb-3 text-center">❌ НЕ можна</h4>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div className="text-red-600">{'// Помилка компіляції!'}</div>
                <div><span className="text-blue-600">class</span> C</div>
                <div className="ml-2"><span className="text-blue-600">extends</span> A, B {'{'}</div>
                <div className="ml-4 text-gray-500">{'// ❌ Неможливо'}</div>
                <div>{'}'}</div>
              </div>
              <p className="text-gray-700 text-sm mt-3 text-center">Множинне успадкування класів заборонене</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-400">
              <h4 className="font-bold text-green-700 mb-3 text-center">✅ Можна</h4>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div className="text-green-600">{'// Працює відмінно!'}</div>
                <div><span className="text-blue-600">class</span> C</div>
                <div className="ml-2"><span className="text-blue-600">implements</span> I1, I2, I3 {'{'}</div>
                <div className="ml-4 text-gray-500">{'// ✅ OK!'}</div>
                <div>{'}'}</div>
              </div>
              <p className="text-gray-700 text-sm mt-3 text-center">Множинна реалізація інтерфейсів дозволена</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💡 Реальний приклад:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> Flyable {'{'} void fly(); {'}'}</div>
              <div><span className="text-blue-600">interface</span> Swimmable {'{'} void swim(); {'}'}</div>
              <div><span className="text-blue-600">interface</span> Walkable {'{'} void walk(); {'}'}</div>
              <div className="mt-3 text-gray-500">{'// Качка може літати, плавати та ходити!'}</div>
              <div><span className="text-blue-600">class</span> Duck <span className="text-blue-600">implements</span> Flyable, Swimmable, Walkable {'{'}</div>
              <div className="ml-4 text-gray-700">@Override <span className="text-blue-600">public void</span> fly() {'{ ... }'}</div>
              <div className="ml-4 text-gray-700">@Override <span className="text-blue-600">public void</span> swim() {'{ ... }'}</div>
              <div className="ml-4 text-gray-700">@Override <span className="text-blue-600">public void</span> walk() {'{ ... }'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-gray-700">
              <span className="font-bold text-blue-700">Чому це важливо?</span> Дозволяє класу мати кілька "ролей" чи "здібностей" без обмежень успадкування
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Комбінування: extends + implements",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">🔀 Можна комбінувати!</h3>
            <p className="text-lg">Клас може успадковувати один клас І реалізовувати багато інтерфейсів</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="font-mono text-sm">
              <div className="text-gray-500">{'// Абстрактний клас'}</div>
              <div><span className="text-blue-600">abstract class</span> Animal {'{'}</div>
              <div className="ml-4">String name;</div>
              <div className="ml-4"><span className="text-blue-600">void</span> eat() {'{ ... }'}</div>
              <div>{'}'}</div>
              
              <div className="mt-4 text-gray-500">{'// Інтерфейси'}</div>
              <div><span className="text-blue-600">interface</span> Flyable {'{'} void fly(); {'}'}</div>
              <div><span className="text-blue-600">interface</span> Swimmable {'{'} void swim(); {'}'}</div>
              
              <div className="mt-4 text-gray-500">{'// Птах успадковує Animal і реалізує Flyable'}</div>
              <div className="bg-green-50 p-2 rounded">
                <div><span className="text-blue-600">class</span> Bird</div>
                <div className="ml-4"><span className="text-orange-600">extends</span> Animal</div>
                <div className="ml-4"><span className="text-green-600">implements</span> Flyable {'{'}</div>
                <div className="ml-8 text-gray-700">@Override <span className="text-blue-600">public void</span> fly() {'{ ... }'}</div>
                <div className="ml-4">{'}'}</div>
              </div>
              
              <div className="mt-4 text-gray-500">{'// Качка успадковує Bird і додає Swimmable'}</div>
              <div className="bg-blue-50 p-2 rounded">
                <div><span className="text-blue-600">class</span> Duck</div>
                <div className="ml-4"><span className="text-orange-600">extends</span> Bird</div>
                <div className="ml-4"><span className="text-green-600">implements</span> Swimmable {'{'}</div>
                <div className="ml-8 text-gray-700">@Override <span className="text-blue-600">public void</span> swim() {'{ ... }'}</div>
                <div className="ml-4">{'}'}</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-bold text-yellow-700 mb-2">⚠️ Порядок важливий!</h4>
            <div className="text-gray-700 space-y-2">
              <p>✅ <code className="bg-yellow-100 px-2 py-1 rounded">class Duck extends Bird implements Swimmable</code></p>
              <p>❌ <code className="bg-red-100 px-2 py-1 rounded">class Duck implements Swimmable extends Bird</code></p>
              <p className="text-sm mt-3">Завжди спочатку <strong>extends</strong>, потім <strong>implements</strong></p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <p className="font-bold text-orange-700">extends</p>
              <p className="text-sm text-gray-600">Один клас</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">+</div>
              <p className="font-bold text-green-700">implements</p>
              <p className="text-sm text-gray-600">Багато інтерфейсів</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">✨</div>
              <p className="font-bold text-purple-700">Гнучкість</p>
              <p className="text-sm text-gray-600">Найкраще з двох світів</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Практичні рекомендації",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold">🎯 Що використовувати?</h3>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-3 text-xl">✅ Надавайте перевагу інтерфейсам:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Для публічних API та контрактів</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Коли потрібна гнучкість (множинна реалізація)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Для визначення поведінки без реалізації</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Коли класи не пов'язані ієрархією</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700 mb-3 text-xl">📌 Використовуйте абстрактні класи:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Коли є спільний код для підкласів</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Для чіткої ієрархії успадкування</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Коли потрібні поля зі станом</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Для Template Method Pattern</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-400">
            <h4 className="font-bold text-blue-700 mb-3 text-center text-xl">💎 Золоте правило</h4>
            <p className="text-gray-700 text-lg text-center leading-relaxed">
              <em>"Програмуйте до інтерфейсу, а не до реалізації"</em>
            </p>
            <p className="text-gray-600 text-center mt-3">
              Використовуйте інтерфейси в сигнатурах методів для максимальної гнучкості
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <p className="font-semibold text-red-700 mb-2">❌ Погано:</p>
              <div className="font-mono text-xs bg-white p-2 rounded">
                <div>ArrayList&lt;String&gt; list =</div>
                <div className="ml-2">new ArrayList&lt;&gt;();</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-700 mb-2">✅ Добре:</p>
              <div className="font-mono text-xs bg-white p-2 rounded">
                <div>List&lt;String&gt; list =</div>
                <div className="ml-2">new ArrayList&lt;&gt;();</div>
              </div>
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

export default Part4;
