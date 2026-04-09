import {bootstrap} from "./presentation/Main.js";
import {AppUsersRepository} from "./data/repositories/AppUsersRepository.js";

const url = "https://startup.com"
const result = bootstrap(url)

console.log(result.allUsers())
