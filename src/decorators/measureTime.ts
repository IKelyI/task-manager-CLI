export function measureTime(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    const start = performance.now();
    const result = original.apply(this, args);
    console.log(`[Time] ${performance.now() - start}ms`);
    return result;
  };
}