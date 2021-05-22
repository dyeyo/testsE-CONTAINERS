export function getRandomItems(arr: any[], generate = 20) {
    const arrRandom: any[] = [];
    for (let i = 0; i < generate; i++) {
        const indexRandom = Math.floor(Math.random() * arr.length);
        const itemRandom = arr[indexRandom];
        arrRandom.push(itemRandom);
    }
    return arrRandom;
}