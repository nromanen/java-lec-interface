import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Part6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Поліморфізм через інтерфейси",
      subtitle: "Гнучкість та розширюваність коду",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Поліморфізм через інтерфейси</h2>
            <p className="text-xl text-gray-600">Як писати гнучкий та підтримуваний код</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-3xl font-bold">Поліморфізм</h3>
              </div>
              <p className="text-lg text-center">
                Здатність об'єктів різних класів реагувати на однаковий виклик методу по-різному
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">🔌</div>
                <h3 className="text-3xl font-bold">Інтерфейси</h3>
              </div>
              <p className="text-lg text-center">
                Дозволяють досягти поліморфізму без жорсткого успадкування класів
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-700 mb-3">💡 Ключова ідея:</h3>
            <p className="text-gray-700 text-lg">
              Програмуй до інтерфейсу, а не до реалізації - це дозволяє легко замінювати 
              та розширювати функціональність без зміни існуючого коду
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Що таке поліморфізм?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">🎭 Поліморфізм (Polymorphism)</h3>
            <p className="text-lg">Від грецького: poly (багато) + morphē (форма)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-4 text-xl">Простими словами:</h4>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Це коли різні об'єкти можуть відповідати на один і той самий виклик по-різному, 
              залежно від свого типу
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">🎵 Аналогія з музикою:</p>
              <p className="text-gray-600">
                Команда "грати мелодію" → Піаніст грає на піаніно, Гітарист грає на гітарі, 
                Барабанщик грає на барабанах. Одна команда, різні результати!
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💻 Приклад з кодом:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> Animal {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">void</span> makeSound();</div>
              <div>{'}'}</div>
              <div className="mt-3"><span className="text-blue-600">class</span> Dog <span className="text-blue-600">implements</span> Animal {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">public void</span> makeSound() {'{'}</div>
              <div className="ml-8">System.out.println("Гав!");</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
              <div className="mt-2"><span className="text-blue-600">class</span> Cat <span className="text-blue-600">implements</span> Animal {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">public void</span> makeSound() {'{'}</div>
              <div className="ml-8">System.out.println("Мяу!");</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
              <div className="mt-3 text-gray-500">{'// Поліморфізм в дії:'}</div>
              <div className="bg-green-50 p-2 rounded mt-2">
                <div>Animal animal1 = <span className="text-blue-600">new</span> Dog();</div>
                <div>Animal animal2 = <span className="text-blue-600">new</span> Cat();</div>
                <div className="mt-1">animal1.makeSound(); <span className="text-gray-500">{'// Виведе: Гав!'}</span></div>
                <div>animal2.makeSound(); <span className="text-gray-500">{'// Виведе: Мяу!'}</span></div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <p className="text-gray-700">
              <span className="font-bold text-yellow-700">✨ Магія:</span> Тип змінної - Animal (інтерфейс), 
              але поведінка залежить від реального об'єкта (Dog або Cat)!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Програмування до інтерфейсу",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">📐 Program to an interface, not an implementation</h3>
            <p className="text-lg">Один з найважливіших принципів ООП</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-400">
              <h4 className="font-bold text-red-700 mb-3 text-center text-xl">❌ Погано</h4>
              <p className="text-gray-700 mb-3 text-center">Прив'язка до реалізації</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div>ArrayList&lt;String&gt; list =</div>
                <div className="ml-2"><span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
                <div className="mt-2">HashMap&lt;String, Integer&gt; map =</div>
                <div className="ml-2"><span className="text-blue-600">new</span> HashMap&lt;&gt;();</div>
                <div className="mt-2">CreditCardPayment payment =</div>
                <div className="ml-2"><span className="text-blue-600">new</span> CreditCardPayment();</div>
              </div>
              <p className="text-red-600 text-sm mt-3 text-center">
                Важко замінити на іншу реалізацію
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-400">
              <h4 className="font-bold text-green-700 mb-3 text-center text-xl">✅ Добре</h4>
              <p className="text-gray-700 mb-3 text-center">Залежність від інтерфейсу</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <div>List&lt;String&gt; list =</div>
                <div className="ml-2"><span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
                <div className="mt-2">Map&lt;String, Integer&gt; map =</div>
                <div className="ml-2"><span className="text-blue-600">new</span> HashMap&lt;&gt;();</div>
                <div className="mt-2">PaymentMethod payment =</div>
                <div className="ml-2"><span className="text-blue-600">new</span> CreditCardPayment();</div>
              </div>
              <p className="text-green-600 text-sm mt-3 text-center">
                Легко замінити реалізацію
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">🔄 Чому це важливо?</h4>
            <div className="font-mono text-sm space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <div className="text-green-700 font-bold mb-2">✅ З інтерфейсом - легко змінити:</div>
                <div>List&lt;String&gt; list = <span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
                <div className="text-gray-500">{'// Пізніше можна легко замінити на:'}</div>
                <div>List&lt;String&gt; list = <span className="text-blue-600">new</span> LinkedList&lt;&gt;();</div>
                <div className="text-gray-500">{'// або'}</div>
                <div>List&lt;String&gt; list = <span className="text-blue-600">new</span> Vector&lt;&gt;();</div>
                <div className="mt-2 text-green-600">{'// Весь інший код залишається без змін!'}</div>
              </div>

              <div className="bg-red-50 p-3 rounded">
                <div className="text-red-700 font-bold mb-2">❌ Без інтерфейсу - складно:</div>
                <div>ArrayList&lt;String&gt; list = <span className="text-blue-600">new</span> ArrayList&lt;&gt;();</div>
                <div className="mt-2 text-red-600">{'// Якщо захочете змінити на LinkedList,'}</div>
                <div className="text-red-600">{'// треба міняти тип СКРІЗЬ в коді!'}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Dependency Injection через інтерфейси",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">💉 Dependency Injection (DI)</h3>
            <p className="text-lg">Передача залежностей через інтерфейси</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">📚 Що таке Dependency Injection?</h4>
            <p className="text-gray-700 mb-4">
              Це патерн, коли клас отримує свої залежності ззовні (через конструктор або сетери), 
              а не створює їх сам
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">❌ Погано - без DI:</h4>
            <div className="font-mono text-sm bg-red-50 p-3 rounded">
              <div><span className="text-blue-600">class</span> UserService {'{'}</div>
              <div className="ml-4 text-gray-500">{'// Жорстка залежність від конкретної реалізації'}</div>
              <div className="ml-4"><span className="text-blue-600">private</span> MySQLDatabase database = <span className="text-blue-600">new</span> MySQLDatabase();</div>
              <div className="ml-4"></div>
              <div className="ml-4"><span className="text-blue-600">public void</span> saveUser(User user) {'{'}</div>
              <div className="ml-8">database.save(user);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
              <div className="mt-2 text-red-600">{'// Проблема: важко замінити базу даних або протестувати'}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">✅ Добре - з DI через інтерфейс:</h4>
            <div className="font-mono text-sm space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <div className="text-blue-700 font-bold mb-2">1. Визначаємо інтерфейс:</div>
                <div><span className="text-blue-600">interface</span> Database {'{'}</div>
                <div className="ml-4"><span className="text-blue-600">void</span> save(User user);</div>
                <div className="ml-4">User findById(<span className="text-blue-600">int</span> id);</div>
                <div>{'}'}</div>
              </div>

              <div className="bg-green-50 p-3 rounded">
                <div className="text-green-700 font-bold mb-2">2. Створюємо реалізації:</div>
                <div><span className="text-blue-600">class</span> MySQLDatabase <span className="text-blue-600">implements</span> Database {'{ ... }'}</div>
                <div><span className="text-blue-600">class</span> PostgreSQLDatabase <span className="text-blue-600">implements</span> Database {'{ ... }'}</div>
                <div><span className="text-blue-600">class</span> MongoDatabase <span className="text-blue-600">implements</span> Database {'{ ... }'}</div>
              </div>

              <div className="bg-purple-50 p-3 rounded">
                <div className="text-purple-700 font-bold mb-2">3. Впроваджуємо через конструктор:</div>
                <div><span className="text-blue-600">class</span> UserService {'{'}</div>
                <div className="ml-4"><span className="text-blue-600">private</span> Database database;</div>
                <div className="ml-4"></div>
                <div className="ml-4 text-gray-500">{'// Залежність передається ззовні!'}</div>
                <div className="ml-4"><span className="text-blue-600">public</span> UserService(Database database) {'{'}</div>
                <div className="ml-8">this.database = database;</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"></div>
                <div className="ml-4"><span className="text-blue-600">public void</span> saveUser(User user) {'{'}</div>
                <div className="ml-8">database.save(user);</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "DI - Використання та переваги",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold">🎯 Використання Dependency Injection</h3>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">💻 Приклад використання:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">public class</span> Main {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">public static void</span> main(String[] args) {'{'}</div>
              <div className="ml-8 text-gray-500">{'// Можемо легко міняти реалізацію!'}</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">{'// Для продакшну - MySQL'}</div>
              <div className="ml-8">Database prodDb = <span className="text-blue-600">new</span> MySQLDatabase();</div>
              <div className="ml-8">UserService prodService = <span className="text-blue-600">new</span> UserService(prodDb);</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">{'// Для тестування - mock'}</div>
              <div className="ml-8">Database testDb = <span className="text-blue-600">new</span> MockDatabase();</div>
              <div className="ml-8">UserService testService = <span className="text-blue-600">new</span> UserService(testDb);</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">{'// Для розробки - Mongo'}</div>
              <div className="ml-8">Database devDb = <span className="text-blue-600">new</span> MongoDatabase();</div>
              <div className="ml-8">UserService devService = <span className="text-blue-600">new</span> UserService(devDb);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-4 text-xl">✅ Переваги DI через інтерфейси:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <p className="font-semibold text-gray-800">Гнучкість</p>
                  <p className="text-gray-600 text-sm">Легко замінити реалізацію без зміни коду</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧪</span>
                <div>
                  <p className="font-semibold text-gray-800">Тестування</p>
                  <p className="text-gray-600 text-sm">Можна підставити mock-об'єкти для юніт-тестів</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔌</span>
                <div>
                  <p className="font-semibold text-gray-800">Слабке зв'язування</p>
                  <p className="text-gray-600 text-sm">Класи не залежать від конкретних реалізацій</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <p className="font-semibold text-gray-800">Модульність</p>
                  <p className="text-gray-600 text-sm">Кожна реалізація - окремий модуль</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-semibold text-gray-800">Повторне використання</p>
                  <p className="text-gray-600 text-sm">Одну реалізацію можна використовувати в різних місцях</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-gray-700">
              <span className="font-bold text-blue-700">💡 В Spring Framework:</span> Dependency Injection 
              є основою всього фреймворку. Spring автоматично створює об'єкти та впроваджує залежності!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Практичний приклад: Notification System",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">📬 Система сповіщень</h3>
            <p className="text-lg">Повний приклад поліморфізму та DI</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">1️⃣ Інтерфейс сповіщення:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">interface</span> NotificationService {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">void</span> send(String message, String recipient);</div>
              <div className="ml-4">String getType();</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">2️⃣ Різні реалізації:</h4>
            <div className="font-mono text-sm space-y-3">
              <div className="bg-blue-50 p-2 rounded">
                <div className="text-blue-700 font-bold mb-1">Email:</div>
                <div><span className="text-blue-600">class</span> EmailNotification <span className="text-blue-600">implements</span> NotificationService {'{'}</div>
                <div className="ml-4"><span className="text-blue-600">public void</span> send(String msg, String recipient) {'{'}</div>
                <div className="ml-8">System.out.println("Email to " + recipient + ": " + msg);</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"><span className="text-blue-600">public</span> String getType() {'{ return "Email"; }'}</div>
                <div>{'}'}</div>
              </div>

              <div className="bg-green-50 p-2 rounded">
                <div className="text-green-700 font-bold mb-1">SMS:</div>
                <div><span className="text-blue-600">class</span> SMSNotification <span className="text-blue-600">implements</span> NotificationService {'{'}</div>
                <div className="ml-4"><span className="text-blue-600">public void</span> send(String msg, String recipient) {'{'}</div>
                <div className="ml-8">System.out.println("SMS to " + recipient + ": " + msg);</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"><span className="text-blue-600">public</span> String getType() {'{ return "SMS"; }'}</div>
                <div>{'}'}</div>
              </div>

              <div className="bg-purple-50 p-2 rounded">
                <div className="text-purple-700 font-bold mb-1">Push:</div>
                <div><span className="text-blue-600">class</span> PushNotification <span className="text-blue-600">implements</span> NotificationService {'{'}</div>
                <div className="ml-4"><span className="text-blue-600">public void</span> send(String msg, String recipient) {'{'}</div>
                <div className="ml-8">System.out.println("Push to " + recipient + ": " + msg);</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4"><span className="text-blue-600">public</span> String getType() {'{ return "Push"; }'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Notification System - Продовження",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">3️⃣ Клас що використовує DI:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">class</span> NotificationManager {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">private</span> NotificationService notificationService;</div>
              <div className="ml-4"></div>
              <div className="ml-4 text-gray-500">{'// Dependency Injection через конструктор'}</div>
              <div className="ml-4"><span className="text-blue-600">public</span> NotificationManager(NotificationService service) {'{'}</div>
              <div className="ml-8">this.notificationService = service;</div>
              <div className="ml-4">{'}'}</div>
              <div className="ml-4"></div>
              <div className="ml-4"><span className="text-blue-600">public void</span> notifyUser(String message, String user) {'{'}</div>
              <div className="ml-8">System.out.println("Відправка через: " +</div>
              <div className="ml-20">notificationService.getType());</div>
              <div className="ml-8">notificationService.send(message, user);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">4️⃣ Використання - поліморфізм в дії:</h4>
            <div className="font-mono text-sm">
              <div><span className="text-blue-600">public class</span> Main {'{'}</div>
              <div className="ml-4"><span className="text-blue-600">public static void</span> main(String[] args) {'{'}</div>
              <div className="ml-8 text-gray-500">{'// Створюємо різні сервіси'}</div>
              <div className="ml-8">NotificationService email = <span className="text-blue-600">new</span> EmailNotification();</div>
              <div className="ml-8">NotificationService sms = <span className="text-blue-600">new</span> SMSNotification();</div>
              <div className="ml-8">NotificationService push = <span className="text-blue-600">new</span> PushNotification();</div>
              <div className="ml-8"></div>
              <div className="ml-8 text-gray-500">{'// Використовуємо один клас з різними реалізаціями!'}</div>
              <div className="ml-8">NotificationManager manager1 = <span className="text-blue-600">new</span> NotificationManager(email);</div>
              <div className="ml-8">manager1.notifyUser("Привіт!", "user@email.com");</div>
              <div className="ml-8"></div>
              <div className="ml-8">NotificationManager manager2 = <span className="text-blue-600">new</span> NotificationManager(sms);</div>
              <div className="ml-8">manager2.notifyUser("Привіт!", "+380123456789");</div>
              <div className="ml-8"></div>
              <div className="ml-8">NotificationManager manager3 = <span className="text-blue-600">new</span> NotificationManager(push);</div>
              <div className="ml-8">manager3.notifyUser("Привіт!", "user_device_id");</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-3">✨ Результат:</h4>
            <div className="bg-white p-3 rounded font-mono text-sm">
              <div>Відправка через: Email</div>
              <div>Email to user@email.com: Привіт!</div>
              <div className="mt-2">Відправка через: SMS</div>
              <div>SMS to +380123456789: Привіт!</div>
              <div className="mt-2">Відправка через: Push</div>
              <div>Push to user_device_id: Привіт!</div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-gray-700">
              <span className="font-bold text-blue-700">💡 Магія:</span> NotificationManager не знає про конкретні 
              реалізації (Email, SMS, Push). Він працює тільки з інтерфейсом NotificationService!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Підсумки та Best Practices",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold">🎓 Ключові висновки</h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-3">✅ Завжди робіть:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Програмуйте до інтерфейсу, а не до реалізації</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Використовуйте DI для передачі залежностей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Створюйте невеликі, сфокусовані інтерфейси</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Документуйте контракт інтерфейсу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Використовуйте поліморфізм для гнучкості</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700 mb-3">💡 Коли використовувати:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Різні реалізації одного контракту</li>
                  <li>• Потрібна можливість заміни реалізації</li>
                  <li>• Написання тестів (mock-об'єкти)</li>
                  <li>• Слабке зв'язування компонентів</li>
                  <li>• Розширення функціональності</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-3">❌ Уникайте:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Жорсткої прив'язки до конкретних класів</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Створення залежностей всередині класу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Занадто великих інтерфейсів</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Порушення контракту інтерфейсу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Використання конкретних типів в сигнатурах</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-700 mb-3">🎯 SOLID принципи:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li><strong>D</strong>ependency Inversion</li>
                  <li><strong>I</strong>nterface Segregation</li>
                  <li><strong>L</strong>iskov Substitution</li>
                  <li><strong>O</strong>pen/Closed</li>
                  <li><strong>S</strong>ingle Responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-400">
            <h4 className="font-bold text-orange-700 mb-3 text-xl text-center">🏆 Золоті правила</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">🎭</div>
                <p className="font-semibold text-gray-800">Поліморфізм</p>
                <p className="text-sm text-gray-600">Одна поведінка, багато форм</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔌</div>
                <p className="font-semibold text-gray-800">Інтерфейси</p>
                <p className="text-sm text-gray-600">Контракти, не реалізації</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💉</div>
                <p className="font-semibold text-gray-800">DI</p>
                <p className="text-sm text-gray-600">Залежності ззовні</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Дякую за увагу! 🎉",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-8xl mb-6">🎓</div>
            <h2 className="text-5xl font-bold text-purple-600 mb-4">Вітаю!</h2>
            <p className="text-2xl text-gray-600">Ви завершили курс по інтерфейсах в Java</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2">6 розділів</h3>
              <p>Від основ до практики</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-3">💡</div>
              <h3 className="text-xl font-bold mb-2">Ключові концепції</h3>
              <p>Поліморфізм, DI, Best Practices</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Готові до практики</h3>
              <p>Застосовуйте знання в проектах</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-lg border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">📝 Що ви вивчили:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-purple-600 mb-2">1. Основи інтерфейсів</h4>
                <p className="text-sm text-gray-600">Визначення, призначення, контракти</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-600 mb-2">2. Синтаксис</h4>
                <p className="text-sm text-gray-600">Оголошення, реалізація, множинність</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-green-600 mb-2">3. Типи методів</h4>
                <p className="text-sm text-gray-600">Abstract, default, static, private</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-orange-600 mb-2">4. vs Абстрактні класи</h4>
                <p className="text-sm text-gray-600">Відмінності та застосування</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-red-600 mb-2">5. Реальні приклади</h4>
                <p className="text-sm text-gray-600">Comparable, Collections, власні інтерфейси</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-pink-600 mb-2">6. Поліморфізм і DI</h4>
                <p className="text-sm text-gray-600">Гнучкість та професійний підхід</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">🎯 Наступні кроки:</h3>
            <div className="space-y-2 text-lg">
              <p>✅ Практикуйте створення власних інтерфейсів</p>
              <p>✅ Вивчайте Design Patterns (Strategy, Factory, Observer)</p>
              <p>✅ Досліджуйте Spring Framework та його DI</p>
              <p>✅ Пишіть чистий, підтримуваний код</p>
            </div>
          </div>

          <div className="text-center text-2xl font-bold text-gray-600">
            Успіхів у вивченні Java! 🚀
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
              type="button"
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
                  type="button"
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
              type="button"
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

export default Part6;