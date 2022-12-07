// soal 4

let string1 = "PT.AbadI*perKASa@BeRsAmA-DIGItAL#SolUTiONs"

let string2 = string1.replace('.', '. ')
    string2 = string2.replace(/[^a-zA-Z.]/gi, ' ')
    string2 = string2.toLowerCase().split(' ')

for (let i = 0; i < string2.length; i++) {
    if (i > 0) {
        string2[i] = string2[i].charAt(0).toUpperCase() + string2[i].substring(1)
    } else {
        string2[i] = string2[i].toUpperCase()
    }
}

console.log('#Soal 4', string2.join(' '))
