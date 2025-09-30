import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Part5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Приклади з реального життя",
      subtitle: "Інтерфейси в Java Standard Library та практичні приклади",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Приклади з реального життя</h2>
            <p className="text-xl text-gray-600">Як інтерфейси використовуються в реальних проектах</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500 text-center">
              <div className="text-5xl mb-3">🔢</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Comparable</h3>
              <p className="text-gray-700 text-sm">Природне сортування об'єктів</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500 text-center">
              <div className="text-5xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Comparator</h3>
              <p className="text-gray-700 text-sm">Альтернативні способи порівняння</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500 text-center">
              <div className="text-5xl mb-3">📦</div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Collections</h3>
              <p className="text-gray-700 text-sm">List, Set, Map</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-700 mb-3">💡 Чому це важливо?</h3>
            <p className="text-gray-700">
              Розуміння цих інтерфейсів дозволяє ефективно працювати з Java Collections Framework 
              та створювати власні гнучкі рішення
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Comparable<T> - Природне сортування",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Comparable&lt;T&gt;</h3>
            <p className="text-lg">Визначає природний порядок сортування об'єктів</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">📋 Сигнатура інтерфейсу:</h4>
            <div className="font-mono text-sm bg-gray-50 p-3 rounded">
              <div><span className="text-blue-600">public interface</span> Comparable&lt;T&gt; {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">int</span> compareTo(T o);</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Повертає:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Від'ємне число</strong> - якщо поточний об'єкт менший за переданий</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>0</strong> - якщо об'єкти рівні</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Додатне число</strong> - якщо поточний об'єкт більший за переданий</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💻 Приклад: Сортування студентів за віком</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">class</span> Student <span className="text-blue-600">implements</span> Comparable&lt;Student&gt; {'{'}</div>
              <div className="ml-4">String name;</div>
              <div className="ml-4"><span className="text-blue-600">int</span> age;</div>
              <div className="ml-4"></div>
              <div className="ml-4"><span className="text-blue-600">public</span> Student(String name, <span className="text-blue-600">int</span> age) {'{'}</div>
              <div className="ml-8">this.name = name;</div>
              <div className="ml-8">this.age = age;</div>
              <div className="ml-4">{'}'}</div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-500">// Порівнюємо за віком</div>
              <div className="ml-4">@Override</div>
              <div className="ml-4"><span className="text-blue-600">public int</span> compareTo(Student other) {'{'}</div>
              <div className="ml-8"><span className="text-blue-600">return</span> this.age - other.age;</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
              <div className="mt-3 text-gray-500">// Використання:</div>
              <div>List&lt;Student&gt; students = <span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
              <div>Collections.sort(students); <span className="text-gray-500">// Автоматичне сортування!</span></div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <p className="text-gray-700">
              <span className="font-bold text-yellow-700">💡 Порада:</span> Для складніших порівнянь використовуйте 
              <code className="bg-yellow-200 px-2 py-1 rounded mx-1">Integer.compare()</code>, 
              <code className="bg-yellow-200 px-2 py-1 rounded mx-1">Double.compare()</code> тощо
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Comparator<T> - Альтернативне сортування",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Comparator&lt;T&gt;</h3>
            <p className="text-lg">Дозволяє створювати різні стратегії сортування</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">📋 Сигнатура інтерфейсу:</h4>
            <div className="font-mono text-sm bg-gray-50 p-3 rounded">
              <div>@FunctionalInterface</div>
              <div><span className="text-blue-600">public interface</span> Comparator&lt;T&gt; {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">int</span> compare(T o1, T o2);</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-bold text-blue-700 mb-2">Comparable</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Один спосіб порівняння</li>
                <li>• Реалізується в класі</li>
                <li>• compareTo(obj)</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-bold text-green-700 mb-2">Comparator</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Багато способів порівняння</li>
                <li>• Окремі класи/lambda</li>
                <li>• compare(obj1, obj2)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💻 Приклад: Різні способи сортування студентів</h4>
            <div className="font-mono text-sm space-y-3">
              <div>
                <div className="text-gray-500">// За ім'ям</div>
                <div>Comparator&lt;Student&gt; byName = (s1, s2) -&gt;</div>
                <div className="ml-4">s1.name.compareTo(s2.name);</div>
              </div>

              <div className="border-t pt-3">
                <div className="text-gray-500">// За віком (спадання)</div>
                <div>Comparator&lt;Student&gt; byAgeDesc = (s1, s2) -&gt;</div>
                <div className="ml-4">s2.age - s1.age;</div>
              </div>

              <div className="border-t pt-3">
                <div className="text-gray-500">// Комбіноване: спочатку за віком, потім за ім'ям</div>
                <div>Comparator&lt;Student&gt; combined =</div>
                <div className="ml-4">Comparator.comparingInt((Student s) -&gt; s.age)</div>
                <div className="ml-14">.thenComparing(s -&gt; s.name);</div>
              </div>

              <div className="border-t pt-3">
                <div className="text-gray-500">// Використання:</div>
                <div>students.sort(byName);</div>
                <div>students.sort(byAgeDesc);</div>
                <div>students.sort(combined);</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-bold text-green-700 mb-2">✅ Переваги Comparator:</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Можна створювати багато різних способів сортування</li>
              <li>• Не змінює оригінальний клас</li>
              <li>• Ідеально для lambda-виразів</li>
              <li>• Можна сортувати класи, які ми не можемо змінити</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Comparable vs Comparator",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold">🆚 Порівняння: Коли що використовувати?</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Критерій</th>
                  <th className="p-4 text-left">Comparable</th>
                  <th className="p-4 text-left">Comparator</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-blue-50">
                  <td className="p-4 font-semibold">Пакет</td>
                  <td className="p-4"><code className="bg-blue-100 px-2 py-1 rounded text-sm">java.lang</code></td>
                  <td className="p-4"><code className="bg-green-100 px-2 py-1 rounded text-sm">java.util</code></td>
                </tr>
                <tr className="border-b hover:bg-green-50">
                  <td className="p-4 font-semibold">Метод</td>
                  <td className="p-4"><code className="text-sm">compareTo(T o)</code></td>
                  <td className="p-4"><code className="text-sm">compare(T o1, T o2)</code></td>
                </tr>
                <tr className="border-b hover:bg-purple-50">
                  <td className="p-4 font-semibold">Де реалізується</td>
                  <td className="p-4">В самому класі</td>
                  <td className="p-4">В окремому класі</td>
                </tr>
                <tr className="border-b hover:bg-yellow-50">
                  <td className="p-4 font-semibold">Кількість варіантів</td>
                  <td className="p-4">Один (природний порядок)</td>
                  <td className="p-4">Багато (різні стратегії)</td>
                </tr>
                <tr className="border-b hover:bg-pink-50">
                  <td className="p-4 font-semibold">Модифікація класу</td>
                  <td className="p-4 text-red-600">Так (потрібно змінювати клас)</td>
                  <td className="p-4 text-green-600">Ні (окрема логіка)</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="p-4 font-semibold">Використання</td>
                  <td className="p-4"><code className="text-sm">Collections.sort(list)</code></td>
                  <td className="p-4"><code className="text-sm">list.sort(comparator)</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">✅ Використовуйте Comparable:</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Є очевидний природний порядок</li>
                <li>• Ви контролюєте клас</li>
                <li>• Один спосіб сортування достатній</li>
                <li>• Приклад: сортування чисел, дат</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3">✅ Використовуйте Comparator:</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Потрібні різні способи сортування</li>
                <li>• Не можете змінити клас</li>
                <li>• Хочете гнучкість</li>
                <li>• Приклад: сортування за різними полями</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💡 Реальний приклад разом:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">class</span> Person <span className="text-blue-600">implements</span> Comparable&lt;Person&gt; {'{'}</div>
              <div className="ml-4">String name;</div>
              <div className="ml-4"><span className="text-blue-600">int</span> age;</div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-500">// Природне сортування за віком</div>
              <div className="ml-4">@Override</div>
              <div className="ml-4"><span className="text-blue-600">public int</span> compareTo(Person other) {'{'}</div>
              <div className="ml-8"><span className="text-blue-600">return</span> Integer.compare(this.age, other.age);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
              <div className="mt-3 text-gray-500">// Альтернативне сортування за ім'ям</div>
              <div>Comparator&lt;Person&gt; byName = Comparator.comparing(p -&gt; p.name);</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Collections Framework: List, Set, Map",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">📦 Collections Framework</h3>
            <p className="text-lg">Основні інтерфейси для роботи з колекціями</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <div className="text-4xl mb-3 text-center">📋</div>
              <h4 className="font-bold text-blue-700 mb-2 text-center">List</h4>
              <p className="text-gray-700 text-sm text-center mb-3">Впорядкована колекція з дублікатами</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <div>ArrayList</div>
                <div>LinkedList</div>
                <div>Vector</div>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <div className="text-4xl mb-3 text-center">🎯</div>
              <h4 className="font-bold text-green-700 mb-2 text-center">Set</h4>
              <p className="text-gray-700 text-sm text-center mb-3">Колекція унікальних елементів</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <div>HashSet</div>
                <div>TreeSet</div>
                <div>LinkedHashSet</div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <div className="text-4xl mb-3 text-center">🗺️</div>
              <h4 className="font-bold text-purple-700 mb-2 text-center">Map</h4>
              <p className="text-gray-700 text-sm text-center mb-3">Пари ключ-значення</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <div>HashMap</div>
                <div>TreeMap</div>
                <div>LinkedHashMap</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💻 Основні методи інтерфейсів:</h4>
            <div className="grid grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-blue-50 p-3 rounded">
                <div className="font-bold text-blue-700 mb-2">List методи:</div>
                <div>add(E e)</div>
                <div>get(int index)</div>
                <div>remove(int index)</div>
                <div>size()</div>
                <div>contains(Object o)</div>
              </div>

              <div className="bg-green-50 p-3 rounded">
                <div className="font-bold text-green-700 mb-2">Set методи:</div>
                <div>add(E e)</div>
                <div>remove(Object o)</div>
                <div>contains(Object o)</div>
                <div>size()</div>
                <div>isEmpty()</div>
              </div>

              <div className="bg-purple-50 p-3 rounded">
                <div className="font-bold text-purple-700 mb-2">Map методи:</div>
                <div>put(K key, V value)</div>
                <div>get(Object key)</div>
                <div>remove(Object key)</div>
                <div>containsKey(K key)</div>
                <div>keySet()</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <h4 className="font-bold text-yellow-700 mb-2">💡 Чому це інтерфейси?</h4>
            <p className="text-gray-700">
              List, Set, Map - це інтерфейси, які визначають контракт роботи з колекціями. 
              Реалізації (ArrayList, HashSet тощо) можна легко замінювати без зміни коду!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Приклад: List інтерфейс",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold">📋 List&lt;E&gt; - Впорядкований список</h3>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">Програмування до інтерфейсу:</h4>
            <div className="font-mono text-sm space-y-4">
              <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                <div className="text-red-700 font-bold mb-2">❌ Погано - прив'язка до реалізації:</div>
                <div>ArrayList&lt;String&gt; names = <span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
                <div>names.add("Іван");</div>
              </div>

              <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                <div className="text-green-700 font-bold mb-2">✅ Добре - використання інтерфейсу:</div>
                <div>List&lt;String&gt; names = <span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
                <div>names.add("Іван");</div>
                <div className="mt-2 text-gray-500">// Легко замінити на іншу реалізацію:</div>
                <div>List&lt;String&gt; names = <span className="text-blue-600">new</span> LinkedList&lt;&gt;();</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💻 Повний приклад використання:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">public class</span> ListExample {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">public static void</span> main(String[] args) {'{'}</div>
              <div className="ml-8 text-gray-500">// Створення списку</div>
              <div className="ml-8">List&lt;String&gt; fruits = <span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">// Додавання елементів</div>
              <div className="ml-8">fruits.add("Яблуко");</div>
              <div className="ml-8">fruits.add("Банан");</div>
              <div className="ml-8">fruits.add("Апельсин");</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">// Отримання елемента</div>
              <div className="ml-8">String first = fruits.get(0);</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">// Перебір елементів</div>
              <div className="ml-8"><span className="text-blue-600">for</span> (String fruit : fruits) {'{'}</div>
              <div className="ml-12">System.out.println(fruit);</div>
              <div className="ml-8">{'}'}</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">// Або з lambda</div>
              <div className="ml-8">fruits.forEach(fruit -&gt; System.out.println(fruit));</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-700 mb-2">ArrayList</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Швидкий доступ за індексом</li>
                <li>• Повільне вставлення в середину</li>
                <li>• Динамічний масив</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-700 mb-2">LinkedList</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Повільний доступ за індексом</li>
                <li>• Швидке вставлення в середину</li>
                <li>• Двозв'язний список</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Власні інтерфейси - Payment System",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">💳 Практичний приклад: Система оплати</h3>
            <p className="text-lg">Створюємо гнучку систему різних способів оплати</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">1️⃣ Визначаємо інтерфейс:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">public interface</span> PaymentMethod {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">void</span> processPayment(<span className="text-blue-600">double</span> amount);</div>
              <div className="ml-4">String getPaymentType();</div>
              <div className="ml-4"><span className="text-blue-600">boolean</span> isAvailable();</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">2️⃣ Реалізуємо різні способи оплати:</h4>
            <div className="font-mono text-sm space-y-4">
              <div className="bg-blue-50 p-3 rounded">
                <div className="text-blue-700 font-bold mb-2">Кредитна карта:</div>
                <div><span className="text-blue-600">class</span> CreditCardPayment <span className="text-blue-600">implements</span> PaymentMethod {'{'}</div>
                <div className="ml-4">String cardNumber;</div>
                <div className="ml-4"></div>
                <div className="ml-4">@Override</div>
                <div className="ml-4"><span className="text-blue-600">public void</span> processPayment(<span className="text-blue-600">double</span> amount) {'{'}</div>
                <div className="ml-8">System.out.println("Оплата " + amount + " грн карткою");</div>
                <div className="ml-8 text-gray-500">// Логіка обробки картки</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4">@Override</div>
                <div className="ml-4"><span className="text-blue-600">public</span> String getPaymentType() {'{'}</div>
                <div className="ml-8"><span className="text-blue-600">return</span> "Credit Card";</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4">@Override</div>
                <div className="ml-4"><span className="text-blue-600">public boolean</span> isAvailable() {'{'}</div>
                <div className="ml-8"><span className="text-blue-600">return true</span>;</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
              </div>

              <div className="bg-green-50 p-3 rounded">
                <div className="text-green-700 font-bold mb-2">PayPal:</div>
                <div><span className="text-blue-600">class</span> PayPalPayment <span className="text-blue-600">implements</span> PaymentMethod {'{'}</div>
                <div className="ml-4">String email;</div>
                <div className="ml-4"></div>
                <div className="ml-4">@Override</div>
                <div className="ml-4"><span className="text-blue-600">public void</span> processPayment(<span className="text-blue-600">double</span> amount) {'{'}</div>
                <div className="ml-8">System.out.println("Оплата " + amount + " грн через PayPal");</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4">@Override</div>
                <div className="ml-4"><span className="text-blue-600">public</span> String getPaymentType() {'{'}</div>
                <div className="ml-8"><span className="text-blue-600">return</span> "PayPal";</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4">@Override</div>
                <div className="ml-4"><span className="text-blue-600">public boolean</span> isAvailable() {'{'}</div>
                <div className="ml-8"><span className="text-blue-600">return true</span>;</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Власні інтерфейси - Використання",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold">🎯 Використання системи оплати</h3>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">3️⃣ Клас для обробки оплат:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">class</span> PaymentProcessor {'{'}</div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-500">// Метод приймає будь-який PaymentMethod</div>
              <div className="ml-4"><span className="text-blue-600">public void</span> makePayment(PaymentMethod method, <span className="text-blue-600">double</span> amount) {'{'}</div>
              <div className="ml-8"><span className="text-blue-600">if</span> (method.isAvailable()) {'{'}</div>
              <div className="ml-12">System.out.println("Обробка оплати через: " +</div>
              <div className="ml-24">method.getPaymentType());</div>
              <div className="ml-12">method.processPayment(amount);</div>
              <div className="ml-8">{'}'} <span className="text-blue-600">else</span> {'{'}</div>
              <div className="ml-12">System.out.println("Метод оплати недоступний");</div>
              <div className="ml-8">{'}'}</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">4️⃣ Використання в main:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">public class</span> Main {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">public static void</span> main(String[] args) {'{'}</div>
              <div className="ml-8">PaymentProcessor processor = <span className="text-blue-600">new</span> PaymentProcessor();</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">// Різні способи оплати</div>
              <div className="ml-8">PaymentMethod card = <span className="text-blue-600">new</span> CreditCardPayment();</div>
              <div className="ml-8">PaymentMethod paypal = <span className="text-blue-600">new</span> PayPalPayment();</div>
              <div className="ml-8">PaymentMethod crypto = <span className="text-blue-600">new</span> CryptoPayment();</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">// Використовуємо той самий метод для всіх!</div>
              <div className="ml-8">processor.makePayment(card, 1000);</div>
              <div className="ml-8">processor.makePayment(paypal, 500);</div>
              <div className="ml-8">processor.makePayment(crypto, 2000);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-3">✅ Переваги такого підходу:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">1.</span>
                <span><strong>Гнучкість:</strong> Легко додати новий спосіб оплати без зміни існуючого коду</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">2.</span>
                <span><strong>Підтримуваність:</strong> Кожен спосіб оплати - окремий клас</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">3.</span>
                <span><strong>Тестування:</strong> Легко створити mock-реалізації для тестів</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">4.</span>
                <span><strong>Поліморфізм:</strong> Один метод обробляє всі типи оплат</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-gray-700">
              <span className="font-bold text-blue-700">💡 Ключова ідея:</span> PaymentProcessor не знає про конкретні реалізації - 
              він працює тільки з інтерфейсом PaymentMethod. Це і є "програмування до інтерфейсу"!
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

export default Part5;