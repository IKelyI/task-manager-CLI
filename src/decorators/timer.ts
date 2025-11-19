
export function Timer(target:any, propertyKey:string, descriptor:PropertyDescriptor){
    const original = descriptor.value;
    descriptor.value = function(...args:any[]){
        const t=Date.now();
        const res=original.apply(this,args);
        console.log(`[TIMER] ${propertyKey}: ${Date.now()-t}ms`);
        return res;
    };
}
