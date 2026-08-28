var num = [5, 8, 4, 1, 9, 0]
num.push(7)
num.sort()
num[10] = 6
console.log (num)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`o valor não foi encontrado`)
} else {
    console.log(`O valor ${num[pos]} esta na posição ${pos}`)
}