// Decorator to log method calls
export function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Action: ${propertyKey} called with args:`, args);
    return originalMethod.apply(this, args);
  };
}