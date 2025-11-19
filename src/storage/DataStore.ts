import fs from 'fs';

export class DataStore<T> {
  constructor(private path: string) {}

  getAll(): T[] {
    return JSON.parse(fs.readFileSync(this.path, 'utf8'));
  }

  saveAll(data: T[]): void {
    fs.writeFileSync(this.path, JSON.stringify(data, null, 2));
  }

  create(item: T): T {
    const all = this.getAll();
    all.push(item);
    this.saveAll(all);
    return item;
  }

  delete(id: string): void {
    const all = this.getAll().filter((i: any) => i.id !== id);
    this.saveAll(all);
  }
}