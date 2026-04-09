import {inject, injectable} from "tsyringe";
import {BASE_URL_TOKEN} from "../di/tokens";

@injectable()
export class HttpClient {
    constructor(@inject(BASE_URL_TOKEN) private baseUrl: string) {
    }

    async get(url: string): Promise<any> {
        console.log(`[HttpClient] GET ${this.baseUrl}${url}`);
        return { data: [{ id: 1, name: "Network User" }] };
    }
}