import { v4 as uuid } from 'uuid';
import { Task } from '../types/task.types.js';
import { DataStore } from '../storage/DataStore.js';

export class TaskManager {
  constructor(private store: DataStore<Task>) {}

  create(title: string, description: string, priority: any): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      priority,
      status: "todo",
      createdAt: new Date().toISOString(),
    };
    return this.store.create(task);
  }

  list(): Task[] {
    return this.store.getAll();
  }

  delete(id: string): void {
    this.store.delete(id);
  }
}