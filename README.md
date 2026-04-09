# 📚 Paterns

> Репозиторій для практичних робіт з курсу **"Програмувальні патерни"**  
> 🇺🇦 Реалізації патернів проектування мовою **TypeScript**

![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-ES2022-green?logo=node.js)
![License](https://img.shields.io/badge/license-MIT-green)
![Last Commit](https://img.shields.io/github/last-commit/V1ktoriiaAndr/Paterns?color=orange)

---

## 🗂️ Актуальна структура проекту

```
Paterns/
├── Creational/                    # 6 креаційних патернів
│   ├── abstract_factory.ts
│   ├── builder.ts
│   ├── factory.ts
│   ├── factory_method.ts
│   ├── prototype.ts
│   └── singleton.ts
│
├── structural/                    # 7 структурних патернів
│   ├── adapter.ts
│   ├── bridge.ts
│   ├── composite.ts
│   ├── decorator.ts
│   ├── facade.ts
│   ├── flyweight.ts
│   └── proxi.ts                   # Proxy (назва файлу збережена історично)
│
├── behavioral/                    # 10 поведінкових патернів
│   ├── Chain_Of_Responsibility.ts
│   ├── Command.ts
│   ├── Iterator.ts
│   ├── Mediator.ts
│   ├── Memento.ts
│   ├── Observer.ts
│   ├── State.ts
│   ├── Strategy.ts
│   ├── Template_Method.ts
│   └── Visitor.ts
│
├── Dependency_injection/src/      # Ручне впровадження залежностей
│   ├── data/                      # Шари даних
│   ├── presentation/              # Презентаційний шар
│   └── main.ts                    # Точка входу
│
├── Functional/                    # Завдання у функціональному стилі
│   └── Tasks.ts
│
├── Patterns_revisited/            # 4 патерни у функціональній парадигмі
│   ├── Decorator.ts
│   ├── Execute_around.ts
│   ├── Factory_method.ts
│   └── Strategy.ts
│
├── tsconfig.json                  # Конфігурація TypeScript (ES2022, NodeNext)
└── README.md                      # Цей файл
```

---

## 🚀 Швидкий старт

### ✅ Вимоги
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x або **yarn** ≥ 1.22.x

### 🔧 Встановлення та запуск

```bash
# Клонувати репозиторій
git clone https://github.com/V1ktoriiaAndr/Paterns.git
cd Paterns

# Встановити залежності (за потреби)
npm install

# Компіляція проекту
npx tsc

# Запуск конкретного прикладу
node dist/behavioral/Strategy.js
# або для Dependency Injection:
node dist/main.js
```

### 🛠️ Корисні команди

```bash
# Компіляція в режимі спостереження
npx tsc --watch

# Перевірка типів без компіляції
npx tsc --noEmit

# Запуск з підтримкою source maps
node --enable-source-maps dist/main.js
```

---

## 📦 Опис розділів

### 🔹 Creational Patterns (6 реалізацій)
Патерни для гнучкого створення об'єктів:

| Файл | Патерн | Опис |
|------|--------|------|
| `factory.ts` | Simple Factory | Інкапсуляція логіки створення об'єктів |
| `factory_method.ts` | Factory Method | Делегування створення підкласам |
| `abstract_factory.ts` | Abstract Factory | Створення сімейств пов'язаних об'єктів |
| `builder.ts` | Builder | Поетапне конструювання складних об'єктів |
| `prototype.ts` | Prototype | Клонування об'єктів замість створення нових |
| `singleton.ts` | Singleton | Гарантія єдиного екземпляра класу |

### 🔹 Structural Patterns (7 реалізацій)
Патерни для побудови гнучкої архітектури:

```
adapter.ts      → Адаптація інтерфейсів
bridge.ts       → Розділення абстракції та реалізації
composite.ts    → Робота з деревоподібними структурами
decorator.ts    → Динамічне додавання поведінки
facade.ts       → Спрощений інтерфейс до складної системи
flyweight.ts    → Оптимізація пам'яті через спільні дані
proxi.ts        → Контроль доступу до об'єкта (Proxy)*
```
> *Примітка: назва файлу `proxi.ts` збережена для сумісності з історією комітів

### 🔹 Behavioral Patterns (10 реалізацій)
Патерни для організації взаємодії між об'єктами:

- `Strategy.ts` — Вибір алгоритму виконання в рантаймі
- `Observer.ts` — Механізм підписки та сповіщень
- `Command.ts` — Інкапсуляція запиту як об'єкта
- `Chain_Of_Responsibility.ts` — Ланцюжок обробників
- `State.ts` — Зміна поведінки при зміні стану
- `Template_Method.ts` — Скелет алгоритму з можливістю перевизначення кроків
- `Iterator.ts` — Уніфікований доступ до елементів колекції
- `Mediator.ts` — Централізоване керування взаємодією
- `Memento.ts` — Збереження та відновлення стану об'єкта
- `Visitor.ts` — Додавання операцій до структури об'єктів

### 🔹 Dependency Injection (`Dependency_injection/src/`)
Приклад **ручного впровадження залежностей** без сторонніх бібліотек:
- Чітке розділення шарів: `data/` ↔ `presentation/`
- Конструкторна ін'єкція залежностей
- Точка входу: `main.ts`

### 🔹 Functional Paradigm (`Functional/Tasks.ts`)
Завдання, реалізовані з використанням функціонального підходу:
- ✅ Чисті функції без побічних ефектів
- ✅ Імутабельність даних
- ✅ Функції вищого порядку та композиція

### 🔹 Patterns Revisited (`Patterns_revisited/`)
Класичні ООП-патерни, переосмислені у функціональному стилі:

| Файл | Патерн | Функціональна реалізація |
|------|--------|-------------------------|
| `Strategy.ts` | Strategy | Функції як стратегії через композицію |
| `Decorator.ts` | Decorator | Обгортання функцій вищого порядку |
| `Factory_method.ts` | Factory Method | Функції-фабрики замість класів |
| `Execute_around.ts` | Execute Around | Ресурс-менеджмент через HOF |

---

## ⚙️ Технології та конфігурація

### TypeScript (`tsconfig.json`)
```json
{
  "target": "ES2022",
  "module": "NodeNext",
  "moduleResolution": "NodeNext",
  "strict": true,
  "declaration": true,
  "sourceMap": true,
  "rootDir": "Dependency_injection/src",
  "outDir": "./dist"
}
```

| Налаштування | Значення |
|-------------|----------|
| **Target** | ES2022 (сучасний JavaScript) |
| **Modules** | NodeNext (ESM-сумісність) |
| **Strict Mode** | ✅ Увімкнено |
| **Source Maps** | ✅ Для дебагінгу |
| **Declarations** | ✅ Генерація `.d.ts` файлів |

---

## 💡 Приклади використання

### 🎯 Strategy Pattern (Behavioral)
```typescript
// behavioral/Strategy.ts
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}

class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}
  process(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Використання
const payment = new PaymentContext(new CreditCardStrategy());
payment.process(100); // → "Paid 100 using credit card"
```

### 🔁 Functional Strategy (Patterns_revisited)
```typescript
// Patterns_revisited/Strategy.ts
type Strategy<T> = (data: T) => T;

const executeStrategy = <T>(data: T, strategy: Strategy<T>): T => 
  strategy(data);

// Використання
const uppercase = (s: string) => s.toUpperCase();
executeStrategy("hello", uppercase); // → "HELLO"
```

---

## 🤝 Внесок у проект

1. Зробіть **fork** репозиторію
2. Створіть гілку для нової функціональності:
   ```bash
   git checkout -b feature/AmazingPattern
   ```
3. Внесіть зміни та зробіть коміт:
   ```bash
   git commit -m "feat: add AmazingPattern implementation"
   ```
4. Відправте у віддалений репозиторій:
   ```bash
   git push origin feature/AmazingPattern
   ```
5. Відкрийте **Pull Request** з описом змін

### 📋 Стиль коду
- ✅ Дотримуйтесь іменування файлів: `PascalCase.ts` для патернів
- ✅ Коментуйте складну логіку англійською або українською
- ✅ Додавайте приклади використання в JSDoc

---

## 📄 Ліцензія

Цей проект розповсюджується під ліцензією **MIT**.  
Деталі у файлі [LICENSE](LICENSE) (за наявності).

```
MIT License
Copyright (c) 2026 Viktoriia Andr
```

---

## 👤 Автор

**Viktoriia Andr**  
🔗 [GitHub Profile](https://github.com/V1ktoriiaAndr)  
🎓 Курс: *Програмувальні патерни проектування*

---

> ⚠️ **Примітка щодо назви**: Назва репозиторію `Paterns` містить історичну одруківку (замість "Patterns"). Збережено для сумісності з посиланнями та історією комітів.

---

*🔄 Останнє оновлення: **9 квітня 2026***  
*💻 Мова реалізації: **TypeScript 100%***  
*🎯 Статус: **Активна розробка***

---

✅ **Цей README актуалізовано відповідно до:**
- Останнього коміту: `9228812` (ручне впровадження залежностей)
- Фактичної структури файлів у гілці `main`
- Конфігурації `tsconfig.json` (ES2022, NodeNext)