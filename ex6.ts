function retornarElemento<T>(array: T[], index: number): T | undefined{
    return array[index];
}

console.log(retornarElemento<number>([12, 13, 12], 2));
console.log(retornarElemento<string>(['12', '13', '12'], 2));
