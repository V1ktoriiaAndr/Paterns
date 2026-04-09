# 📚 Paterns

> Репозиторій для практичних робіт з курсу **"Програмувальні патерни"**

![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🗂️ Структура проекту

```
Paterns/
├── Creational/              # Креаційні патерни проектування
│   └── ...                  # Реалізації: Factory, Abstract Factory, Builder тощо
├── structural/              # Структурні патерни (7 реалізацій)
│   └── ...                  # Adapter, Decorator, Facade, Composite тощо
├── behavioral/              # Поведінкові патерни (10 реалізацій)
│   └── ...                  # Strategy, Observer, Command, Chain of Responsibility тощо
├── Dependency_injection/    # Ручна настройка впровадження залежностей
│   └── src/
├── Functional/              # Завдання у функціональній парадигмі
│   └── ...
├── Patterns_revisited/      # 4 класичні патерни у функціональному стилі
│   └── ...
├── tsconfig.json            # Конфігурація TypeScript
└── README.md                # Цей файл
```

---

## 🚀 Швидкий старт

### Вимоги
- Node.js ≥ 16.x
- npm або yarn

### Встановлення залежностей
```bash
npm install
# або
yarn install
```

### Компіляція TypeScript
```bash
npx tsc
# або для режиму спостереження
npx tsc --watch
```

### Запуск прикладу
```bash
node dist/<path-to-file>/index.js
```

---

## 📦 Опис розділів

### 🔹 Creational Patterns
Реалізації патернів створення об'єктів:
- `Factory Method`
- `Abstract Factory`
- `Builder`
- `Singleton`
- `Prototype`

### 🔹 Structural Patterns (7 патернів)
Патерни для побудови гнучкої структури коду:
- `Adapter`, `Decorator`, `Facade`
- `Composite`, `Proxy`, `Bridge`, `Flyweight`

### 🔹 Behavioral Patterns (10 патернів)
Патерни для організації взаємодії об'єктів:
- `Strategy`, `Observer`, `Command`
- `Chain of Responsibility`, `State`, `Template Method`
- `Iterator`, `Mediator`, `Memento`, `Visitor`

### 🔹 Dependency Injection
Приклад ручного налаштування впровадження залежностей без використання сторонніх бібліотек.

### 🔹 Functional Paradigm
Завдання, реалізовані з використанням функціонального підходу:
- Чисті функції
- Імутабельність
- Функції вищого порядку

### 🔹 Patterns Revisited
Класичні ООП-патерни, переосмислені у функціональному стилі:
- Реалізація 4 патернів через композицію функцій

---

## 🛠️ Технології

| Технологія | Призначення |
|-----------|-------------|
| **TypeScript** | Основна мова розробки з типізацією |
| **Node.js** | Середовище виконання |
| **ES Modules** | Модульна система |

---

## 📝 Приклад використання

```typescript
// Приклад: Strategy Pattern
import { PaymentContext } from './behavioral/strategy';
import { CreditCardStrategy } from './behavioral/strategy/strategies';

const payment = new PaymentContext(new CreditCardStrategy());
payment.processPayment(100);
```

---

## 🤝 Внесок у проект

1. Зробіть форк репозиторію
2. Створіть гілку для вашої функціональності (`git checkout -b feature/AmazingFeature`)
3. Зробіть коміт змін (`git commit -m 'Add: AmazingFeature'`)
4. Відправте у гілку (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

---

## 📄 Ліцензія

Цей проект розповсюджується під ліцензією **MIT**. Деталі у файлі [LICENSE](LICENSE).

---

## 👤 Автор

**Viktoriia Andr**  
🔗 [GitHub](https://github.com/V1ktoriiaAndr)

---

> 💡 **Примітка**: Назва репозиторію містить одруківку ("Paterns" замість "Patterns"). Це збережено для сумісності з існуючими посиланнями.

---

*Останнє оновлення: Квітень 2026*  
*Курс: Програмні патерни проектування*

---
