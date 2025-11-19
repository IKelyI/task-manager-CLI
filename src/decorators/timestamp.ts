export function timestamp(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log("[Timestamp]", new Date().toISOString());
    return original.apply(this, args);
  };
}