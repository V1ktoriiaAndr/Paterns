export class HttpClient {
    private readonly baseUrl: string;
    
    /**
     * Приватний метод для виконання запитів.
     * @param method HTTP метод (GET, POST тощо)
     * @param endPoint Шлях до ресурсу
     * @param body Тіло запиту (опціонально)
     * @param options Додаткові конфігурації (на майбутнє)
     */

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(
        method: string,
        endPoint: string,
        body?: object,
        options: RequestInit = {}
    ): Promise<T | void> {
        const url = `${this.baseUrl}${endPoint}`;

        console.log(`[${new Date().toISOString()}] Making ${method} request to ${url}`);

        if (body) {
            console.log('Body:', JSON.stringify(body, null, 2));
        }
    }

    public async get<T>(endpoint: string): Promise<T | void> {
        return this.request<T>('GET', endpoint);
    }

    public async post<T>(endpoint: string, body: object): Promise<T | void> {
        return this.request<T>('POST', endpoint, body);
    }

    public async put<T>(endpoint: string, body: object): Promise<T | void> {
        return this.request<T>('PUT', endpoint, body);
    }

    public async delete<T>(endpoint: string): Promise<T | void> {
        return this.request<T>('DELETE', endpoint);
    }
}