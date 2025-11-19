import { DataStore } from './storage/DataStore.js';
import { TaskManager } from './models/TaskManager.js';
import { Task } from './types/task.types.js';

const store = new DataStore<Task>('data/tasks.json');
const manager = new TaskManager(store);

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'create':
    console.log(manager.create(args[1], args[2] || "", "medium"));
    break;
  case 'list':
    console.log(manager.list());
    break;
  case 'delete':
    manager.delete(args[1]);
    break;
  default:
    console.log("Commands: create <title> <desc>, list, delete <id>");
}