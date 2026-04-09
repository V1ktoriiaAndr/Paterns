export class User {
    id: number;
    name: string;

    /**
     * Створює екземпляр користувача.
     * @param id - Числовий ідентифікатор
     * @param name - Рядок з іменем
     */

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    toString = () => `${this.id} ${this.name}`;
}