import 'reflect-metadata';
import {resolveRoot} from "./di/container";
import {IUsersRepository, IUsersRepositoryToken} from "./domain/interfaces/IUsersRepository";

async function main() {
    console.log('=== Dependency Injection Demo ===\n');
    
    // Resolve the repository through DI container
    const usersRepository = resolveRoot<IUsersRepository>(IUsersRepositoryToken);
    
    // Fetch and display users
    const users = usersRepository.allUsers();
    
    console.log('\n=== Final Results ===');
    console.log('Users retrieved:', users);
    console.log('\n=== Application Complete ===');
}

main().catch(console.error);