import {inject, injectable} from "tsyringe";
import {FILE_PATH_TOKEN} from "../di/tokens";

@injectable()
export class FileSystemAccess {
    constructor(@inject(FILE_PATH_TOKEN) private filePath: string) {
    }

    async readFile(): Promise<string> {
        console.log(`[FileSystemAccess] Reading file: ${this.filePath}`);
        return JSON.stringify([
            { id: 3, name: "File User 1" },
            { id: 4, name: "File User 2" }
        ]);
    }
}
